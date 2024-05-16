import shapes6 from '../assets/img/shapes6.svg'


export function CoralFooter() {
    return <section className='coral-footer flex justify-space-between'>
        <img src={shapes6} alt="" />
        <h2>Ready to get started?</h2>
        <button className='pill-btn dark'>contact us</button>
    </section>
}