import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { baseURL, adminHeaders } from '../../../Constants/Constants'

export const CreateTripPage = () => {

  const [form, onChange, saveForm] = useForm(`${baseURL}/trips`, {name: '', planet: '', date: '', description: '', durationInDays: ''}, adminHeaders)


  return (
    <div>
      <form onSubmit={(ev) => {ev.preventDefault(); saveForm()}}>
        <label>Nome da Viagem:</label>
        <input name='name' value={form.name} onChange={onChange} type='text' />
        <label>Planeta:</label>
        <input name='planet' value={form.age} onChange={onChange} type='text' />
        <label>Data:</label>
        <input name='date' value={form.message} onChange={onChange} type='date' />
        <label>Descrição da Viagem:</label>
        <input name='description' value={form.profession} onChange={onChange} type='' />
        <label>Duração:</label>
        <input name='durationInDays' value={form.country} onChange={onChange} type='text' />
        <button>Criar Viagem</button>
      </form>
    </div>
  )
}
