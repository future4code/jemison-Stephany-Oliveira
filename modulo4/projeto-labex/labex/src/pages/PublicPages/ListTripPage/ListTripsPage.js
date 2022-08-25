import React from 'react'
import * as S from './Styles'
import { CustomButton } from '../../../customStyledComponents/Button'
import { CustomErrorMessage } from '../../../customStyledComponents/ErrorMessage'
import { useNavigate } from 'react-router-dom'
import { useAxiosGet } from '../../../hooks/useAxiosGet'
import { baseURL } from '../../../Constants/Constants'


export const ListTripsPage = () => {
  // navegação
  const navigate = useNavigate()

  const headBackToHome = () => {
    navigate('/')
  }

  const headToLoginPage = () => {
    navigate('/login')
  }

  const headToApplicationFormPage = (urlPath) => {
    navigate(`/trips/application/${urlPath}`)
  }

  // renderização da lista de viagens
  const [data, isLoading, error] = useAxiosGet(`${baseURL}/trips`, [])

  return (
    <S.ListTripPageJS>
      <div className='buttonCase'>
        <CustomButton onClick={() => headBackToHome()}>Voltar</CustomButton>
        <CustomButton onClick={() => headToLoginPage()}>Admin</CustomButton>
      </div>
      <h1>Lista de Viagens</h1>
      <section>
        {isLoading && (<CustomErrorMessage>Carregando Viagens...</CustomErrorMessage>)}
        {!isLoading && error && (<CustomErrorMessage>Houve um erro ao obter as viagens. Recarregue a página.</CustomErrorMessage>)}
        {!isLoading && data && data.trips && data.trips.map((item, index) => { return <S.TripCard key={index}><div className='titleClass'><h4>{item.name}</h4><span>Duração: {item.durationInDays} dias</span></div><p><span>Planeta:</span> {item.planet}</p><p><span>Descrição:</span> {item.description}</p><CustomButton onClick={() => headToApplicationFormPage(item.id)}>Inscreva-se para uma Viagem</CustomButton></S.TripCard>})}
      </section>
    </S.ListTripPageJS>
  )
}


