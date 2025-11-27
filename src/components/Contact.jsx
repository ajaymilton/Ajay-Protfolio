import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin, FaThumbsUp } from "react-icons/fa";
import contactBg from "../assets/contact_bg.jpg";

const EMAIL_SERVICE_ID = "service_pte5jfq";
const EMAIL_TEMPLATE_ID = "template_4dj5v4c";
const EMAIL_PUBLIC_KEY = "m38qkaQvS3nadBMLH";

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    emailjs
      .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, EMAIL_PUBLIC_KEY)
      .then(() => {
        setSending(false);
        setSent(true);
        formRef.current.reset();
      })
      .catch(() => {
        setSending(false);
        setError("An error occurred, please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative z-0 min-h-[80vh] py-16 px-2 flex flex-col items-center justify-center overflow-hidden"
    >
      <img
        src={contactBg}
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      <h2 className="relative z-10 text-4xl sm:text-5xl font-extrabold text-center text-white mb-16">
        Let's Connect
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 rounded-2xl shadow-xl bg-gradient-to-br from-[#22210f] via-[#1a1a1a] to-[#000000] border border-[#EDC001]/20 p-6 md:p-10 backdrop-blur-sm"
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          className="flex flex-col justify-center md:pr-10"
        >
          <h2 className="text-5xl font-serif font-bold text-[#EDC001] mb-3 drop-shadow-md">
            Get in Touch
          </h2>
          <div className="text-lg font-semibold text-white mb-2">
            I'd like to hear from you!
          </div>
          <p className="text-white mb-10 font-medium">
            If you have any inquiries or just want to say hi, please use the contact form!
          </p>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-[#EDC001] mr-2" />
            <a
              href="mailto:ajaymilton711@gmail.com"
              className="text-white underline font-medium hover:text-[#EDC001] transition"
            >
              ajaymilton711@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6 mt-6">
            <FaThumbsUp className="text-[#EDC001] text-xl cursor-pointer hover:text-white transition" />
            <FaInstagram className="text-[#EDC001] text-xl cursor-pointer hover:text-white transition" />
            <FaGithub className="text-[#EDC001] text-xl cursor-pointer hover:text-white transition" />
            <FaLinkedin className="text-[#EDC001] text-xl cursor-pointer hover:text-white transition" />
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          className="bg-transparent flex flex-col gap-5"
        >
          <div>
            <label className="block text-[#ffe26f] mb-1 font-semibold">
              Name <span className="text-[#EDC001]">*</span>
            </label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full border border-[#EDC001]/40 rounded px-3 py-2 bg-[#111111] text-[#FFE26F] focus:outline-none focus:ring-2 focus:ring-[#EDC001] font-sans"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-[#ffe26f] mb-1 font-semibold">
              Email <span className="text-[#EDC001]">*</span>
            </label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full border border-[#EDC001]/40 rounded px-3 py-2 bg-[#111111] text-[#FFE26F] focus:outline-none focus:ring-2 focus:ring-[#EDC001] font-sans"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-[#ffe26f] mb-1 font-semibold">
              Message <span className="text-[#EDC001]">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-[#EDC001]/40 rounded px-3 py-2 bg-[#111111] text-[#FFE26F] focus:outline-none focus:ring-2 focus:ring-[#EDC001] font-sans resize-none"
              placeholder="Type your message..."
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={sending}
              className="px-7 py-2 rounded bg-gradient-to-r from-[#EDC001] to-[#ffe26f] text-[#222] font-bold hover:bg-[#ffe26f] hover:text-[#000] transition shadow"
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
          {sent && <div className="text-green-400 mt-2">Message sent!</div>}
          {error && <div className="text-red-400 mt-2">{error}</div>}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
