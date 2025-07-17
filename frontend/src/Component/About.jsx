import React from 'react'
import './About.css'
function About() {
    return (
        <div className='Main'>
            <div className='about-container'>
                <div className='sub-container'>
                    <h1>ABOUT US</h1>
                    <p align="left">ADVIK Hi-Tech Private Limited (ADVIK) is India’s leading manufacturer of precision components and systems for automotive and industrial markets worldwide.

                        Founded in 2000, our unwavering commitment to delivering innovative, tailored solutions to complex industry challenges has made us a preferred partner to the world’s top vehicle manufacturers.</p>
                    <a href='#' className='explore-button'>
                        <span className="explore-text">EXPLORE</span>
                    </a>
                </div>
                <div className='grids'>
                    <div className='sub-grid'>
                        <h1>120 +</h1>
                        <p>Million USD Annual Turnover</p>
                        <hr />
                    </div>
                    <div className='sub-grid'>
                        <h1>120 +</h1>
                        <p>Million USD Annual Turnover</p>
                        <hr />
                    </div>
                    <div className='sub-grid'>
                        <h1>120 +</h1>
                        <p align="left">Million USD Annual Turnover</p>
                        <hr />
                    </div>
                    <div className='sub-grid'>
                        <h1>120 +</h1>
                        <p>Million USD Annual Turnover</p>
                        <hr />
                    </div>
                </div>
            </div>
              {/* Flex container for arrow, features, and right image */}
            <div className="features-row">
                <img src='arrow.png' alt='red arrow' className="side-img left-img"/>
                <div className='main-features'>
                    <h1>FEATURES & USP</h1>
                    <div className='features'>
                        <div className='feature'>
                            <img src='shoter_time_icon.svg' alt='time' />
                            <p>Shorter development leadtime</p>
                        </div>
                        <div className='feature'>
                            <img src='/features/Agile-flexible-process.svg' alt='Agile' />
                            <p>Agile & flexible process</p>
                        </div>
                        <div className='feature'>
                            <img src='/features/usp-customer.svg' alt='customer' />
                            <p>Customer centric mind-set</p>
                        </div>
                        <div className='feature'>
                            <img src='/features/Appetite.svg' alt='' />
                            <p>Appetite to execute customer demands for changing volume</p>
                        </div>
                        <div className='feature'>
                            <img src='/features/Achieving.svg' alt='' />
                            <p>Achieving cost efficiency by balancing capital & labour</p>
                        </div>
                        <div className='feature'>
                            <img src='/features/Operate.svg' alt='' />
                            <p>Operate at economies of scale to meet customer challenges in quality and cost</p>
                        </div>
                    </div>
                </div>
                <img src='home_usp_img.svg' alt='machine' className="side-img right-img"/>
            </div>
        </div>

    )
}

export default About