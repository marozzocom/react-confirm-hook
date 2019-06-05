import React from "react"
import { withConfirm } from "./withConfirm"

interface ILaunchState {
    isLaunched: boolean
    showConfirm: boolean
}

export class Launch extends React.Component<{}, ILaunchState> {
    constructor (props: {}) {
        super(props)
        this.state = {
            isLaunched: false,
            showConfirm: false
        }
    }

    public render () {
        const { isLaunched, showConfirm } = this.state

        const element = <>
            <button onClick={this.confirm}>Launch</button>
            {isLaunched && <img style={{ width: "300px" }} src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Launch"/>}
        </>

        const Confirm = withConfirm(element, showConfirm)

        return <Confirm message="Are you sure?" callback={this.launch} />
    }

    private confirm = () => {
        this.setState({
            showConfirm: true
        })
    }

    private launch = () => {
        this.setState({
            showConfirm: false,
            isLaunched: true
        })
    }
}