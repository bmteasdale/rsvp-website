import React from 'react';
import { Button } from 'react-bootstrap';


export default function Title() {
    return (
        <div id="title">
            {/* <!-- Text on title container --> */}
            <div className="title-text">
                <h1 className="title-header-1">Mallory & Shawn</h1>
                <hr className="top-hr"/>
                <h3 className="title-header-3">WE'RE GETTING MARRIED</h3>
                <hr className="top-hr"/>
            </div>
            {/* <!-- Button redirects you to RSVP (new page or pop up) --> */}
            <Button variant="outline-warning" href="./RSVP" className="btn btn-outline-light btn-lg responsive-text">RSVP</Button>
        </div>
    )
}
