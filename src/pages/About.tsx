
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import Navbar from "../components/Navbar";
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
    id: "goals-2",
    type: "paragraph",
    text: "Our team aims to restore movement and function of the body through the use of exercises, stretches, and other treatments. It can be used to manage a wide range of conditions, including musculoskeletal injuries, neurological conditions, and cardiovascular and respiratory conditions.",
  },
  {
    id: "goals-3",
    type: "paragraph",
    text: "In the case of injury or surgery, we can help to reduce pain and swelling, improve mobility and flexibility, and restore functional abilities. It can also help to prevent complications and facilitate a faster recovery process.",
  },
  {
    id: "show-more-1",
    type: "paragraph",
    text: "In the early stages of rehabilitation, our team focuses on reducing pain and swelling through the use of modalities such as heat and ice therapy, electrical stimulation, and massage. These modalities can help to reduce inflammation and improve blood flow to the affected area, which can in turn help to reduce pain and promote healing.",
  },
  {
    id: "show-more-2",
    type: "paragraph",
    text: "As the individual’s condition improves, the focus of treatment may shift to improving mobility and flexibility through exercises and modalities. These exercises may be designed to strengthen the muscles around the affected area, improve range of motion, and restore normal movement patterns.",
  },
  {
    id: "show-more-3",
    type: "paragraph",
    text: "In the later stages of rehabilitation, our team focuses on restoring functional abilities and helping the individual return to their pre-injury or pre-surgery level of activity. This may involve activities such as gait training, balance training, and functional exercises.",
  },
  {
    id: "show-more-4",
    type: "paragraph",
    text: "Muscle Care Clinic treatment is provided on a one-on-one basis, and sessions may last anywhere from 30 minutes to an hour. The frequency and duration of treatment will depend on the individual’s condition and goals, and the treatment plan may be adjusted as the individual progresses through the rehabilitation process.",
  },
  {
    id: "show-more-5",
    type: "paragraph",
    text: "At Muscle Care Clinic, our team of experienced physiotherapists is dedicated to providing high-quality care to help individuals achieve their best possible outcomes and return to a functional and active lifestyle.",
  },
  {
    id: "show-more-6",
    type: "paragraph",
    text: "Our team is committed to working with each individual to develop a customized treatment plan that addresses their specific needs and goals. If you have recently sustained an injury or undergone surgery and are in need of physiotherapy, we encourage you to contact us to learn more about how we can help.",
  },
  {
    id: "show-more-7",
    type: "paragraph",
    text: "Through a combination of techniques, exercises, and best practices, our therapy paves the way for improved mobility, enhanced quality of life, and renewed hope for those on the path to recovery.",
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

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const About = () => {
  const [showMore, setShowMore] = useState(false);

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
      <Navbar />
      <motion.div
        className="w-full bg-white rounded-3xl mt-20 py-12 md:py-16 flex-grow max-w-7xl mx-auto mb-12 px-4 sm:px-6 lg:px-8 shadow-xl"
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
          className="text-4xl md:text-5xl font-bold text-text font-heading mt-8 mb-10 tracking-tight"
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
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {content
                      .filter((item) => item.id.startsWith("show-more-"))
                      .map((item) => (
                        <motion.p key={item.id} variants={itemVariants} className="mt-4">
                          {item.text}
                        </motion.p>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className="flex justify-center mt-6"
                variants={buttonVariants}
                whileHover="hover"
              >
                <button
                  className="font-semibold bg-gradient-to-r from-secondary to-indigo-500 px-6 py-3 rounded-full text-backgroundColor flex items-center gap-3 hover:shadow-md transition-all duration-300"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? getContentText("show-less-button") : getContentText("show-more-button")}
                  {showMore ? <FaArrowUp /> : <FaArrowDown />}
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={itemVariants}>
            {getContentText("services")}
          </motion.p>

          <motion.p variants={itemVariants}>
            {getContentText("team")}
          </motion.p>

          <Team />

          <motion.p variants={itemVariants}>
            {getContentText("vision")}
          </motion.p>

          <motion.p variants={itemVariants}>
            {getContentText("holistic")}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;