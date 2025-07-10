import "./App.css";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
