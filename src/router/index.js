import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home.jsx'
import Week from '../views/Week.jsx'
import Debts from '../views/Debts.jsx'
import Buyings from '../views/Buyings.jsx'
import Birthdays from '../views/Birthdays.jsx'

const Router = () => (
    <Routes basename={'/asd'}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/Debts`} element={<Debts />} />
        <Route path={`${process.env.PUBLIC_URL}/Buyings`} element={<Buyings />} />
        <Route path={`${process.env.PUBLIC_URL}/Birthdays`} element={<Birthdays />} />
        <Route path={`${process.env.PUBLIC_URL}/weekplaner`} element={<Week />} />
    </Routes>
)

export  {Router};