import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data.product);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!product) return <p className="loading">Product not found</p>;

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-image">
          <span className="product-badge">New</span>
          <img src={product.imgsrc} alt={product.title} />
        </div>

        <div className="details-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-desc">{product.description}</p>

          <div className="rating">⭐ {product.rate}</div>

          <div className="details-footer">
            <span className="price">${product.price}</span>
            <button className="add-to-cart-btn">
              <span className="plus-icon">+</span> Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
