import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import PiggyBank from "./components/PiggyBank";

ReactDOM.render( //each of these are instances of the class PiggyBank,
  <div>
    <PiggyBank owner = "Kelsie" depositAmount={5}/>
    <PiggyBank owner = "Kelsie" depositAmount={5}/>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
