import React from 'react'
import { useNavigate } from 'react-router-dom'
import { baseURL } from '../../../Constants/Constants' 
import { useAxiosGet } from '../../../hooks/useAxiosGet'


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
    const [list, isLoading, error] = useAxiosGet(`${baseURL}/trips`, [])
    
  
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
      {isLoading && (<p>Carregando Viagens...</p>)}
      {!isLoading && error && (<p>Houve um erro ao obter as viagens. Recarregue a página.</p>)}
      {!isLoading && list && list.length > 0 && renderList}
      {!isLoading && list && list.length === 0 && (<p>Sua busca não retornou nenhuma viagem</p>)}
    </div>
  )
}
