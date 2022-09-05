import { React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../AdminHome/Styles'
import { CustomButton } from '../../../customStyledComponents/Button'
import { baseURL } from '../../../Constants/Constants' 
import { useAxiosGet } from '../../../hooks/useAxiosGet'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import axios from 'axios'


export const AdminHomePage = () => {
    useProtectedPage()
    // navegação
    const navigate = useNavigate()

    const backToLogin = () => {
      localStorage.removeItem('token')
      navigate('/login')
    }

    const headToCreateTripPage = () => {
      navigate('/admin/trips/create')
    }

    const headToTripDetailsPage = (id) => {
      navigate(`/admin/trips/${id}`)
    }
  
    // renderização da lista de viagens

    const [update, setUpdate] = useState(1)
    
    const [data, isLoading, error] = useAxiosGet(`${baseURL}/trips`, [], update)
    
    const deleteTrips = (id) => {
      const token = localStorage.getItem('token')

      axios.delete(`${baseURL}/trips/${id}`, { headers: { auth: token}}).then((response) => {
        alert('Viagem deletada com sucesso.')
        setUpdate(update + 1)
      }).catch((error) => {
        console.log(error)
      })
    }

    console.log(update)

  return (
    <S.AdminListTripPageJS>
      <div className='buttonCase'>
        <CustomButton onClick={() => {headToCreateTripPage()}}>Criar novas Viagens</CustomButton>
        <CustomButton onClick={() => {backToLogin()}}>Logout</CustomButton>
      </div>
      <h1>Bem vindo, Admin!</h1>
      <h2>Gerenciar Viagens</h2>
      <section>
        {isLoading && (<p>Carregando Viagens...</p>)}
        {!isLoading && error && (<p>Houve um erro ao obter as viagens. Recarregue a página.</p>)}
        {!isLoading && data && data.trips && data.trips.map((item, index) => { return <S.AdminTripCard key={index}><h4>{item.name}, {item.planet}</h4><p>Duração: {item.durationInDays}</p><p>Descrição: {item.description}</p><CustomButton onClick={() => headToTripDetailsPage(item.id)}>Ver Detalhes da Viagem</CustomButton><CustomButton onClick={() => { deleteTrips(item.id)}}>Deletar Viagem</CustomButton></S.AdminTripCard>})}
      </section>
    </S.AdminListTripPageJS>
  )
}
