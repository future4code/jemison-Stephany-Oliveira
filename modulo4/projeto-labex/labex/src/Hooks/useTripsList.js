import axios from "axios"
import { useState, useEffect } from "react"
import { baseURL } from "../Constants"

export const useTripsList = (initialState) => {
    const [tripsList, setTripsList] = useState(initialState)

    useEffect(() => {
        axios.get(`${baseURL}/trips`)
        .then((response) => {
            setTripsList(response.data.trips)
        })
    }, [])

    return tripsList
}
