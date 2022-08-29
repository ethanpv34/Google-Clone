import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateContextProvider } from './context/StateContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
