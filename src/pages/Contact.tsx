import FooterDark from "../components/FooterDark";
import Navbar from "../components/Navbar";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary h-full">
      <Navbar />

      <div className="w-full my-5  bg-white p-10 rounded-2xl mt-10">
        <h1 className="text-5xl font-heading font-semibold py-5 text-text m-5">
          Contact us
        </h1>
        <div>
          <form className="bg-gray-300 p-8 rounded-xl shadow-md mb-10">
            <h2 className="text-2xl font-semibold mb-5 text-center text-backgroundColor">Send Us a Message</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-primary">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-primary">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg font-medium mb-2 text-primary">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-primary">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-[#005a8d] transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col md:flex-row gap-5 h-full">
          <div className="md:w-1/2 border-[7px] h-4/3 rounded-xl shadow border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3829.1260441096338!2d80.40884821957403!3d16.31650271396272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE5JzAxLjgiTiA4MMKwMjQnMzMuMiJF!5e0!3m2!1sen!2sin!4v1726322982382!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>

          <div className="md:w-1/2 p-8 rounded-xl h-2/3 bg-white shadow-xl">
            <h1 className="text-2xl p-5">Get in touch</h1>
            <hr className="w-[90%] ml-5 " />
            <div>
              <div className="flex items-center text-xl p-3">
                <FaLocationDot className="text-[#1679AB] mr-2 text-2xl font-semibold" />
                <h1>Muscle Care Clinic</h1>
              </div>
              <p className="ml-12">
                8C85+VP7,
                <br /> LIC Colony RD, Satyanarayana Puram, Nayi Brahmana Colony,
                <br /> Guntur, Andhra Pradesh, India - 522007
              </p>
            </div>
            <div>
              <div className="flex items-center text-xl p-3">
                <FaPhone className="text-[#1679AB] mr-2 text-2xl font-semibold" />
                <h1>Telephone</h1>
              </div>
              <p className="ml-12">(+91) 70932 80464 </p>
            </div>
            <div>
              <div className="flex items-center text-xl p-3">
                <IoIosMail className="text-[#1679AB] mr-2 text-2xl font-semibold" />
                <h1>Inquiries</h1>
              </div>
              <p className="ml-12">musclecareclinic@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <FooterDark />
    </div>
  );
};

export default Contact;
