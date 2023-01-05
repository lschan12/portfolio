import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const handleNavBar = () => {
    isNavOpen ? setisNavOpen(false) : setisNavOpen(true);
  };

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });


  return (
    <>
      <Transition show={inView} appear={true}>
        <nav className={`flex flex-row justify-between static drop-shadow-none z-1 px-6 py-8 sm:px-16 py-6 bg-slate-900`}>
          <Transition.Child
            enter="duration-1000 delay-100"
            enterFrom="-translate-y-32 opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-0 opacity-100"
          >
            <a
              href="#top"
              id="logo"
            >
              <img src={require("./logo.jpg")} alt="logo"></img>
            </a>
          </Transition.Child>
          <button onClick={() => handleNavBar()} className="motion-safe:animate-fadeIn sm:hidden">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
          <Transition.Child
            enter="duration-1000 delay-200"
            enterFrom="-translate-y-32 opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-0 opacity-100"
          >
            <ul
              id="nav-links"
            >
              <li>
                <a href="#detail">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a
                  id="resume-link"
                  href="https://resume.creddle.io/resume/bptrsskb6tq"
                >
                  Resume
                </a>
              </li>
            </ul>
          </Transition.Child>
        </nav>
        <ul
          className={
            isNavOpen
              ? "top-0 fixed h-screen inset-x-0 flex flex-col justify-center items-center z-50 bg-slate-900 transition-top ease duration-1000 "
              : "-top-full fixed h-screen inset-x-0 flex flex-col justify-center items-center transition-all ease duration-1000"
          }
        >
          <li>
            <a href="/#detail">About me</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact me</a>
          </li>
          <li>
            <a
              id="resume-link"
              href="https://resume.creddle.io/resume/bptrsskb6tq"
            >
              Resume
            </a>
          </li>
          <button
            className="block absolute top-10 right-10"
            onClick={() => handleNavBar()}
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
          <ul className="flex flex-row justify-around">
            <li>
              <a
                href="https://github.com/lschan12"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lschan12/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="mailto:lawrence@hotmail.co.uk">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </ul>
      </Transition>
      <div ref={ref} />
    </>
  );
};

export default Nav;
