import React from "react";
import "./about.css";
import Resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";
import { bios } from "../../Data.js";
import portfolio from "../../assets/portfolio.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container " id="about">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="title">
          <span>Who Am I?</span>
          <h1>About Me</h1>
        </motion.div>

        <div className="about_container">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="about_left">
            <motion.img
              src={portfolio}
              whileHover={{ y: -48, x: -55 }}
              transition={{ duration: 0.3 }}
            />
            <p>Web Developer</p>
          </motion.div>
          <motion.div
            className="about_right"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}>
            <p>
              I’m Saurabh, a driven MERN stack developer with over 2 years of
              experience in web development. I specialize in crafting scalable,
              high-performance applications and have been spearheading the
              development of innovative Web3 fintech products. Leveraging my
              expertise in JavaScript, React, and blockchain integration, I
              continuously optimize and refine solutions to enhance user
              experience and drive business success.
            </p>
            {bios.map((bio) => {
              return (
                <div className="bio" key={bio.id}>
                  <span className="bioKey">
                    {bio.icon}
                    {bio.key}
                  </span>
                  <span className="bioValue">{bio.value}</span>
                </div>
              );
            })}
            <motion.a
              href={Resume}
              target="_blank"
              download="myResume"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}>
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
