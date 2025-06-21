import React from "react";
import Header from "../components/Header";
import TopProductSlider from "../components/TopProductSlider";
import Properties from "../components/Properties";
import HomePage from "./components/HomePage";

export default function HomePage() {
    return (
        <div className="relative">
            {/* 고정 헤더 */}
            <Header />

            {/* 배너 */}
            <div className="relative w-full h-[400px] overflow-hidden">
                <img
                    src="/banner.jpg"
                    alt="메인 배너"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 🔥 슬라이더 먼저 */}
            <div className="px-8 py-12">
                <TopProductSlider />
            </div>
            <div className="px-8 py-12">
                <Properties />
            </div>
        </div>
    );
}
