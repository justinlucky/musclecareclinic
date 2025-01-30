import Faq from "../components/Faq";
import FooterDark from "../components/FooterDark";
import Navbar from "../components/Navbar";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary h-full">
      <Navbar />

      <div className="w-full my-5  bg-white py-10 px-5 rounded-2xl mt-10">
        <h1 className="text-5xl font-heading font-semibold py-5 text-text m-5">
          Contact us
        </h1>
        <div>
        </div>
        <div>
          <Faq/>
        </div>
        <div className="flex flex-col md:flex-row gap-5 h-full mt-10">
          <div className="md:w-1/2 border-[7px] h-[300px] rounded-xl shadow border-white">
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
