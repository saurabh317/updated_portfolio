import React from 'react';
import "./footer.css";
import { motion } from 'framer-motion';

const Footer = () => {

  return (
    <section id="footer">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
        <p>Copyright&copy;2024 All rights reserved. Made by <a href='https://www.linkedin.com/in/saurabhpandey317/'>Saurabh Sagar Pandey</a></p>
      </div>
    </motion.div>
    </section>
  )
}

export default Footer;