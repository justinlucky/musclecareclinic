import { motion } from "framer-motion";
import Faq from "../components/Faq";
import FooterDark from "../components/FooterDark";
import Navbar from "../components/Navbar";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
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

const Contact = () => {
  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary min-h-screen">
      <Navbar />
      <motion.div
        className="w-full my-5 bg-white py-10 px-5 rounded-2xl mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-heading font-semibold py-5 text-text m-5"
          variants={titleVariants}
        >
          Contact us
        </motion.h1>
        <motion.div variants={childVariants}>
          <Faq />
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row gap-5 h-full mt-10"
          variants={containerVariants}
        >
          <motion.div
            className="md:w-1/2 border-[7px] h-[300px] rounded-xl shadow border-white"
            variants={childVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3829.1260441096338!2d80.40884821957403!3d16.31650271396272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE5JzAxLjgiTiA4MMKwMjQnMzMuMiJF!5e0!3m2!1sen!2sin!4v1726322982382!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </motion.div>

          <motion.div
            className="md:w-1/2 p-8 rounded-xl h-2/3 bg-white shadow-xl"
            variants={childVariants}
          >
            <motion.h1
              className="text-2xl p-5"
              variants={childVariants}
            >
              Get in touch
            </motion.h1>
            <motion.hr
              className="w-[90%] ml-5"
              variants={childVariants}
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div variants={childVariants}>
              <div className="flex items-center text-xl p-3">
                <FaLocationDot className="text-[#1679AB] mr-2 text-2xl font-semibold" />
                <h1>Muscle Care Clinic</h1>
              </div>
              <p className="ml-12">
                8C85+VP7,
                <br /> LIC Colony RD, Satyanarayana Puram, Nayi Brahmana Colony,
                <br /> Guntur, Andhra Pradesh, India - 522007
              </p>
            </motion.div>
            <motion.div variants={childVariants}>
              <div className="flex items-center text-xl p-3">
                <FaPhone className="text-[#1679AB] mr-2 text-2xl font-semibold" />
                <h1>Telephone</h1>
              </div>
              <p className="ml-12">(+91) 70932 80464 </p>
            </motion.div>
            <motion.div variants={childVariants}>
              <div className="flex items-center text-xl p-3">
                <IoIosMail className="text-[#1679AB] mr-2 text-2xl font-semibold" />
                <h1>Inquiries</h1>
              </div>
              <p className="ml-12">musclecareclinic@gmail.com</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <FooterDark />
    </div>
  );
};

export default Contact;