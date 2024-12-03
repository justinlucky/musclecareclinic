import { Link } from "react-router-dom";
import FooterDark from "../components/FooterDark";
import Navbar from "../components/Navbar";

const Services = () => {
  const servicesData = [
    {
      id: "cupping-therapy",
      title: "Cupping Therapy",
      description:
        "Cupping therapy is an ancient practice that uses suction cups to stimulate blood flow and reduce pain. It includes Hijama Cupping, Vacuum Cupping, and Fire Cupping.",
      points: [
        "Pain relief",
        "Improved circulation",
        "Relaxation",
        "Improved range of motion",
      ],
      imgSrc: "/cupping.png",
    },
    {
      id: "stretching-card",
      title: "Stretching",
      description:
        "Stretching is essential for improving flexibility and mobility. It helps in preventing injuries and is beneficial for overall muscle health.",
      points: [
        "Improved range of motion",
        "Improved circulation",
        "Reduced muscle tension",
        "Improved posture",
        "Decreased stress",
      ],
      imgSrc: "/stretching.jpg",
    },
    {
      id: "needle-therapy",
      title: "Dry Needling",
      description:
        "Dry needling is used to treat musculoskeletal pain by inserting thin needles into trigger points, helping to reduce muscle tightness and pain.",
      points: ["Reduces muscle tightness", "Increases blood flow", "Pain management"],
      imgSrc: "/needle.jpg",
    },
    {
      id: "chiropractic-therapy",
      title: "Chiropractic Care",
      description:
        "Chiropractic care involves manual adjustments of the spine and joints to alleviate pain, improve function, and support overall health.",
      points: [
        "Pain relief",
        "Improved range of motion",
        "Better balance",
        "Improved posture",
        "Enhanced sleep",
        "Improved athletic performance",
      ],
      imgSrc: "/chriopractor.png",
    },
    {
      id: "full-body-relaxation",
      title: "Full Body Relaxation",
      description:
        "This comprehensive service combines heat therapy, stretching, chiropractic adjustments, and muscle stimulation to provide full-body relaxation.",
      points: ["Overall relaxation", "Pain relief", "Enhanced recovery"],
      imgSrc: "/relax.jpg",
    },
    {
      id: "kinesiology-taper",
      title: "Kinesiology Tape Therapy",
      description:
        "Kinesiology tape therapy involves applying elastic, adhesive tape to the skin to support muscles and joints without restricting movement.",
      points: [
        "Relieves muscle and joint pain",
        "Improves blood circulation and reduces swelling",
        "Supports muscles without restricting movement",
        "Speeds up recovery from injuries",
      ],
      imgSrc: "/tape.webp",
    },
    {
      id: "cryotherapy",
      title: "Cryotherapy",
      description:
        "A cold therapy treatment that uses extremely low temperatures to reduce pain, inflammation, and support recovery.",
      points: [
        "Quick pain relief and reduced inflammation",
        "Faster recovery for athletes and muscle soreness",
        "Improvement in skin conditions and metabolism",
        "Boosted mental health and immune system",
      ],
      imgSrc: "/cryo.webp",
    },
    {
      id: "boxing-and-fitness",
      title: "Boxing and Fitness",
      description:
        "A full-body workout combining boxing techniques with physical training to enhance strength, endurance, coordination, and cardiovascular health.",
      points: [
        "Improved cardiovascular health and stamina",
        "Boosts muscular endurance and strength",
        "Enhances balance, coordination, and agility",
        "Helps with stress relief and mental focus",
      ],
      imgSrc: "/boxing.jpg",
    },
    {
      id: "high-intensity-interval-training",
      title: "High-Intensity Interval Training (HIIT)",
      description:
        "A form of workout that alternates between intense bursts of exercise and short recovery periods, designed to improve fitness quickly.",
      points: [
        "Burns more calories in a shorter amount of time",
        "Improves heart health and cardiovascular endurance",
        "Builds muscle mass and increases metabolism",
        "Boosts mood and reduces stress",
      ],
      imgSrc: "/hiit.webp",
    },
    {
      id: "circuit-training",
      title: "Personal Circuit Training",
      description:
        "A training method that involves moving quickly from one exercise to another in a circuit to target different muscle groups and improve overall fitness.",
      points: [
        "Promotes weight loss by increasing metabolism",
        "Enhances cardiovascular fitness and muscular endurance",
        "Builds strength and flexibility",
        "Time-efficient, full-body workout",
      ],
      imgSrc: "/circuit.webp",
    },
  ];

  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary h-full gap-5">
      <Navbar />
      <div className="w-full bg-white rounded-t-2xl rounded-b-2xl mt-20 md:p-20 pb-28">
        <h1 className="text-5xl font-semibold py-5 text-text mx-10 mt-5">Services</h1>
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-8">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="flex flex-col gap-3 md:flex-row bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="md:w-1/3">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="list-disc list-inside mt-4 text-gray-600">
                      {service.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex items-center content-center mt-5">
                      <Link
                        to={`/service/booking/${service.id}`}
                        className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-900 rounded-md"
                        style={{ boxShadow: "2px 3px violet" }}
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <FooterDark />
    </div>
  );
};

export default Services;
