import React from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.svg";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="w-full mt-2 mb-2 px-6 py-3 border-2 border-green-500 rounded-md shadow-sm">
            <div className="flex items-center justify-between text-green-600">

                {/* 로고 */}
                <div
                    className="text-2xl font-bold text-green-800 flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <img src={logo} className="h-8" /> {/* h-20 → h-16 살짝 줄임 */}
                </div>

                {/* 검색창 */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-[1000px] border-b border-green-600">
                        <input
                            type="text"
                            placeholder="상품, 브랜드, 성분 검색"
                            className="w-full text-center text-2xl font-medium text-gray-800 placeholder:text-gray-400 py-2 pr-12 outline-none"
                        />
                        <Search
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 w-6 h-6 cursor-pointer"
                            strokeWidth={2}
                            onClick={() => alert("검색 실행!")}
                        />
                    </div>
                </div>

                {/* 메뉴 */}
                <nav className="flex items-center space-x-6 text-bg">
                    <a href="/login" className="hover:text-green-600 transition">Login/Logout</a>
                    <a href="/mypage">MyPage/About</a>
                </nav>
            </div>
        </header>
    );
}
