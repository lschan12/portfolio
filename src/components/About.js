import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="flex flex-col items-start min-h-screen" id="about">
      <h3 className="text-3xl py-2">Hi, my name is</h3>
      <h1 className="text-6xl py-2">Lawrence Chan</h1>
      <h1 className="text-6xl py-2">Full Stack Web Developer</h1>
      <hr style={{ height: "3px", width: "50%", color: "white" }} />
      <p className="w-1/2 py-6">
        I am a full stack web developer based in Vancouver, Canada, and this is
        my interactive CV.
      </p>
      <div className="flex flex-row items-center w-[30%] mb-4">
        <p>Learn more or reach out</p>
        <div className="mt-4 ml-2">
        <FontAwesomeIcon icon={faTurnDown} />
        </div>
      </div>
      <div className="flex flex-row justify-evenly" id="about-buttons">
        <a className="bg-slate-500 rounded-full px-3 py-2" href="#detail">
          About me
        </a>
        <a className="mx-2 bg-lime-400 rounded-full px-3 py-2" href="#contact">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default About;
