import { useState } from 'react'
import '../src/assets/styles/main.scss'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'
import { AppFooter } from './cmps/AppFooter'
import { About } from './pages/About'
import { Route, Routes } from 'react-router-dom'

export function App() {


    return (
        <>
            <AppHeader />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <AppFooter />
        </>
    )
}

