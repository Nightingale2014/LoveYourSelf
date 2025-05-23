import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ 요거 꼭 필요
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
