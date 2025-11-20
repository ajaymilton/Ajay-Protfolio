import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiFigma,
} from "react-icons/si";
import skillsBg from "../assets/skillsbg.mp4";


const skills = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7E018" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Framer Motion", icon: <SiFramer />, color: "#E600FF" },
  { name: "Git", icon: <SiGit />, color: "#F34F29" },
  { name: "Figma", icon: <SiFigma />, color: "#A259FF" },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.09,
      duration: 0.5,
      type: "spring",
    },
  }),
};

function SkillCard({ skill, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={skill.name}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={badgeVariants}
      whileHover={{
        scale: 1.07,
        boxShadow: `0 0 25px ${skill.color}90`,
        backgroundColor: skill.color,
        color: "#000",
        transition: { duration: 0.3 },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center w-64 h-36 mb-10 rounded-lg border-2 text-white cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col items-center space-y-4">
        <div
          className="text-5xl"
          style={{ color: hovered ? "#000" : skill.color }}
        >
          {skill.icon}
        </div>
        <p className="text-xl font-bold">{skill.name}</p>
      </div>
    </motion.div>
  );
}

// Helper for infinite scroll on mobile
const getInfiniteSkills = (skills, times = 3) => {
  let repeated = [];
  for (let i = 0; i < times; i++) {
    repeated = repeated.concat(skills);
  }
  return repeated;
};

const Skills = () => {
  // Calculate scroll distance (w-64 is 16rem = 256px, plus margin/padding)
  const cardWidth = 264; // 256 + left/right margin (8px each)
  const infiniteSkills = getInfiniteSkills(skills, 3);
  const scrollWidth = infiniteSkills.length * cardWidth;

  return (
    <section id="skills" className="relative overflow-hidden py-16 px-6">
      {/* Background Video */}
      <video
        src={skillsBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* Heading and Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto text-center z-10"
      >
        <h2 className="text-5xl sm:text-5xl font-bold font-poppins pb-16 text-[#EDC001]">
          Skills
        </h2>

        {/* Mobile Only Carousel */}
        <div className="sm:hidden w-full overflow-x-hidden mb-4 pb-2">
          <motion.div
            className="flex flex-nowrap gap-8"
            drag="x"
            dragConstraints={{ left: -scrollWidth, right: 0 }}
            animate={{
              x: [0, -scrollWidth],
              transition: {
                x: {
                  duration: 30, // increase for slower scroll, decrease for faster
                  repeat: Infinity,
                  ease: "linear",
                },
              },
            }}
            style={{ minWidth: "max-content" }}
          >
            {infiniteSkills.map((skill, idx) => (
              <SkillCard
                key={`${skill.name}-${idx}`}
                skill={skill}
                i={idx % skills.length}
              />
            ))}
          </motion.div>
        </div>

        {/* Grid for desktop/tablet (unchanged) */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-y-12 justify-items-center">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} i={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
