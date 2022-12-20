import React from "react";
import {
    Box, Button,
    Grid,
} from '@material-ui/core'
import { Formik, Form } from 'formik'
import NotificationAlert from "../NotificationAlert";
import {makeStyles} from "@material-ui/core/styles";
import {useError} from "../Hooks/useError";
import Spinner from "../Spinner";
import {useAddWalletForm} from "./hooks";
import {Input as FormInput} from '../Forms/Input'
import * as Yup from 'yup'


const useStyles = makeStyles((theme) => ({
    formContainer: {
        width: '100%',
        maxWidth: 400,
    },
    button: {
        '&:hover': {
            background: theme.palette.primary.main,
            boxShadow: '0px 4px 10px rgba(245, 49, 99, 0.5)',
        },
    },
}))

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string()
        .required('Description is required'),
    currentBalance: Yup.number('Balance must be a number').positive('Invalid balance').required('Balance is required'),
})

const NewWalletForm = ({onClose}) => {
    const classes = useStyles()
    const { error, onError } = useError()
    const { initialValues, onSubmit, submitting } = useAddWalletForm({onError, onClose})

    if(submitting) return <Spinner/>

    return (
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
                {({ values, setFieldValue, isSubmitting, isValid }) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormInput
                                    label="Name"
                                    name="name"
                                    isInputEmpty={values.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormInput
                                    label="Description"
                                    name="description"
                                    isInputEmpty={values.description}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormInput
                                    label="Balance"
                                    name="currentBalance"
                                    isInputEmpty={values.currentBalance}
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
                                    {'Add Wallet'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default NewWalletForm;
