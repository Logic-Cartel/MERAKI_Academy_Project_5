import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Shared componenets/Home";
import Navbar from "./components/Shared componenets/Navbar";
import Login from "./components/Shared componenets/Login";
import Register from "./components/Shared componenets/Register";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ImgSlider from "./components/ImgSlider";
function App() {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.toLowerCase().includes("/products")) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location.pathname]);
  return (
    <div>
      <h1>Bretix</h1>
      {showNav && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <ImgSlider /> <br /> <Home />
            </>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
