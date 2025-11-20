import { motion } from "framer-motion";
import Herobg from "../assets/hero_bg3.jpg";
import { Link } from "react-scroll";

const Hero = () => (
  <section
    id="home"
    className="
      relative w-full min-h-screen bg-black
      flex items-center
      px-6 md:px-12 lg:px-24
      sm:h-[300px]
      pt-40 pb-20
      overflow-hidden
    "
  >
    {/* Background Image Layer */}
    {/* Background Image Layer */}
    <img
      src={Herobg}
      alt="Hero background"
      className="
    absolute inset-0 w-full
    h-full sm:h-full md:h-full 
    sm:object-cover
    opacity-30 z-0 pointer-events-none select-none
  "
      aria-hidden="true"
    />

    {/* LEFT SIDE TEXTS */}
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="
    relative z-10
    w-full 
    lg:w-1/2 
    flex flex-col 
    justify-center
    bg-opacity-0
    ml-4 sm:ml-10 md:ml-20   /* Responsive left margin for mobile & desktop */
    pt-6 pb-8                /* Add vertical margin for small screens */
  "
    >
      <span className="text-base sm:text-xl text-[#EDC001] font-bold uppercase pb-3 sm:pb-6">
        Hello!
      </span>

      <h1 className="font-extrabold leading-tight text-white">
        <span className="text-6xl sm:text-8xl md:text-8xl lg:text-8xl mr-2 sm:mr-3">I'm</span>
        <span className="text-[#EDC001] text-6xl sm:text-8xl md:text-8xl lg:text-8xl uppercase">
          Ajay <br /> Milton
        </span>
      </h1>

      <p className="text-base sm:text-xl md:text-2xl text-white font-bold uppercase mt-2 sm:mt-4">
        Frontend Developer
      </p>

      <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-6 font-poppins">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-64}
          spy={false}
          hashSpy={false}
        >
          <button className="rounded-full text-white cursor-pointer bg-black hover:bg-[#EDC001] hover:text-black px-4 py-2 uppercase text-xs sm:text-sm border border-white hover:border-[#EDC001] transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold">
            Hire Me
          </button>
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-64}
          spy={false}
          hashSpy={false}
        >
          <button className="rounded-full text-white cursor-pointer bg-black hover:bg-[#EDC001] hover:text-black px-4 py-2 uppercase text-xs sm:text-sm border border-white hover:border-[#EDC001] transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold">
            My Works
          </button>
        </Link>

      </div>
    </motion.div>

  </section>
);

export default Hero;
