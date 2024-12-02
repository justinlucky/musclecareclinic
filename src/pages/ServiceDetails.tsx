import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterDark from "../components/FooterDark";

const ServiceDetails = () => {
  const { id } = useParams();

  // Define the service data
  const services = [
    {
      id: "stretching-card",
      title: "Stretching",
      description:
        "Stretching is a gentle way to prepare your muscles for activity. It also improves flexibility and mobility and beneficial for overall muscle health.",
      src: "/stretching.jpg",
      points: [
        "Flexibility",
        "Mobility",
        "Relaxation",
        "Performance Enhancement",
      ],
    },
    {
      id: "chiropractic-therapy",
      title: "Chiropractic Therapy",
      description:
        "Chiropractic therapy focuses on spinal alignment involving manual adjustments for optimal health, alleviate pain, improve function and support overall health.",
      src: "/chriopractor.png",
      points: ["Alignment", "Mobility", "Wellness", "Function"],
    },
    {
      id: "needle-therapy",
      title: "Needle Therapy",
      description:
        "Ready to embark on a journey to better health? Acupuncture offers a natural and effective way to address various health concerns. Book an appointment today and discover the transformation benefits of this ancient practice.",
      src: "/needle.jpg",
      points: ["Balance", "Pain Relief", "Healing", "Energy Flow"],
    },
    {
      id: "cupping-therapy",
      title: "Cupping Therapy",
      src: "/needle.jpg",
      description:
        "Experience the soothing power of cupping therapy. Our skilled practitioners will apply cups to your skin to promote blood flow, relieve muscle tension, and accelerate healing. Relax and let your body rejuvenate.",
      points: [
        "Circulation",
        "Pain Relief",
        "Inflammation Reduction",
        "Muscle Recovery",
      ],
    },
    {
      id: "full-body-relaxation",
      title: "Full Body Relaxation",
      src: "relax.jpg",
      description:
        "Indulge in pure tranquility with our full-body relaxation massage. Our skilled therapists will melt away your stress and tension, leaving you feeling rejuvenated and refreshed. Experience the ultimate escape from the demands of daily life.",
      points: [
        "Stress Relief",
        "Relaxation",
        "Improved Sleep",
        "Mental Clarity",
      ],
    },
    {
      id: "kinesiology-taper",
      title: "Kinesiology Tape",
      src: "/tape.webp",
      description:
        "Kinesiology tape is a versatile tool that can help reduce pain, improve flexibility, and enhance performance. Our therapists will apply the tape strategically to support your muscles and joints, allowing you to move with greater ease and comfort.",
      points: ["Support", "Pain Relief", "Circulation", "Muscle Activation"],
    },
    {
      id: "cryotherapy",
      title: "Cryotherapy",
      src: "cryo.webp",
      description:
        "Immerse yourself in the invigorating cold of cryotherapy. Our state-of-the-art cryotherapy chamber offers rapid whole-body cooling, reducing inflammation, alleviating pain, and boosting recovery. Experience the future of wellness today.",
      points: ["Muscle Soreness", "Mental Alertness", "Recovery"],
    },
    {
      id: "boxing-and-fitness",
      title: "Boxing and Fitness Boxing",
      src: "/boxing.jpg",
      description:
        "Combine the thrill of boxing with the power of fitness. Our expert trainers will guide you through intense workouts that build strength, agility, and cardiovascular health. Unleash your inner fighter and achieve your fitness goals.",
      points: ["Endurance", "Strength", "Motivation", "Discipline"],
    },
    {
      id: "high-intensity-interval-training",
      title: "High Intensity Interval Training",
      src: "/hiit.webp",
      description:
        "HIIT it hard with our intense interval training sessions. Our expert trainers will push you to your limits, helping you burn calories, build muscle, and boost your metabolism. Get ready to transform your body and mind.",
      points: [
        "Efficiency",
        "Fat Burn",
        "Fitness",
        "Metabolism Boost",
        "Time Efficient",
      ],
    },
    {
      id: "circuit-training",
      title: "Circuit Training",
      src: "/circuit.webp",
      description:
        "Transform your body with our dynamic circuit training sessions. Our expert trainers will guide you through a series of exercises designed to build strength, endurance, and flexibility. Achieve your fitness goals and feel energized.",
      points: ["Strength", "Endurance", "Full-Body Workout"],
    },
  ];

  // Find the service by id
  const service = services.find((item) => item.id === id);

  // If the service is not found, show a fallback
  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div className="p-6 bg-primary h-full flex flex-col gap-10">
      <Navbar />
      <div className="w-full bg-white rounded-t-2x1 mt-20 md:p-20 pb-28" style={{borderRadius:"20px"}}>
        <h1 className="text-3xl font-bold mb-4 text-center">
          {service.title}
        </h1>
        <div>
          <img
            src={service.src}
            alt={service.title}
            className="w-full h-auto mb:p-20"
            style={{ borderRadius: "20px" }}
          />
          <div>
            <p>{service.description}</p>
            <ul>
              {service.points?.map((point, index) => (
                <li key={index} style={{ listStyle: "disc" }}>
                  {point}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "30px", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Link
                to={`/service/booking/${service.id}`}
                className="bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-md"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterDark/>
    </div>
  );
};

export default ServiceDetails;
