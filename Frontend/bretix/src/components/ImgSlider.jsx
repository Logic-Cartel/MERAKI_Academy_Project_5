import React from "react";
import { Fade } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import "./ImgSlider.css";

function ImgSlider() {
  const navigate = useNavigate();

  const slider = [
    {
      id: 1,
      URL: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
      title: "Shop Eco. Live Better 🌱",
      desc: "Discover eco-friendly stores offering organic food, sustainable products, and modern lifestyle essentials.",
      button: "Explore Stores",
      path: "/stores",
    },
    {
      id: 2,
      URL: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
      title: "Fresh From Nature 🍎",
      desc: "Organic fruits and vegetables delivered fresh from trusted local farms.",
      button: "Visit Green Market",
      path: "/stores/33",
    },
    {
      id: 3,
      URL: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg",
      title: "Modern Life, Smarter Choices ✨",
      desc: "Tech, fashion, and lifestyle products from trusted modern stores.",
      button: "Shop Now",
      path: "/products",
    },
  ];

  const properties = {
    duration: 4000,
    transitionDuration: 600,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="full-width-slider">
      <Fade {...properties}>
        {slider.map((slide) => (
          <div key={slide.id} className="each-fade">
            <div
              className="image-container"
              style={{ backgroundImage: `url(${slide.URL})` }}
            >
              <div className="slider-overlay">
                <div className="slider-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <button
                    className="slider-btn"
                    onClick={() => navigate(slide.path)}
                  >
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default ImgSlider;
