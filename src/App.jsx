// App.jsx
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import TopProductList from "./components/TopProductList.jsx"; // ✅ 이 경로가 맞음
import PropertiesSection from "./components/PropertiesSection"; // 얘도 pages가 아니라 components에 있어
import Footer from "./components/Footer";
import './index.css'; // 또는 App.css

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-800">
            {/* 🔺 상단 헤더 */}
            <Header />

            {/* 🎯 메인 배너 - 가장 먼저 보이는 시각 요소 */}
            <section className="relative w-full overflow-hidden">
                <MainBanner />
            </section>

            {/* 🛍️ 주요 콘텐츠 */}
            <main className="flex-grow container mx-auto px-4 py-8 space-y-12">
                {/* 🔥 추천 상품 리스트 */}
                <section id="top-products">
                    <h2 className="text-2xl font-bold mb-4">Top Products</h2>
                    <TopProductList />
                </section>

                {/* 💄 상세 섹션 (예: 제품 설명 등) */}
                <section id="properties-section">
                    <PropertiesSection />
                </section>
            </main>

            {/* ⛳ 푸터 */}
            <Footer />
        </div>
    );
}

export default App;
