import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

export const NotificationAlert = ({ notificationText, variant = 'error' }) => {
    const classes = useStyles()

    return (
        <Box width="100%" mt={1} mb={1}>
            <Alert
                severity={variant}
                classes={{ root: classes.alert, standardError: classes.error }}
            >
                {notificationText}
            </Alert>
        </Box>
    )
}
NotificationAlert.propTypes = {
    notificationText: PropTypes.string.isRequired,
    variant: PropTypes.string,
}

export default NotificationAlert

const useStyles = makeStyles((theme) => ({
    alert: {
        alignItems: 'center',
        fontSize: '0.8rem',
        borderRadius: 8,
        padding: theme.spacing(1),
        '& .MuiAlert-standardWarning': {
            backgroundColor: '#FEEFEF',
        },
        '& .MuiAlert-message': {
            padding: 0,
            lineHeight: 1.12,
            color: '#fff',
        },
        '& .MuiAlert-icon': {
            padding: 0,
            opacity: 1,

            fontSize: '1rem',
            marginRight: theme.spacing(0.5),
        },
    },
    error: {
        backgroundColor: theme.palette.error.main,
        color: '#fff',
        '& svg': {
            color: '#fff !important',
        },
    },
}))