import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './pages/Hello';
import CreateNote from './pages/create_note';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/hello" element={<Hello/>} />
        <Route path="/create/note" element={<CreateNote/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

reportWebVitals();
