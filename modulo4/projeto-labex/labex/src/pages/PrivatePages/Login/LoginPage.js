import React from 'react'
import { baseURL, headers } from '../../../Constants/Constants'
import { useForm } from '../../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { LoginPageJS } from './Styles'
import { CustomButton } from '../../../customStyledComponents/Button'
import { CustomInput } from '../../../customStyledComponents/Input'
import { useProtectedPage } from '../../../hooks/useProtectedPage'

export const LoginPage = () => {
  useProtectedPage()
  const navigate = useNavigate()

  const backToHomePage = () => {
    navigate('/')
  }

  const [form, onChange, saveForm] = useForm(`${baseURL}/login`, {email: '', password: ''}, headers)

  return (
    <LoginPageJS>
      <div className='buttonCase'>
        <CustomButton onClick={() => {backToHomePage()}}>Voltar</CustomButton>
      </div>
      <h1>Inicie sessão para continuar...</h1>
      <form onSubmit={(ev) => {ev.preventDefault(); saveForm()}}>
        <CustomInput placeholder='E-mail' type='email' name='email' value={form.email} onChange={onChange} />
        <CustomInput placeholder='Senha' type='password' name='password' value={form.password} onChange={onChange}/>
        <CustomButton>Entrar</CustomButton>
      </form>
    </LoginPageJS>
  )
}
