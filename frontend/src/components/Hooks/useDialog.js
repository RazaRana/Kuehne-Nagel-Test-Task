import { useState } from 'react'

export const useDialog = ({ onPreOpen, onClosed } = {}) => {
    const [open, setOpen] = useState(false)

    const onOpen = (...props) => {
        onPreOpen?.(...props)
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
        onClosed?.()
    }

    return { open, onOpen, onClose }
}