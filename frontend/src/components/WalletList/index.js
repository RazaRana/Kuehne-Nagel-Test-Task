import React, {Fragment} from "react";
import {Box, List, Paper} from "@material-ui/core";
import WalletListItem from "./Item";
import NotificationAlert from "../NotificationAlert";
import {useWalletsList} from "../Hooks/useWalletsList";
import {useDialog} from "../Hooks/useDialog";
import AddMoneyDialog from "../Transaction/AddMoney";
import {useDialogClick} from "./hooks";
import WithdrawMoneyDialog from "../Transaction/WithdrawMoney";
import SendMoneyDialog from "../Transaction/SendMoney";
import {useError} from "../Hooks/useError";

const WalletList = ({list}) => {
    const {wallets: walletList} = useWalletsList()
    const {onDialogClick, selectedWalletId} = useDialogClick()

    const { error } = useError()

    const { open: addMoneyOpen, onOpen: addMoneyOnOpen, onClose: addMoneyOnClose } = useDialog()
    const { open: withdrawMoneyOpen, onOpen: withdrawMoneyOnOpen, onClose: withdrawMoneyOnClose } = useDialog()
    const { open: sendMoneyOpen, onOpen: sendMoneyOnOpen, onClose: sendMoneyOnClose } = useDialog()

    return(
        <Fragment>
            <>
                {error && (
                    <Box mb={2}>
                        <NotificationAlert notificationText={error.message} />
                    </Box>
                )}
                {walletList?.length > 0 && (
                    <Paper style={{ margin: 16 }}>
                        <List style={{ overflow: "scroll" }}>
                            {walletList.map((wallet, i) => (
                                <WalletListItem
                                    key={wallet?.id}
                                    id={wallet?.id}
                                    name={wallet?.name}
                                    balance={wallet?.currentBalance}
                                    divider={i !== walletList.length - 1}
                                    onMoneyAddClick={()=>onDialogClick(wallet?.id, addMoneyOnOpen)}
                                    onMoneyWithdrawClick={()=>onDialogClick(wallet?.id, withdrawMoneyOnOpen)}
                                    onMoneySendClick={()=>onDialogClick(wallet?.id, sendMoneyOnOpen)}
                                />
                            ))}
                        </List>
                    </Paper>
                )}
            </>
            <AddMoneyDialog open={addMoneyOpen} onClose={addMoneyOnClose} walletId={selectedWalletId}/>
            <WithdrawMoneyDialog open={withdrawMoneyOpen} onClose={withdrawMoneyOnClose} walletId={selectedWalletId}/>
            <SendMoneyDialog open={sendMoneyOpen} onClose={sendMoneyOnClose} walletId={selectedWalletId}/>
        </Fragment>
    )
}

export default WalletList;
