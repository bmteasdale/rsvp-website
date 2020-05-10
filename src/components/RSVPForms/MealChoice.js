import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export class MealChoice extends Component {

    goBack = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <div className="RSVPForm">
                <small>Step 3 of 4</small>
                <h3>Meal Choice Form</h3>
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
            </div>
        )
    }
}

export default MealChoice
