import React from 'react';
import NavBar from './NavBar';
import Title from './Title';
import Countdown from './Countdown';
import Details from './Details';
import Gallery from './Gallery';
import Registry from './Registry'
import Footer from './Footer';


export default function Home() {
    return (
        <div>
            <NavBar />
            <Title />
            <Countdown />
            <Details />
            <Gallery />
            <Registry />
            <Footer />
        </div>
    )
}
