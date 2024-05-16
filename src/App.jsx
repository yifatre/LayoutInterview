import { useState } from 'react'
import '../src/assets/styles/main.scss'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'

export function App() {


    return (
        <>
            <AppHeader />
            <HomePage />
        </>
    )
}

