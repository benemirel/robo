import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Card from "./Card";
import {robots} from './robots.js';
import Cardlist from './Cardlist';

ReactDOM.render(
<Cardlist robots={robots}/>
  , document.getElementById('root')
);


reportWebVitals();
