import React from 'react';
import Slider from 'react-slick';

interface CarouselProps {
  images: string[];
}

const CarrouselParks: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,               // Mostra os dots de navegação
    infinite: true,           // Loop infinito das imagens
    speed: 500,               // Velocidade de transição
    slidesToShow: 1,          // Quantidade de slides a serem exibidos por vez
    slidesToScroll: 1,        // Quantidade de slides a mover por vez
    autoplay: true,           // Faz o carrossel passar as imagens automaticamente
    autoplaySpeed: 3000,      // Tempo em milissegundos para cada slide
    arrows: true,             // Exibe setas de navegação
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}> {/* Card com largura fixa */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarrouselParks;
