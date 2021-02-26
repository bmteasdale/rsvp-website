import React, { Component } from 'react';
import { Form, Card, Button } from 'react-bootstrap'; 

export class Accommodations extends Component {

    // Continue to next step
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    
    // Return to previous step
    goBack = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <div id="accomodations" className="RSVPForm">
                <small>Step 4 of 5</small>
                <h3>Accommodations</h3>
                <Form id="accommodations-form">
                    <Card>
                        <Card.Body>
                            <h3 className="accommodations-header">Need a place to stay?</h3><br />
                            <h6>Château Bedford Hotel & Suites</h6>
                            <h6>133 Kearney Lake Drive Rd, Halifax, NS</h6>
                            <h6>Rate is <strong>$129/night</strong> (plus tax)*</h6>
                            <h6>Includes parking, free WiFi, local calls, and buffet breakfast.</h6>
                            <h6>To make reservations please call (902)445-1100 or toll-free 1-800-565-3086</h6><br />
                            <h6>* Please let the hotel know you are with the Berkvens/Teasdale Wedding!</h6>
                        </Card.Body>
                    </Card>
                </Form>
                <Button 
                        variant="warning"
                        className="btn continue-btn" 
                        type="submit"
                        onClick={this.continue}
                        block>
                            Continue
                    </Button>
                    <Button 
                        variant="warning"
                        className="btn" 
                        type="submit"
                        onClick={this.goBack}
                        block>
                            Go Back
                    </Button>
            </div>
        )
    }
}

export default Accommodations;
