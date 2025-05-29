// src/pages/ProductDetail.jsx
import { useParams } from 'react-router-dom';
import productData from '../data/productData';

function ProductDetail() {
    const { id } = useParams();
    const product = productData.find((p) => p.id === parseInt(id));

    if (!product) return <div>해당 제품을 찾을 수 없습니다.</div>;

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-96 my-5" />
            <p className="text-gray-700">{product.tag}</p>
            <p className="text-sm text-gray-500 mt-2">별점: {product.rating}</p>
        </div>
    );
}

export default ProductDetail;
