import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">LoveYourSelf</div>

            <div className="search-container">
                <input
                    type="text"
                    className="search"
                    placeholder="상품, 브랜드, 성분 검색"
                />
                <div className="search-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3baa32"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
            </div>
        </header>
    );
}

export default Header;
