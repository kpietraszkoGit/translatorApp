import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Translator from './components/Translator/Translator';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="translator-pol-eng" element={<Translator lang1={'polish'} lang2={'english'}/>} />
        <Route path="translator-eng-pol" element={<Translator lang1={'english'} lang2={'polish'}/>} />
        <Route path="translator-pol-fre" element={<Translator lang1={'polish'} lang2={'french'}/>} />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
