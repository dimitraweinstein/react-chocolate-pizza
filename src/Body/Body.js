import React, { Component } from 'react'


export default class Body extends Component {
    render() {
        return (
            <div>
                <title>
                    <h1>Chocolate Pizza</h1>
                    <h6>Posted On 15 Dec 2013 / Desserts</h6>
                    <img src= 'print-icon.png' alt = 'print-icon' className = 'print-icon' />
                </title>
                <main>
                    <img src= 'choco-pizza.png' alt = 'main-pic' className = 'main-pic' />
                    <p>
                        For the fig-swirl: Melt butter over medium heat in a saucepan. Add a 
                    </p>
                </main>
                <section>
                    <img src= 'list-bg.png' alt = 'list-background' className = 'list-bg'/>
                </section>
            </div>
        )
    }
}



