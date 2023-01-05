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
      <div className="flex flex-col mx-auto px-3 sm:w-full sm:max-w-[100%]">
      <Nav />
        <div className="mx-4 my-2 sm:mx-36 sm:my-16">
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
