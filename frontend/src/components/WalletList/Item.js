import React from "react";
import {
    ListItem,
    IconButton,
    ListItemSecondaryAction, Typography
} from "@material-ui/core";
import MarkunreadMailboxOutlined from "@material-ui/icons/MarkunreadMailboxOutlined";
import MoveToInboxOutlined from "@material-ui/icons/MoveToInboxOutlined";
import AddBoxOutlined from "@material-ui/icons/AddBoxOutlined";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 16,
        [theme.breakpoints.up('md')]: {
            fontSize: 20,
        },
    },
}))

const WalletListItem = ({ id, name, balance, divider, onMoneyAddClick, onMoneyWithdrawClick, onMoneySendClick }) => {
    const classes = useStyles()
    return(
        <ListItem divider={divider}>
            <Typography variant="body1">
                <span className={classes.title}>{'Wallet id: ' + id}</span>
                <br />
                <b>
                    <span className={classes.title}>{'Wallet name: ' + name}</span>
                </b>{' '}
                <br />
                <span>{'Current balance: '+balance}</span>
            </Typography>{' '}
            <ListItemSecondaryAction>
                <IconButton aria-label="Transfer balance" onClick={onMoneySendClick}>
                    <MarkunreadMailboxOutlined />
                </IconButton>
                <IconButton aria-label="Withdraw balance" onClick={onMoneyWithdrawClick}>
                    <MoveToInboxOutlined />
                </IconButton>
                <IconButton aria-label="Add balance" onClick={onMoneyAddClick}>
                    <AddBoxOutlined/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default WalletListItem;
