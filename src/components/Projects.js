import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";


const Projects = () => {
  const busRidersRef = useRef();
  const SQLBaseRef = useRef();

  useEffect(() => {
    const videoElement = busRidersRef.current;
    const video2Element = SQLBaseRef.current;

    videoElement.playbackRate = 1.5;
    video2Element.playbackRate = 1.5;
  }, []);

  return (
    <div className="min-h-screen py-16" id="projects">
      <p className="htmlTags">{`<h1>`}</p>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mainFont text-6xl py-4 pl-4 sm:text-8xl">Projects</h1>
      </motion.div>
      <p className="htmlTags">{`</h1>`}</p>
      <div className="py-6" id="project-gallery">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="project-detail py-6"
        >
          <HoverVideoPlayer
            loop={false}
            videoRef={busRidersRef}
            videoSrc="./busriders.mp4"
            restartOnPaused
            style={{
              width: "100%",
              height: "100%",
            }}
            pausedOverlay={
              <img
                src="busriders.png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
          <div className="project-description sm:w-[45%] px-4">
            <h2 className="text-6xl py-4">BusRiders</h2>
            <p className="py-2">
              Jack-box inspired drinking game, where users guess the outcome of
              the next card to score points. Playable as solo or in multiplayer,
              with a separate controller client that can be accessed through any
              web device.
            </p>
            <a className="text-2xl pr-4" href="https://github.com/lschan12/ride-the-bus/tree/main">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://ride-the-bus.onrender.com/"><FontAwesomeIcon icon={faLink} /></a>
            <ul className="grid grid-rows-3 grid-flow-col gap-2 w-full sm:w-1/2 py-6">
              <li>React</li>
              <li>TypeScript</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>SocketIO</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="project-detail py-6"
        >
          <HoverVideoPlayer
            loop={false}
            videoRef={SQLBaseRef}
            videoSrc="./CreateAndSeed.mp4"
            restartOnPaused
            style={{
              width: "100%",
              height: "100%",
            }}
            pausedOverlay={
              <img
                src="SQLBase.png"
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  // objectFit: 'cover',
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
          <div className="project-description px-4 sm:w-[45%]">
            <h2 className=" text-6xl py-4">SQLBase</h2>
            <p>
              SQL platform that allows users to generate ERD's and Queries on
              their database. Seed data and visualize charts on their data all
              with no code required.
            </p>
            <a className='text-2xl' href="https://github.com/rstock-co/SQLBase"><FontAwesomeIcon icon={faGithub} /></a>
            <ul className="grid grid-rows-3 grid-flow-col gap-2 w-full py-6 sm:w-1/2">
              <li>React</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>PostgresSQL</li>
              <li>MaterialUI</li>
              <li>MermaidJS</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="project-detail py-6"
        >
          <img className="sm:w-[100%]" src="./bistro.png" alt="bistro"></img>
          <div className="project-description sm:w-[45%] px-4">
            <h2 className=" text-6xl py-4">Lighthouse Bistro</h2>
            <p>
              Food ordering pickup app for an ficticious restaurant. Inspired by
              Skip the Dishes and other food ordering apps for styling, and
              allows users to order food from a fictitious restaurant where both
              the users and the restaurant gets text message updates for when
              the order is placed and ready for pickup.
            </p>
            <a className="text-2xl" href="https://github.com/lschan12/Food-Pickup-Ordering">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <ul className="grid grid-rows-3 grid-flow-col gap-2 w-full py-6 sm:w-1/2">
              <li>JQuery</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>PostgresSQL</li>
              <li>SASS</li>
              <li>SocketIO</li>
              <li>Twilio</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <p className="self-center py-6 text-4xl">... and more!</p>
    </div>
  );
};

export default Projects;
