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
        return (
            <div className="RSVPForm">
                <h1 className="RSVPHeader">Search for your RSVP!</h1>
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
}

export default SearchRSVP;
