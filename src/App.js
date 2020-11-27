import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
