import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
// import { Routes } from 'react-router-dom';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
    <Navbar />
    
    <Intro />
    <Services />
    <Experience />
    <Works />
    {/* <Portfolio /> */}
    </>
  );
}

export default App;
