import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  // Define the service data
  const services = [
    {
      id: "stretching-card",
      title: "Stretching",
      description: "Stretching is a gentle way to prepare your muscles for activity.",
      src: "/stretching.jpg",
    },
    {
      id: "chiropractic-therapy",
      title: "Chiropractic Therapy",
      description: "Chiropractic therapy focuses on spinal alignment for optimal health.",
      src: "/chriopractor.png",
    },
    {
        id: "needle-therapy",
        title: "Needle Therapy",
        src:"/needle.jpg",
    },
    {
        id:"cupping-therapy",
        title:"Cupping Therapy",
        src:"/needle.jpg",
    },
    {
        id:"full-body-relaxation",
        title:"Full Body Relaxation",
        src:"relax.jpg",
    },
    {
        id: "kinesiology-taper",
        title:"Kinesiology Tape",
        src:"/tape.webp",
    },
    {
        id: "cryotherapy",
        title:"Cryotherapy",
        src:"cryo.webp",
    },
    {
        id: "boxing-and-fitness",
        title: "Boxing and Fitness Boxing",
        src:"/boxing.jpg",
    },
    {
        id: "high-intensity-interval-training",
        title:"High Intensity Interval Training",
        src:"/hiit.webp",
    },
    {   
        id:"circuit-training",
        title:"Circuit Training",
        src:"/circuit.webp",
    }
  ];

  // Find the service by id
  const service = services.find((item) => item.id === id);

  // If the service is not found, show a fallback
  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <img src={service.src} alt={service.title} className="w-full h-auto mb-4" />
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetails;
