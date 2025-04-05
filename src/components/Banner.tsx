import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles.css";
import "swiper/css/scrollbar";

// Define a type for services
type Service = {
  id: string;
  title: string;
  image: string;
  path: string;
  description: string;
};

// Define the services array with proper typing
const services: Service[] = [
  {
    id: "body-stretching",
    title: "Full Body Stretching",
    image: "/stretching.jpg",
    path: "/service/body-stretching",
    description: "",
  },
  {
    id: "rehabilitation",
    title: "Rehabilitation",
    image: "/rehab.jpg",
    path: "/service/rehabilitation",
    description: "Hello",
  },
  {
    id: "chiropractic",
    title: "Chiropractic Therapy",
    image: "/chiro.jpg",
    path: "/service/chiropractic",
    description: "Hello",
  },
  {
    id: "sports-physiotherapy",
    title: "Sports Physiotherapy",
    image: "/sport.jpg",
    path: "/service/sports-physiotherapy",
    description: "Hello",
  },
  {
    id: "dry-needle",
    title: "Dry Needle Therapy",
    image: "/treatment1.jpg",
    path: "/service/needle-therapy",
    description: "Hello",
  },
  {
    id: "yoga",
    title: "Yoga",
    image: "/yoga.jpg",
    path: "/service/yoga",
    description: "Hello",
  },
  {
    id: "cupping-therapy",
    title: "Cupping Therapy",
    image: "/cupping.png",
    path: "/service/cupping-therapy",
    description: "Hello",
  },
  {
    id: "boxing-training",
    title: "Boxing Training",
    image: "/boxing.jpg",
    path: "/service/boxing-training",
    description: "Hello",
  },
];

// Animation variants
const slideVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const Banner: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  return (
    <div className="font-manrope flex flex-col">
      <div className="h-[500px] md-[600px] lg:h-[700px] xl:h-[900px] bg-gray-700 rounded-t-2xl rounded-b-2xl text-[#28323f]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 15000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectFade]}
          className="w-full h-full"
          effect="fade"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <motion.div
                className="w-full h-full relative cursor-pointer"
                onClick={() => handleNavigation(service.path)}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <motion.div
                  className="absolute bottom-0 bg-white bg-opacity-50 p-4 rounded-b-lg w-full"
                  variants={textVariants}
                >
                  <div className="marquee">
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-2 text-text">
                      {service.title}
                    </h2>
                    <p className="marquee">
                      <span className="text-red font-bold text-lg">Notice:</span> {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;