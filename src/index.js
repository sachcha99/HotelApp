import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from "./components/Preloader/Preloader";
import ScrollToTop from './components/Common/ScrollToTop';
<meta
name="viewport"
content="width=device-width, initial-scale=1, shrink-to-fit=no"
/>

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Preloader/>
    <ScrollToTop/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
