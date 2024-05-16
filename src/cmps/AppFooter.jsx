import logo from '../assets/img/myteam 2.svg'
import socials from '../assets/img/socials.svg'
import { MainNav } from './MainNav'

export function AppFooter() {
    return <footer>
        <img className='logo' src={logo} alt="" />
        <MainNav />
        <div>
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
        </div>

        <img className='soc' src={socials} alt="" />
        <p>Copyright 2020. All Rights Reserved</p>
    </footer>
}