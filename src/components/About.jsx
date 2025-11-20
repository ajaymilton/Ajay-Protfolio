import { motion } from "framer-motion";
import ajay from "../assets/ajayimgnew.png";
import Aboutbg from "../assets/about_new.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 px-6"
    >
      {/* Background Image */}
      <img
        src={Aboutbg}
        alt="decorative abstract background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        {/* Title */}
        <h2 className="text-5xl sm:text-5xl font-bold font-poppins text-white mb-16">
          About <span className="text-[#EDC001]">Me</span>
        </h2>

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-full mb-16 flex items-center bg-[#EDC001] justify-center w-48 h-48 overflow-hidden"
          style={{
            boxShadow: "0 0 30px 2px #FFD600, 10px 20px 50px 15px #FFA70021",
          }}
        >
          <img
            src={ajay}
            alt="Ajay Milton portrait"
            className="object-cover rounded-full w-full h-full"
          />
        </motion.div>

        {/* Subtitle */}
        <p className="text-4xl font-bold sm:text-3xl  text-white mb-10">
          Frontend Developer
        </p>

        {/* Description */}
        <p className="text-white max-w-xl leading-relaxed text-lg">
          Passionate frontend developer focused on clean, interactive web
          experiences.  
          Strong in React, JavaScript, Tailwind, and UI animations.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
