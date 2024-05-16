import shapes4 from '../assets/img/shapes4.svg'
import shapes5 from '../assets/img/shapes5.svg'
import quotes from '../assets/img/quotes.svg'
import avatar1 from '../assets/img/avatar1.png'
import avatar2 from '../assets/img/avatar2.png'
import avatar3 from '../assets/img/avatar3.png'

export function Quotes() {
    return <section className='quotes'>
        <img className='shapes4' src={shapes4} alt="" />
        <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
        <ul className='clean-list flex justify-space-around'>
            <li>
                <img className='quts' src={quotes} alt="" />
                <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                <h3>Kady Baker</h3>
                <img className='avatar' src={avatar1} alt="" />
            </li>
            <li>
                <img className='quts' src={quotes} alt="" />
                <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                <h3>Aiysha Reese</h3>
                <img className='avatar' src={avatar2} alt="" />
            </li>
            <li>
                <img className='quts' src={quotes} alt="" />
                <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                <h3>Arthur Clarke</h3>
                <img className='avatar' src={avatar3} alt="" />
            </li>
        </ul>
        <img className='shapes5' src={shapes5} alt="" />
    </section>
}