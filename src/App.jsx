import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import TopProductList from "./components/TopProductList";
import ProductDetail from './pages/ProductDetail';
import MainBanner from "./components/MainBanner";

function App() {
    return (
        <div>
            <Header />
            <MainBanner /> {/* ← 여기 추가 */}
            <Routes>
                <Route path="/" element={<TopProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    );
}


export default App;
// touched