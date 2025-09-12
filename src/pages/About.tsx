
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Team from "../components/Team";


// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const About = () => {

  return (
    <motion.div
      className="flex flex-col font-manrope"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className=" py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Gallery Link */}
        <motion.div className="flex justify-end" variants={itemVariants}>
          <Link
            to="/about/gallery"
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-indigo-600 py-2 px-4 rounded-full text-gold font-semibold hover:shadow-lg hover:from-indigo-600 hover:to-primary transition-all duration-300"
          >
            View Gallery
            <FaArrowRight />
          </Link>
        </motion.div>
        <motion.div className="py-8">
          {/*All the content goes here*/}
          <h1 className="text-3xl md:text-5xl font-bold text-primary flex text-center items-center justify-center">Still Working on this page</h1>
        </motion.div>

        <Team />
      </motion.div>
    </motion.div>
  );
};

export default About;