import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBanner from "./components/MainBanner";
import TopProductSlider from "./components/TopProductSlider";
import PropertiesSection from "./components/PropertiesSection";
import TopProductList from "./components/TopProductList";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <MainBanner />
                <PropertiesSection />
                <Routes>
                    <Route path="/" element={<TopProductList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
