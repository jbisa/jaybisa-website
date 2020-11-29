import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
