import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Certifications/>
          <Projects/>
          <Contact/>
          </div>
      </header>
    </div>
  );
}

export default App;
