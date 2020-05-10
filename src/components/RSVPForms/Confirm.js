import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export class Confirm extends Component {

    goBack = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        // const { values } = this.props;
        return (
            <div className="RSVPForm">
                <small>Step 4 of 4</small>
                <h3>Confirmation Form</h3>
                <Form>
                    {/* <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        First Name:
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={values.firstName} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Last Name:
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={values.lastName} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email:
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={values.email} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Occupation:
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={values.occupation} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        City:
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={values.city} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Bio:
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={values.bio} />
                        </Col>
                    </Form.Group> */}
                    <Button 
                        variant="warning"
                        className="btn" 
                        type="submit"
                        onClick={this.continue}
                        block>
                            Send
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

