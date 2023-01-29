import "./App.scss";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white">
      <CustomCursor />
      <div className="flex flex-col mx-auto px-3 lg:w-full 2xl:max-w-[75%]">
        <Nav />
        <div className="mx-4 my-2 lg:mx-48 lg:my-16">
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
