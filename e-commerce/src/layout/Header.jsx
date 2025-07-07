import {
  Facebook,
  Heart,
  Instagram,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
  User,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="hidden md:block w-full">
        <div className="bg-[#252B42] py-3 px-12 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Phone className="stroke-white w-4 h-4" />
              <p className="text-white text-xs">(225) 555-0118</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="stroke-white w-3 h-3" />
              <p className="text-white text-xs">michelle.rivera@example.com</p>
            </div>
          </div>

          <p className="text-white text-xs">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="flex items-center gap-2">
            <p className="text-white text-xs">Follow Us:</p>
            <nav className="flex justify-between items-center gap-2">
              <a>
                <Instagram className="stroke-white w-4 h-4" />
              </a>
              <a>
                <Youtube className="stroke-white w-4 h-4" />
              </a>
              <a>
                <Facebook className="stroke-white w-4 h-4" />
              </a>
              <a>
                <Twitter className="stroke-white w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="relative px-12 flex items-center justify-between py-4">
        <h1 className="text-2xl text-[#252B42] font-medium tracking-wider mr-16">
          Bandage
        </h1>

        <div className="hidden md:flex items-center justify-between w-full">
          <nav className="flex gap-4 text-sm font-medium text-[#737373]">
            <a>Home</a>
            <a>Shop</a>
            <a>About</a>
            <a>Blog</a>
            <a>Contact</a>
            <a>Pages</a>
          </nav>

          <div className="flex gap-8">
            <div className="flex items-center">
              <User className="stroke-[#23A6F0] w-4 h-4" />
              <p className="text-[#23A6F0] text-sm font-medium">
                Login / Register
              </p>
            </div>
            <Search className="stroke-[#23A6F0] w-4 h-4" />
            <ShoppingCart className="stroke-[#23A6F0] w-4 h-4" />
            <Heart className="stroke-[#23A6F0] w-4 h-4" />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-6">
          <User className="w-6 h-6" />
          <Search className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden z-50 relative"
          >
            {menuOpen ? <X /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-white flex flex-col items-center space-y-8 pb-20 text-2xl font-light tracking-wider text-[#737373]">
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
