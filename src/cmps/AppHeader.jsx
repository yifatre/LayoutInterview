import { Link } from 'react-router-dom'
import logo from '../assets/img/myteam 2.svg'
import { MainNav } from './MainNav'

export function AppHeader() {
    return <header className='app-header'>
        <Link to='/'><img src={logo} alt="" /></Link>
        <MainNav />
        <button className='pill-btn'>contact us</button>
    </header>
}