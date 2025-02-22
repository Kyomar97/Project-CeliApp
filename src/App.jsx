import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Suggestions from "./pages/Suggestions";
import NotFound from "./pages/NotFound";
import RestaurantPage from "./pages/RestaurantPage";
import ProductPage from "./pages/ProductPage";
import TipsPage from "./pages/TipsPage";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/productos" element={<ProductPage />} />
            <Route path="/restaurantes" element={<RestaurantPage />} />
            <Route path="/consejos" element={<TipsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
