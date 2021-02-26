import React from 'react';
import NavBar from './NavBar';
import Title from './Title';
import Countdown from './Countdown';
import Schedule from './Schedule';
import Gallery from './Gallery';
import GuestAccommodations from './GuestAccommodations';
import WeddingParty from './WeddingParty';
import Registry from './Registry'
import Details from './Details';
import Footer from './Footer';


export default function Home() {
    return (
        <div>
            <NavBar />
            <Title />
            <Countdown />
            <Schedule />
            <WeddingParty />
            <Gallery />
            <GuestAccommodations />
            <Registry />
            <Details />
            <Footer />
        </div>
    )
}
