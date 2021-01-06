import React from 'react';
import { Carousel } from 'react-bootstrap';
const firstImage = require("../assets/MALLORY+SHAWN-58.jpg");
const secondImage = require("../assets/MALLORY+SHAWN-19.jpg");
const thirdImage = require("../assets/MALLORY+SHAWN-7.jpg");
const fourthImage = require("../assets/MALLORY+SHAWN-86.jpg");
const fifthImage = require("../assets/MALLORY+SHAWN-65.jpg");
const sixthImage = require("../assets/MALLORY+SHAWN-45.jpg");
const seventhImage = require("../assets/MALLORY+SHAWN-69.jpg");

export default function Gallery() {
    return (
        <div id="gallery">
            <h1 className="gallery-header">Gallery</h1>
            <div className="outer-carosel-container">
                <Carousel className="gallery-carousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={firstImage}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={secondImage}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={thirdImage}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={fourthImage}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={fifthImage}
                        alt="Fifth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={sixthImage}
                        alt="Sixth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={seventhImage}
                        alt="Seventh slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="credit">
                    -     <a href="http://www.jwellsphotography.ca/" className="credit-link"><em>J Wells Photography</em></a>
                </div>
            </div>
            <hr className="style-eight" />
        </div>
    )
}
