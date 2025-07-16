// Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css';

// YOUR ORIGINAL CODE - UNCHANGED
const images = [
    { src: './banner-1.jpg', alt: 'banner 1', text: "Preferred partner of the world’s largest automotive OEMs" },
    { src: './banner-2.jpg', alt: 'banner 2', text: "Quality First: Advik Hitech's Commitment to Exceptional Manufacturing and Service" }
];

export const Hero = () => {
    const [current, setCurrent] = useState(0);
    const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
    const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className='hero-container'>
            <img className='hero-img' src={images[current].src} alt={images[current].alt} key={current}/>
            
            <div className='hero-content'>
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${current === index ? 'active' : ''}`}
                            onClick={() => setCurrent(index)}
                        ></div>
                    ))}
                </div>

                <h2>{images[current].text}</h2>

                {/* UPDATED: The button now uses the ::before/::after strategy */ }
                <a href='#' className='explore-button'>
                    <span className="explore-text">EXPLORE</span>
                </a>
            </div>

            {/* YOUR ORIGINAL ARROW BUTTONS - UNCHANGED */}
            <button className='arrow left-arrow' onClick={prevSlide}>
                ←
            </button>
            <button className='arrow right-arrow' onClick={nextSlide}>
                →
            </button>
        </div>
    );
};