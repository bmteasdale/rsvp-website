import React, { Component } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FaFileSignature } from 'react-icons/fa';
export class SearchRSVP extends Component {

    // Continue on to the next step
    continue = e => {
        e.preventDefault(); 
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        var today = new Date();
        var allowRSVP = true ? today <= new Date("May 8, 2021") : false;
        if (allowRSVP) {
            return (
                <div className="RSVPForm">
                    <h1 className="RSVPHeader">Kindly Respsond by May 1<sup>st</sup>, 2021</h1>
                    <Form onSubmit={this.saveAndContinue}>
                        <Form.Group>
                            <InputGroup>
                            <Form.Label>Full Name</Form.Label>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><FaFileSignature/></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control 
                                    type="text"
                                    ref='queryName'
                                    defaultValue={values.queryName}
                                    onChange={handleChange('queryName')}
                                    placeholder="Enter Full Name" />
                            </InputGroup>
                        </Form.Group>
                        <Button
                            variant="warning" 
                            className="btn" 
                            type="submit"
                            onClick={this.continue}
                            disabled={!values.queryName}
                            block>
                                Continue
                        </Button>
                    </Form>
                </div>
            )
        }
        else {
            return (
                <div className="RSVPForm">
                    <h1 className="RSVPHeader">Unfortunately...</h1>
                    <p>RSVP submissions are now closed. <br />If there is a problem, please feel free to contact the happy couple!</p>
                    <Button
                            variant="warning" 
                            className="btn" 
                            type="submit"
                            href={'/index.html'}
                            block>
                                Return to Main Page
                        </Button>
                </div>
            )
        }
    }
}

export default SearchRSVP;
