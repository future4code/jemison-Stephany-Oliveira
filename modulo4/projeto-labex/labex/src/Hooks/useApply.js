import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL } from '../Constants'
import { baseID } from '../Constants'

export const useApply = (initialState) => {
    const [application, setApplication] = useState(initialState)

    useEffect(() => {
        axios.get(`${baseURL}/trips/${baseID}/apply`)
        .then((response) => {
            setApplication(response.data)
        })
    }, [])

    return application
}
