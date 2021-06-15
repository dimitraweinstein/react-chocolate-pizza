import React, { Component } from 'react'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <section>
                    <img src='hr-img.png' alt='hr-icon' className='hr-icon' />
                </section>
                <img src = 'small-logo.png' alt = 'small-logo' className = 'small-logo' />
                <hr></hr>
                <h6>Delicious © 2013 | All Rights Reserved.</h6>
                <h6>Proudly published by Dubs Media.</h6>

            </div>
        )
    }
}
