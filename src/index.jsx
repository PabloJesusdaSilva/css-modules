import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import StyleGlobal from "./index.module.css"

ReactDOM.render(
  <React.StrictMode>
    <App className={StyleGlobal} />
  </React.StrictMode>,
  document.getElementById("root")
);
