import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';

function Details() {
    return (
        <div id="details">
            <h1 className="accommodations-header-1">Details</h1>
            <div className="details-container">
                <div className="row">
                    <div className="col-lg-12">
                        <Card style={{ width: '100%' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <i className="fas fa-user-tie fa-2x"></i><br /><br />
                                    <p>Dress is smart casual</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i className="fas fa-shuttle-van fa-2x"></i><br /><br />
                                    <p>Elderly guests or guests with special needs can be driven in and out by vehicle instead of horse-drawn wagon.</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i className="fas fa-parking fa-2x"></i><br /><br />
                                    <p>Parking is in the main parking lot.</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i className="fas fa-glass-cheers fa-2x"></i><br /><br />
                                    <p>Guests are to bring their own alcohol if they wish. <br/>* No glass containers please. Cans, plastic, or cardboard only.</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i className="fas fa-laptop fa-2x"></i><br /><br />
                                    <p>Please visit <a href="https://www.hatfieldfarm.com">www.hatfieldfarm.com</a> for any details.</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
