import React from 'react'
import { useParams } from 'react-router-dom'
import { baseURL, headers } from '../../../Constants/Constants'
import { useForm } from '../../../hooks/useForm'

export const ApplicationFormPage = () => {
  const pathParams = useParams()

  const [form, onChange, saveForm] = useForm(`${baseURL}/trips/${pathParams.id}/apply`, {name: '', age: '', applicationText: '', profession: '', country: ''}, headers)


  return (
    <div>
      <form onSubmit={(ev) => {ev.preventDefault(); saveForm()}}>
        <label>Nome:</label>
        <input name='name' value={form.name} onChange={onChange} type='text' />
        <label>Idade:</label>
        <input name='age' value={form.age} onChange={onChange} type='number' size='3' />
        <label>Mensagem de Inscrição:</label>
        <input name='applicationText' value={form.message} onChange={onChange} type='text' />
        <label>Profissão:</label>
        <input name='profession' value={form.profession} onChange={onChange} type='' />
        <label>País:</label>
        <input name='country' value={form.country} onChange={onChange} type='text' />
        <button>Enviar Inscrição</button>
      </form>
    </div>
  )
}
