import React, { useState } from "react"
import { createPortal } from "react-dom"
import { Dialog } from "./Dialog"

export const useConfirm = (callback: () => void, message: string) => {
    const [isOpen, setIsOpen] = useState(false)
  
    const confirm = () => {
      setIsOpen(true)
    }
    
    const cancel = () => {
      setIsOpen(false)
    }
    
    const ok = () => {
      setIsOpen(false)
      callback()
    }
    
    const ConfirmDialog = () => isOpen && createPortal(
      <Dialog message={message} ok={ok} cancel={cancel}/>, document.body
    )
  
    return {
      confirm,
      ConfirmDialog
    }
  }