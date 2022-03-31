// Bootstrap 5.1.3
import "bootstrap/dist/css/bootstrap.min.css";
// antD
import "antd/dist/antd.css";

// Slick Slider Default Style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fontawesome Icon
import "font-awesome/css/font-awesome.min.css";

// Main Style App
import "./sass/main.scss";

import { HashRouter, Route, Routes } from "react-router-dom";
import MainNavbar from "./layout/nabvar/Navbar";
import Footer from "./layout/footer/Footer";
import StaticContentHolder from "./layout/StaticContentHolder";
import Home from "./page/Home";
import About from "./page/About";
import BoardOfDirectors from "./page/BoardOfDirectors";
import Services from "./page/Services";
import Contact from "./page/Contact";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <StaticContentHolder>
          <MainNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/boardOfDirectors" element={<BoardOfDirectors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </StaticContentHolder>
      </HashRouter>
    </>
  );
}

export default App;
