import "./Contact.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal"; // Import the Reveal component

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sqynfxs", "template_2h73hj5", form.current, {
        publicKey: "i06qDOmpxvJDv0Q_C",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="container contact">
      <h2 className="contact-header">Contact</h2>
      <div className="contact-container">
        <Reveal className="contact-left" side="left">
          <div>
            <h3 className="contact-title">Reach Me</h3>
            <p className="contact-description">
              I would love to hear from you. Whether you have a question or just
              want to say hi, feel free to drop a message.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <FaPhone className="contact-icon" />
                <span>
                  <a href="tel:+2348168082347">+2348168082347</a>
                </span>
              </div>
              <div className="contact-detail">
                <FaEnvelope className="contact-icon" />
                <span>
                  <a href="mailto:devabrahamtech@gmail.com">
                    devabrahamtech@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal className="contact-right" side="right">
          <div>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="contact-input"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                className="contact-input"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="contact-input"
                required
              ></textarea>
              <button type="submit" className="contact-button">
                Send
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
