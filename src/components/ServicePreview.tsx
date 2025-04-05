import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    Physiotherapy: [
      { id: "post-surgery-physiotherapy", title: "Post Surgery Physiotherapy", src: "/postSurgerHos.jpg" },
      { id: "orthopaedic-physiotherapy", title: "Orthopaedic Physiotherapy", src: "/ortho.jpg" },
      { id: "neurology-physiotherapy", title: "Neurology Physiotherapy", src: "/Neuro.jpg" },
      { id: "sports-physiotherapy", title: "Sports Physiotherapy", src: "/sport.jpg" },
      { id: "pediatric-physiotherapy", title: "Pediatric Physiotherapy", src: "/Pediatric.jpg" },
      { id: "rehabilitation", title: "Rehabilitation", src: "/rehab.jpg" },
      { id: "geriatric-care", title: "Geriatric Care", src: "/neck.jpg" },
      { id: "knee-pain", title: "Knee Pain", src: "/postSurgery.jpg" },
      { id: "spinal-injuries", title: "Spinal Injuries", src: "/spinal.jpg" },
      { id: "foot-and-ankle", title: "Foot and Ankle Pain", src: "/ankle.jpg" },
      { id: "stroke", title: "Stroke Rehabilitation", src: "/hip.jpg" },
    ],
    "Body Relaxation": [
      { id: "cupping-therapy", title: "Cupping Therapy", src: "/cupping.png" },
      { id: "cryotherapy", title: "Cryotherapy", src: "/cryo.webp" },
      { id: "chiropractic", title: "Chiropractic", src: "/chiro.jpg" },
      { id: "body-stretching", title: "Complete Body Stretching", src: "/stretching.jpg" },
      { id: "dry-needle", title: "Dry Needle Therapy", src: "/treatment1.jpg" },
      { id: "massage-therapy", title: "Soft Muscle Mobilization", src: "/massage.jpg" },
    ],
    "Fitness Training": [
      { id: "weight-loss", title: "Weight Loss", src: "/weightLoss.jpg" },
      { id: "weight-gain", title: "Weight Gain", src: "/weightGain.jpg" },
      { id: "strengthening-training", title: "Strength and Conditioning Training", src: "/strength.jpg" },
      { id: "crossfit-training", title: "Power Lifting", src: "/CrossFitTraining.jpg" },
      { id: "circuit-training", title: "Circuit Training", src: "/circuit.webp" },
      { id: "athletic-training", title: "Athletic Training (ROM)", src: "/hiit.webp" },
      { id: "boxing-training", title: "Boxing Training", src: "/boxing.jpg" },
      { id: "yoga", title: "Yoga", src: "/yoga.jpg" },
    ],
    "Nutrition and Diet Plan": [
      { id: "nutrition-diet", title: "Nutrition Diet", src: "/Deit.jpg" },
    ],
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
    <div className="py-12 container mx-auto px-4">
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
      <div className="flex flex-wrap justify-center gap-6">
        <AnimatePresence>
          {filteredCards.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/service/${item.id}`} className="flex flex-col items-center">
                <div className="w-[200px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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