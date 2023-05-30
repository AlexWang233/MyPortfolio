import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Following projects showcase some of the work I&apos;ve done in my
          spare time. Each project is birefly described with links to code
          repositories and live demos in it. It reflects my ability to solve
          complex problems, work with various technologies and manage projects
          effectively.
        </motion.p>
      </div>
    </>
  );
};

export default Works;
