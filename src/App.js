import React, { Component } from 'react'
import Header from './Header/Header.js';
import Title from './Title/Title.js';
import Body from './Body/Body.js';
import Footer from './Footer/Footer.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <Body />
        <Footer />
      </div>
    )
  }
}




