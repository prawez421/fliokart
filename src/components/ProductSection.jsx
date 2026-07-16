import ProductCard from "./ProductCard";
import products from "../pages/forYou/components/products";
import { MoveRight } from 'lucide-react';


function ProductSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
       <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold mb-6">
        Suggested For You
      </h2>
      <p className="bg-blue-500 rounded-2xl cursor-pointer text-white px-3">
        <MoveRight size={28} />
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default ProductSection;