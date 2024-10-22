import React from "react";
import Slider from "react-slick";
import "./styles.css";

const CarrouselParks: React.FC = () => {
  const carouselImages = [
    "https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/legoland-park.jpg?w=750&ssl=1",
    "https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/disney-na-europa.jpg?w=750&ssl=1",
    "https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/parques-de-diversao-na-europa.jpg?w=750&ssl=1",
    "https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/diversao-na-europa.jpg?w=750&ssl=1",
  ];

  const gridImages = [
    "https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/legoland-park.jpg?w=300&ssl=1",
    "https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/disney-na-europa.jpg?w=300&ssl=1",
    "https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/parques-de-diversao-na-europa.jpg?w=300&ssl=1",
    "https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/06/diversao-na-europa.jpg?w=300&ssl=1",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      <div className="container-package">
        <div className="package-title">Parques Temáticos</div>
        <div className="container" style={{ flexGrow: 1 }}>
          <div className="grid-container">
            {gridImages.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`Grid image ${index}`}
                  className="grid-image"
                />
              </div>
            ))}
          </div>

          <div className="carousel-container">
            <Slider {...settings}>
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <p className="package-subtitle">Ver mais parques...</p>
      </div>
    </>
  );
};

export default CarrouselParks;
