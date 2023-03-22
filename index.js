import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Routes,Route} from 'react-router-dom';
import './index.css';
import Upload_doc from "./Upload-doc/upload_doc.js";
import reportWebVitals from './reportWebVitals';
import Digital_sign from './digital_sign/digital_sign';
import Dashboard from './dashboard/dashboard';
import Login from './Login/login.js';
import App from './App.js';
import Forgot_pass from './forgot_pass/forgot_pass.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Routes>
    <Route path="\" element={<Upload_doc/>}/>
    <Route path="\Login" element={<Login/>}/>
    <Route path="\Sign" element={<Digital_sign/>}/>
    <Route path="\pass" element={<Forgot_pass/>}/>
    <Route path="\dash" element={<Dashboard/>}/>
    </Routes> */}
    <Upload_doc/>
    {/* <App/> */}
  </React.StrictMode>
);
reportWebVitals();
  