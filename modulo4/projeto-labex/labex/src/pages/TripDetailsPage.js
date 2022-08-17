import React from 'react'
import { useTripDetails } from '../Hooks/useTripDetails'

export const TripDetailsPage = () => {

  // renderização da lista

  const list = useTripDetails([])
  
    const renderList = list.map((item, index) => {
      return <div key={index}>
                <h4>{item.name}, {item.planet}</h4>
                <p>Duração: {item.durationInDays}</p>
                <p>Descrição: {item.description}</p>
                <h4>Candidato:</h4>
                <p>{item.candidates.name}, {item.candidates.age}, {item.candidates.country}</p>
                <p>Profissão: {item.candidates.profession}</p>
                <p>Mensagem de Inscrição: {item.candidates.applicationText}</p>
                <button>Aprovar</button>
                <button>Reprovar</button>
                <button>Filtrar por aprovados</button>
              </div>
    })

  return (
    <div>
      <h2>Detalhes das Viagens</h2>
      {renderList}
    </div>
  )
}
