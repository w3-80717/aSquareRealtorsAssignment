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
                        <h3>GERMANY</h3>
                        <h4>ADVIK GERMANY GMBH</h4>
                        <h5>EUROPE OFFICE</h5>
                        <p>Example Strasse 12, 12345 Berlin, Germany</p>
                        <p>contact@advik-germany.de</p>
                    </div>
                    <div className='footers'>
                        <h3>USA</h3>
                        <h4>ADVIK USA INC.</h4>
                        <h5>AMERICA OFFICE</h5>
                        <p>1234 Main Street, Suite 100, Detroit, MI 48201, USA</p>
                        <p>usa@advik.com</p>
                    </div>
                    <div className='footers'>
                        <h3>USA</h3>
                        <h4>ADVIK USA INC.</h4>
                        <h5>AMERICA OFFICE</h5>
                        <p>1234 Main Street, Suite 100, Detroit, MI 48201, USA</p>
                        <p>usa@advik.com</p>
                    </div>
                    <div className='footers'>
                        <h3>USA</h3>
                        <h4>ADVIK USA INC.</h4>
                        <h5>AMERICA OFFICE</h5>
                        <p>1234 Main Street, Suite 100, Detroit, MI 48201, USA</p>
                        <p>usa@advik.com</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer