import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";

const HeroText = () => {
  const words = [
    {
      text: "Where ",
      className:
        "font-heading font-bold lg:text-[99px] md:text-[73px] md:w-2/3 xl:text-[100px] text-[35px]",
    },
    {
      text: "Healing ",
      className:
        "font-heading font-bold lg:text-[99px] md:text-[73px] md:w-2/3 xl:text-[100px] text-[35px] text-gold",
    },
    {
      text: "Meets ",
      className:
        "font-heading font-bold lg:text-[99px] md:text-[73px] md:w-2/3 xl:text-[100px] text-[35px]",
    },
    {
      text: "Expertise ",
      className:
        "font-heading font-bold md:text-[73px] lg:text-[99px] md:w-2/3 xl:text-[100px] text-[35px] text-gold",
    },
    {
      text: "& ",
      className:
        "font-heading font-bold lg:text-[99px] md:text-[73px] md:w-2/3 xl:text-[100px] text-[35px]",
    },
    {
      text: "Experience. ",
      className:
        "font-heading font-bold md:text-[73px] lg:text-[99px] md:w-2/3 xl:text-[100px] text-[35px] text-gold",
    },
  ];

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTime(new Date());
    // Optional: Update time every minute for a live clock
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const timep = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const dayp = time.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <motion.div
      className="font-manrope text-heading w-full my-10 flex flex-col items-center xl:items-start lg:flex-row p-1 container mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Typewriter Section */}
      <motion.div
        className="font-bold md:text-[110px] lg:w-4/5 xl:w-2/3 h-auto text-[45px] md:px-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h1>
          <TypewriterEffect words={words} />
        </h1>
      </motion.div>

      {/* Working Hours Section */}
      <motion.div
        className="bg-secondary p-5 lg:bg-none lg:w-1/3 w-full text-xl lg:text-2xl lg:px-5 flex flex-col gap-1 rounded-2xl mt-5"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <motion.h1
          className="font-bold text-3xl my-3 font-heading text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Working Hours
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Mon - Sat: 9:00am - 9:00pm
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Sun: 9:00am - 12:00pm
        </motion.p>
        <motion.div
          className="bg-backgroundColor w-full hidden lg:block py-5 font-bold mt-8 text-center px-3 md:px-5 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Today is {dayp} - {timep}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;