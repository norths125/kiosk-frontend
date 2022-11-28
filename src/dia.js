import React from 'react'
import { Dialog, DialogContent, DialogTitle} from '@mui/material'


const ModalAddUser = (props) => {
    const {open,setOpen} = props

    const handleClose = () => {
        setOpen(false)
        
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
                maxWidth="700px"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    add User Data
                </DialogTitle>
                <DialogContent>
                    
                </DialogContent>
            </Dialog>

        </>
    )
}

export default ModalAddUser