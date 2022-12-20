import React from "react";
import {
    Dialog, DialogTitle, DialogContent, Box
} from "@material-ui/core";
import NotificationAlert from "../NotificationAlert";
import {Formik} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import {useError} from "../Hooks/useError";
import {useTransactionForm} from "./hooks";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        width: '100%',
        maxWidth: 400,
    }
}))

const TransactionDialog = ({title, open, onClose, validationSchema, additionalProps, children}) => {
    const classes = useStyles()
    const { error, onError } = useError()

    const { initialValues, onSubmit } = useTransactionForm({onError, onClose, additionalProps})

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <Box className={classes.formContainer}>
                        {error && (
                            <Box mb={2}>
                                <NotificationAlert notificationText={error.message} />
                            </Box>
                        )}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                            validateOnBlur={false}
                            enableReinitialize={true}
                        >
                            {children}
                        </Formik>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default TransactionDialog;
