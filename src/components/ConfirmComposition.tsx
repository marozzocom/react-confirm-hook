import React from "react"
import { createPortal } from "react-dom"
import { Dialog } from "./Dialog"

interface IConfirmProps {
    message: string
    callback: () => void
    close: () => void
}

export class Confirm extends React.Component<IConfirmProps> {
    public render () {
        const { message } = this.props

        return <>
            {createPortal(
                <Dialog message={message} ok={this.ok} cancel={this.cancel}/>, document.body
            )}
        </>
    }
    
    private cancel = () => {
        const { close } = this.props
        close()
    }
    
    private ok = () => {
        const { callback } = this.props
        callback()
    }
}