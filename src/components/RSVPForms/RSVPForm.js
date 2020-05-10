import React, { Component } from 'react';
import NavBar from '../NavBar';
import SearchRSVP from './SearchRSVP';
import AttendenceForm from './AttendenceForm';
import MealChoice from './MealChoice';
import Confirm from './Confirm';
import Success from './Success';

export class RSVPForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            queryName: '',
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
    
    setRSVP = res => {
        this.setState({rsvps: res});
    };

    showStep = () => {
        const { step } = this.state;
        const { queryName, rsvps } = this.state;
        const values = { queryName, rsvps };
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
                            values={values}
                        />
                </React.Fragment>
            );
        }
        else if (step === 4) {
            return (
                <React.Fragment>
                    <NavBar />
                        <Confirm
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            values={values}
                        />
                </React.Fragment>
            );
        }
        else if (step === 5) {
            return (
                <React.Fragment>
                    <NavBar />
                        <Success/>
                </React.Fragment>
            );
        }
    };

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