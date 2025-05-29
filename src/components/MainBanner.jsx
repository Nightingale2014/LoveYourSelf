function MainBanner() {
    return (
        <div className="relative w-full overflow-hidden">
            <img
                src="/banner.png"
                alt="Banner"
                className="w-full h-[1000px] object-cover"
            />

            <div
                className="absolute top-[420px] left-[300px] px-5 py-2.5 rounded border border-white bg-white/40 z-20"
            >
                <p
                    className="text-7xl"
                    style={{
                        fontFamily: '"Lora", serif',
                        WebkitTextStroke: '1px white',
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
