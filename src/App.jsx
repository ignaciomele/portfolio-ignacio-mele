import './App.css';
import {Helmet} from "react-helmet";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Loader from './components/loader/Loader';
import { useState, useEffect } from 'react';

function App() {
  const [showLoader, setShowLoader] = useState(false)
  useEffect(() => {
    setShowLoader(true)
    setTimeout(() => {
      setShowLoader(false)
    }, 1000);
  }, [])

  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" property='og:../../static/logoIM5.png'/>
                <title>Ignacio Mele | Web developer</title>
                <link rel="canonical" href="https://ignacio-mele.netlify.app/" />
            </Helmet>
      <header className="App-header">
        {showLoader ? <Loader/> : 
        <div>
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Certifications/>
          <Projects/>
          <Contact/>
          </div>}
        
      </header>
    </div>
  );
}

export default App;
