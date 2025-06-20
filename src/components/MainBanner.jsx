function MainBanner() {
    return (
        <div className="relative w-full overflow-hidden mb-10"> {/* 하단 여백 추가 */}
            <img
                src="/banner.png"
                alt="Banner"
                className="w-full h-[500px] object-cover"
            />

            <div className="absolute top-[220px] left-[60px] px-5 py-2.5 rounded border border-white bg-white/30 z-20">
                <p
                    className="text-4xl"
                    style={{
                        fontFamily: '"Lora", serif',
                        WebkitTextStroke: '0.3px white',
                        color: 'transparent',
                        WebkitTextFillColor: 'white',
                    }}
                >
                    Do you Love YourSelf ?
                </p>
            </div>
        </div>
    );
}

export default MainBanner;
