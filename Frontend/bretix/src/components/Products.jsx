import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductsGrid.css";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/all")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="container-main">
      <div className="header-section">
        <p className="sub-title">Eco Essentials Planet-Friendly</p>
        <h2 className="main-title">
          Bestselling <span>✨ Products</span>
        </h2>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <Link
            to={`/product/${item.id}`}
            className="product-item"
            key={item.id}
          >
            <div className="product-card">
              <div className="image-wrapper">
                <span className="product-badge">{item.badge || "New"}</span>
                <img
                  src={item.imgsrc}
                  alt={item.title}
                  className="product-img"
                />
              </div>

              <div className="product-info">
                <div className="color-options">
                  <span className="dot dot-1"></span>
                  <span className="dot dot-2"></span>
                  <span className="dot dot-3"></span>
                </div>

                <h3 className="product-name">{item.title}</h3>

                <div className="product-footer">
                  <span className="price">${item.price}</span>
                  <button className="add-to-cart-btn">
                    <span className="plus-icon">+</span> Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
