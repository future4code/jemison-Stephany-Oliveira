import axios from "axios"
import { useState, useEffect } from "react"
import { baseID, baseURL, headers } from "../Constants"

export const useTripDetails = (initialState) => {
    const [details, setDetails] = useState(initialState)

    useEffect(() => {
        axios.get(`${baseURL}/trip/${baseID}`, { headers }).then((response) => {
            setDetails(response.data.trip)
        })
    }, [])

    return details
}
