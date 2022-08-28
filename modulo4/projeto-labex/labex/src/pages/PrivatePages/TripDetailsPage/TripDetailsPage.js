import { React, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxiosGet } from '../../../hooks/useAxiosGet'
import { baseURL, adminHeaders } from '../../../Constants/Constants'
import { CustomButton } from '../../../customStyledComponents/Button'
import * as S from './Styles'
import axios from 'axios'
import { useProtectedPage } from '../../../hooks/useProtectedPage'

export const TripDetailsPage = () => {
  useProtectedPage()
  
  const navigate = useNavigate()

  const pathParam = useParams()

  // const [data, isLoading, error] = useAxiosGet(`${baseURL}/trip/${pathParam.id}`, [], adminHeaders)

  const backToListTripPage = () => {
    navigate('/admin/trips/list')
  }

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [update, setUpdate] = useState(1)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoading(true)
    axios.get(`${baseURL}/trip/${pathParam.id}`, { headers: { auth: token}})
    .then((response) => {
      setIsLoading(false)
      setData(response.data.trip)
    }).catch((error) => {
      setError(error)
      console.log('Deu erro: ' + error)
    })
  }, [pathParam.id, update])

  const DecideCandidates = (boo, tid, cid) => {
    const body = {
      "approve": boo
    }
    const token = localStorage.getItem('token')
    axios.put(`${baseURL}/trips/${tid}/candidates/${cid}/decide`, body, { headers: { 'Content-Type': 'application/json', auth: token }}).then((response) => {
      setUpdate(update + 1)
      alert('Decisão gravada com sucesso.').catch((error) => {
        console.log('Deu erro' + error)
      })
    })
  }

  return (
    <S.TripDetailsPageJS>
      <div className='buttonCase'>
        <CustomButton onClick={() => { backToListTripPage() }}>Voltar</CustomButton>
        <CustomButton>Logout</CustomButton>
      </div>
      {isLoading && (<p>Carregando Viagens...</p>)}
      {!isLoading && error && (<p>Houve um erro ao obter as viagens. Recarregue a página.</p>)}
      <h2>Detalhes da Viagem</h2>
      <S.TripDetails>
        <p><span>Viagem:</span> {data.name}</p>
        <p><span>Planeta:</span> {data.planet}</p>
        <p><span>Duração:</span> {data.durationInDays} dias</p>
      </S.TripDetails>
      <h3>Candidatos:</h3>

      {isLoading && (<p>Carregando Candidatos...</p>)}
      {!isLoading && error && (<p>Houve um erro ao obter as viagens. Recarregue a página.</p>)}
      {!isLoading && data && data.candidates && data.candidates.map((item, index) => { return <S.TripDetails key={index}><h5>Candidato {index + 1}:</h5><p><span>Nome:</span> {item.name}</p><p><span>Idade:</span> {item.age}</p><p><span>Profissão:</span> {item.profession}</p><p><span>País:</span> {item.country}</p><p><span>Mensagem de Inscrição:</span> {item.applicationText}</p><CustomButton onClick={() => { DecideCandidates(true, data.id, item.id)} }>Aprovar</CustomButton><CustomButton onClick={() => { DecideCandidates(false, data.id, data.candidates.id)}}>Rejeitar</CustomButton></S.TripDetails>})}
    </S.TripDetailsPageJS>
  )
}
