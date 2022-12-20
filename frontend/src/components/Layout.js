import React from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import NewWalletButton from "./WalletList/New";

const useStyles = makeStyles((theme) => ({
    style: { padding: 0, margin: 0, backgroundColor: "#fafafa" }
}))

const Layout = ({ children }) => {
    const classes = useStyles()
    return(
        <Paper className={classes.style}>
            <AppBar color="primary" position="static" style={{ height: 64 }}>
                <Toolbar style={{ height: 64 }}>
                    <Typography color="inherit" style={{ flex: 1 }}>Wallet App</Typography>
                    <NewWalletButton/>
                </Toolbar>
            </AppBar>
            {children}
        </Paper>
    )
}

export default Layout;
