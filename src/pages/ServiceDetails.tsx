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
      description:"Post-surgery physiotherapy is essential for recovery. Our therapists create personalized plans to help you regain strength, mobility, and function after surgery. This includes exercises, manual therapy, and education to ensure a smooth and effective recovery process.",
      src:"/postSurgerHos.jpg",
      points:["Recovery","Mobility","Strength","Function"],
    },
    {
      id: "orthopaedic-physiotherapy",
      title: "Orthopaedic Physiotherapy",
      description:
        "Orthopaedic physiotherapy treats musculoskeletal conditions. Our therapists create customized plans to help you recover from injuries and surgeries. This involves pain management, rehabilitation exercises, and techniques to restore movement and prevent future injuries.",
      src: "/ortho.jpg",
      points: ["Musculoskeletal Health", "Injury Recovery", "Mobility", "Function"],
    },
    {
      id: "neurology-physiotherapy",
      title: "Neurology Physiotherapy",
      description:
        "Neurology physiotherapy treats neurological conditions like stroke and Parkinson's. Our therapists create personalized plans to improve movement, balance, and function. This includes specialized exercises, balance training, and neuro-rehabilitation techniques.",
      src: "/Neuro.jpg",
      points: ["Neurological Health", "Movement", "Balance", "Function"],
    },
    {
      id: "sports-physiotherapy",
      title: "Sports Physiotherapy",
      description:
        "Sports physiotherapy treats and prevents sports-related injuries. Our therapists create personalized plans to help you recover, improve performance, and prevent future injuries. This includes strength training, flexibility exercises, and sport-specific rehabilitation.",
      src: "/sport.jpg",
      points: ["Injury Recovery", "Performance Enhancement", "Prevention", "Mobility"],
    },
    {
      id: "pediatric-physiotherapy",
      title: "Pediatric Physiotherapy",
      description:
        "Pediatric physiotherapy treats children with movement disorders and developmental delays. Our therapists create engaging plans to help your child reach their full potential. This includes play-based therapy, developmental exercises, and family education.",
      src: "/Pediatric.jpg",
      points: ["Child Development", "Movement", "Function", "Engagement"],
    },
    {
      id: "rehabilitation",
      title: "Rehabilitation",
      description:
        "Rehabilitation is crucial after injury, surgery, or illness. Our therapists create personalized plans to help you regain strength, mobility, and function, improving your quality of life. This includes comprehensive assessments, tailored exercises, and continuous support.",
      src: "/rehab.jpg",
      points: ["Recovery", "Mobility", "Strength", "Function"],
    },
    {
      id: "knee-pain",
      title: "Knee Pain",
      description:
        "Knee pain affects your ability to walk and perform daily activities. Our therapists create personalized plans to reduce pain, improve mobility, and regain function in your knees. This includes pain management techniques, strengthening exercises, and mobility training.",
      src: "/postSurgery.jpg",
      points: ["Pain Relief", "Mobility", "Function", "Strength"],
    },
    {
      id: "spinal-injuries",
      title: "Spinal Injuries",
      description:
        "Spinal injuries can be life-changing. Our therapists create personalized plans to help you recover, reduce pain, and improve function. This includes spinal stabilization exercises, pain management, and functional training.",
      src: "/spinal.jpg",
      points: ["Injury Recovery", "Pain Relief", "Mobility", "Function"],
    },
    {
      id: "foot-and-ankle",
      title: "Foot and Ankle Pain",
      description:
        "Foot and ankle pain makes it difficult to walk and stand. Our therapists create personalized plans to reduce pain, improve mobility, and regain function. This includes targeted exercises, pain relief techniques, and balance training.",
      src: "/ankle.jpg",
      points: ["Pain Relief", "Mobility", "Function", "Strength"],
    },
    {
      id: "stroke",
      title: "Stroke Rehabilitation",
      description: "Hip and back pain affects your ability to walk and stand. Our therapists create personalized plans to reduce pain, improve mobility, and regain function. This includes pain management, strengthening exercises, and mobility training.",
      src: "/hip.jpg",
      points: ["Pain Relief", "Mobility", "Function", "Strength"],
    },
    {
      id: "body-stretching",
      title: "Complete Body Stretching",
      description:
        "Stretching prepares your muscles for activity, improves flexibility and mobility, and benefits overall muscle health. Our therapists guide you through effective stretching routines to enhance performance and prevent injuries.",
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
        "Chiropractic therapy focuses on spinal alignment with manual adjustments to alleviate pain, improve function, and support overall health. Our chiropractors use hands-on techniques to enhance your well-being.",
      src: "/chiro.jpg",
      points: ["Alignment", "Mobility", "Wellness", "Function"],
    },
    {
      id: "dry-needle",
      title: "Dry Needle Therapy",
      description:
        "Acupuncture offers a natural way to address various health concerns. Book an appointment to discover the benefits of this ancient practice. Our therapists use fine needles to stimulate specific points, promoting healing and balance.",
      src: "/needle.jpg",
      points: ["Balance", "Pain Relief", "Healing", "Energy Flow"],
    },
    {
      id: "cupping-therapy",
      title: "Cupping Therapy",
      src: "/cupping.png",
      description:
        "Cupping therapy promotes blood flow, relieves muscle tension, and accelerates healing. Experience the soothing power of this therapy. Our therapists use suction cups to enhance circulation and reduce pain.",
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
        "Indulge in full-body relaxation massage to melt away stress and tension, leaving you rejuvenated and refreshed. Our therapists use gentle techniques to promote relaxation and improve overall well-being.",
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
        "Cryotherapy offers rapid whole-body cooling to reduce inflammation, alleviate pain, and boost recovery. Experience the future of wellness. Our therapists use advanced techniques to provide effective cryotherapy sessions.",
      points: ["Muscle Soreness", "Mental Alertness", "Recovery"],
    },
    {
      id: "boxing-and-fitness",
      title: "Boxing and Fitness Boxing",
      src: "/boxing.jpg",
      description:
        "Combine boxing with fitness. Our trainers guide you through workouts that build strength, agility, and cardiovascular health. This includes boxing drills, strength training, and conditioning exercises.",
      points: ["Endurance", "Strength", "Motivation", "Discipline"],
    },
    {
      id: "circuit-training",
      title: "Circuit Training",
      src: "/circuit.webp",
      description:
        "Circuit Training sessions push you to your limits, helping you burn calories, build muscle, and boost metabolism. Transform your body and mind. Our trainers design high-intensity workouts to maximize your fitness results.",
      points: [
        "Efficiency",
        "Fat Burn",
        "Fitness",
        "Metabolism Boost",
        "Time Efficient",
      ],
    },
    {
      id: "athletic-training",
      title: "Athletic Training",
      src: "/hiit.webp",
      description:
        "Circuit training sessions build strength, endurance, and flexibility. Achieve your fitness goals and feel energized. Our trainers create dynamic circuits to challenge your entire body.",
      points: ["Strength", "Endurance", "Full-Body Workout"],
    },
    { 
      id: "weight-loss",
      title: "Weight Loss",
      description:
        "Our weight loss program combines exercise, nutrition, and lifestyle changes to help you achieve your goals. Our trainers and nutritionists create personalized plans to support your journey.",
      src: "/weightLoss.jpg",
      points: ["Exercise", "Nutrition", "Lifestyle Changes", "Support"],
        },
        {
      id: "weight-gain",
      title: "Weight Gain",
      description:
        "Our weight gain program focuses on building muscle and healthy weight. Our trainers and nutritionists create personalized plans to help you achieve your goals.",
      src: "/weightGain.jpg",
      points: ["Muscle Building", "Nutrition", "Strength Training", "Support"],
        },
        {
      id: "strengthening-training",
      title: "Strengthening Training",
      description:
        "Strengthening training helps you build muscle, improve endurance, and enhance overall fitness. Our trainers create personalized plans to help you achieve your strength goals.",
      src: "/strength.jpg",
      points: ["Muscle Building", "Endurance", "Fitness", "Strength"],
        },
        {
      id: "crossfit-training",
      title: "CrossFit Training",
      description:
        "CrossFit training combines high-intensity workouts with functional movements. Our trainers create dynamic plans to help you improve strength, endurance, and overall fitness.",
      src: "/CrossFitTraining.jpg",
      points: ["High-Intensity", "Functional Movements", "Strength", "Endurance"],
        },
        {
      id: "circuit-training",
      title: "Circuit Training",
      description:
        "Circuit training sessions push you to your limits, helping you burn calories, build muscle, and boost metabolism. Transform your body and mind. Our trainers design high-intensity workouts to maximize your fitness results.",
      src: "/circuit.webp",
      points: ["Efficiency", "Fat Burn", "Fitness", "Metabolism Boost", "Time Efficient"],
        },
        {
      id: "athletic-training",
      title: "Athletic Training (ROM)",
      description:
        "Athletic training focuses on improving range of motion, strength, and endurance. Our trainers create personalized plans to help you achieve your athletic goals.",
      src: "/hiit.webp",
      points: ["Range of Motion", "Strength", "Endurance", "Athletic Performance"],
        },
        {
      id: "boxing-training",
      title: "Boxing Training",
      description:
        "Boxing training combines cardio and strength exercises to improve fitness and technique. Our trainers create personalized plans to help you achieve your boxing goals.",
      src: "/boxing.jpg",
      points: ["Cardio", "Strength", "Technique", "Fitness"],
        },
        {
      id: "yoga",
      title: "Yoga",
      description:
        "Yoga improves flexibility, strength, and mental clarity. Our instructors guide you through personalized yoga sessions to enhance your well-being.",
      src: "/yoga.jpg",
      points: ["Flexibility", "Strength", "Mental Clarity", "Well-Being"],
        },
        {
      id: "nutrition-diet",
      title: "Nutrition Diet",
      description:
        "Our nutrition diet program focuses on creating healthy eating habits. Our nutritionists create personalized plans to support your health and fitness goals.",
      src: "/Deit.jpg",
      points: ["Healthy Eating", "Personalized Plans", "Support", "Well-Being"],
        },
        {
          id: "geriatric-care",
          title: "Geriatric Care",
          description:
            "Geriatric care focuses on the health and well-being of older adults. Our therapists create personalized plans to address age-related issues, improve mobility, and enhance quality of life. This includes exercises, pain management, and support for daily activities.",
          src: "/neck.jpg",
          points: ["Age-Related Issues", "Mobility", "Quality of Life", "Support"],
        },
        {
          id: "massage-therapy",
          title: "Soft Muscle Mobilization",
          description:
            "Soft muscle mobilization helps relieve muscle tension and improve flexibility. Our therapists use gentle techniques to enhance muscle function and promote relaxation.",
          src: "/massage.jpg",
          points: ["Muscle Tension Relief", "Flexibility", "Relaxation", "Function"],
        }
  ];

  // Find the service by id
  const service = services.find((item) => item.id === id);

  // If the service is not found, show a fallback
  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div className=" bg-primary h-full flex flex-col gap-10 px-5">
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
