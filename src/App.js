import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/landing/footer/Footer.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbarss from './components/landing/header/Navbar.js';
import Banner from './components/landing/main-banner/Banner.js';
import Quantum from './components/landing/quantum/Quantum.js';
import Quantumtools from './components/landing/quantumtools/Quantumtools.js';
import Securitytools from './components/landing/securitytools/Securitytools.js';
import Mobilesecurity from './components/landing/mobilesecurity/Mobilesecurity.js';
import Getstarted from './components/landing/getstarted/Getstarted.js';
import Quantumprotocol from './components/landing/quantumprotocol/Quantumprotocol.js';
import Marqee from './components/landing/marqelanding/Marqee.js';


function App() {
  return (
    <>
      <Navbarss/>
      <Banner />
      <Marqee/>
      <Quantumprotocol/>
      <Quantum />
      <Quantumtools />
      <Securitytools />
      <Mobilesecurity/>
      <Getstarted/>
      <Footer/>
    </>
  );
}

export default App;
