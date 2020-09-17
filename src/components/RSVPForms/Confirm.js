import React, { Component } from 'react';
import { Button, Form, Table } from 'react-bootstrap';


export class Confirm extends Component {

    // Return to the previous step
    goBack = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    // Continue to the next step
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    // Populate Confirmation Table
    fillConfirmationTable = (rsvps) => {
        return (
            rsvps.map( (rsvp) => 
                <tr key={rsvp._id}>
                    <td colSpan="2">{rsvp.name}</td>
                    <td>{rsvp.attendance}</td>
                    <td>{rsvp.mealChoice}</td>
                </tr>
            )
        )
        
    };

    render() {
        const { values } = this.props;
        return (
            <div className="RSVPForm">
                <small className="confirmationHeader">Step 5 of 5</small>
                <h3 className="confirmationHeader">Confirm RSVP</h3>
                <Form>
                    <div className={"confirmationTable"}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th colSpan="2">Guests</th>
                                <th>Attendance</th>
                                <th>Meal Choice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.fillConfirmationTable(values.rsvps[0].rsvps)}
                            </tbody>
                        </Table>
                    </div>
                    <Button 
                        variant="warning"
                        className="btn continue-btn" 
                        type="submit"
                        onClick={this.continue}
                        block>
                            Send RSVP
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
}

export default Confirm;

