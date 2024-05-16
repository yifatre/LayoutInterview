import { Link } from 'react-router-dom'
import logo from '../assets/img/myteam 2.svg'

export function AppHeader() {
    return <header>
        <a><img src={logo} alt="" /></a>
        <nav><ul className='clean-list'><li>home</li><li>about</li></ul></nav>
        <button>contact us</button>
    </header>
}