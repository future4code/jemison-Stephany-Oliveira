import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { baseURL } from '../../../Constants/Constants'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import * as S from './Styles'
import { CustomButton } from '../../../customStyledComponents/Button'
import { CustomInput } from '../../../customStyledComponents/Input'
import { useNavigate } from 'react-router-dom'
import { PlanetSelect } from '../../../Components/PlanetSelect'

export const CreateTripPage = () => {
  const navigate = useNavigate()

  const backToAdminHome = () => {
    navigate('/admin/trips/list')
  }

  const backToLogin = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  useProtectedPage()

  const token = localStorage.getItem('token')

  const [form, onChange, saveForm] = useForm(`${baseURL}/trips`, {name: '', planet: '', date: '', description: '', durationInDays: ''}, { headers: {'Content-Type':'application/json', auth: token}})

  return (
    <S.CreateTripPageJS>
      <div className='buttonCase'>
        <CustomButton onClick={() => { backToAdminHome() }}>Voltar</CustomButton>
        <CustomButton onClick={() => { backToLogin() }}>Logout</CustomButton>
      </div>
      <div className='heading'>
        <h3>Cadastro de Novas Viagens</h3>
        <p>Ei, admin! Cadastre aqui as novas viagens incríveis da LabeX!</p>
      </div>
      <form onSubmit={(ev) => {ev.preventDefault(); saveForm()}}>
        <label>Nome da Viagem:</label>
        <CustomInput placeholder='Nome da Viagem' pattern='^.{5,}$' title='O campo "Nome da Viagem" precisa conter, pelo menos, 5 caracteres.' name='name' value={form.name} onChange={onChange} type='text' />
        <label>Planeta:</label>
        <PlanetSelect name='planet' value={form.planet} onChange={onChange}  />
        <label>Data:</label>
        <CustomInput placeholder='Data do Início da Viagem' name='date' value={form.date} onChange={onChange} type='date'  />
        <label>Descrição da Viagem:</label>
        <CustomInput placeholder='Descrição da Viagem' pattern='^.{30,}$' title='O campo "Descrição da Viagem" precisa conter, pelo menos, 30 caracteres.' name='description' value={form.description} onChange={onChange} type='text'  />
        <label>Duração:</label>
        <CustomInput placeholder='Duração da Viagem' pattern='^(?:1[01][0-9]|[5-9][0-9])$' title='O campo "Duração da Viagem" só aceita valores acima de 50.' name='durationInDays' value={form.durationInDays} onChange={onChange} type='number'  />
        <CustomButton>Criar Viagem</CustomButton>
      </form>
    </S.CreateTripPageJS>
  )
}
