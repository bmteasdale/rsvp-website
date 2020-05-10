import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export class AttendenceForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    goBack = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    componentDidMount() {
        this.fetchRSVP();
    };

    fetchRSVP = async () => {
        var { values } = this.props;
        await axios.get('/api/rsvp/' + values.queryName)
        .then((res) => {
            this.props.setRSVP(res.data);
        })
        .catch(() => {
            console.log('Error: Couldn\'t retreive data.');
        });
    };
    
    showComponent = () => {
        var { values } = this.props; 
        if(!values.rsvps.length) {
            return (
                // No RSVP Found, have button to go back to step 1
                <div>
                    <h2>Oops.. No RSVP found under the name of "{values.queryName}"</h2>
                    <Button 
                        variant="warning"
                        className="btn" 
                        type="submit"
                        href="/RSVP"
                        block>
                            Return
                    </Button>
                </div>
            );
        } else {
            // RSVP was found, render names and radio buttons for attendence
            return (
                <div>                    
                    <Form>
                        {/* <Form.Group controlId="formBasicEmail">
                            <p className="RSVPName">Brendan Teasdale</p>
                            <ToggleButtonGroup className="attendenceBtn" type="radio" name="options" defaultValue={"Joyfully Accepts"}>
                                <ToggleButton className="btn" value={"Joyfully Accepts"} variant="warning">Joyfully Accepts</ToggleButton>
                                <ToggleButton className="btn" value={"Regretfully Declines"} variant="warning">Regretfully Declines</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <p className="RSVPName">Rose Teasdale</p>
                            <ToggleButtonGroup className="attendenceBtn" type="radio" name="options" defaultValue={"Joyfully Accepts"}>
                                <ToggleButton className="btn" value={"Joyfully Accepts"} variant="warning">Joyfully Accepts</ToggleButton>
                                <ToggleButton className="btn" value={"Regretfully Declines"} variant="warning">Regretfully Declines</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group> */}
                        <h3>Attendence Form</h3>

                        {/* Where ul will go */}

                        <Button 
                            variant="warning"
                            className="btn" 
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
                    </Form>
                </div>
            )
        }
    };

    listRSVPs = () => {
        const { values } = this.props;
        values.rsvps.map((rsvp) => {
            return (
                <li>rsvp.name</li>
            )
        });
    };

    render() {
        return (
            <div className="RSVPForm">
                <small>Step 2 of 4</small>
                {this.showComponent()}
                <ul>
                    {this.listRSVPs()}
                </ul>
            </div>
        );
    }
}

export default AttendenceForm;
    