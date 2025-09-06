
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Team from "../components/Team";

// Define the type for content items
interface ContentItem {
  id: string;
  type: string;
  text: string;
}

// Text content array
const content: ContentItem[] = [
  {
    id: "heading-1",
    type: "heading",
    text: "About Us",
  },
  {
    id: "intro",
    type: "paragraph",
    text: "Welcome to Muscle Care Clinic, a modern and specialized healthcare facility dedicated to the treatment and prevention of muscle-related injuries and conditions. Our clinic is more than just a place to recover; it is a sanctuary where science meets care, and every detail is meticulously designed to help our patients achieve optimal physical health and well-being.",
  },
  {
    id: "goals-heading",
    type: "heading",
    text: "Goals and Objectives of Our Team",
  },
  {
    id: "goals-1",
    type: "paragraph",
    text: "The role of our physical therapy team in neurological, orthopedic, cardiology, and sport rehabilitation is invaluable. Our team brings expertise, dedication, and a personalized approach to help individuals with various conditions regain their physical abilities and independence.",
  },
  {
    id: "goals-3",
    type: "paragraph",
    text: "In the case of injury or surgery, we can help to reduce pain and swelling, improve mobility and flexibility, and restore functional abilities. It can also help to prevent complications and facilitate a faster recovery process.",
  },
  {
    id: "services",
    type: "paragraph",
    text: "At Muscle Care Clinic, we understand that each individual's journey to health is unique. That’s why we offer a comprehensive range of services, each tailored to meet the specific needs of our clients. Our services include advanced physiotherapy, chiropractic care, and personalized exercise programs. Whether you’re recovering from an injury, managing chronic pain, or simply looking to enhance your overall muscle health, our clinic is equipped to support your goals with cutting-edge techniques and compassionate care.",
  },
  {
    id: "team",
    type: "paragraph",
    text: "Our team is composed of highly skilled professionals who bring a wealth of experience and expertise to the clinic. Kin, a seasoned physiotherapist, professional boxer, and gym trainer, offers a dynamic approach to recovery and fitness. Mahesh, our expert physiotherapist and chiropractor, combines traditional practices with innovative methods to provide holistic care. Abhishek, a professional gym trainer and administrative personnel, ensures that every aspect of your experience at Muscle Care Clinic is seamless and personalized.",
  },
  {
    id: "vision",
    type: "paragraph",
    text: "We pride ourselves on our vision to offer not just treatments but transformative experiences. Our mission is to create a supportive and healing environment where every patient can achieve optimal physical function, prevent future injuries, and maintain long-term muscle health. By integrating advanced techniques, personalized care, and continuous education, we aspire to empower individuals to live healthier, more active lives.",
  },
  {
    id: "holistic",
    type: "paragraph",
    text: "At Muscle Care Clinic, we believe that recovery is not just about healing the body, but also about nurturing the mind. We strive to offer a holistic approach to health, combining physical treatments with supportive care that addresses the emotional and mental aspects of recovery. We invite you to explore the possibilities at Muscle Care Clinic, where your journey to optimal muscle health begins. Whether you are a professional athlete or someone dealing with chronic pain, our clinic is committed to providing the highest quality care tailored to your unique needs. Join us and take the first step towards a healthier, more active life.",
  },
  {
    id: "gallery-link",
    type: "button",
    text: "Visit Our Galleries",
  },
  {
    id: "show-more-button",
    type: "button",
    text: "Show More",
  },
  {
    id: "show-less-button",
    type: "button",
    text: "Show Less",
  },
];

// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const About = () => {

  // Helper function to safely get text from content array
  const getContentText = (id: string, fallback: string = "Content not found"): string => {
    return content.find((item) => item.id === id)?.text ?? fallback;
  };

  return (
    <motion.div
      className="flex flex-col font-manrope"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className=" py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Gallery Link */}
        <motion.div className="flex justify-end" variants={itemVariants}>
          <Link
            to="/about/gallery"
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-indigo-600 py-2 px-4 rounded-full text-gold font-semibold hover:shadow-lg hover:from-indigo-600 hover:to-primary transition-all duration-300"
          >
            {getContentText("gallery-link")}
            <FaArrowRight />
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-text font-heading mt-8 mb-10 tracking-tight"
          variants={itemVariants}
        >
          {getContentText("heading-1")}
        </motion.h1>

        {/* Content */}
        <motion.div className="flex flex-col gap-8 text-gray-700 text-base md:text-lg font-medium" variants={containerVariants}>
          <motion.p variants={itemVariants}>
            {getContentText("intro")}
          </motion.p>

          {/* Goals and Objectives */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl text-text font-heading mb-6 tracking-tight">
              {getContentText("goals-heading")}
            </h2>
            <div className="flex flex-col gap-6">
              {content
                .filter((item) => item.id.startsWith("goals-") && !item.id.startsWith("goals-heading"))
                .map((item) => (
                  <motion.p key={item.id} variants={itemVariants}>
                    {item.text}
                  </motion.p>
                ))}
            </div>
          </motion.div>

          <motion.p variants={itemVariants}>
            {getContentText("services")}
          </motion.p>

          <motion.p variants={itemVariants}>
            {getContentText("team")}
          </motion.p>

          <Team />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;