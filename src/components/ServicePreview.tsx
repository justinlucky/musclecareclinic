import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import the services data from the JSON file
import servicesData from "../assets/servicesData.json";

// Define the types for the service items
interface ServiceItem {
  id: string;
  title: string;
  src: string;
}

// Define the types for the services
interface Services {
  [key: string]: ServiceItem[];
}

const ServicePreview = () => {
  const services: Services = {
    "All Services": [],
    Physiotherapy: servicesData
      .filter((item) => item.id.includes("physiotherapy") || item.id.includes("rehabilitation") || item.id.includes("stroke") || item.id.includes("care"))
      .map(({ id, title, imgSrc }) => ({ id, title, src: imgSrc })),
    "Body Relaxation": servicesData
      .filter((item) => item.id.includes("therapy") && !item.id.includes("physiotherapy"))
      .map(({ id, title, imgSrc }) => ({ id, title, src: imgSrc })),
    "Fitness Training": servicesData
      .filter((item) => item.id.includes("training") || item.id.includes("yoga") || item.id.includes("lifting"))
      .map(({ id, title, imgSrc }) => ({ id, title, src: imgSrc })),
    "Nutrition and Diet Plan": servicesData
      .filter((item) => item.id.includes("nutrition"))
      .map(({ id, title, imgSrc }) => ({ id, title, src: imgSrc })),
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("All Services");

  const filteredCards: ServiceItem[] =
    selectedCategory === "All Services"
      ? Object.keys(services)
          .map((key) => services[key])
          .flat()
      : services[selectedCategory] || [];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="pb-8 container mx-auto">
      <motion.h1
        className="font-manrope text-5xl md:text-6xl font-semibold text-center text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Services
      </motion.h1>

      {/* Dropdown Selection */}
      <motion.div
        className="mb-8 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 rounded-lg border-2 border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary bg-white shadow-md"
        >
          {Object.keys(services).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Display Filtered Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        <AnimatePresence>
          {filteredCards.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/service/${item.id}`} className="flex flex-col items-center">
                <div className=" flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-48 md:w-64 h-64 md:h-80 object-cover transition-transform duration-300"
                  />
                </div>
                <p className="mt-3 text-center font-medium text-gray-400">{item.title}</p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicePreview;