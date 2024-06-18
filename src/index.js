import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { FormProvider } from './context/FormContext';
import Login from './components/Login';
import MultiStepForm from './components/MultiStepForm';

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/ROF-App" element={<Login />} />
          <Route path="/form" element={<MultiStepForm />} />
        </Routes>
      </Router>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
