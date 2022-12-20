import { useField } from 'formik'
export const useInputProps = (props) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ''

    return { errorText, field }
}
