import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectFade  } from "swiper/modules";

import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles.css";
import 'swiper/css/scrollbar';


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
    id: "greeting",
    title: "Happy New Year from Care Clinic",
    image: "/newYear.jpg",
    path:"/",
    description:"We wish you all a very happy new Year 2025. May this year bring you all the health, happiness and prosperity.",
  },
  {
    id: "stretching-card",
    title: "Full Body Stretching",
    image: "/stretching.jpg",
    path: "/service/stretching-card",
    description:"",
  },
  {
    id: "chiropractic-therapy",
    title: "Chiropractic Therapy",
    image: "/chriopractor.png",
    path: "/service/chiropractic-therapy",
    description:"Hello",
  },
  {
    id: "sports-physiotherapy",
    title: "Sports Physiotherapy",
    image: "/sport.jpg",
    path: "/service/sports-physiotherapy",
    description:"Hello",
  },
  {
    id: "needle-therapy",
    title: "Needle Therapy",
    image: "/needle.jpg",
    path: "/service/needle-therapy",
    description:"Hello",
  },
  {
    id : "yoga",
    title: "Yoga",
    image: "/yoga.jpg",
    path: "/service/yoga",
    description:"Hello",
  },
  {
    id: "cupping-therapy",
    title: "Cupping Therapy",
    image: "/cupping.png",
    path: "/service/cupping-therapy",
    description:"Hello",
  },
  {
    id: "boxing-training",
    title: "Boxing Training",
    image: "/boxing.jpg",
    path: "/service/boxing-training",
    description:"Hello",
  },
];

const Banner: React.FC = () => {
  const navigate = useNavigate();

  // Ensure the handleNavigation function has a typed parameter
  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  return (
    <div className="font-manrope flex flex-col">
      <div className=" h-[500px] lg:h-[700px] xl:h-[900px] bg-gray-700 rounded-t-2xl rounded-b-2xl text-[#28323f]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 15000, disableOnInteraction: false }} // Set autoplay delay to 15 seconds
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, EffectFade ]}
          className="w-full h-full"
          effect="fadeIn"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div
                className="w-full h-full relative cursor-pointer"
                onClick={() => handleNavigation(service.path)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 bg-white bg-opacity-50 p-4 rounded-b-lg w-full">
                  <div className="marquee">
                    <h2 className="text-2xl font-bold text-center mb-2 text-text">{service.title}</h2>
                    <p className="marquee"><span className="text-red font-bold text-lg">Notice:</span>&nbsp;&nbsp;{service.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;