import man from '../assets/img/man.svg'
import gear from '../assets/img/gear.svg'
import stats from '../assets/img/stats.svg'
import shapes3 from '../assets/img/shapes3.svg'

export function Description() {
    return <section className='desc flex justify-space-between'>
        <h2>Build & manage distributed teams like no one else.</h2>
        <ul className='clean-list flex column'>
            <li>
                <img src={man} alt="" />
                <h3>Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
            </li>
            <li>
                <img src={gear} alt="" />
                <h3>Easy to Implement</h3>
                <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
            </li>
            <li>
                <img src={stats} alt="" />
                <h3>Enhanced Productivity</h3>
                <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
            </li>
        </ul>
        <img src={shapes3} alt="" />
    </section>
}