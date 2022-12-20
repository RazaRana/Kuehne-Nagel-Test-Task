import { useState, createContext } from 'react'

export const WalletContext = createContext()

export const WalletContextProvider = ({ children, list }) => {
    const [wallets, setWallets] = useState( list||[])

    const value = { wallets, setWallets }

    return <WalletContext.Provider value={value}>
        {children}
    </WalletContext.Provider>
}