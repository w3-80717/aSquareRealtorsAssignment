
import './App.css';
import About from './Component/About';
import Careers from './Component/Careers';
import Footer from './Component/Footer';
import GroupPresence from './Component/GroupPresence';
import { Hero } from './Component/Hero';
import MDMessage from './Component/MDMessage';
import Navbar from './Component/Navbar';
import Newsroom from './Component/Newsroom';
import Sustainability from './Component/Sustainability';
import TechnologyCarousel from './Component/TechnologyCarousel';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Hero/>
     <About/>
     <Careers/>
     <Newsroom/>
     <MDMessage/>
     <GroupPresence/>
     <Sustainability/>
     <TechnologyCarousel/>
     <Footer/>
    </div>
  );
}

export default App;
