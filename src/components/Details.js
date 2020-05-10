import React from 'react'

export default function Details() {
    return (
        <div id="details">
            {/* <!-- Details Section --> */}
                <div className="details-container">
                    <h1 className="details-header-1">The Wedding Details</h1>
                    <p className="details-p">Please join Mallory and Shawn on <strong>Friday, September 11th, 2020</strong> as we celebrate our wedding.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="details-header-2">Timeline</h1>
                        <div className="container">
                            <ul className="timeline">
                                <li>
                                <div className="timeline-badge"><i className="fas fa-car"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">5:00 PM - Arrival Time for Guests</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="details-p">Hatfield Farm</p>
                                        <p className="details-p">1840 Hammonds Plains Rd, <br />Hammonds Plains, NS B4B 1P4</p>
                                        <br/><p>Arrival will take place at Hatfield Farm's Barnyard where there will be free parking and a wagon or shuttle ride departing for Fort Clayton.</p>
                                    </div>
                                </div>
                                </li>
                                <li className="timeline-inverted">
                                <div className="timeline-badge warning"><i className="fas fa-book-open"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">5:45 PM - Beginning of Ceremony</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Located just a short wagon ride away is Fort Clayton. Fort Clayton is where the ceremony, dinner, and reception will all take place.</p>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="timeline-badge danger"><i className="fas fa-utensils"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">7:00 PM - Dinner</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Dinner will be served.</p>
                                    </div>
                                </div>
                                </li>
                                <li className="timeline-inverted">
                                <div className="timeline-badge success"><i className="fas fa-music"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4 className="timeline-title">8:30 PM - Reception</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Music and Dancing.</p>
                                    </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className="col-lg-6 details-container">
                    <div className="names">
                    <h1 className="details-header-2">The Wedding Party</h1>
                    <p className="details-p">Mallory Berkvens - Bride</p>
                    <p className="details-p">Carissa Chapman - Maid of Honor</p>
                    <p className="details-p">Kaitlan Kelly - Bridesmaid</p>
                    <p className="details-p">Jenny Bowie - Bridesmaid</p>
                    <p className="details-p">Shawn Teasdale - Groom</p>
                    <p className="details-p">Brendan Teasdale - Best Man</p>
                    <p className="details-p">John Weir - Groomsman</p>
                    <p className="details-p">Steven Gillis - Groomsman</p>
                    <p className="details-p">Tyler VanOirschot - Groomsman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}