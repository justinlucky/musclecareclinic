import { Link } from "react-router-dom";
import FooterDark from "../components/FooterDark";
import Navbar from "../components/Navbar";

const Services = () => {
  const servicesData = [
    {
      id: "orthopaedic-physiotherapy",
      title: "Orthopaedic Physiotherapy",
      description: "Orthopaedic physiotherapy focuses on the treatment of musculoskeletal injuries and conditions, helping patients recover mobility and reduce pain.",
      points: [
        "Pain management",
        "Improved mobility",
        "Enhanced recovery",
        "Injury prevention",
      ],
      imgSrc: "/ortho.jpg",
    },
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
      id: "post-surgery-physiotherapy",
      title: "Post Surgery Physiotherapy",
      description: "Post-surgery physiotherapy helps patients recover faster by improving mobility, reducing pain, and restoring function after surgical procedures.",
      points: [
        "Enhanced recovery",
        "Pain management",
        "Improved mobility",
        "Reduced swelling",
      ],
      imgSrc: "/postSurgerHos.jpg",
    },
    {
      id: "body-stretching",
      title: "Full Body Stretching",
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
      id: "dry-needle",
      title: "Dry Needle Therapy",
      description:
        "Dry needling is used to treat musculoskeletal pain by inserting thin needles into trigger points, helping to reduce muscle tightness and pain.",
      points: ["Reduces muscle tightness", "Increases blood flow", "Pain management"],
      imgSrc: "/needle.jpg",
    },
    {
      id: "chiropractic",
      title: "Chiropractic Therapy",
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
      imgSrc: "/chiro.jpg",
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
      id:"athletic-training", 
      title: "Athletic Training (ROM)",
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
      title: "Circuit Training",
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
    {
      id: "neurology-physiotherapy",
      title: "Neurology Physiotherapy",
      description: "Neurology physiotherapy focuses on treating patients with neurological disorders to improve their mobility and quality of life.",
      points: [
      "Improved mobility",
      "Enhanced coordination",
      "Pain management",
      "Better balance",
      ],
      imgSrc: "/Neuro.jpg",
    },
    {
      id: "sports-physiotherapy",
      title: "Sports Physiotherapy",
      description: "Sports physiotherapy helps athletes recover from injuries and improve their performance through specialized exercises and treatments.",
      points: [
      "Injury prevention",
      "Enhanced recovery",
      "Improved performance",
      "Pain management",
      ],
      imgSrc: "/sport.jpg",
    },
    {
      id: "pediatric-physiotherapy",
      title: "Pediatric Physiotherapy",
      description: "Pediatric physiotherapy focuses on the physical development and rehabilitation of children to help them achieve their full potential.",
      points: [
      "Improved motor skills",
      "Enhanced coordination",
      "Pain management",
      "Better balance",
      ],
      imgSrc: "/Pediatric.jpg",
    },
    {
      id: "rehabilitation",
      title: "Rehabilitation",
      description: "Rehabilitation services help patients recover from injuries, surgeries, or illnesses to regain their strength and functionality.",
      points: [
      "Enhanced recovery",
      "Improved mobility",
      "Pain management",
      "Better quality of life",
      ],
      imgSrc: "/rehab.jpg",
    },
    {
      id: "geriatric-care",
      title: "Geriatric Care",
      description: "Geriatric care focuses on the health and well-being of elderly patients, helping them maintain their independence and quality of life.",
      points: [
      "Improved mobility",
      "Pain management",
      "Enhanced balance",
      "Better quality of life",
      ],
      imgSrc: "/neck.jpg",
    },
    {
      id: "knee-pain",
      title: "Knee Pain",
      description: "Knee pain treatment focuses on reducing pain and improving the function of the knee joint through various therapeutic techniques.",
      points: [
      "Pain relief",
      "Improved mobility",
      "Enhanced recovery",
      "Injury prevention",
      ],
      imgSrc: "/postSurgery.jpg",
    },
    {
      id: "spinal-injuries",
      title: "Spinal Injuries",
      description: "Spinal injury treatment focuses on improving the function and reducing pain in patients with spinal injuries through specialized therapies.",
      points: [
      "Pain management",
      "Improved mobility",
      "Enhanced recovery",
      "Better quality of life",
      ],
      imgSrc: "/spinal.jpg",
    },
    {
      id: "foot-and-ankle",
      title: "Foot and Ankle Pain",
      description: "Foot and ankle pain treatment focuses on reducing pain and improving the function of the foot and ankle through various therapeutic techniques.",
      points: [
      "Pain relief",
      "Improved mobility",
      "Enhanced recovery",
      "Injury prevention",
      ],
      imgSrc: "/ankle.jpg",
    },
    {
      id: "stroke",
      title: "Stroke Rehabilitation",
      description: "Stroke rehabilitation helps patients recover from the effects of a stroke, improving their mobility and quality of life through specialized therapies.",
      points: [
      "Improved mobility",
      "Enhanced coordination",
      "Pain management",
      "Better quality of life",
      ],
      imgSrc: "/hip.jpg",
    },
    {
      id: "weight-loss",
      title: "Weight Loss",
      description: "Weight loss programs designed to help you shed excess weight through a combination of diet, exercise, and lifestyle changes.",
      points: [
      "Personalized diet plans",
      "Effective workout routines",
      "Regular progress tracking",
      "Support and motivation",
      ],
      imgSrc: "/weightLoss.jpg",
    },
    {
      id: "weight-gain",
      title: "Weight Gain",
      description: "Weight gain programs focused on helping you build muscle mass and achieve a healthy weight through proper nutrition and exercise.",
      points: [
      "Customized meal plans",
      "Strength training exercises",
      "Progress monitoring",
      "Nutritional guidance",
      ],
      imgSrc: "/weightGain.jpg",
    },
    {
      id: "strengthening-training",
      title: "Strengthening Training",
      description: "Strength training programs aimed at increasing muscle strength and endurance through resistance exercises and weightlifting.",
      points: [
      "Personalized workout plans",
      "Strength and conditioning",
      "Progress tracking",
      "Injury prevention",
      ],
      imgSrc: "/strength.jpg",
    },
    {
      id: "crossfit-training",
      title: "CrossFit Training",
      description: "CrossFit training combines high-intensity workouts with functional movements to improve overall fitness and performance.",
      points: [
      "High-intensity workouts",
      "Functional movements",
      "Community support",
      "Improved fitness",
      ],
      imgSrc: "/CrossFitTraining.jpg",
    },
    {
      id: "yoga",
      title: "Yoga",
      description: "Yoga sessions designed to improve flexibility, strength, and mental well-being through various poses and breathing techniques.",
      points: [
      "Improved flexibility",
      "Enhanced strength",
      "Stress relief",
      "Better mental focus",
      ],
      imgSrc: "/yoga.jpg",
    },
    {
      id: "nutrition-diet",
      title: "Nutrition Diet",
      description: "Nutrition and diet plans tailored to your specific needs to help you achieve your health and fitness goals.",
      points: [
      "Personalized meal plans",
      "Nutritional guidance",
      "Healthy eating habits",
      "Support and motivation",
      ],
      imgSrc: "/Deit.jpg",
    }
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
