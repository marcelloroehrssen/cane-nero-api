
// any CSS you import will output into a single css file (app.css in this case)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/app.css';
import App from './components/App';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
