import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// ? IMPORT COMPONENTS
import Navigationbar from './components/Navigationbar';
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// ? IMPORT CSS
import '../src/styles/Navbar.css'
import '../src/styles/Banner.css'
import '../src/styles/Skills.css'
import '../src/styles/Projects.css'
import '../src/styles/Contact.css'
import '../src/styles/Footer.css'

// ? IMPORT ANIMATE CSS
import 'animate.css';
  // ? IMPORT TRACKVISIBILITY in component TO TRACK WHEN USER IS ON SCREEN FOR ANIMATIONS
// import TrackVisibility from 'react-on-screen';

// ? IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      
      <Router>
          < Navigationbar />
          < Banner />
          < Skills />
          < Projects />
          < Contact />
          < Footer />
          <Routes>
            
            {/* <Route path="/hola" element= { < BasicExample/> } /> */}
          </Routes>
      </Router>

    </div>
  );
}

export default App;
