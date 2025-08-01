import "./App.css";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
