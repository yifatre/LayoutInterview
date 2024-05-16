import { AppFooter } from '../cmps/AppFooter'
import { CoralFooter } from '../cmps/CoralFooter'
import { Description } from '../cmps/Description'
import { Hero } from '../cmps/Hero'
import { Quotes } from '../cmps/Quotes'

export function HomePage() {
    return <>
        <Hero />
        <Description />
        <Quotes />
        <CoralFooter />
    </>
}