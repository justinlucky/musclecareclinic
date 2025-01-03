import { Link } from "react-router-dom";
import FooterDark from "../components/FooterDark";
import Navbar from "../components/Navbar";
import { FaArrowRight, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import Team from "../components/Team";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary h-full gap-10">
      <Navbar />
      <div className="w-full bg-white rounded-t-2xl rounded-b-2xl mt-20 md:p-20 p-10 pb-28">
        <div className="justify-end flex">
          <Link
            to="/about/gallery"
            className="flex items-center gap-2 bg-primary py-2 px-3 rounded-xl text-gold hover:px-5"
          >
            Visit Our Galleries
            <FaArrowRight />
          </Link>
        </div>
        <h1 className="text-5xl font-semibold py-5 text-text font-heading pl-8">About Us</h1>
        <div className="flex flex-col gap-5 md:p-10 font-medium text-gray-800 text-lg">
          <p>
            Welcome to Muscle Care Clinic, a modern and specialized healthcare facility dedicated to the treatment and prevention of muscle-related injuries and conditions. Our clinic is more than just a place to recover; it is a sanctuary where science meets care, and every detail is meticulously designed to help our patients achieve optimal physical health and well-being.
          </p>
          <div className="flex flex-col">
            <h2 className="text-3xl text-text font-heading py-5">Goals and Objectives of our team</h2>
            <div className="flex flex-col gap-3">
            <p>
              The role of our physical therapy team in neurological, orthopedic, cardiology and sport rehabilitation is invaluable. Our team bring expertise, dedication, and a personalized approach to help individuals with various kind of conditions. We regain their physical abilities and independence.
            </p>
            <p>
              Our team aims is to restore movement and function of the body through the use of exercises, stretches, and other treatments. It can be used to manage a wide range of conditions, including musculoskeletal injuries, neurological conditions, and cardiovascular and respiratory conditions.
            </p>
            <p>
              In the case of injury or surgery, we can help to reduce pain and swelling, improve mobility and flexibility, and restore functional abilities. It can also help to prevent complications and facilitate a faster recovery process.
            </p>
            {showMore && (
              <>
                <p>In the early stages of rehabilitation, our team focus on reducing pain and swelling through the use of modalities such as heat and ice therapy, electrical stimulation, and massage. These modalities can help to reduce inflammation and improve blood flow to the affected area, which can in turn help to reduce pain and promote healing.
                </p>
                <p>As the individual’s condition is improves, the focus of treatment may shift to improving mobility and flexibility through exercises and modalities. These exercises may be designed to strengthen the muscles around the affected area, improve range of motion, and restore normal movement patterns.</p>
                <p>In the later stages of rehabilitation, our team focus on restoring functional abilities and helping the individual return to their pre-injury or pre-surgery level of activity. This may involve activities such as gait training, balance training, and functional exercises.</p>
                <p>Muscle Care Clinic treatment is provided on a one-on-one basis, and sessions may last anywhere from 30 minutes to an hour. The frequency and duration of treatment will depend on the individual’s condition and goals, and the treatment plan may be adjusted as the individual progresses through the rehabilitation process.</p>
                <p>At muscle care clinic, our team wiith experienced of Physiotherapists are dedicated to providing high-quality care to help individuals achieve their best possible outcomes and return to a functional and active lifestyle.</p>
                <p>Our team is committed to work with each individual to develop a customized treatment plan that addresses their specific needs and goals. If you have recently sustained an injury or undergone surgery and are in need of Physiotherapy, we encourage you to contact us to learn more about how we can help.</p>
                <p>Through a combination of techniques, exercises, and best practices, we therapy paves the way for improved mobility, enhanced quality of life, and renewed hope for those on the path to recover.</p>
              </>
            )}
            <div className="flex justify-center">
            <button
              className=" font-semibold mt-3 bg-secondary px-3 py-2 rounded-md"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? <div className="flex items-center gap-1 text-backgroundColor">Show Less<FaArrowUp /></div> : <div className="flex items-center gap-1 text-backgroundColor">Show More<FaArrowDown /></div>}
            </button>
            </div>
            </div>
          </div>
          <p>
            At Muscle Care Clinic, we understand that each individual's journey to health is unique. That’s why we offer a comprehensive range of services, each tailored to meet the specific needs of our clients. Our services include advanced physiotherapy, chiropractic care, and personalized exercise programs. Whether you’re recovering from an injury, managing chronic pain, or simply looking to enhance your overall muscle health, our clinic is equipped to support your goals with cutting-edge techniques and compassionate care.
          </p>
          <p>
            Our team is composed of highly skilled professionals who bring a wealth of experience and expertise to the clinic. Kin, a seasoned physiotherapist, professional boxer, and gym trainer, offers a dynamic approach to recovery and fitness. Mahesh, our expert physiotherapist and chiropractor, combines traditional practices with innovative methods to provide holistic care. Abhishek, a professional gym trainer and administrative personnel, ensures that every aspect of your experience at Muscle Care Clinic is seamless and personalized.
          </p>
          <Team />
          <p>
            We pride ourselves on our vision to offer not just treatments but transformative experiences. Our mission is to create a supportive and healing environment where every patient can achieve optimal physical function, prevent future injuries, and maintain long-term muscle health. By integrating advanced techniques, personalized care, and continuous education, we aspire to empower individuals to live healthier, more active lives.
          </p>
          <p>
            At Muscle Care Clinic, we believe that recovery is not just about healing the body, but also about nurturing the mind. We strive to offer a holistic approach to health, combining physical treatments with supportive care that addresses the emotional and mental aspects of recovery. We invite you to explore the possibilities at Muscle Care Clinic, where your journey to optimal muscle health begins. Whether you are a professional athlete or someone dealing with chronic pain, our clinic is committed to providing the highest quality care tailored to your unique needs. Join us and take the first step towards a healthier, more active life.
          </p>
        </div>
      </div>
      <FooterDark />
    </div>
  );
};

export default About;
