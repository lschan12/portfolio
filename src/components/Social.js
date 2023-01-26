import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Social = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hidden lg:block lg:mt-[8%]"
    >
      <ul className="text-4xl">
        <li className="py-1">
          <a
            href="https://github.com/lschan12"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="py-1">
          <a
            href="https://www.linkedin.com/in/lschan12/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="py-1">
          <a href="mailto:lawrence@hotmail.co.uk">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
      <div id="social-line"></div>
    </motion.div>
  );
};

export default Social;
