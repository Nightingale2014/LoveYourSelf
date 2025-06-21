import React from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.svg";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="w-full mt-3 mb-3 bg-white ">
            {/* ✅ 안쪽 div 추가 - 테두리와 내부 정렬용 */}
            <div className="max-w-[1830px] mx-auto px-5 py-2 border-2 border-green-500 rounded-2xl">
                <div className="flex items-center justify-between text-green-600">

                    {/* 로고 */}
                    <div
                        className="text-2xl font-bold text-green-800 flex items-center gap-2 cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        <img src={logo} className="h-8" alt="logo" />

                    </div>

                    {/* 검색창 */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative max-w-[600px] w-full border-b border-green-600">
                            <input
                                type="text"
                                placeholder="상품, 브랜드, 성분 검색"
                                className="w-full text-center text-lg text-gray-800 placeholder:text-gray-400 py-2 pr-10 outline-none"
                            />
                            <Search
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5 cursor-pointer"
                                strokeWidth={2}
                                onClick={() => alert("검색 실행!")}
                            />
                        </div>
                    </div>

                    {/* 메뉴 */}
                    <nav className="flex items-center space-x-6 text-sm font-medium text-green-600">
                        <a href="/login" className="hover:underline">Login/Logout</a>
                        <a href="/mypage" className="hover:underline">MyPage/About</a>
                    </nav>
                </div>
            </div> {/* 🔁 요 div 닫는 거 빠뜨렸던 거야! */}
        </header>
    );
}
