import "./App.scss";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Social from "./components/Social";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      <div className="flex flex-col mx-auto px-3 lg:w-full 2xl:max-w-[75%]">
        <Nav />
        <div className="mx-4 my-2 sm:mx-48 sm:my-16">
          <About />
          <Detail />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
      <Social />
    </div>
  );
}

export default App;
