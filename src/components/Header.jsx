import React from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.svg";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="w-[100%] mx-auto mt-5 mb-5 px-10 py-0"> {/* ✅ py 줄임 */}
            <div className="flex justify-between items-center text-green-700">

                {/* 로고 */}
                <div
                    className="text-2xl font-bold text-green-800 flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <img src={logo} className="h-20" />
                </div>

                {/* 검색창 */}
                <div className="flex justify-center items-center w-full">
                    <div className="relative w-[1000px] border-b-2 border-green-500">
                        <input
                            type="text"
                            placeholder="상품, 브랜드, 성분 검색"
                            className="w-full text-center text-4xl font-medium text-gray-800 placeholder:text-gray-400 py-3 pr-12 outline-none"
                        />
                        <Search
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 w-12 h-12 cursor-pointer"
                            strokeWidth={2}
                            onClick={() => alert("검색 실행!")}
                        />
                    </div>
                </div>

                {/* 메뉴 */}
                <div className="flex gap-10 text-green-700 text-4xl whitespace-nowrap">
                    <button onClick={() => alert("로그인 기능 예정")}>Login/Logout</button>
                    <button onClick={() => navigate("/mypage")}>MyPage/About</button>
                </div>

            </div>
        </header>
    );
}
