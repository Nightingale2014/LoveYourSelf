function Footer() {
    return (
        <footer className="border-t mt-20 py-10 text-center text-gray-400 text-lg bg-white">
            <p className="mb-2 font-semibold tracking-wide">@ 2025 LoveYourSelf Webpage</p>
            <p className="space-x-4 mb-1">
                <span className="hover:text-green-500 cursor-pointer">Home</span> |
                <span className="hover:text-green-500 cursor-pointer">About</span> |
                <span className="hover:text-green-500 cursor-pointer">Login</span>
            </p>
            <p className="hover:text-green-500 cursor-pointer">Contact Us</p>
        </footer>
    );
}

export default Footer;
