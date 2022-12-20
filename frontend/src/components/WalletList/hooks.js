import {useState} from "react";
import {useWalletsAdd} from "../Queries/useWalletAdd";

export const useAddWalletForm = ({ onError, onClose }) => {
    const initialValues = {
        name: '',
        description: ''
    }

    const {mutate: addNewWallet} = useWalletsAdd(onError, onClose)

    const [submitting, setSubmitting] = useState(false)

    const onSubmit = async (props) => {
        setSubmitting(true)
        await addNewWallet(props)
        setSubmitting(false)
    }

    return { initialValues, onSubmit, submitting }
}

export const useDialogClick = () => {
    const [selectedWalletId, setSelectWalletId] = useState()

    const onDialogClick = (walletId, onOpen) => {
        setSelectWalletId(walletId)
        onOpen()
    }

    return {selectedWalletId, onDialogClick}
}