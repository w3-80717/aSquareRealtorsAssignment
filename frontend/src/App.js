
import './App.css';
import About from './Component/About';
import Careers from './Component/Careers';
import { Hero } from './Component/Hero';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Hero/>
     <About/>
     <Careers/>
    </div>
  );
}

export default App;
