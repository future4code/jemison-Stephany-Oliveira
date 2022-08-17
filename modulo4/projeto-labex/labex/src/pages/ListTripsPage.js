import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTripsList } from '../Hooks/useTripsList'

export const ListTripsPage = () => {
  // navegação
  const navigate = useNavigate()

  const headToApplicationFormPage = () => {
    navigate('/trips/application')
  }

  // renderização da lista de viagens
  const list = useTripsList([])

  const renderList = list.map((item, index) => {
    return <div key={index}>
              <h4>{item.name}, {item.planet}</h4>
              <p>Duração: {item.durationInDays}</p>
              <p>Descrição: {item.description}</p>
            </div>
  })

  return (
    <div>
      <h1>Lista de Viagens Disponíveis</h1>
      <button onClick={headToApplicationFormPage}>Inscreva-se para uma Viagem</button>
      {renderList}
    </div>
  )
}
