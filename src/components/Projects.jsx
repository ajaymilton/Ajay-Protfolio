import { motion } from "framer-motion";
import projectsBg from "../assets/projects_bg2.jpg";

const projects = [
  {
    title: "Food Delivery Platform",
    stack: "React, Tailwind CSS",
    description:
      "Worked at Tregzo as a React Developer, building a responsive food delivery website. Focused on adaptable layouts, dynamic menus, and smooth ordering for all users.",
  },
  {
    title: "School Website",
    stack: "React, Tailwind CSS",
    description:
      "A freelance project for a school, delivering an informative and interactive website with galleries, announcements, and easy navigation for staff and students.",
  },
  {
    title: "Manpower Company Website",
    stack: "React, Tailwind CSS",
    description:
      "Developed a professional site for a manpower company, featuring service information, job listings, and contact forms within a clean, modern UI.",
  },
  {
    title: "Weather App",
    stack: "React, Tailwind CSS",
    description:
      "Created a weather app that shows live weather data for cities and countries using a weather API, with an intuitive responsive interface.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.55,
      type: "spring",
      bounce: 0.35,
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="relative pt-16 pb-20 px-6 overflow-hidden">
      <img
        src={projectsBg}
        alt="Projects background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto z-10"
      >
        <h2 className="text-5xl sm:text-5xl font-bold text-white text-center mb-16 tracking-tight">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 md:px-6 md:gap-20 gap-10 justify-items-center">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                rotate: 2,
                boxShadow:
                  "0 8px 40px 0 #EDC00166, 0 0 0 4px #FFE26F44 inset",
                borderColor: "#FFE26F",
                transition: { duration: 0.25 },
              }}
              className="w-80 sm:w-96 h-64 flex flex-col justify-center px-6 py-6 border border-[#EDC001]/40 backdrop-blur-sm shadow-xl hover:shadow-[#EDC00144] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#EDC001] text-center mb-2">
                {proj.title}
              </h3>
              <p className="text-white/90 text-sm font-medium text-center">{proj.stack}</p>
              <p className="text-white text-center mt-4 text-[0.98rem] leading-relaxed">
                {proj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
