import {useState} from "react";
import {useTransaction} from "../Queries/useTransaction";

export const useTransactionForm = ({ onError, onClose, additionalProps }) => {
    const initialValues = {}

    const {mutate: transactionExecute} = useTransaction(onError, onClose)

    const [submitting, setSubmitting] = useState(false)

    const onSubmit = async (props) => {
        setSubmitting(true)
        await transactionExecute({...additionalProps,...props})
        setSubmitting(false)
    }

    return { initialValues, onSubmit, submitting }
}