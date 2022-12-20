import React from "react";
import {
    Fab, Dialog, DialogTitle, DialogContent, DialogContentText
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {useDialog} from "../Hooks/useDialog";
import NewWalletForm from "./Form";

const NewWalletButton = () => {
    const { open, onOpen, onClose } = useDialog()

    return (
        <>
            <Fab
                color="secondary"
                aria-label="add"
                size="small"
                onClick={onOpen}
            >
                <AddIcon />
            </Fab>


            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Create new wallet</DialogTitle>
                <DialogContent>
                    <DialogContentText>Please fill out form below</DialogContentText>
                    <NewWalletForm onClose={onClose}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewWalletButton;
