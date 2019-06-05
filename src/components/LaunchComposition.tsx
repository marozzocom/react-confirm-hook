import React from "react"
import { Confirm } from "./ConfirmComposition"

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

        return <>
            <button onClick={this.confirm}>Launch</button>
            {showConfirm && <Confirm message="Are you sure?" callback={this.launch} close={this.close} />}
            {isLaunched && <img style={{ width: "300px" }} src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Launch"/>}
        </>
    }

    private confirm = () => {
        this.setState({
            showConfirm: true
        })
    }

    private close = () => {
        this.setState({
            showConfirm: false
        })
    }

    private launch = () => {
        this.setState({
            showConfirm: false,
            isLaunched: true
        })
    }
}