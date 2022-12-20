import {useEffect, useState} from "react";

export const useError = () => {
    const [error, setError] = useState(false)
    const onError = (error) => setError(error)

    useEffect(() => {
        if (error) {
            const timeoutId = setTimeout(() => {
                setError(false)
            }, 3000)

            return () => clearTimeout(timeoutId)
        }
    }, [error])

    return { error, onError }
}