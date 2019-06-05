import React from "react"

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

        return <>
            <button onClick={this.launch}>Launch</button>
            {isLaunched && <img style={{ width: "300px" }} src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Launch"/>}
        </>
    }

    private launch = () => {
        this.setState({
            isLaunched: true
        })
    }
}