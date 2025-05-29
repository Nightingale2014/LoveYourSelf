import ProductCard from '../components/ProductCard';
import productData from '../data/productData';

function Home() {
    return (
        <div className="grid grid-cols-3 gap-6 p-10">
            {productData.map((p) => (
                <ProductCard key={p.id} p={p} />
            ))}
        </div>
    );
}

export default Home;
