
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaHamburger, FaLockOpen, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const menuVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
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
      type: "spring",
      stiffness: 100,
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
      type: "spring",
      stiffness: 120,
    },
  },
};

interface NavbarProps {
  isAdmin?: boolean;
  onLogout?: () => void;
}

const Navbar = ({ isAdmin = false, onLogout }: NavbarProps) => {
  const [state, setState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener to toggle background transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Galleries", path: "/about/gallery" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-manrope ${isScrolled
          ? 'bg-transparent backdrop-blur-md'
          : 'bg-white'
        }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row xl:items-center xl:justify-between py-3 sm:py-4">
        <div className="flex items-center justify-between w-full">
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/">
              <img src="/logo.png" className="h-16 sm:h-20 lg:h-24" alt="Muscle Care Logo" />
            </Link>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-primary hidden md:flex">
              Kin Multi-Speciality Clinic
            </h1>
          </motion.div>

          <div className="xl:hidden">
            <button
              className="text-white p-2 rounded-md"
              onClick={() => setState(!state)}
              aria-label={state ? "Close menu" : "Open menu"}
            >
              {state ? (
                <FaX className='size-5 text-blue-900' />
              ) : (
                <FaHamburger className='size-5 text-blue-900' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {state && (
            <motion.div
              className="xl:hidden px-4 py-6"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col space-y-3">
                {navigation.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="font-manrope text-base sm:text-lg text-primary group"
                    variants={itemVariants}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-green-300 hover:text-white transition-all duration-200"
                      onClick={() => setState(false)}
                    >
                      {item.title}
                      <FaChevronRight className="h-4 w-4" />
                    </Link>
                  </motion.li>
                ))}
                <div className='flex sm:flex-row flex-col gap-3 mt-4'>
                  <motion.div variants={childVariants}>
                    {isAdmin ? (
                      <button
                        onClick={() => {
                          onLogout?.();
                          setState(false);
                        }}
                        className="w-full text-left bg-red-600 py-2 px-4 rounded-xl shadow-md hover:bg-red-700 transition-all duration-200"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        to="/admin-login"
                        className="flex items-center gap-2 block w-full text-left text-white bg-primary py-2 px-4 rounded-xl shadow-md transition-all duration-200"
                        onClick={() => setState(false)}
                      >
                        <FaLockOpen /> Admin Login
                      </Link>
                    )}
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <Link
                      to="tel:+917093280464"
                      className="flex items-center gap-2 block w-full text-left text-white py-2 px-4 bg-secondary rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={() => setState(false)}
                    >
                      <FaPhoneAlt className='h-4 w-4' />(+91) 70932 80464
                    </Link>
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <Link
                      to="https://wa.me/917093280464?text=Know%20more%20about%20Muscle%20Care%20Clinic"
                      className="flex items-center gap-2 block w-full text-left text-white py-2 px-4 bg-green-500 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={() => setState(false)}
                    >
                      <FaWhatsapp className='h-4 w-4' />(+91) 70932 80464
                    </Link>
                  </motion.div>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop menu */}
        <div className="hidden xl:flex xl:items-center gap-4">
          <ul className="flex flex-row items-center gap-2 xl:gap-4">
            {navigation.map((item, idx) => (
              <motion.li
                key={idx}
                className="font-manrope text-sm xl:text-md text-primary hover:text-blue-400 relative group"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.path}
                  className="py-1 px-2 rounded-md transition-all duration-200"
                >
                  {item.title}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;