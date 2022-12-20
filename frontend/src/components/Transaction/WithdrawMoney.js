import React from "react";
import {Grid, Button} from "@material-ui/core";
import {Form} from "formik";
import {Input as FormInput} from "../Forms/Input";
import {makeStyles} from "@material-ui/core/styles";
import * as Yup from "yup";
import TransactionDialog from "./Dialog";

const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover': {
            background: theme.palette.primary.main,
            boxShadow: '0px 4px 10px rgba(245, 49, 99, 0.5)',
        },
    },
}))

const validationSchema = Yup.object().shape({
    amount: Yup.number('Amount must be a number').positive('Invalid amount').required('Amount is required'),
})

const WithdrawMoneyDialog = ({open, onClose, walletId}) => {
    const classes = useStyles()

    return (
        <TransactionDialog
            open={open}
            onClose={onClose}
            validationSchema={validationSchema}
            title={'Withdraw Balance'}
            additionalProps={{senderId: walletId}}
        >
            {({ values, isSubmitting, isValid }) => (
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormInput
                                label="Amount"
                                name="amount"
                                isInputEmpty={values.amount}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={!isValid || isSubmitting}
                                className={classes.button}
                            >
                                {'Withdraw Money'}
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </TransactionDialog>
    )
}

export default WithdrawMoneyDialog;
