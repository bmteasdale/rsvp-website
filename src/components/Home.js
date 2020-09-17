import React from 'react';
import NavBar from './NavBar';
import Title from './Title';
import Details from './Details';
import Gallery from './Gallery';
import Footer from './Footer';


export default function Home() {
    return (
        <div>
            <NavBar />
            <Title />
            <Details />
            <Gallery />
            <Footer />
        </div>
    )
}
