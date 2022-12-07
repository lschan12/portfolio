import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const handleNavBar = () => {
    isNavOpen ? setisNavOpen(false) : setisNavOpen(true);
  };

  return (
    <>
      <nav className="flex flex-row justify-between px-24 py-4">
        <a href="#top" className="w-[5%]">
          <img src={require("./logo.jpg")} alt="logo"></img>
        </a>
        <button onClick={() => handleNavBar()} className="sm:hidden">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <ul
          className="hidden sm:flex flex-row w-[40%] items-center justify-end"
          id="nav-links"
        >
          <li>
            <a href="/#detail">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
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
      </nav>
      <ul
        className={
          isNavOpen
            ? "top-0 fixed h-screen inset-x-0 flex flex-col justify-center items-center z-2 bg-slate-900 transition-top ease duration-1000 "
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
          <FontAwesomeIcon icon={faXmark} size="lg"/>
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
    </>
  );
};

export default Nav;
