import {
  ChevronDown,
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
        <h1 className="text-xl text-[#252B42] font-semibold mr-16">Bandage</h1>

        <div className="hidden md:flex items-center justify-between w-full">
          <nav className="flex gap-4 text-sm font-medium text-[#737373] relative group">
            <a href="#">Home</a>
            <div className="relative group">
              <a
                href="#"
                className="flex items-center gap-1 cursor-pointer group-hover:text-[#23A6F0]"
              >
                Shop <ChevronDown className="w-3 h-3" />{" "}
              </a>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-6 hidden group-hover:grid grid-cols-2 gap-12 z-40 min-w-[300px]">
                <div className="flex flex-col gap-2 text-[#737373] text-sm">
                  <h3 className="text-black font-semibold pb-6">Kadın</h3>
                  <a href="#">Bags</a>
                  <a href="#">Belts</a>
                  <a href="#">Cosmetics</a>
                  <a href="#">Bags</a>
                  <a href="#">Hats</a>
                </div>
                <div className="flex flex-col gap-2 text-[#737373] text-sm">
                  <h3 className="text-black font-semibold pb-6">Erkek</h3>
                  <a href="#">Bags</a>
                  <a href="#">Belts</a>
                  <a href="#">Cosmetics</a>
                  <a href="#">Bags</a>
                  <a href="#">Hats</a>
                </div>
              </div>
            </div>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Pages</a>
          </nav>

          <div className="flex gap-8">
            <div className="flex items-center">
              <User className="stroke-[#23A6F0] w-4 h-4" />
              <a href="#" className="text-[#23A6F0] text-sm font-medium">
                Login
              </a>
              <span className="text-[#23A6F0] text-sm font-medium">/</span>
              <a href="#" className="text-[#23A6F0] text-sm font-medium">
                Register
              </a>
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
