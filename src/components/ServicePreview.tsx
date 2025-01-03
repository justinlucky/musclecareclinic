import { useState } from "react";
import { Link } from "react-router-dom";

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
  // Define the services object with the appropriate type
  const services: Services = {
    "All Services": [],
    "Physiotherapy": [
      { id: "post-surgery-physiotherapy", title: "Post Surgery Physiotherapy", src: "/stretching.jpg" },
      { id: "orthopaedic-physiotherapy", title: "Orthopaedic Physiotherapy", src: "/chriopractor.png" },
      { id: "neurology-physiotherapy", title: "Neurology Physiotherapy", src: "/needle.jpg" },
      { id: "sports-physiotherapy", title: "Sports Physiotherapy", src: "/cupping.png" },
      { id: "pediatric-physiotherapy", title: "Pediatric Physiotherapy", src: "/cupping.png" },
      { id: "rehabilitation", title: "Rehabilitation", src: "/relax.jpg" },
      { id: "neck-and-shoulder", title: "Neck and Shoulder Pain", src: "/relax.jpg"},
      { id: "knee-pain", title: "Knee pain", src: "/stretching.jpg" },
      { id: "spinal-injuries", title: "Spinal Injuries", src: "/relax.jpg" },
      { id: "foot-and-ankle", title: "Foot and Ankle Pain", src: "/cupping.png" },
      { id: "hip-and-back", title: "Hip and Back Pain", src: "/cupping.png" },

    ],
    "Body Relaxation": [
      { id: "cupping", title: "Cupping", src: "/cupping.png" },
      { id: "i-astm", title: "IASTM", src: "/tape.webp" },
      { id: "cryotherapy", title: "Cryotherapy", src: "/cryo.webp" },
      { id: "chiropractic", title: "Chiropractic", src: "/chriopractor.png" },
      { id: "body-stretching", title: "Complete Body Stretching", src: "/stretching.jpg" },
      { id: "dry-needling", title: "Dry Needling", src: "/needle.jpg" },
      { id: "massage-therapy", title: "Soft Muscle Mobilisation", src: "/relax.jpg" },
      { id: "heat-therapy", title: "Heat Therapy", src: "/boxing.jpg" },
    ],
    "Fitness Training": [
      { id: "weight-loss", title: "Weight Loss", src: "/stretching.jpg" },
      { id: "weight-gain", title: "Weight Gain", src: "/cupping.png" },
      { id: "strengthening-training", title: "Strengthening Training", src: "/tape.webp" },
      { id: "crossfit-training", title: "CrossFit Training", src: "/cryo.webp" },
      { id: "circuit-training", title: "Circuit Training", src: "/circuit.webp" },
      { id: "functional-training", title: "Functional Training", src: "/boxing.jpg" },
      { id: "athletic-training", title: "Athletic Training (ROM)", src: "/hiit.webp" },
      { id: "boxing-training", title: "Boxing Training", src: "/boxing.jpg" },
      { id: "yoga", title: "Yoga", src: "/relax.jpg" },
    ],
    "Nutrition and Diet Plan": [
      { id: "diet-weight-loss", title: "Weight Loss Diet", src: "/stretching.jpg" },
      { id: "diet-weight-gain", title: "Weight Gain Diet", src: "/cupping.png" },
      { id: "protein-diet", title: "Protein Diet", src: "/tape.webp" },
      { id: "nutrition-diet", title: "Nutrition Diet", src: "/cryo.webp" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("All Services");

  // Filter the cards based on the selected category
  const filteredCards: ServiceItem[] =
    selectedCategory === "All Services"
      ? Object.keys(services)
          .map((key) => services[key])
          .flat()
      : services[selectedCategory] || [];

  return (
    <div className="p-5">
      <h1 className="font-manrope text-text my-8 text-5xl md:font-semibold font-semibold text-center">
        Our Services
      </h1>

      {/* Dropdown Selection */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 rounded-lg border-2 border-gray-300 text-gray-600 focus:outline-none"
        >
          {Object.keys(services).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display Filtered Cards */}
      <div className="flex flex-wrap justify-center gap-5">
        {filteredCards.map((item) => (
          <Link
            key={item.id}
            to={`/service/${item.id}`}
            className="flex flex-col items-center"
          >
            <div className="w-[200px] h-[200px] flex-shrink-0">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="mt-3 text-center font-medium text-text">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicePreview;
