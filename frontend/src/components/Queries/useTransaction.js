import axios from "axios";
import {useMutation, useQueryClient} from "react-query";
import {useContext} from "react";
import {WalletContext} from "../Contexts/Wallets";

export const useTransaction = (onError, onClose) => {
    const {setWallets} = useContext(WalletContext)

    const queryClient = useQueryClient()

    async function executeTransaction(transaction) {
        await axios.post('http://localhost:3001/transaction', transaction)
    }

    return useMutation(executeTransaction, {
        onSuccess: async () => {
            const list = await queryClient.fetchQuery("walletList")
            setWallets(list)
            onClose?.()
        },
        onError,
    })
}