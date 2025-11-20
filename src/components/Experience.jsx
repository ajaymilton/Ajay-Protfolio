import { motion } from "framer-motion";
import experienceBg from "../assets/experience_bg.jpg";

const experiences = [
  {
    role: "React Developer",
    place: "Shajin Pvt Ltd - Tregzo",
    period: "Aug 2024 - Sep 2025",
    description:
      "At Tregzo, I focused on building responsive web applications using React.js and Tailwind CSS. Developed reusable components, implemented efficient state management, and ensured seamless API integration and mobile responsiveness.",
  },
  {
    role: "Front-End Developer Intern",
    place: "Dbotics Technology and Solution Pvt Ltd",
    period: "Dec 2023 - Jun 2024",
    description:
      "Built and styled UI components with React.js and Tailwind CSS. Collaborated in an agile team and maintained code quality with Git-based version control.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      bounce: 0.25,
    },
  }),
};

const Experience = () => (
  <section
    id="experience"
    className="relative md:pt-14 md:pb-20 sm:pb-10 bg-black overflow-hidden"
  >
    {/* Background Image */}
    <img
      src={experienceBg}
      alt="Experience background"
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
    />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative max-w-6xl mx-auto px-6"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16">
        Experience
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-10 space-y-10 md:px-20">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 30px rgba(237,192,1,0.15)",
            }}
            className="relative p-7 rounded-2xl backdrop-blur-sm transition-all duration-300"
          >
            {/* Left yellow border */}
            <span className="absolute left-0 top-0 h-full w-[4px] rounded-l-xl bg-gradient-to-b from-[#EDC001] to-[#FFE26F] shadow-[0_0_10px_#EDC00155]" />

            <div className="md:ml-6 space-y-3 w-full">
              <h3 className="text-[#EDC001] font-bold text-3xl">
                {exp.role}
              </h3>

              <p className="text-white text-xl font-medium">
                {exp.place}
              </p>

              <p className="text-white text-base font-medium opacity-70">
                {exp.period}
              </p>

              <p className="text-white text-lg leading-relaxed opacity-90">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Experience;
