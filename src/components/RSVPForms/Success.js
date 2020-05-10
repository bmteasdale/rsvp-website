import React from 'react'
import { Button } from 'react-bootstrap'

export default function Confirm() {
    return (
        <div className="RSVPForm">
            <h3>Thank you for submitting your RSVP!</h3>
            <br />
            <Button 
                variant="warning"
                className="btn" 
                type="submit"
                href="/"
                block>
                    Return to main page
            </Button>
        </div>
        
    )
}