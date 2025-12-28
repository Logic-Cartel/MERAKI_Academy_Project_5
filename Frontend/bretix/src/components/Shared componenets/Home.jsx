import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./ProductssGrid.css"; // تأكد من استيراد نفس ملف التنسيق

const Home = () => {
  const navigate = useNavigate();
  const [top10Products, setTop10Products] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/top10")
      .then((res) => {
        // تأكد من أن res.data.result هو المصفوفة المطلوبة
        setTop10Products(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-main">
      {/* قسم العنوان العلوي */}
      <div className="header-section">
        <p className="sub-title">Premium Selection</p>
        <h2 className="main-title">
          Top 10 <span>✨ Bestsellers</span>
        </h2>
      </div>

      {/* شبكة المنتجات بنفس التصميم المطلوب */}
      <div className="products-grid">
        {top10Products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="product-item"
            key={product.id}
          >
            <div className="product-card">
              <div className="image-wrapper">
                {/* وسم "Best Seller" بدلاً من New كونه توب 10 */}
                <span className="product-badge">Top Rated</span>
                <img
                  src={product.imgsrc}
                  alt={product.title}
                  className="product-img"
                />
              </div>

              <div className="product-info">
                {/* نقاط الألوان الاختيارية */}
                <div className="color-options">
                  <span className="dot dot-1"></span>
                  <span className="dot dot-2"></span>
                  <span className="dot dot-3"></span>
                </div>

                <h3 className="product-name">{product.title}</h3>

                <div className="product-footer">
                  <span className="price">${product.price}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={(e) => {
                      e.preventDefault(); // يمنع الانتقال لصفحة المنتج عند الضغط على السلة
                      console.log("Added to cart:", product.id);
                    }}
                  >
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
};

export default Home;
