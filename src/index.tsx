import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import Hello from './components/Hello';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="container mx-auto pt-2 px-2">
      <Hello />
      <img
        width="300px"
        alt="ロボ"
        src="https://pub-2bd59cbf6aa945ccb5be264034c2e267.r2.dev/F2DMDBkaEAAkU3I.jpeg" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
