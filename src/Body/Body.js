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
                        For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
                    </p>
                    <p>
                        Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in teh egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.
                    </p>
                    <p>
                        Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.
                    </p>
                </main>
                <section>
                    <img src= 'list-bg.png' alt = 'list-background' className = 'list-bg'/>
                </section>
            </div>
        )
    }
}



