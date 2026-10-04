import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Focus from "./pages/Focus";
import Manufacturing from "./pages/Manufacturing";
import Energy from "./pages/Energy";
import Property from "./pages/Property";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/focus/manufacturing" element={<Manufacturing />} />
            <Route path="/focus/energy" element={<Energy />} />
            <Route path="/focus/property" element={<Property />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}