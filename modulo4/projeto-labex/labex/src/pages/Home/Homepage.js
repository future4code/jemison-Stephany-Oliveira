import React from 'react'
import logo from '../../assets/img/labex_logo.png'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../../customStyledComponents/Button'
import * as S from './Styles'

export const Homepage = () => {
  // navegação da página usando useNavigate // React Router
  const navigate = useNavigate()

  const headToListTripPage = () => {
    navigate('/trips/list')
  }

  const headToAdminHomePage = () => {
    navigate('/login')
  }

  return (
    <S.HomepageJS>
      <h1>LabeX: Administração Espacial e Aeronáutica Internacional</h1>
      <img  src={logo} alt='Logotipo da marca LabeX de Viagens Espaciais'/>
      <div>
        <CustomButton onClick={headToListTripPage}>Lista de Viagens</CustomButton>
        <CustomButton onClick={headToAdminHomePage}>Área Admin</CustomButton>
      </div>
    </S.HomepageJS>
  )
}
