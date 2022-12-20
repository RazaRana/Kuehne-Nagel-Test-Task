import axios from "axios";
import {useQuery} from "react-query";

export const useWalletsFetch = () => {
    const onFetch = async () => {
        const {data} = await axios.get('http://localhost:3001/wallet/all')
        return data
    }

    const {data: walletList, error, isError, isLoading } = useQuery('walletList', onFetch)

    return {walletList, error, isError, isLoading}
}