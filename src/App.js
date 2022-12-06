import './App.scss';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex flex-col bg-slate-900 text-white">
      <Nav />
      <About />
      <Detail />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
