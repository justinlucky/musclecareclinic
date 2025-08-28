
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import servicesData from "../assets/servicesData.json";
import { FaChevronRight } from "react-icons/fa";

// Define the type for service items
interface Service {
  id: string;
  title: string;
  description: string;
  points: string[];
  imgSrc: string;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Reduced for mobile performance
      delayChildren: 0.1,
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
      willChange: "opacity, transform",
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
      willChange: "opacity, transform",
    },
  },
};

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = servicesData.filter((service: Service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-manrope mb-8">
      <motion.div
        className="w-full mt-16 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold py-4 sm:py-5 text-text mx-4 sm:mx-6 lg:mx-0 mt-4 tracking-tight"
          variants={titleVariants}
        >
          Services
        </motion.h1>
        <motion.div variants={childVariants} className="mx-4 sm:mx-6 lg:mx-0 mb-6">
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search services"
          />
        </motion.div>

        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredServices.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                variants={containerVariants}
              >
                {filteredServices.map((service: Service) => (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    className="flex flex-col bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    variants={childVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div variants={childVariants}>
                      <img
                        src={service.imgSrc}
                        alt={service.title}
                        className="w-full h-64 md:h-80 object-cover rounded-lg aspect-[4/3]"
                      />
                    </motion.div>
                    <motion.div
                      className="flex flex-col justify-between pt-4"
                      variants={childVariants}
                    >
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                          {service.description}
                        </p>
                        <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-1 sm:space-y-2">
                          {service.points.map((point, index) => (
                            <motion.li
                              key={index}
                              variants={childVariants}
                              custom={index}
                              transition={{ delay: index * 0.05 }}
                            >
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <motion.div
                        className="mt-4 sm:mt-5"
                        variants={childVariants}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            to={`/service/booking/${service.id}`} // String path
                            state={{ serviceTitle: service.title }} // Pass service title as state
                            className="flex items-center justify-between gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-white bg-blue-700 hover:bg-blue-900 rounded-md font-semibold text-sm sm:text-base transition-colors duration-300"
                            aria-label={`Book appointment for ${service.title}`}
                          >
                            Book Appointment
                            <FaChevronRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.p
                className="text-center text-gray-600 text-base sm:text-lg"
                variants={childVariants}
              >
                No services found.
              </motion.p>
            )}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Services;