import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTripsList } from '../Hooks/useTripsList'

export const AdminHomePage = () => {
    // navegação
    const navigate = useNavigate()

    const headToCreateTripPage = () => {
      navigate('/admin/trips/create')
    }

    const headToTripDetailsPage = (id) => {
      navigate(`/admin/trips/${id}`)
    }
  
    // renderização da lista de viagens
    const list = useTripsList([])
  
    const renderList = list.map((item, index) => {
      return <div key={index}>
                <h4>{item.name}, {item.planet}</h4>
                <p>Duração: {item.durationInDays}</p>
                <p>Descrição: {item.description}</p>
                <button onClick={() => headToTripDetailsPage(item.id)}>Ver Detalhes da Viagem</button>
                <button>Deletar Viagem</button>
              </div>
    })

  return (
    <div>
      <h2>Bem vindo, Admin!</h2>
      <button onClick={headToCreateTripPage}>Criar novas Viagens</button>
      <h3>Gerenciar Viagens</h3>
      {renderList}
    </div>
  )
}
