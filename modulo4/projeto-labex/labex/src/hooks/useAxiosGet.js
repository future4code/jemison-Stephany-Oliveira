import { useState, useEffect } from "react";
import axios from "axios";

export const useAxiosGet = (url, initialState, headers) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        axios.get(url, headers)
        .then((response) => {
            setIsLoading(false)
            setData(response.data)
         })
        .catch((err) => {
            setError(err)
        })
    }, [url, headers])

    return [data, isLoading, error]
}