import React from 'react';
import ReactDOM from 'react-dom';
//these two lines above allow us to actually use react
//can use react for server side stuff as well as front end but we will focus on front end

window.addEventListener('load', function () {
  //the three things we are passing it are
  //element you create, properties, and child elements
  const header = React.createElement('h1', null, 'Hello World!');
  //select from your HTML
  const appDiv = document.querySelector('#app');

  //in every react component there is a render method.
  //this is the building blocks you need.

  ReactDOM.render(
    header, //the thing you are rendering
    appDiv // the container you want to put it in
  );

});
