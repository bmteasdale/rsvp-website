import React, { Component } from 'react';
import { Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import axios from 'axios';
export class AttendenceForm extends Component {

    // Data in db is in Proper/Title Case
    toProperCase = (queryName) => {
        // Handle MacXxxxx, van Xxxxx
        var splitName = queryName.split(' ');
        if(splitName[1].toLowerCase().substr(0) === "van"){
            return splitName[0][0].toUpperCase() + splitName[0].toLowerCase().substr(1) + " " +  splitName[1].toLowerCase() + " " +  splitName[2][0].toUpperCase() + splitName[2].substr(1).toLowerCase();
        } else if (splitName[1].toLowerCase().substr(0, 3) === "mac") {
            return splitName[0][0].toUpperCase() + splitName[0].toLowerCase().substr(1) + " " +  splitName[1][0].toUpperCase() + splitName[1].substr(1, 2).toLowerCase() + splitName[1][3].toUpperCase() + splitName[1].substr(4).toLowerCase();
        } else {
            return splitName[0][0].toUpperCase() + splitName[0].toLowerCase().substr(1) + " " + splitName[1][0].toUpperCase() + splitName[1].substr(1).toLowerCase();
        }
        
    }

    // Move to next step
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    // Return to previous step
    goBack = e => {
        e.preventDefault();
        this.props.setResponseStatus(null);
        this.props.setApiCalls(0);
        this.props.prevStep();
    };

    // Method is automatically called when this component is rendered.
    componentDidMount() {
        const { values } = this.props;
        if (values.apiCalls === 0) {
            this.fetchRSVP();
            this.props.setApiCalls(1);
        }

    };

    // Fetch RSVP from server side.
    // If RSVP exists, change validResponse from null to true
    // using setResponseStatus
    fetchRSVP = async () => {
        var { values, setRSVP, setResponseStatus } = this.props;
        await axios.get('/api/rsvp/' + this.toProperCase(values.queryName))
        .then((res) => {
            setRSVP(res.data);
            if (!res.data.length)
                setResponseStatus(false);
            else 
                setResponseStatus(true);
        })
        .catch(() => {
            setResponseStatus(false);
        });
    };
    
    // Render component based off response status.
    showComponent = () => {
        const { values } = this.props; 
        if( values.validResponse === false ) {
            return (
                // No RSVP Found, have button to go back to step 1
                <div>
                    <h2 className="RSVPHeader">Sorry...</h2>
                    <p>No RSVP found under the name of "{values.queryName}"</p>
                    <Button 
                        variant="warning"
                        className="btn continue-btn"
                        type="submit"
                        href="/RSVP"
                        block>
                            Return
                    </Button>
                </div>
            );
        } else if ( values.validResponse === true ) {
            // RSVP was found, render names and radio buttons for attendence
            return (
                <div>                    
                    <Form>
                        <h3>Attendence</h3>
                        {/* render list of rsvp names here */}
                        { this.attendanceForm(values.rsvps[0].rsvps) }
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
                    </Form>
                </div>
            )
        }
        // render loading component
        else if (values.validResponse === null) {
            return(
                <div>Searching....</div>
            )
        }
    };

    // used to update attendance in state.
    setAttendance = (value, index) => {
        const { handleAttendanceChange } = this.props;
        handleAttendanceChange(value, index);
    };
    // sets default value for attendance to previous value from mongo
    // or otherwise "Joyfully Accepts" (Default)
    getAttendanceValue(index) {
        const { values } = this.props;
        return (values.rsvps[0].rsvps[index].attendance)
    }

    // Method to render list of names RSVP fetched from fetchRSVP
    attendanceForm = (rsvps) => {
        this.setAttendance.bind(this);
        return (
            rsvps.map( (rsvp, index) =>
            <div key={index} className="attendance-form" onChange={(event) => {this.setAttendance(event.target.value, index)}}>
                <ul className="list-group">
                    <li className="list-group-item RSVPName">{rsvp.name}
                        <span>
                        <ToggleButtonGroup
                            ref="attendance"
                            key={rsvp._id}
                            className="attendenceBtn"
                            type="radio"
                            name="options"
                            defaultValue={this.getAttendanceValue(index)}>
                            <ToggleButton className="btn" value={"Joyfully Accepts"} variant="outline-warning">Joyfully Accepts</ToggleButton>
                            <ToggleButton className="btn" value={"Regretfully Declines"} variant="outline-warning">Regretfully Declines</ToggleButton>
                        </ToggleButtonGroup>
                        </span>
                    </li>
                </ul>
            </div>
            )
        )
    };

    render() {
        return (
            <div className="RSVPForm">
                <small>Step 2 of 5</small>
                {this.showComponent()}
            </div>
        );
    }
}

export default AttendenceForm;
