import Slider from 'react-slick';
import image1 from '../../assets/banner1.png';
import image2 from '../../assets/banner2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

const TravelCarousel = () => {
    const banners = [
        {
            id: 1,
            image: image1,
            alt: 'Viagem 1',
        },
        {
            id: 2,
            image: image2,
            alt: 'Viagem 2',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="travel-carousel mx-auto my-2 max-w-screen-xl">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id}>
                        <img
                            src={banner.image}
                            alt={banner.alt}
                          
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TravelCarousel;
