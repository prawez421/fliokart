import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";


function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

return (
  <div className="relative bg-white rounded-xl border border-gray-200 px-2 hover:shadow-xl transition-all duration-300 group">

    {/* Wishlist */}
    <button
      onClick={() => setLiked(!liked)}
      className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow cursor-pointer transition ${
        liked
          ? "text-red-500"
          : "text-gray-400 hover:text-red-500"
      }`}
    >
      <Heart
        size={20}
        fill={liked ? "currentColor" : "none"}
      />
    </button>

    {/* Product Image */}
    <div className="flex justify-center items-center overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Rating */}
    <div className="mb-3 flex items-center gap-2">
      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 font-medium">
        {product.rating}
        <Star size={12} fill="white" strokeWidth={0} />
      </span>

    </div>

    {/* Product Title */}
    <h3 className=" text-sm font-medium text-gray-800 line-clamp-2 leading-5 h-10">
      {product.title}
    </h3>

    {/* Price */}
    <div className="mt-1 flex items-center gap-2 flex-wrap ">
      <span className="text-xl font-bold text-gray-900">
        ₹{product.price.toLocaleString("en-IN")}
      </span>

      <span className="text-gray-400 line-through text-sm">
        ₹{product.oldPrice.toLocaleString("en-IN")}
      </span>

      <span className="text-green-600 text-sm font-semibold">
        {product.discount}% Off
      </span>
    </div>

    {/* Delivery */}
    <p className="mt-2 text-sm text-green-600 font-medium">
      ✓ Free Delivery
    </p>

    {/* Add to Cart */}
    <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
      <ShoppingCart size={18} />
      Add to Cart
    </button>

  </div>
);
}

export default ProductCard;