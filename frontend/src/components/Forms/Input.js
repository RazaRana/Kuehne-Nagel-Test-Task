import {Box, InputLabel, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import { useInputProps } from './hooks'

export const Input = ({
  placeholder,
  label,
  type,
  InputProps,
  required = true,
  ...props
}) => {
    const classes = useStyles()
    const { errorText, field } = useInputProps(props)

    return (
        <Box className={classes.input}>
            <InputLabel
                shrink
                className={classes.label}
            >
                {label}
            </InputLabel>
            <TextField
                fullWidth
                classes={{
                    root: clsx(
                        !!errorText && classes.errorBorder,
                        classes.input
                    ),
                }}
                placeholder={placeholder}
                helperText={errorText}
                error={!!errorText}
                type={type}
                InputProps={InputProps}
                required={required}
                {...field}
                // {...props}
            />
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    input: {
        '& .MuiInputBase-input': {
            color: '#000000',
            fontSize: '16px',
            fontWeight: 400,
            '&::placeholder': {
                textTransform: 'lowercase',
            },
            letterSpacing: '0.05em',
            padding: theme.spacing(0.9, 2),
            border: `1px solid ${theme.palette.secondary.main}`,
            borderLeft: `5px solid ${theme.palette.secondary.main}`,
            backgroundColor: '#FFFFFF',
            borderRadius: '5px',
            position: 'relative',
            '-webkit-appearance': 'none !important',
            '&:focus': {
                filter: 'drop-shadow(0px 0px 2px rgb(27, 102, 177))',
            },
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(1.35, 2),
            },
        },
        '& .MuiInput-underline:before': {
            borderBottom: 'none !important',
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'none !important',
        },
    },

    errorBorder: {
        position: 'relative',
        '& .MuiInputBase-input': {
            border: `1px solid ${theme.palette.primary.main}`,
            borderLeft: `5px solid ${theme.palette.primary.main}`,
            borderRadius: 5,
            '&:focus': {
                filter: 'unset',
            },
        },
        '& .MuiFormHelperText-root': {
            marginLeft: theme.spacing(2),
        },
    },

    label: {
        textAlign: 'left',
        marginLeft: theme.spacing(2),
        fontWeight: 600,
        color: '#000000',
        fontSize: 16,
    },
}))
