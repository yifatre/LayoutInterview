import { Link } from 'react-router-dom'

export function MainNav() {
    return <nav className='main-nav' ><ul className='clean-list flex justify-space-between'><li><Link to='/'>home</Link></li><li><Link to='/about'>about</Link></li></ul></nav>
}