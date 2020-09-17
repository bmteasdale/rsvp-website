import React, { Component } from 'react';
import NavBar from '../NavBar';
import SearchRSVP from './SearchRSVP';
import AttendenceForm from './AttendenceForm';
import MealChoice from './MealChoice';
import Accommodations from './Accommodations';
import Confirm from './Confirm';
import Success from './Success';

export class RSVPForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            queryName: '',
            validResponse: null,
            apiCalls: 0,
            // Step 1
            rsvps: []
        };
    }

    // Go to next step in the form
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step : step + 1
        });
    };

    // Go back a step in the form
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step : step - 1
        });
    };

    // set the response flag.
    setResponseStatus = (res) => {
        this.setState({validResponse: res});
    };
    
    // After successful call to mongodb, apiCalls in state is set to 1.
    // This is to avoid the site from making another GET call to mongo
    // in the case that the user goes back a few steps.
    setApiCalls = (res) => {
        this.setState({apiCalls: res});
    };
    
    // update attendance values in state.
    handleAttendanceChange = (value, index) => {
        const { rsvps } = this.state;
        rsvps[0].rsvps[index].attendance = value;
        this.setState({rsvps: rsvps})
    };

    // update attendance value in state.
    handleMealOptionChange = (value, index) => {
        const { rsvps } = this.state;
        rsvps[0].rsvps[index].mealChoice = value;
        this.setState({rsvps: rsvps})
    };

    // Add RSVP's to the state.
    setRSVP = (res, status) => {
        this.setState({rsvps: res, validResponse: status});
    };

    // Render components depending on step value.
    showStep = () => {
        const { step } = this.state;
        const { queryName, rsvps, validResponse, attendances, apiCalls } = this.state;
        const values = { queryName, rsvps, validResponse, attendances, apiCalls };
        if(step === 1) {
            return (
            <React.Fragment>
                <NavBar />
                <SearchRSVP
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            </React.Fragment>
            );
        }
        else if (step === 2) {
            return (
                <React.Fragment>
                    <NavBar />
                    <AttendenceForm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        setRSVP={this.setRSVP}
                        setResponseStatus={this.setResponseStatus}
                        setApiCalls={this.setApiCalls}
                        handleAttendanceChange={this.handleAttendanceChange}
                        values={values}
                    />
                </React.Fragment>
            );
        }
        else if (step === 3) {
            return (
                <React.Fragment>
                    <NavBar />
                        <MealChoice
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleMealOptionChange={this.handleMealOptionChange}
                            values={values}
                        />
                </React.Fragment>
            );
        }
        else if (step === 4) {
            return (
                <React.Fragment>
                    <NavBar />
                        <Accommodations
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                        />
                </React.Fragment>
            );
        }
        else if (step === 5) {
            return (
                <React.Fragment>
                    <NavBar />
                        <Confirm
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            setRSVP={this.setRSVP}
                            values={values}
                        />
                </React.Fragment>
            );
        }
        else if (step === 6) {
            return (
                <React.Fragment>
                    <NavBar />
                        <Success
                            values={values}
                        />
                </React.Fragment>
            );
        }
    };

    // Handle changes to input fields
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };
    
    render() {
        return (
            <React.Fragment>
                {this.showStep()}
            </React.Fragment>
        );
        
    }
}

export default RSVPForm;