import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FloatingNavDemo } from "./components/Navbar";
import Home from "./pages/Home";
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <FloatingNavDemo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
