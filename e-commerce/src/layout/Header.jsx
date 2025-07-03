import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center px-8 py-8 border-b shadow-sm md:px-10">
      <div className="text-2xl font-medium tracking-wider">Bandage</div>

      <div className="flex items-center gap-6">
        <User className="w-6 h-6" />
        <Search className="w-6 h-6" />
        <ShoppingCart className="w-6 h-6" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=""
          block
          md:hidden
        >
          {menuOpen ? <X /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center mt-8 space-y-8 text-2xl font-light tracking-wider text-[#737373]">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
