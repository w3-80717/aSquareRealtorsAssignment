import React from 'react'
import  Sus from'./Sustainability.jpg'

function Sustainability() {
  return (
     <div className='career-container'>
        <div className='left'>
            <h1>
                SUSTAINABILITY
            </h1>
            <p>We are committed to pursuing purpose-oriented and quality-driven operations to build a more sustainable, and inclusive future while unlocking new and better growth opportunities. Our continued investment on research & development and setting new benchmarks in operational excellence have enabled us to ensure efficient and resource-saving use of raw materials through improved process design.</p>
            <a href='#' className='explore-buttons'>
                    <span className="explore-text">EXPLORE</span>
                </a>
        </div>
        
        <div className='right'>
            <img src={Sus} alt='career'/>
        </div>
        </div>
  )
}

export default Sustainability