import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Gallery() {
    return (
        <div id="gallery">
            <h1 className="gallery-header">Gallery</h1>
            <div className="outer-carosel-container">
                <Carousel className="gallery-carousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../assets/MALLORY+SHAWN-58.jpg")}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../assets/MALLORY+SHAWN-19.jpg")}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../assets/MALLORY+SHAWN-7.jpg")}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../assets/MALLORY+SHAWN-86.jpg")}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../assets/MALLORY+SHAWN-65.jpg")}
                        alt="Fifth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../assets/MALLORY+SHAWN-45.jpg")}
                        alt="Sixth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require("../assets/MALLORY+SHAWN-69.jpg")}
                        alt="Seventh slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="credit">
                    -     <a href="http://www.jwellsphotography.ca/" className="credit-link"><em>J Wells Photography</em></a>
                </div>
            </div>
        </div>
    )
}
