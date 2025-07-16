
import './App.css';
import About from './Component/About';
import { Hero } from './Component/Hero';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Hero/>
     <About/>
    </div>
  );
}

export default App;
