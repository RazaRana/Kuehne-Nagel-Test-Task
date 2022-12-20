import { Box, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    spinnerContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(3px)',
        '-webkit-backdrop-filter': 'blur(5.5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        zIndex: 1000,
    },
}))

export default function Spinner({ className, ...props }) {
    const classes = useStyles()

    return (
        <Box className={clsx(classes.spinnerContainer, className)} {...props}>
            <CircularProgress color="primary" />
        </Box>
    )
}
