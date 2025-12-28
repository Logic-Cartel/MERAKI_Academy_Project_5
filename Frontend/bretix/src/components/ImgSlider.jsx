import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function ImgSlider() {
  const slider = [
    { id: 1, URL: `https://img.freepik.com/premium-vector/headphone-brand-product-facebook-banner-promotion-devices-post-template_812236-12001.jpg?w=740`, caption: "headphone-brand" },
    { id: 2, URL: `https://img.freepik.com/free-psd/social-media-post-banner-black-friday-3d-render-template-design-marketing-campaign_220664-3599.jpg?w=740`, caption: "social-media" },
    { id: 3, URL: `https://img.freepik.com/premium-vector/sale-web-facebook-banner-template_544391-351.jpg?w=740`, caption: "premium-vector" },
    { id: 4, URL: `https://img.freepik.com/free-vector/realistic-podium-horizontal-banner_52683-145720.jpg?w=740`, caption: "realistic-podium" },
  ];


  const properties = {
    duration: 3000,     
    transitionDuration: 500,
    infinite: true,       
    indicators: true,     
    arrows: true,         
    pauseOnHover: true, 
  };

  return (
    <div className="slide-container">
      <Fade {...properties}>
        {slider.map((product) => (
          <div key={product.id} className="each-fade">
            <img
              src={product.URL}
              alt={product.caption}
              style={{ 
                width: "100%",   
                height: "500px", 
                objectFit: "cover" 
              }}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default ImgSlider;