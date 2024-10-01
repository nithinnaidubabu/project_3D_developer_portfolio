import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          View My Resume
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Resume.
        </h2>
      </motion.div>

      <div className='mt-20 flex justify-center'>
        <a
          href="/resume.pdf"
          download
          className='bg-primary text-white py-3 px-8 rounded-lg text-lg font-semibold'
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");