import React, { Component } from 'react';

export class Countdown extends Component {
    constructor() {
        super();
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        this.interval = undefined;
    };
    
    componentDidMount = () => {
        this.getCountdownTime();
    }

    componentWillUnmount = () => {
        if(this.interval) { clearInterval(this.interval) }
    }

    getCountdownTime = () => {
        this.interval = setInterval(() => {
            var countDownDate = new Date("June 18, 2021 17:00:00").getTime();
            var now = new Date().getTime()
            var distance = countDownDate - now;

            if (distance > 0) {
                this.setState({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);
    }

    render() {
        const {days, hours, minutes, seconds} = this.state;
        return (
            <div id="countdown">
                <h1 className="details-header-1">Countdown to our special day!</h1>
                <span className="timeleft">{`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds!`}</span>
                <span className="spacer"></span><hr className="style-eight" />
            </div>
        )
    }
}

export default Countdown;