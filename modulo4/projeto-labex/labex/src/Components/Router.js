import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import { AdminHomePage } from './pages/AdminHomePage'
import { ApplicationFormPage } from './pages/ApplicationFormPage'
import { Homepage } from './pages/Homepage'
import { ListTripsPage } from './pages/ListTripsPage'
import { LoginPage } from './pages/LoginPage'
import { CreateTripPage } from './pages/CreateTripPage'
import { TripDetailsPage } from './pages/TripDetailsPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index element={<Homepage />}>
                        <Route path='trips/list' element={<ListTripsPage />}>
                            <Route path='trips/application' element={<ApplicationFormPage />} />
                        </Route>
                        <Route path='login' element={<LoginPage />}>
                            <Route path='admin/trips/list' element={<AdminHomePage />}>
                                <Route path='admin/trips/create' element={<CreateTripPage />} />
                                <Route path='admin/trips/:id' element={<TripDetailsPage />} />
                            </Route>
                        </Route>
                    </Route>
                </Route> 
        </Routes>
        </BrowserRouter >
  )
}