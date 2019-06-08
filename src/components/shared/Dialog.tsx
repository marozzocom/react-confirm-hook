import React from "react"

interface IDialogProps {
    message: string,
    ok: () => void,
    cancel: () => void
}

export const Dialog = (props: IDialogProps) => {
    const { message, ok, cancel } = props

    const overlayStyle ={
        position: "fixed" as "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.25)"
    }

    const dialogStyle = {
        background: "#fff",
        padding: "15px",
        fontFamily: "Segoe UI",
        boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px"
    }

    return <div style={overlayStyle}>
        <div style={dialogStyle}>
            <p>{message}</p>
            <button onClick={ok}>OK</button>&nbsp;
            <button onClick={cancel}>Cancel</button>
        </div>
    </div>
}