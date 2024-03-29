import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faNode,
  faPython,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  return (
    <>
      <div className="min-h-screen py-12" id="detail">
        <div id="picture-detail">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="py-4 lg:w-[50%] flex items-center"
          >
            {/* <div id="profile-picture"> */}
            <img
              className="border-double border-4 border-sky-500"
              src={require("./me.jpg")}
              alt="Lawrence Chan"
            ></img>
            {/* </div> */}
          </motion.div>
          <div id="detail-text">
            <p className="htmlTags">{`<h1>`}</p>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 300 }
              }}
              className="mainFont py-4 pl-0 text-6xl lg:text-8xl lg:pl-6"
            >
              About me
            </motion.h1>
            <p className="htmlTags">{`</h1>`}</p>
            <br />
            <p className="htmlTags">{`<p>`}</p>
            <motion.p
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3 }}
              className="py-4 pl-6 lg:text-xl"
            >
              I'm a full stack web developer based in Vancouver, Canada. I first
              started coding in university when I took a few intro to computer
              science courses, but I have always been intrigued by anything tech
              ever since my dad brought home a Windows 95 PC when I was a child.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="py-4 pl-6 lg:text-xl"
            >
              Wanting a change in my career - I decided to pursue my passion to
              code for a living. I have since graduated from Lighthouse Labs and
              am actively building apps and projects while searching for an
              organization that I can grow and learn in. All the projects have
              been built from scratch with different framework, but mostly
              specializing in React.js.
            </motion.p>
            <p className="htmlTags">{`</p>`}</p>
          </div>
          {/* </motion.div> */}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <div id="tech-stack">
            <p className="py-4 lg:text-2xl">
              A list of technologies I am familiar with:
            </p>
            <ul className="lg:pl-[3rem] grid grid-rows-3 grid-flow-col gap-2 w-full lg:ml=[20%] lg:w-1/2 min-[2500px]:pl-[6rem]">
              <li>
                <FontAwesomeIcon icon={faJsSquare} /> Javascript
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} /> React
              </li>
              <li>
                <FontAwesomeIcon icon={faNode} /> Node.JS
              </li>
              <li>
                <FontAwesomeIcon icon={faPython} /> Python
              </li>
              <li>
                <FontAwesomeIcon icon={faSquareJs} /> TypeScript
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} /> SQL
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Detail;
