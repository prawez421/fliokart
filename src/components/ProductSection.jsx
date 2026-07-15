import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <h2 className="text-2xl font-bold mb-6">
        Suggested For You
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
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