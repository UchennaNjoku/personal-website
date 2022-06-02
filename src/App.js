import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
