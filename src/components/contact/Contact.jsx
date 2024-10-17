import React from "react";
import "./contact.css";
import { contacts } from "../../Data";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const YOUR_SERVICE_ID = 'service_9pbzcup'
  const YOUR_TEMPLATE_ID = 'template_slih9on'
  const YOUR_PUBLIC_KEY = 'B-DG-pFmTEYWD7VAc'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
      publicKey: YOUR_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    alert("details sent");
  };


  return (
    <section id="contact">
      <div className="container" id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          className="title">
          <span>get in touch</span>
          <h1>Contact Me</h1>
        </motion.div>
        <div className="contact_form">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-150, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_left_container">
            <h3>Just Say Hi</h3>
            <p className="contact_text">
              If u are already here means you have really spent some time on my
              portfolio, So if you do like my work, please do reach out to me. I
              am looking for a new role and would appreciate your
              support.Thankyou in advance for any advice or opportunities you
              can provide.
            </p>
            {contacts.map((contact) => {
              return (
                <div className="contact_left" key={contact.id}>
                  <div className="icon">{contact.icon}</div>
                  <p>{contact.infoText}</p>
                </div>
              );
            })}

          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_right">
            <h3>Get In Touch</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <input
                  type="text"
                  placeholder="First Name"
                  name="from_name"
                  className="row"
                  required
                />
                <input type="text" placeholder="Last name" className="row" />
              </div>
              <div className="row">
                <input type="text" placeholder="Phone" required />
                <input type="email" placeholder="Email" name="email" required/>
              </div>
              <div className="row">
                <textarea placeholder="message" name="message" required></textarea>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}>
                <button
                  className="btn"
                  type="submit"
                >
                  Send
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
