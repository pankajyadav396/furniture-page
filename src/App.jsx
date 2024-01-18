import { Route, Routes } from 'react-router-dom'
import './App.css'
import Herosec from './components/Herosec'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Backtotop from './components/Backtotop'
import Preloader from './components/Preloader'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000,
        disable: 'mobile',
      }
    );
  })
  
  const [loder, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      setloader(false);
      document.body.classList.remove("overflow-hidden")
    },2500);
  }, []);
  return (
    <>
      {loder ? (<Preloader />) :
        (<div>
          <Herosec />
          <Backtotop />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Shop" element={<Shop />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Cart" element={<Cart />}/>
          </Routes>
          <Footer />
        </div>)}
    </>
  )
}

export default App
