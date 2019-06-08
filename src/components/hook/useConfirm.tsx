import React, { useState } from "react"
import { createPortal } from "react-dom"
import { Dialog } from "../shared/Dialog"

interface IConfirmProps {
  children?: JSX.Element
}

export const useConfirm = (callback: () => void, message: string) => {
    const [isOpen, setIsOpen] = useState(false)
  
    const open = () => setIsOpen(true)
    
    const cancel = () => setIsOpen(false)
    
    const ok = () => {
      setIsOpen(false)
      callback()
    }
    
    const ConfirmDialog = () => createPortal(
      <Dialog message={message} ok={ok} cancel={cancel}/>, document.body
    )

    const Confirm = (props: IConfirmProps) => <>
        {props.children}
        {isOpen && <ConfirmDialog />}
      </>
  
    return {
      open,
      Confirm
    }
  }