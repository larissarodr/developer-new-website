import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ReactGA from 'react-ga';

const trackingId = "UA-158227253-1";
ReactGA.initialize(trackingId);

ReactDOM.render(<App />,  document.getElementById('root'));