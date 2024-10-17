import React, { useState } from "react";
import "./skills.css";
import { icons, finishes } from "../../Data.js";
import { motion } from "framer-motion";
import Experience from "../experience/Experience.jsx";

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="skillSec">
      <div className="container" id="skills">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="title">
          <span>What I Expert?</span>
          <h1>Skills And Experience</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="select">
          <button
            onClick={() => setActive(1)}
            className={active === 1 ? "active" : ""}>
            Skills
          </button>
          <button
            onClick={() => setActive(2)}
            className={active === 2 ? "active" : ""}>
            Experiences
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="skills">
          {active === 1 &&
            icons.map((icon, index) => {
              return (
                <div key={Math.random()} className="tools">
                  <img src={icon} alt="" />
                </div>
              );
            })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="experiencs">
          {active === 2 && <Experience />}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="finishes_container">
          {finishes.map((finish) => {
            return (
              <div className="finishes" key={finish.id}>
                <div className="number">{finish.number}</div>
                <h4 className="item_name">{finish.itemName}</h4>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
