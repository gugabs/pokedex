import React from 'react';
import { render } from 'react-dom';

import App from './App';

import "./assets/styles/reset.css";
import "./assets/styles/main.css";

render(<App />, document.querySelector("#root"));