import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Singlestore1.css";

const Store = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/stores/${id}`)
      .then((res) => {
        const storeData = res.data.result[0];
        setStore(storeData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!store) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading Store Details...</p>
      </div>
    );
  }

  return (
    <div className="single-store-page">
      <div className="store-hero-section">
        <div className="store-content-wrapper">
          <div className="store-image-box">
            <img src={store.logo} alt={store.title} />
          </div>

          <div className="store-details-box">
            <span className="badge">Official Store</span>
            <h2>{store.title}</h2>
            <p className="store-desc">{store.description}</p>

            <div className="action-buttons">
              <button className="wishlist-btn">♥ Favorite</button>
            </div>
          </div>
        </div>
      </div>

      <div className="products-area">
        <h3 style={{ color: "#1b4332", marginBottom: "20px" }}>
          Available Products
        </h3>
        <div className="products-grid">
          <p style={{ color: "#999" }}>
            Products list will be displayed here...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Store;
