import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  MapPin,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 cursor-pointer">
            Flipkart
          </h1>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
              <Search size={20} className="text-gray-500" />

              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="bg-transparent outline-none w-full px-3"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 md:gap-8">

            {/* Location */}
            <div className="hidden lg:flex items-center gap-2 cursor-pointer">
              <MapPin size={18} />
              <span className="text-sm">Select Location</span>
            </div>

            {/* Login */}
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              <User size={20} />
              <span className="hidden md:block">Login</span>
              <ChevronDown size={16} className="hidden md:block" />
            </div>

            {/* More */}
            <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-blue-600">
              <span>More</span>
              <ChevronDown size={18} />
            </div>

            {/* Cart */}
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              <ShoppingCart size={22} />
              <span className="hidden md:block">Cart</span>
            </div>

          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <Search size={20} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full px-3 text-sm"
            />
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;