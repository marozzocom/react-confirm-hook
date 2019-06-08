import React from "react"

interface IBoxProps {
    children: JSX.Element
    color?: string
}

export const Box = (props: IBoxProps) => {
    const { children, color="#f1f1f1" } = props
    const style = {
        padding: "10px",
        margin: "10px",
        background: color,
        borderRadius: "10px",
        fontFamily: "Segoe UI"
    }

    return <div style={style}>{children}</div>
}