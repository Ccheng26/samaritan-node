import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import { browserHistory, Router } from 'react-router';
import routes from './routes';


ReactDOM.render(

  <App />,
  document.getElementById('root')
);

{/*
  <Router history={ browserHistory } routes={routes}>
    <App />
  </Router>,
  */}
