import React, { useState } from "react"
import { useConfirm } from "./useConfirm"

export const Launch = () => {
    const [isLaunched, setIsLaunched] = useState(false)
    
    const launch = () => {
        setIsLaunched(true)
    }

    const { open, Confirm } = useConfirm(launch, "Are you sure?");

    return <>
        <Confirm><button onClick={open}>Launch</button></Confirm>
        {isLaunched && <img style={{ width: "300px" }} src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Launch"/>}
    </>
    
    // Alternatively, you can also place the dialog the render of this component, if for example you wish to open it directly without a toggle component
    // return <>
    //     <button onClick={open}>Launch</button>
    //     <Confirm />
    //     {isLaunched && <img style={{ width: "300px" }} src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Launch"/>}
    // </>
}