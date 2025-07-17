import React from 'react'
import './Newsroom.css'

function Newsroom() {
  return (
    <div className='newsroom-container'>
        <div className='heading'>
        <h1>NEWSROOM</h1>
<button className="explore-button">VIEW ALL</button>        </div>
        <div className='card-container'>
            <div className='sub-card'>
                <img src='/newsroom/newsroom1.jpg' alt='newsroom1'/>
                <h4>ADVIK completes the acquisition of Germany based Powersports MTG GmbH</h4>
                <div className='newsroom-date-time'>
                     <span>07 January, 2025</span>   
                </div>
            </div>
            <div className='sub-card'>
                <img src='/newsroom/newsroom2.jpg' alt='newsroom1'/>
                <h4>Notice of hearing related to demerger</h4>
                <div className='newsroom-date-time'>
                     <span>07 January, 2025</span>   
                </div>
            </div>
            <div className='sub-card'>
                <img src='/newsroom/newsroom3.jpg' alt='newsroom1'/>
                <h4>Auto component manufacturer ADVIK acquires assets of Li-ion battery firm Aceleron Energy</h4>
                <div className='newsroom-date-time'>
                     <span>07 January, 2025</span>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsroom