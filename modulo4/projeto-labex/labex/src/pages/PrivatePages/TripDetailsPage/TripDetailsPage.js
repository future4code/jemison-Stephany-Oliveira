import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAxiosGet } from '../../../hooks/useAxiosGet'
import { baseURL, adminHeaders } from '../../../Constants/Constants'

export const TripDetailsPage = () => {
  const pathParam = useParams()

  const [data, isLoading, error] = useAxiosGet(`${baseURL}/trip/${pathParam.id}`, [], adminHeaders)

  console.log(data)
  

  return (
    <div>
      {isLoading && (<p>Carregando Viagens...</p>)}
      {!isLoading && error && (<p>Houve um erro ao obter as viagens. Recarregue a página.</p>)}
      <h3>Detalhes da Viagem</h3>
      <h4>Candidatos:</h4>
      {isLoading && (<p>Carregando Candidatos...</p>)}
      {!isLoading && error && (<p>Houve um erro ao obter as viagens. Recarregue a página.</p>)}
      {!isLoading && data && data.trip && data.trip.candidates.map((item, index) => { return <div key={index}><h5>Candidato {index + 1}:</h5><p>Nome: {item.name}</p><p>Idade: {item.age}</p><p>Profissão: {item.profession}</p><p>País: {item.country}</p><p>Mensagem de Inscrição: {item.applicationText}</p><button>Aprovar</button><button>Rejeitar</button></div>})}
    </div>
  )
}
