import shapes4 from '../assets/img/shapes4.svg'
import shapes5 from '../assets/img/shapes5.svg'
import quotes from '../assets/img/quotes.svg'
import avatar1 from '../assets/img/avatar1.png'
import avatar2 from '../assets/img/avatar2.png'
import avatar3 from '../assets/img/avatar3.png'

export function Quotes() {
    return <div>
        <img src={shapes4} alt="" />
        <h2>Delivering real results for top companies. Some of our success stories.</h2>
        <ul>
            <li>
                <img src={quotes} alt="" />
                <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                <h4>Kady Baker</h4>
                <img src={avatar1} alt="" />
            </li>
            <li>
                <img src={quotes} alt="" />
                <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                <h4>Aiysha Reese</h4>
                <img src={avatar2} alt="" />
            </li>
            <li>
                <img src={quotes} alt="" />
                <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                <h4>Arthur Clarke</h4>
                <img src={avatar3} alt="" />
            </li>
        </ul>
        <img src={shapes5} alt="" />
    </div>
}