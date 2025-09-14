import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_sqynfxs", "template_2h73hj5", form.current, {
        publicKey: "i06qDOmpxvJDv0Q_C",
      })
      .then(
        () => {
          setSubmitStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 3000);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let&apos;s turn your ideas into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal side="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Reach Me</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I would love to hear from you. Whether you have a project or want
                  to ask questions, feel free to drop a message.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href="tel:+2348168082347"
                  className="flex items-center gap-4 text-gray-300 hover:text-white 
                           transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <span className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 
                                transition-colors duration-300">
                    <FaPhone className="text-secondary text-xl" />
                  </span>
                  <span>+2348168082347</span>
                </motion.a>

                <motion.a
                  href="mailto:devabrahamtech@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white 
                           transition-colors duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <span className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 
                                transition-colors duration-300">
                    <FaEnvelope className="text-secondary text-xl" />
                  </span>
                  <span>devabrahamtech@gmail.com</span>
                </motion.a>
              </div>
            </div>
          </Reveal>

          <Reveal side="right" width="100%">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 w-full"
            >
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  className="w-full box-border px-4 sm:px-6 py-3 sm:py-4 bg-primary/30 border border-secondary/20 rounded-lg
                             text-white placeholder-gray-400 focus:outline-none focus:border-secondary
                             focus:ring-2 focus:ring-secondary/20 focus:bg-primary/50
                             transition-all duration-300"
                />
              </motion.div>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  required
                  className="w-full box-border px-4 sm:px-6 py-3 sm:py-4 bg-primary/30 border border-secondary/20 rounded-lg
                             text-white placeholder-gray-400 focus:outline-none focus:border-secondary
                             focus:ring-2 focus:ring-secondary/20 focus:bg-primary/50
                             transition-all duration-300"
                />
              </motion.div>

              <motion.div
                className="w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows="4"
                  className="w-full box-border px-4 sm:px-6 py-3 sm:py-4 bg-primary/30 border border-secondary/20 rounded-lg
                             text-white placeholder-gray-400 focus:outline-none focus:border-secondary
                             focus:ring-2 focus:ring-secondary/20 focus:bg-primary/50
                             transition-all duration-300 resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-accent text-primary font-semibold rounded-lg
                           hover:bg-secondary transition-all duration-300 relative
                           disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-lg hover:shadow-secondary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute bottom-full left-0 right-0 p-4 rounded-lg mb-4
                            ${submitStatus === "success"
                      ? "bg-green-500/20 text-green-500"
                      : "bg-red-500/20 text-red-500"
                    }`}
                >
                  {submitStatus === "success"
                    ? "Message sent successfully!"
                    : "Failed to send message. Please try again."}
                </motion.div>
              )}
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;