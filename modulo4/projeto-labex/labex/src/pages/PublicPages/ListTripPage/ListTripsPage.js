import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxiosGet } from '../../../hooks/useAxiosGet'
import { baseURL } from '../../../Constants/Constants'


export const ListTripsPage = () => {
  // navegação
  const navigate = useNavigate()

  const headToApplicationFormPage = (urlPath) => {
    navigate(`/trips/application/${urlPath}`)
  }

  // renderização da lista de viagens
  const [list, isLoading, error] = useAxiosGet(`${baseURL}/trips`, [])


  const renderList = list.map((item, index) => {
    return <div key={index}>
              <h4>{item.name}, {item.planet}</h4>
              <p>Duração: {item.durationInDays}</p>
              <p>Descrição: {item.description}</p>
              <button onClick={() => headToApplicationFormPage(item.id)}>Inscreva-se para uma Viagem</button>
            </div>
  })

  return (
    <div>
      <h1>Lista de Viagens Disponíveis</h1>
      {isLoading && (<p>Carregando Viagens...</p>)}
      {!isLoading && error && (<p>Houve um erro ao obter as viagens. Recarregue a página.</p>)}
      {!isLoading && list && list.length > 0 && renderList}
      {!isLoading && list && list.length === 0 && (<p>Sua busca não retornou nenhuma viagem</p>)}
    </div>
  )
}
