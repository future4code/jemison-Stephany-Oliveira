import { useState } from "react";
import axios from 'axios'

export const useForm = (url, initialState, headers) => {
    const [form, setForm] = useState(initialState)

    const onChange = (ev) => {
        const { name, value } = ev.target
        setForm({ ...form, [name]:value })
    } 

    const saveForm =() => {
        axios.post(url, form, headers)
        .then((response) => {
            if (response.data.message !== undefined) {
                alert(response.data.message)
            } else {
                alert('Viagem criada com sucesso!')
            }
        }).catch((err) => {
          console.log('Ao submeter a inscrição, houve um erro de salvamento dos dados:', err)
        })
      }

    return [form, onChange, saveForm]
}