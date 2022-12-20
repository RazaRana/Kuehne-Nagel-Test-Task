import {useContext} from "react";
import {WalletContext} from "../Contexts/Wallets";

export const useWalletsList = () => {
    const {wallets} = useContext(WalletContext)

    wallets?.sort((walletA, walletB)=>{return walletA.id-walletB.id})

    return {
        wallets,
    }
}