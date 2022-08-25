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
        <CustomInput placeholder='Nome' pattern='[A-Za-z]{5}' name='name' value={form.name} onChange={onChange} type='text' required />
        <label>Idade:</label>
        <CustomInput placeholder='Idade' name='age' value={form.age} onChange={onChange} type='number' size='3' required />
        <label>Mensagem de Inscrição:</label>
        <CustomInput placeholder='Mensagem de Inscrição' name='applicationText' value={form.message} onChange={onChange} type='text' required />
        <label>Profissão:</label>
        <CustomInput placeholder='Profissão' name='profession' value={form.profession} onChange={onChange} type='text' required />
        <label>País:</label>
        <CountrySelect name='country' value={form.country} onChange={onChange} required />
        {/* <CustomInput placeholder='País' name='country' value={form.country} onChange={onChange} type='text' required /> */}
        <CustomButton>Enviar Formulário</CustomButton>
      </form>
    </S.ApplicationFormPageJS>
  )
}
