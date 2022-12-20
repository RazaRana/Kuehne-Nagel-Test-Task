import axios from "axios";
import {useMutation, useQueryClient} from "react-query";
import {useContext} from "react";
import {WalletContext} from "../Contexts/Wallets";

export const useWalletsAdd = (onError, onClose) => {
    const {setWallets} = useContext(WalletContext)

    const queryClient = useQueryClient()

    async function createWallet(newWallet) {
        await axios.post('http://localhost:3001/wallet', newWallet)
    }

    return useMutation(createWallet, {
        onSuccess: async () => {
            const list = await queryClient.fetchQuery("walletList")
            setWallets(list)

            onClose?.()
        },
        onError,
    })
}