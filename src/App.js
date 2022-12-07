import "./App.scss";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      <Nav />
      <div className="flex flex-col mx-auto max-w-4xl sm:w-full">
        <div className="mx-16 my-12">
          <About />
          <Detail />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
