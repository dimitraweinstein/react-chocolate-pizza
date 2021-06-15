import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <section>
                    <img src = 'logo.png' alt = 'big-logo' className = 'big-logo' />
                    <h2>Delicious</h2>
                    <h5>The Best Food Blog On The Web</h5>
                </section>
                <section>
                    <img src = 'fb-icon.png' alt = 'fb-icon' className = 'icon' />
                    <img src = 'twit-icon.png' alt = 'twit-icon' className = 'icon' />
                    <img src = 'gp-icon.png' alt = 'gp-icon' className = 'icon' />
                    <img src = 'insta-icon.png' alt = 'ig-icon' className = 'icon' />
                    <img src = 'flic-icon.png' alt = 'flic-icon' className = 'icon' />
                    <img src = 'pint-icon.png' alt = 'pint-icon' className = 'icon' />
                    <img src = 'rss-icon.png' alt = 'rss-icon' className = 'icon' />
                    <img src = 'mail-icon.png' alt = 'mail-icon' className = 'icon' />
                </section>
                <section>
                    <img height='10' src='hr-img.png' alt='hr-icon' className='hr-icon' />
                </section>
            </div>
        )
    }
}
