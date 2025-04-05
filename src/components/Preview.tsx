
import { motion } from "framer-motion";

const Preview = () => {
  const description = `
    At Muscle Care Clinic, we believe in the power of personalized care to restore your body's natural balance. 
    Our experienced team of physiotherapists and chiropractors is committed to providing comprehensive treatment 
    plans tailored to your unique needs. Whether you're recovering from an injury, managing chronic pain, or 
    seeking preventive care, we're here to support you on your journey to optimal health. Our goal is to empower 
    you to live a more active, pain-free life.
    Experience the Muscle Care Clinic difference today and discover how our specialized treatments can help you 
    achieve your wellness goals.
  `;

  const closing = `Thank you for visiting Muscle Care Clinic! We’re excited to be part of your journey toward better health and wellness. Our team is here to provide you with personalized care and unwavering support every step of the way. Let’s work together to achieve your goals and help you feel your best. We look forward to welcoming you soon!`;

  const Button = () => (
    <a
      href="/about"
      className="relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 font-medium text-indigo-600 transition duration-300 ease-out border-2 border-secondary rounded-xl shadow-md group"
    >
      View More
    </a>
  );

  return (
    <section className="py-12 font-manrope container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-screen-xl mx-auto">
        {/* Image - Hidden on mobile, visible from tablet (md) and up */}
        <motion.div
          className="w-full md:w-1/2 hidden md:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="w-full h-96 object-cover rounded-lg"
            alt="Clinic"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Our Clinic
          </h1>
          <p className="text-base md:text-lg text-gray-200 text-justify">
            {description}
          </p>
          <div className="flex justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button />
            </motion.div>
          </div>
          <p className="text-base md:text-lg text-gray-200 text-justify">
            {closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Preview;
