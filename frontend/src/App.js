
import './App.css';
import About from './Component/About';
import Careers from './Component/Careers';
import { Hero } from './Component/Hero';
import Navbar from './Component/Navbar';
import Newsroom from './Component/Newsroom';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Hero/>
     <About/>
     <Careers/>
     <Newsroom/>
    </div>
  );
}

export default App;
