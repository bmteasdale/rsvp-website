import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
export default function Details() {
    return (
        <div id="details">
            {/* <!-- Details Section --> */}
                <div className="details-container">
                    <h1 className="details-header-1">The Schedule of Events</h1>
                    <p className="details-p">Please join Mallory and Shawn on <strong className="wedding-date">Friday, June 18th, 2021</strong> as we celebrate our wedding.</p>
                    <div className="row">
                        <div className="col-lg-12">
                            <Card style={{ width: '100%' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <i className="fas fa-car fa-2x"></i><br />
                                        5:00PM - Arrival Time<br /><br />
                                        <p>Hatfield Farms <br />
                                        1840 Hammonds Plains Rd,<br />
                                        Hammonds Plains, NS <br />
                                        B4B 1P4</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <i className="fas fa-book-open fa-2x"></i><br />
                                        5:45PM - Beginning of Ceremony<br /><br />
                                        <p>Located just a short wagon ride away is Fort Clayton. <br />Fort Clayton is where the ceremony, dinner, and reception will all take place.
                                        </p>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <i className="fas fa-utensils fa-2x"></i><br />
                                        7:00PM - Supper<br /><br />
                                        <p>We ask that you select your meal from one of the choices on submission of your RSVP</p>
                                        <i className="fas fa-seedling"></i> - Vegetarian option available
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <i className="fas fa-music fa-2x"></i><br />
                                        8:30PM - Reception<br /><br />
                                        <p>Dance will begin.</p>
                                        <p>Rubber rodeo, mini golf, and bonfire pits will be open for all guests.</p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    </div>
                </div>
                <hr className="style-eight" />
        </div>
    )
}