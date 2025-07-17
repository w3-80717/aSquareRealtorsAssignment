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
        <div className='features'>
            <h1>FEATURES & USP</h1>
            <div className='feature'>
                <img src='' alt=''/>
                <p></p>
            </div>
            <div className='feature'>
                <img src='' alt=''/>
                <p></p>
            </div>
            <div className='feature'>
                <img src='' alt=''/>
                <p></p>
            </div>
            <div className='feature'>
                <img src='' alt=''/>
                <p></p>
            </div>
            <div className='feature'>
                <img src='' alt=''/>
                <p></p>
            </div>
            <div className='feature'>
                <img src='' alt=''/>
                <p></p>
            </div>

        </div>
        </div>

    )
}

export default About