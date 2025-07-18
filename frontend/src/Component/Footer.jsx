import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-row'>
                <div className='footer-sub'>
                    <h1>QUICK LINKS</h1>
                    <a href='https://www.example.com/company' target='_blank' rel="noopener noreferrer">
                        Company
                        <span className="footer-arrow">
                            ▶
                        </span>
                    </a>
                    <a>
                        Technology
                        <span className="footer-arrow">
                            ▶
                        </span>
                    </a>
                    <a>
                        After Market
                        <span className="footer-arrow">
                            ▶
                        </span>
                    </a>
                    <a>
                        Career
                        <span className="footer-arrow">
                            ▶
                        </span>
                    </a>
                    <a>
                        Newsroom
                        <span className="footer-arrow">
                            ▶
                        </span>
                    </a>
                    <a>
                        Contact
                        <span className="footer-arrow">
                            ▶
                        </span>
                    </a>
                </div>
                <div className='footer-addresses'>
                    <div className='footers'>
                        <h3>INDIA</h3>
                        <h4>ADVIK HI- TECH PVT. LTD.</h4>
                        <h5>CORPORATE OFFICE</h5>
                        <p>Survey no. 35, B - Zone, 6th & 7th Floor, Mumbai - Bangalore, Highway, Baner, Pune, Maharashtra - 411045</p>
                        <p>info@advik.co.in</p>
                    </div>
                    <div className='footers'>
                        <h3>INDIA</h3>
                        <h4>ADVIK HI- TECH PVT. LTD.</h4>
                        <h5>REGISTERED OFFICE</h5>
                        <p>Gat No.357/99, Chakan-Talegaon Road Kharabwadi, Tal-Khed, Chakan Pune- 410501, India.</p>
                        <p>info@advik.co.in</p>
                    </div>
                    <div className='footers'>
                        <h3>PT ADVIK INDONESIA</h3>
                        
                        <p>Jalan Sungkai, Block F26 No.19M Delta Silicon 3, Lippo Cikarang Bekasi - 17530 Indonesia.</p>
                        
                    </div>
                    <div className='footers'>
                        <h3>ADVIK TECHNOLOGIES LTD</h3>
                        
                        <p>61 Water Street, Birmingham, B3 1HN,  UK</p>
                        
                    </div>
                    <div className='footers'>
                        <h3>POWERSPORTS MTG GMBH</h3>
                        
                        <p>Ruebteile 1 <br/>
                         72574 Bad Urach<br/>
                          Germany</p>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer