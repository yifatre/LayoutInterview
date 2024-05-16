import shapes1 from '../assets/img/shapes1.svg'
import shapes2 from '../assets/img/shapes2.svg'

export function Hero() {
    return <section className='hero'>
        <h1 className='large'>Find the best <span className='emph'>talent</span></h1>
        <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
        <img className='shapes1' src={shapes1} alt="" />
        <img className='shapes2' src={shapes2} alt="" />
    </section>
}