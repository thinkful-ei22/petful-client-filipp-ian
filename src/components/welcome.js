import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h1 className="title">Filipp and Ian's Adoption Center</h1>
        <p className="App-intro">
          We operate on a first-in-first-out basis! We only have dogs and cats up
          for adoption right now!  Here we show you the current dog and cat that are
          waiting to find a home.  If you would like to adopt, simply click the button
          and the animal is yours! Our site will then display the next animal that is 
          waiting for a home.
        </p>
      </div>
    );
  }
}

export default Welcome;
