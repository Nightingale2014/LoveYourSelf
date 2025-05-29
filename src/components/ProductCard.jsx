import { Link } from 'react-router-dom';

function ProductCard({ p }) {
    return (
        <Link to={`/products/${p.id}`}>
            <div className="rounded-lg overflow-hidden shadow-md cursor-pointer">
                <img src={p.image} alt={p.name} className="w-full h-60 object-cover" />
                <div className="bg-[#fdf7e6] p-3 text-center">
                    <p className="text-lg font-bold text-green-700">{`<TOP ${p.id}>`}</p>
                    <h2 className="mt-2 font-bold text-lg text-gray-800">{p.name}</h2>
                    <p className="text-sm text-gray-600 mt-1">{p.tag}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
