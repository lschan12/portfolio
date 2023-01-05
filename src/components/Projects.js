import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="min-h-screen py-16" id="projects">
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p>{`<h1>`}</p>
        <h1 className="text-2xl py-4 pl-4 sm:text-6xl">Projects</h1>
        <p>{`</h1>`}</p>
      </motion.div>
      <div className="py-6" id="project-gallery">
        <motion.div 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1 }}
          className="project-detail">
          <img src="./BusRiders.jpg" alt="busriders"></img>
          <div className="project-description">
            <h2>BusRiders</h2>
            <p>
              Jack-box inspired drinking game, where users guess the outcome of
              the next card to score points. Playable as solo or in multiplayer,
              with a separate controller client that can be accessed through
              any web device.
            </p>
            <a href="https://github.com/lschan12/ride-the-bus/tree/main">
              Github Link
            </a>
            <a href="https://ride-the-bus.onrender.com/">App Link</a>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>SocketIO</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </motion.div>
        <div className="project-detail">
          <img src="./SQLBase.jpg" alt="SQLBase"></img>
          <div className="project-description">
            <h2>SQLBase</h2>
            <p>
              SQL platform that allows users to generate ERD's and Queries on
              their database. Seed data and visualize charts on their data all
              with no code required.
            </p>
            <a href="https://github.com/rstock-co/SQLBase">Github Link</a>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>PostgresSQL</li>
              <li>MaterialUI</li>
              <li>MermaidJS</li>
            </ul>
          </div>
        </div>
        <div className="project-detail">
          <img src="./BusRiders.jpg" alt="busriders"></img>
          <div className="project-description">
            <h2>Lighthouse Bistro</h2>
            <p>
              Food ordering pickup app for an ficticious restaurant. Inspired by
              Skip the Dishes and other food ordering apps for styling, and
              allows users to order food from a fictitious restaurant where both
              the users and the restaurant gets text message updates for when
              the order is placed and ready for pickup.
            </p>
            <a href="https://github.com/lschan12/Food-Pickup-Ordering">
              Github Link
            </a>
            <ul>
              <li>JQuery</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>PostgresSQL</li>
              <li>SASS</li>
              <li>SocketIO</li>
              <li>Twilio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
