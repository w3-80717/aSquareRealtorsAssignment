import React from 'react'
import './MDMessage.css'

function MDMessage() {
    return (
        <div className='message-container'>
            <div className='left-side'>
                <img className="cotes" src='cotes.png' alt='cotes'/>
                <h1>MD's MESSAGE</h1>
                <p>Since our inception in 2000, we have worked with a single-minded focus to deliver world-class automotive components to our Indian and global customers. Our commitment to innovation and ability to design tailormade solutions have positioned us as the preferred supplier to leading OEMs across the world.</p>
                <p>
                    Over the last few years, we have focused on amplifying our capabilities and growing our alliances to become a significant player in the global automotive supply chain network.</p>
                <h2>MR. ADITYA BHARTIA</h2>
                <p>Managing Director</p>
                <a href='#' className='explore-buttonl'>
                    <span className="explore-text">EXPLORE</span>
                </a>
            </div>

            <div className='right-side'>
                <img src='MDimage.png' alt='career' />
            </div>
        </div>
    )
}

export default MDMessage

