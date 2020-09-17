import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export class Success extends Component {
    
    updateRSVP = async () => {
        var { values } = this.props;
        await axios.put('/api/rsvp/' + encodeURIComponent(JSON.stringify(values.rsvps[0])))
        .then(() => {
            console.log("PUT METHOD SUCCEEDED");
        })
        .catch(() => {
            console.log("Error: Problem updating document!")
        });
    };

    // Update RSVP in mongo after this step of the form is mounted.
    // User had just hit "Send RSVP" in previous step of the form.
    componentDidMount() {
        this.updateRSVP();
    }

    render () {
        return (
            <div className="RSVPForm">
                <h3 className="success-message">Thank you for submitting your RSVP!</h3>
                <h6 className="success-message">You may now return to the main page.</h6>
                <br />
                <Button 
                    variant="warning"
                    className="btn continue-btn" 
                    type="submit"
                    href="/"
                    block>
                        Return to main page
                </Button>
            </div>
            
        )
    }
    
}

export default Success;