import React from 'react'; //removed Component
//is the same as:
//const React = require('react');
//removed logo line
// import './App.css'; //just the css file


//classes are a ES 6 thing...
//just making a prototype called app and adding methods
//like render
class App extends React.Component { //added React.
  render() {
    return ( //this is a thing called JSX JavaScript Extended, javascript that looks like HTML
      //instead of class, we have class Name so not to clash with class
      <div className="App">
        <h1> Hello World!
        </h1>
      </div>
    );
  }
}

export default App; //if you want to import at the other end 
//module.exports = App; if you want to require
