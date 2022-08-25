import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginPageJS } from './Styles'
import { CustomButton } from '../../../customStyledComponents/Button'
import { CustomInput } from '../../../customStyledComponents/Input'

export const LoginPage = () => {
  const navigate = useNavigate()

  const backToHomePage = () => {
    navigate('/')
  }

  return (
    <LoginPageJS>
      <div className='buttonCase'>
        <CustomButton onClick={() => {backToHomePage()}}>Voltar</CustomButton>
      </div>
      <h1>Inicie sessão para continuar...</h1>
      <form>
        <CustomInput placeholder='E-mail' type='email' />
        <CustomInput placeholder='Senha' type='password' />
        <CustomButton>Entrar</CustomButton>
      </form>
    </LoginPageJS>
  )
}
