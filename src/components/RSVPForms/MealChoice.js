import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export class MealChoice extends Component {

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

    // handle each meal choice for state
    setMealChoice = (value, index) => {
        const { handleMealOptionChange } = this.props;
        handleMealOptionChange(value, index);
    };

    // Form for each guests meal preference.
    mealChoiceForm = (rsvps) => {
        this.setMealChoice.bind(this);
        return (
            // map over each rsvp name and create a list group for each
            rsvps.map( (rsvp, index) =>
            <div key={index} className="attendance-form" onChange={(event) => {this.setMealChoice(event.target.value, index)}}>
                <ul className="list-group">
                    <li key={rsvp._id} className="list-group-item RSVPName">{rsvp.name}
                        <span>
                        <Form.Group className="attendenceBtn" >
                            <Form.Control 
                            as="select" 
                            ref="mealChoice"
                            size="sm"
                            disabled={rsvp.attendance === "Regretfully Declines" ? true : false}
                            defaultValue={!rsvp.mealChoice ? "N/A" : rsvp.mealChoice}>
                                <option value="N/A">...</option>
                                <option value="Roasted Quarter Chicken">Roasted Quarter Chicken</option>
                                <option value="Roast Hip of Beef">Roast Hip of Beef</option>
                                <option value="Baked Atlantic Salmon">Baked Atlantic Salmon</option>
                                <option value="Vegetarian Lasagna">Vegetarian Lasagna</option>
                            </Form.Control>
                        </Form.Group>
                        </span>
                    </li>
                </ul>
            </div>
            )
        )
    };

    render() {
        const { values } = this.props;
        return (
            <div className="RSVPForm">
                <small>Step 3 of 5</small>
                <h3>Meal Choice Form</h3>
                {this.mealChoiceForm(values.rsvps[0].rsvps)}
                <Button 
                    variant="warning"
                    className="btn continue-btn" 
                    type="submit"
                    onClick={this.continue}
                    // disabled={}
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

export default MealChoice;
