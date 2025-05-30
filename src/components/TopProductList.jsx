import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ 추가
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
    { id: 1, name: "TonyMoly Green Tea Cream", image: "/products/green.jpg", rating: "4.9", tag: "피부진정 + 보습감" },
    { id: 2, name: "Innisfree Seed Cream", image: "/products/innisfree.jpg", rating: "4.9", tag: "보습감 최고" },
    { id: 3, name: "Torriden MaskPack", image: "/products/torriden.jpg", rating: "4.6", tag: "팩하고 일어난 다음날 깐달걀 피부" },
    { id: 4, name: "Celimax Noni Ampoule", image: "/products/celimax.jpg", rating: "4.8", tag: "피부장벽이 탄탄" },
    { id: 5, name: "Dr.Jart Cicapair Serum", image: "/products/drjart.jpg", rating: "4.8", tag: "트러블 킬러 등장" },
    { id: 6, name: "LANEIGE Sleeping Pack", image: "/products/laneige.jpg", rating: "4.7", tag: "어드를 킬링" },
];

export default function TopProductSlider() {
    const navigate = useNavigate(); // ✅ 추가

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        arrows: false,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 4 } },
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 640, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div className="w-full px-10 py-12 bg-[#fffef7]">
            <h2 className="text-center text-7xl font-medium font-merriweather mb-10">
                TOP PRODUCT FOR TODAY
            </h2>
            <Slider {...settings}>
                {products.map((p, index) => (
                    <div
                        key={p.id}
                        className="px-4 cursor-pointer"
                        onClick={() => navigate(`/product/${p.id}`)} // ✅ 이동 연결
                    >
                        <div className="bg-yellow-50 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="rounded-t-xl w-full h-[600px] object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-3xl font-bold text-green-800">{`<TOP ${index + 1}>`}</h3>
                                <h2 className="mt-2 font-bold text-3xl text-green-950">{p.name}</h2>
                                <p className="text-2xl text-gray-600 mt-1">
                                    {p.rating} | {p.tag}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
