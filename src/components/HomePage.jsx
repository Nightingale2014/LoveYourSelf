import React from "react";
import Header from "../components/Header";

export default function HomePage() {
    return (
        <div className="relative">
            {/* 고정 헤더 */}
            <Header />

            {/* 🔥 배너 이미지 + 문구 바로 삽입 */}
            <div className="relative w-full h-[400px] overflow-hidden">
                <img
                    src="/banner.jpg"
                    alt="메인 배너"
                    className="w-full h-full object-cover"
                />

            </div>

            {/* 아래 콘텐츠 */}
            <div className="p-8">
                <h2 className="text-2xl font-semibold">여기부터 본문 콘텐츠 시작</h2>
                <p>원하는 내용 추가~</p>
            </div>
        </div>
    );
}
