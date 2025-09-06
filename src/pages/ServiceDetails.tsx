
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../assets/servicesData.json";
import { FaStethoscope } from "react-icons/fa6";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServiceDetails = () => {
  const { id } = useParams();

  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div className=" flex flex-col gap-6 flex items-center justify-center pb-8">
      <motion.div
        className="max-w-3xl mt-8 px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-bold mb-4 text-center text-2xl md:text-3xl xl:text-4xl text-primary"
          variants={titleVariants}
        >
          {service.title}
        </motion.h1>
        <motion.div
          className="py-2 sm:py-3 xl:py-7 flex flex-col xl:flex-row xl:items-center gap-4 sm:gap-5"
          variants={containerVariants}
        >
          <motion.img
            src={service.imgSrc}
            alt={service.title}
            className="w-full h-64 md:h-80 rounded-md"
            variants={childVariants}
            whileHover={{ scale: 1.0125 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="gap-3 sm:gap-4 px-2 sm:px-3 xl:px-5 flex flex-col"
            variants={containerVariants}
          >
            <motion.p
              className="text-gray-500 font-medium"
              variants={childVariants}
            >
              {service.description}
            </motion.p>
            <ul className="pl-4">
              <p className="pt-2 text-gray-500">We have observed this during our treatment/rehabilitation through <span className="text-gold font-semibold">{service.title}</span>:</p>
              {service.points?.map((point, index) => (
                <motion.li
                  key={index}
                  variants={childVariants}
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-400 flex items-center text-sm mt-3 gap-2"
                >
                  <FaStethoscope className="text-gold"/>{point}
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-4 sm:mt-6 flex items-center justify-center"
              variants={childVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/service/booking/${service.id}`} // String path
                  state={{ serviceTitle: service.title }} // Separate state prop
                  className="bg-secondary hover:bg-green-500 text-white px-4 py-2 rounded-md inline-block"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceDetails;