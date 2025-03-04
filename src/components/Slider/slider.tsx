// components/ImageSlider.tsx
import { useState, useEffect } from 'react';

const slides = [
    {
        image: '/slider/drone.svg',
        title: 'Product 1',
        description: 'Description of Product 1',
        price: '$19.99',
    },
    {
        image: '/slider/drone.svg',
        title: 'Product 2',
        description: 'Description of Product 2',
        price: '$29.99',
    },
    {
        image: '/slider/drone.svg',
        title: 'Product 3',
        description: 'Description of Product 3',
        price: '$39.99',
    },
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];

    return (
        <div className="slider" style={{ backgroundImage: `url(${currentSlide.image})` }}>
            <div className="content">
                <h2>{currentSlide.title}</h2>
                <p>{currentSlide.description}</p>
                <span className="price">{currentSlide.price}</span>
            </div>
            <style jsx>{`
        .slider {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .content {
          color: white;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.5); /* Напівпрозорий фон для тексту */
          padding: 20px;
          border-radius: 10px;
        }
        h2 {
          font-size: 2rem;
        }
        p {
          font-size: 1.2rem;
          margin: 10px 0;
        }
        .price {
          font-size: 1.5rem;
          font-weight: bold;
        }
      `}</style>
        </div>
    );
};

export default ImageSlider;
