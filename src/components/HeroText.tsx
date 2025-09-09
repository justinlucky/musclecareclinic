
import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";

const HeroText = () => {
  const words = [
    {
      text: "Where ",
      className:
        "text-secondary font-heading font-bold lg:text-6xl md:text-5xl md:w-2/3 xl:text-7xl text-3xl",
    },
    {
      text: "Healing ",
      className:
        "font-heading font-bold lg:text-6xl md:text-5xl md:w-2/3 xl:text-7xl text-3xl text-primary",
    },
    {
      text: "Meets ",
      className:
        "text-secondary font-heading font-bold lg:text-6xl md:text-5xl md:w-2/3 xl:text-7xl text-3xl",
    },
    {
      text: "Expertise ",
      className:
        "font-heading font-bold md:text-5xl lg:text-6xl md:w-2/3 xl:text-7xl text-3xl text-primary",
    },
    {
      text: "& ",
      className:
        "text-secondary font-heading font-bold lg:text-6xl md:text-5xl md:w-2/3 xl:text-7xl text-3xl",
    },
    {
      text: "Experience. ",
      className:
        "font-heading font-bold md:text-5xl lg:text-6xl md:w-2/3 xl:text-7xl text-3xl text-primary",
    },
  ];


  return (
    <motion.div
      className="font-manrope text-heading w-full my-10 flex flex-col items-center xl:items-start lg:flex-row p-1 container mx-auto px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Typewriter Section */}
      <motion.div
        className="font-bold md:text-6xl h-auto text-4xl md:px-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h1>
          <TypewriterEffect words={words} />
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;