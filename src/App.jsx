import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Infrastructure from "./pages/Infrastructure";
import Opportunities from "./pages/Opportunities";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;