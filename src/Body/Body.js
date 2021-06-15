import React, { Component } from 'react'


export default class Body extends Component {
    render() {
        return (
            <div>
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
                <section>
                    <img className='author-pic' src='van-pic.png' alt='author'/>
                    <h4>Vanessa Stevenson</h4>
                    <p>
                        Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                    </p>
                    <button>Share Recipe</button>
                </section>
                <>
                    <img src='hr-img.png' alt='hr-icon' className='hr-icon' />
                </>
            </div>
        )
    }
}



