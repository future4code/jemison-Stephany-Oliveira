import { React } from 'react'
import { useParams } from 'react-router-dom'
import { baseURL, adminHeaders } from '../../../Constants/Constants'
import { useAxiosGet } from '../../../hooks/useAxiosGet'


export const TripDetailsPage = () => {
  const pathParams = useParams()

  // renderização da lista

  const [list, isLoading, error] = useAxiosGet(`${baseURL}/trip/${pathParams.id}`, {}, adminHeaders)

  const showDetails = () =>{
    return <div>
              <h4>{list.trip.name}, {list.trip.planet}</h4>
              <p>Duração: {list.trip.durationInDays}</p>
              <p>Descrição: {list.trip.description}</p>
            </div>
  }
  


  return (
    <div>
        <h2>Detalhes das Viagens</h2>
          {isLoading && (<p>Os detalhes estão carregando...</p>)}
          {!isLoading && error && (<p>Houve um erro ao recuperar os detalhes da viagem.</p>)}
          {!isLoading && list && list.length > 0 && showDetails}
          {!isLoading && list && list.length === 0 && (<p>Essa viagem não foi localizada.</p>)}
      {/* {renderList} */}
    </div>
  )
}
