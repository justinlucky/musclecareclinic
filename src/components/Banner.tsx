
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//import { Navigation } from "swiper";

// Define a type for services
type Service = {
  id: string;
  title: string;
  image: string;
  path: string;
};

// Define the services array with proper typing
const services: Service[] = [
  {
    id: "stretching-card",
    title: "Stretching",
    image: "/stretching.jpg",
    path: "/service/stretching-card",
  },
  {
    id: "chiropractic-therapy",
    title: "Chiropractic Therapy",
    image: "/chiropractic.jpg",
    path: "/service/chiropractic-therapy",
  },
  {
    id: "needle-therapy",
    title: "Needle Therapy",
    image: "/needle-therapy.jpg",
    path: "/service/needle-therapy",
  },
  // Add other services as needed...
];

const Banner: React.FC = () => {
  const navigate = useNavigate();

  // Ensure the handleNavigation function has a typed parameter
  const handleNavigation = (path: string): void => {
    navigate(path);
  };

  return (
    <div className="font-manrope flex flex-col">
      <div className="w-full md:h-[700px] h-60 xl:h-[900px] bg-gray-700 rounded-t-2xl rounded-b-2xl text-[#28323f] flex gap-4 items-center justify-center">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          //modules={[Navigation]}
          className="w-full h-full"
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
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-5 left-5 bg-white bg-opacity-70 p-4 rounded-lg">
                  <h2 className="text-lg font-bold">{service.title}</h2>
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

