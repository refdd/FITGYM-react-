import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plane from './components/Plane/Plane';
import { Programs } from './components/Programs/Programs';
import Roasons from './components/Roasons/Roasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
    <Hero/>
    <Programs/>
    <Roasons/>
    <Plane/>
    <Testimonials/> 
    <Join/>
    <Footer/>
    </div>
  );
}

export default App;
