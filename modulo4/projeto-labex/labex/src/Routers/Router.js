import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminHomePage } from '../pages/PrivatePages/AdminHome/AdminHomePage'
import { ApplicationFormPage } from '../pages/PublicPages/ApplicationFormPage/ApplicationFormPage'
import { Homepage } from '../pages/Home/Homepage'
import { ListTripsPage } from '../pages/PublicPages/ListTripPage/ListTripsPage'
import { LoginPage } from '../pages/PrivatePages/Login/LoginPage'
import { CreateTripPage } from '../pages/PrivatePages/CreateTripPage/CreateTripPage'
import { TripDetailsPage } from '../pages/PrivatePages/TripDetailsPage/TripDetailsPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='trips/list' element={<ListTripsPage />} />
                <Route path='trips/application/:id' element={<ApplicationFormPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='admin/trips/list' element={<AdminHomePage />} />
                <Route path='admin/trips/create' element={<CreateTripPage />} />
                <Route path='admin/trips/:id' element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter >
  )
}