import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dm from './DOM';
import Ot from './Outer';
import Fun from './Functioncomp';
import Cls from './Class';
import Prp from './Props';
import Lifecyl from './Lifecycle';
import Ustate from './Usestate';
import Ueffect from './UseEffect';
import Ucontext from './Usecontext';
import Uref from './Useref';
import Rout from './Route';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rout/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
