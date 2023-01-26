import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { Transition } from "@headlessui/react";
import Social from "./Social";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <main className="flex flex-row">
      <Transition show={inView} appear={true}>
        <div className="flex flex-col items-start min-h-screen py-6 min-[2500px]:pr-[10%]" id="about">
          <Transition.Child
            enter="duration-1000 delay-500"
            enterFrom="-translate-x-32 opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-0 opacity-100"
          >
            <h3 className="py-2 text-xl lg:text-3xl">Hi, my name is</h3>
          </Transition.Child>
          <Transition.Child
            enter="duration-1000 delay-700"
            enterFrom="-translate-x-32 opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-0 opacity-100"
          >
            <h1 className="mainFont py-4 text-6xl lg:text-9xl">
              Lawrence Chan
            </h1>
            <h1 className="mainFont py-8 text-4xl lg:text-8xl opacity-80">
              Full Stack Web Developer
            </h1>
            <hr style={{ height: "3px", width: "66%", color: "white" }} />
          </Transition.Child>
          <Transition.Child
            enter="duration-1000 delay-1000"
            enterFrom="-translate-x-32 opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-0 opacity-100"
          >
            <p className="w-full py-4 lg:w-2/3 py-6 text-xl">
              I am a full stack web developer based in Vancouver, Canada, and
              this is my interactive CV.
            </p>
            <div className="flex flex-row items-center w-[80%] mb-4 lg:w-[30%] text-xl">
              <p>Learn more or reach out</p>
              <div className="mt-4 ml-2 animate-bounce">
                <FontAwesomeIcon icon={faTurnDown} />
              </div>
            </div>
            <div
              className="flex flex-row justify-start min-h-[50px]"
              id="about-buttons"
            >
              <a
                className="bg-slate-500 rounded-full px-3 lg:pt-2.5 pt-3 w-[35%] text-center  lg:text-lg lg:w-[15%]"
                href="#detail"
              >
                About me
              </a>
              <a
                className="mx-2 bg-lime-400 rounded-full ml-6 px-3 lg:pt-2.5 pt-3 w-[35%]  text-center lg:text-lg lg:w-[16%]"
                href="#contact"
              >
                Contact me
              </a>
            </div>
          </Transition.Child>
        </div>
      </Transition>
      <Social />
      <div ref={ref} />
    </main>
  );
};

export default About;
