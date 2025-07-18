import React, { useState } from 'react';
import './TechnologyCarousel.css';

const navItems = [
  'BRAKES',
  'PUMPS',
  'VALVES AND ACTUATORS',
  'ALTERNATE FUEL SYSTEMS',
  'CAPABILITIES'
];

const carouselData = {
  BRAKES: {
    description: 'Advik is a global leader in 2W brake segment. With the acquisition of Powersports, Advik’s brakes have become synonymous to safety, reliability and performance.',
    images: [
      {
        title: 'Premium bikes',
        url: 'https://www.advik.co.in/wp-content/uploads/2025/05/premium-bikes-1.jpg',
        link: 'https://www.advik.co.in/technology-term/premium-bikes/'
      },
      {
        title: 'Two Wheelers',
        url: 'https://www.advik.co.in/wp-content/uploads/2025/05/brakes-thumb.jpg',
        link: 'https://www.advik.co.in/technology-term/two-wheelers/'
      }
    ],
    bigImage: ''
  },
  PUMPS: {
    description: 'World leader in ICE and EV pumps for cooling and lubrication. In ADVIK we build pumps tailor made to match your expectations. Our pumps ensure vehicles meet the rigorous emission norms and offer superior performance.',
    images: [
      {
        title: 'Oil Pump',
        url: 'https://www.advik.co.in/wp-content/uploads/2023/10/Oil-Pump.jpg',
        link: 'https://www.advik.co.in/technology-term/oil-pump/'
      },
      {
        title: 'Water Pump',
        url: 'https://www.advik.co.in/wp-content/uploads/2023/10/Vaccum-Pump.jpg',
        link: 'https://www.advik.co.in/technology-term/water-pump/'
      },
      {
        title: 'Vacuum Pump',
        url: 'https://www.advik.co.in/wp-content/uploads/2023/10/Water-Pump.jpg',
        link: 'https://www.advik.co.in/technology-term/vacuum-pump/'
      }
    ],
    bigImage: 'https://www.advik.co.in/wp-content/uploads/2023/10/Pump.png'
  },
  'VALVES AND ACTUATORS': {
    description: 'We provide Valves and Actuators for a variety of sustainable mobility applications. Our Valves and Actuators are used in multiple applications likes HVAC system, emission control and e-mobility solutions to drive the future of sustainable mobility.',
    images: [],
    bigImage: 'https://www.advik.co.in/wp-content/uploads/2023/10/Emmision-Control2.png'
  },
  'ALTERNATE FUEL SYSTEMS': {
    description: 'Global emission norms are largely moving to control CO2 emission. The shift to BS6 in 2020 and CAFE norm implementation in 2023 prompted Indian OEMs to provide sustainable green vehicles to its customers. As a global citizen, Advik offers a complete range of innovative emission-certified components and solutions for alternative fuel systems for passenger cars, commercial vehicles, and large-engine OE customers worldwide.',
    images: [],
    bigImage: 'https://www.advik.co.in/wp-content/uploads/2023/10/Alternate-fuel.png'
  },
  CAPABILITIES: {
    description: 'With 10 state of the art manufacturing facilities consisting of in-house machining, testing and assembling ADVIK is able to meet global customer standards - fit form and function',
    images: [],
    bigImage: 'https://www.advik.co.in/wp-content/uploads/2023/10/Capabilities.png'
  }
};

const TechnologyCarousel = () => {
  const [activeTab, setActiveTab] = useState('BRAKES');

  const data = carouselData[activeTab];

  return (
    <div className="tech-container">
      <div className="nav-bar">
        {navItems.map((item) => (
          <div
            key={item}
            className={`nav-item ${item === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="carousel-content">
        <div className="content-left">
          <h3 className="tech-heading">TECHNOLOGY</h3>
          <div className="details-box">
            <h5 className="tech-title">{activeTab}</h5>
            <p>{data.description}</p>
            {data.images.length > 0 && (
              <ul className="image-list">
                {data.images.map((img, i) => (
                  <li key={i}>
                    <div className="image-box">
                      <a href={img.link}><img src={img.url} alt={img.title} /></a>
                      <a href={img.link}><span>{img.title}</span></a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <a href='#' className='explore-button'>
              <span className="explore-text">EXPLORE</span>
            </a>          </div>
        </div>
        <div className="content-right">
          {data.bigImage && <img src={data.bigImage} alt={activeTab} className="big-image" />}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCarousel;
