import React from 'react'
import * as S from './Styles'
import { CountrySelect } from '../../../Components/CountrySelect'
import { CustomButton } from '../../../customStyledComponents/Button'
import { CustomInput } from '../../../customStyledComponents/Input'
import { useParams, useNavigate } from 'react-router-dom'
import { baseURL, headers } from '../../../Constants/Constants'
import { useForm } from '../../../hooks/useForm'

export const ApplicationFormPage = () => {
  const navigate = useNavigate()

  const headBackToListTrip = () => {
    navigate('/trips/list')
  }

  const pathParams = useParams()

  const [form, onChange, saveForm] = useForm(`${baseURL}/trips/${pathParams.id}/apply`, {name: '', age: '', applicationText: '', profession: '', country: ''}, headers)


  return (
    <S.ApplicationFormPageJS>
      <div className='buttonCase'>
        <CustomButton onClick={() => { headBackToListTrip() }}>Voltar</CustomButton>
      </div>
      <div className='heading'>
        <h3>Inscreva-se</h3>
        <p>Candidate-se para uma de nossas viagens e seja um dos primeiros a desbravar o espaço!</p>
      </div>
      <form onSubmit={(ev) => {ev.preventDefault(); saveForm()}}>
        <label>Nome:</label>
        <CustomInput placeholder='Nome' pattern='^.{6,}$' title='O campo "Nome" precisa conter, pelo menos, 6 caracteres.' name='name' value={form.name} onChange={onChange} type='text' required />
        <label>Idade:</label>
        <CustomInput placeholder='Idade' pattern='^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$' title='A idade mínima aceita é de 18 anos.' name='age' value={form.age} onChange={onChange} type='number' size='3' required />
        <label>Mensagem de Inscrição:</label>
        <CustomInput placeholder='Mensagem de Inscrição' pattern='^.{30,}$' title='O campo "Mensagem de Inscrição" precisa conter, pelo menos, 30 caracteres.' name='applicationText' value={form.message} onChange={onChange} type='text' required />
        <label>Profissão:</label>
        <CustomInput placeholder='Profissão' pattern='^.{10,}$' title='O campo "Profissão" precisa conter, pelo menos, 10 caracteres.' name='profession' value={form.profession} onChange={onChange} type='text' required />
        <label>País:</label>
        <CountrySelect name='country' value={form.country} onChange={onChange} required />
        <CustomButton>Enviar Formulário</CustomButton>
      </form>
    </S.ApplicationFormPageJS>
  )
}
