import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterDark from "../components/FooterDark";

const ServiceDetails = () => {
  const { id } = useParams();

  // Define the service data
  const services = [
    {
      id:"post-surgery-physiotherapy",
      title:"Post Surgery Physiotherapy",
      description:"Post-surgery physiotherapy is a crucial part of the recovery process. Our skilled therapists will create a personalized treatment plan to help you regain strength, mobility, and function after surgery. Get back on your feet faster with our expert care. This is a very important part of the recovery process after surgery. Our skilled therapists will create a personalized treatment plan to help you regain strength, mobility, and function after surgery. Get back on your feet faster with our expert care.",
      src:"/postSurgerHos.jpg",
      points:["Recovery","Mobility","Strength","Function"],
    },
    {
      id: "orthopaedic-physiotherapy",
      title: "Orthopaedic Physiotherapy",
      description:
        "Orthopaedic physiotherapy focuses on the treatment of musculoskeletal conditions, including injuries and disorders of the bones, muscles, ligaments, tendons, and joints. Our expert therapists will create a customized treatment plan to help you recover from orthopaedic injuries and surgeries.m Our expert therapists will create a customized treatment plan to help you recover from orthopaedic injuries and surgeries.",
      src: "/ortho.jpg",
      points: ["Musculoskeletal Health", "Injury Recovery", "Mobility", "Function"],
    },
    {
      id: "neurology-physiotherapy",
      title: "Neurology Physiotherapy",
      description:
        "Neurology physiotherapy focuses on the treatment of neurological conditions, including stroke, spinal cord injury, Parkinson's disease, and multiple sclerosis. Our expert therapists will create a personalized treatment plan to help you improve movement, balance, and function.",
      src: "/Neuro.jpg",
      points: ["Neurological Health", "Movement", "Balance", "Function"],
    },
    {
      id: "sports-physiotherapy",
      title: "Sports Physiotherapy",
      description:
        "Sports physiotherapy focuses on the treatment and prevention of sports-related injuries. Our expert therapists will create a personalized treatment plan to help you recover from injuries, improve performance, and prevent future injuries. Get back in the game with our specialized care. This is a very important part of the recovery process after surgery. Our skilled therapists will create a personalized treatment plan to help you regain strength, mobility, and function after surgery. Get back on your feet faster with our expert care.",
      src: "/sport.jpg",
      points: ["Injury Recovery", "Performance Enhancement", "Prevention", "Mobility"],
    },
    {
      id: "pediatric-physiotherapy",
      title: "Pediatric Physiotherapy",
      description:
        "Pediatric physiotherapy focuses on the treatment of children with movement disorders, developmental delays, and musculoskeletal conditions. Our expert therapists will create a fun and engaging treatment plan to help your child reach their full potential.",
      src: "/cupping.png",
      points: ["Child Development", "Movement", "Function", "Engagement"],
    },
    {
      id: "rehabilitation",
      title: "Rehabilitation",
      description:
        "Rehabilitation is a crucial part of the recovery process after injury, surgery, or illness. Our expert therapists will create a personalized treatment plan to help you regain strength, mobility, and function, and improve your quality of life.",
      src: "/relax.jpg",
      points: ["Recovery", "Mobility", "Strength", "Function"],
    },
    {
      id: "knee-pain",
      title: "Knee Pain",
      description:
        "Knee pain can be debilitating, affecting your ability to walk, run, and perform daily activities. Our expert therapists will create a personalized treatment plan to help you reduce pain, improve mobility, and regain function in your knees.",
      src: "/stretching.jpg",
      points: ["Pain Relief", "Mobility", "Function", "Strength"],
    },
    {
      id: "spinal-injuries",
      title: "Spinal Injuries",
      description:
        "Spinal injuries can be life-changing, affecting your ability to move, work, and enjoy life. Our expert therapists will create a personalized treatment plan to help you recover from spinal injuries, reduce pain, and improve function.",
      src: "/relax.jpg",
      points: ["Injury Recovery", "Pain Relief", "Mobility", "Function"],
    },
    {
      id: "foot-and-ankle",
      title: "Foot and Ankle Pain",
      description:
        "Foot and ankle pain can make it difficult to walk, run, and stand for long periods. Our expert therapists will create a personalized treatment plan to help you reduce pain, improve mobility, and regain function in your feet and ankles.",
      src: "/cupping.png",
      points: ["Pain Relief", "Mobility", "Function", "Strength"],
    },
    {
      id: "hip-and-back",
      title: "Hip and Back Pain",
      description: "Hip and Back Pain can make it difficult to walk, run, and stand for long periods. Our expert therapists will create a personalized treatment plan to help you reduce pain, improve mobility, and regain function in your hips and back.",
      src: "/cupping.png",
      points: ["Pain Relief", "Mobility", "Function", "Strength"],
    },
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
      id: "chiropractic",
      title: "Chiropractic Therapy",
      description:
        "Chiropractic therapy focuses on spinal alignment involving manual adjustments for optimal health, alleviate pain, improve function and support overall health.",
      src: "/chiro.jpg",
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
      src: "/relax.jpg",
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
      id: "cryotherapy",
      title: "Cryotherapy",
      src: "/cryo.webp",
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
    <div className=" bg-primary h-full flex flex-col gap-10 px-10">
      <Navbar />
      <div className="w-full bg-secondary rounded-t-2xl rounded-b-2xl mt-10 xl:p-20 p-5">
        <h1 className=" font-bold mb-2 text-center text-3xl text-white">
          {service.title}
        </h1>
        <div className=" py-3 xl:py-7 flex xl:flex-row flex-col xl:items-center gap-5">
          <img
            src={service.src}
            alt={service.title}
            className="w-full h-auto xl:w-1/2"
            style={{ borderRadius: "20px"}}
          />
          <div className="gap-4 xl:p-5 flex flex-col p-3">
            <p className="text-white text-bold">{service.description}</p>
            <ul className="pl-5">
              {service.points?.map((point, index) => (
                <li key={index} style={{ listStyle: "disc" ,color:"#fdfdfd"}}>
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
