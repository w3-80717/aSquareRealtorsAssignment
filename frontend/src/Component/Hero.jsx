import React, { useState } from 'react'
import './Hero.css'

const images = [
  { src: './banner-1.jpg', alt: 'banner 1', text: "Preferred partner of the world’s largest automotive OEMs" },
  { src: './banner-2.jpg', alt: 'banner 2', text: "Quality First: Advik Hitech's Commitment to Exceptional Manufacturing and Service" }
]

export const Hero = () => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  return (
    <div className='hero-container'>
      <img className='hero-img' src={images[current].src} alt={images[current].alt} />
      <div className='hero-content'>
        <h2>{images[current].text}</h2>
        <a href=''>
          <button>EXPLORE</button>
        </a>
      </div>
      <span className='carousel-icon'>
        <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#007bff"/>
          <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">A</text>
        </svg>
      </span>
      <button className='arrow left-arrow' onClick={prevSlide}>
        &#8592;
      </button>
      <button className='arrow right-arrow' onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  )
}
