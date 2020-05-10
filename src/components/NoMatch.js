// 404 Page
import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import { Button } from 'react-bootstrap';

export default function NoMatch() {
    return (
        <div>
            <NavBar />
            <div className="no-match">
            <h1 className="Header-404">404. Page not found.</h1>
            <p>Return to Home Page?</p>
            <Button
                href={'/'}
                className={'btn'}
                >
                Return
            </Button>
            </div>
        </div>
    )
}
