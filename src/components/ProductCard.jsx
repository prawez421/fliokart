import { Heart, ShoppingCart, Star } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 px-2 group">

      {/* Wishlist */}
      <button className="float-right text-gray-400 hover:text-red-500">
        <Heart size={20} />
      </button>

      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-contain group-hover:scale-105 transition"
        />
      </div>

      {/* Product Title */}
      <h3 className="text-sm font-medium mt-4 line-clamp-2">
        {product.title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          {product.rating}
          <Star size={12} fill="white" />
        </span>

        <span className="text-gray-500 text-xs">
          ({product.reviews})
        </span>
      </div>

      {/* Price */}
      <div className="mt-3">
        <span className="text-xl font-bold">
          ₹{product.price}
        </span>

        <span className="text-gray-400 line-through ml-2">
          ₹{product.oldPrice}
        </span>

        <span className="text-green-600 ml-2 text-sm font-semibold">
          {product.discount}% Off
        </span>
      </div>

      {/* Delivery */}
      <p className="text-green-600 text-sm mt-2">
        Free Delivery
      </p>

      {/* Button */}
      <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg flex items-center justify-center gap-2 font-medium">
        <ShoppingCart size={18} />
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;