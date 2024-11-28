
import FooterDark from "../components/FooterDark"
import Navbar from "../components/Navbar"


const About = () => {
  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary h-full ">
      <Navbar />
      <div className="w-full bg-white  rounded-t-2xl mt-20 md:p-20 p-10 pb-28">
        <h1 className="text-5xl font-semibold py-5 text-text font-heading pl-8"> About Us</h1>
        <div className="flex flex-col gap-5 md:p-10 font-medium text-gray-800 text-lg">
          <p>
            Welcome to Muscle Care Clinic, a modern and specialized healthcare facility dedicated to the treatment and prevention of muscle-related injuries and conditions. Our clinic is more than just a place to recover; it is a sanctuary where science meets care, and every detail is meticulously designed to help our patients achieve optimal physical health and well-being.
          </p>
          <p>
            At Muscle Care Clinic, we understand that each individual's journey to health is unique. That’s why we offer a comprehensive range of services, each tailored to meet the specific needs of our clients. Our services include advanced physiotherapy, chiropractic care, and personalized exercise programs. Whether you’re recovering from an injury, managing chronic pain, or simply looking to enhance your overall muscle health, our clinic is equipped to support your goals with cutting-edge techniques and compassionate care.
          </p>

          <p>Our team is composed of highly skilled professionals who bring a wealth of experience and expertise to the clinic. Kin, a seasoned physiotherapist, professional boxer, and gym trainer, offers a dynamic approach to recovery and fitness. Mahesh, our expert physiotherapist and chiropractor, combines traditional practices with innovative methods to provide holistic care. Abhishek, a professional gym trainer and administrative personnel, ensures that every aspect of your experience at Muscle Care Clinic is seamless and personalized.</p>
          <p>We pride ourselves on our vision to offer not just treatments but transformative experiences. Our mission is to create a supportive and healing environment where every patient can achieve optimal physical function, prevent future injuries, and maintain long-term muscle health. By integrating advanced techniques, personalized care, and continuous education, we aspire to empower individuals to live healthier, more active lives.</p>
          <p>At Muscle Care Clinic, we believe that recovery is not just about healing the body, but also about nurturing the mind. We strive to offer a holistic approach to health, combining physical treatments with supportive care that addresses the emotional and mental aspects of recovery.
            We invite you to explore the possibilities at Muscle Care Clinic, where your journey to optimal muscle health begins. Whether you are a professional athlete or someone dealing with chronic pain, our clinic is committed to providing the highest quality care tailored to your unique needs. Join us and take the first step towards a healthier, more active life.
          </p>
        </div>
      </div>
      <FooterDark />
    </div>
  )
}

export default About
