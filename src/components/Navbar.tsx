import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Our Galleries", path: "/about/gallery" },
    { title: "Services", path: "/services" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <motion.nav
      className="w-full md:static"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="items-center mx-auto xl:flex md:justify-between md:mb-6">
        <div className="flex items-center justify-between py-3">
          <motion.a
            href="/"
            className="p-3 gap-3 rounded-2xl text-white font-heading flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src="/logo.png" className="h-32 lg:h-24" />
            <h1 className="font-bold text-5xl hidden md:flex">Muscle Care</h1>
          </motion.a>

          <div className="xl:hidden">
            <button
              className="text-white outline-none p-2 rounded-md"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {state && (
            <motion.div
              className="w-full xl:w-auto flex justify-start pb-3 mt-8 xl:block xl:pb-0 xl:mt-0 bg-secondary rounded-3xl"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col xl:flex-row justify-start items-start space-y-8 xl:space-y-0 xl:gap-8 p-3 xl:px-10 rounded-2xl xl:mx-5 text-white">
                {navigation.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="text-white font-manrope xl:text-xl md:text-lg hover:text-blue-500"
                    variants={itemVariants}
                  >
                    <a href={item.path}>{item.title}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="hidden xl:inline-block"
          variants={childVariants}
        >
          <motion.a
            href="tel:+917093280464"
            className="py-3 px-4 text-backgroundColor bg-white hover:bg-blue-500 hover:text-white text-xl rounded-full font-heading shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            (+91)70932 80464
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;