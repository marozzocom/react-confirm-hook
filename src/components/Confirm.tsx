import React from "react"
import { createPortal } from "react-dom"
import { Dialog } from "./Dialog";

interface IConfirmProps {
    message: string
    callback: () => void
    children(confirm: () => void): JSX.Element
}

interface IConfirmState {
    isOpen: boolean
}

export class Confirm extends React.Component<IConfirmProps, IConfirmState> {
    constructor(props: IConfirmProps) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    public render () {
        const { message, children } = this.props
        const { isOpen } = this.state

        return <>
            {isOpen && createPortal(
                <Dialog message={message} ok={this.ok} cancel={this.cancel}/>, document.body
            )}
            {children(this.confirm)}
        </>
    }

    public confirm = () => {
        this.setState({
            isOpen: true
        })
    }
    
    private cancel = () => {
        this.setState({
            isOpen: false
        })
    }
    
    private ok = () => {
        const { callback } = this.props

        this.setState({
            isOpen: false
        })

        callback()
    }
}