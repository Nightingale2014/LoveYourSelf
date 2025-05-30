import { useNavigate } from "react-router-dom";

export default function PropertiesSection() {
    const navigate = useNavigate();

    const menus = [
        { label: "Emotional Test", path: "/test" },
        { label: "Beauty Routine", path: "/routine" },
        { label: "Your match", path: "/match" },
        { label: "Shop", path: "/shop" },
        { label: "Review", path: "/review" },
    ];

    return (
        <div className="w-full text-center py-10 bg-white">
            <h2 className="text-4xl font-serif font-bold mb-6 tracking-widest">
                PROPERTIES
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {menus.map((menu, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(menu.path)}
                        className="bg-lime-100 hover:bg-lime-200 transition px-6 py-3 text-md font-semibold rounded-sm"
                    >
                        {menu.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
