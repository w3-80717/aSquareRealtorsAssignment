import React from 'react'
import './Hero.css'
export const Hero = () => {
  return (

    <div className='hero-container'>
        <img  className='hero-img' src='./banner-1.jpg' alt='banner'/>
        <div className='hero-content'>
        <h2>Preferred partner of the world’s largest automotive OEMs</h2>
        <a href=''>
            <button>EXPLORE</button>
        </a>
        </div> 
    </div>

  )
}
