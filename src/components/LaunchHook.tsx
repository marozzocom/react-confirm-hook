import React, { useState } from "react"
import { useConfirm } from "./useConfirm"

export const Launch = () => {
    const [isLaunched, setIsLaunched] = useState(false)
    
    const launch = () => {
        setIsLaunched(true)
    }

    const { confirm, ConfirmDialog } = useConfirm(launch, "Are you sure?");

    return <>
        <button onClick={confirm}>Launch</button>
        <ConfirmDialog />
        {isLaunched && <img style={{ width: "300px" }} src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Launch"/>}
    </>
}