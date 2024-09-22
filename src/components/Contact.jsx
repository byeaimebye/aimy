import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} `}>CONGRATS!</p>

        <h2 className={`${styles.sectionHeadText}`}>
          You find de LootBox of this web.
        </h2>
      </motion.div>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <hr className="mb-8"></hr>
          <span className="text-white font-medium mb-4">
            My real name is Aimé. I am constantly seeking to expand my knowledge
            in technologies like React Native, I combine my technical skills
            with my strategic vision to become a Team Leader. I am excited for what the
            future holds for my career in Tech.
          </span>
          <div className="mt-5">
            <span className="text-white font-small mb-4">
              Please note that this website was translated and developed with
              the assistance of Chat GPT and my English level is B2.
            </span>
          </div>
          <div className="mt-10 flex flex-col items-center justify-around">
            <span className="text-white font-medium mb-4">
              My LinkedIn profile:
            </span>
            <a
              href="https://www.linkedin.com/in/aime-pelozo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                style={{
                  background: "linear-gradient(to right, #ff6b98, #ff99ac)",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.25rem",
                  color: "white",
                  fontWeight: "medium",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  width: "100%",
                }}
              >
                aime-agustina
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
