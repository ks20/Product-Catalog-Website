import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Render the React app to the root element of the HTML document
ReactDOM.render(
  // Enable strict mode to catch potential issues in the application
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Specify the DOM element with the id 'root' where the app will be rendered
  document.getElementById('root')
);
