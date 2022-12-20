import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from "./components/Home";
import Layout from "./components/Layout";
import {useWalletsFetch} from "./components/Queries/useWalletsFetch";
import {WalletContextProvider} from "./components/Contexts/Wallets";
import Spinner from "./components/Spinner";

function App() {
    const {walletList, isLoading} = useWalletsFetch()
    if(isLoading) return <Spinner/>
    return (
        <WalletContextProvider list={walletList}>
            <Router>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                    </Routes>
                </Layout>
            </Router>
        </WalletContextProvider>
    );
}

export default App;
