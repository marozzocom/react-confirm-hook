import React from "react"
import { Confirm } from "../shared/Confirm"

interface ILaunchState {
    isLaunched: boolean
}

export class Launch extends React.Component<{}, ILaunchState> {
constructor (props: {}) {
    super(props)
    this.state = {
        isLaunched: false
    }
}

    public render () {
        const { isLaunched } = this.state

        return (
            <Confirm message="Are you sure?" callback={this.launch}>
                {(confirm: () => void) => 
                <>
                    <button onClick={confirm}>Launch</button>
                    {isLaunched && <img style={{ width: "300px" }} src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Launch"/>}
                </>
                }
            </Confirm>
        )
    }

    private launch = () => {
        this.setState({ isLaunched: true })
    }
}