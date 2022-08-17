import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Homepage = () => {
  // navegação da página usando useNavigate // React Router
  const navigate = useNavigate()

  const headToListTripPage = () => {
    navigate('/trips/list')
  }

  const headToAdminHomePage = () => {
    navigate('/admin/trips/list')
  }

  return (
    <div>
      <h1>Bem vindo ao LabeX</h1>
      <button onClick={headToListTripPage}>Lista de Viagens</button>
      <button onClick={headToAdminHomePage}>Área Admin</button>
    </div>
  )
}
