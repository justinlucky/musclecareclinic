import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
// Animation variants


const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};


const ContactAddress = () => {
    return (
        <div className="flex flex-col gap-8">
            <motion.div
                className=" bg-white rounded-md py-4"
                variants={childVariants}
            >
                <motion.h1
                    className="text-2xl p-5"
                    variants={childVariants}
                >
                    Get in touch
                </motion.h1>
                <motion.hr
                    className="w-[90%] ml-5"
                    variants={childVariants}
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div variants={childVariants}>
                    <div className="flex items-center text-xl p-3">
                        <FaLocationDot className="text-[#1679AB] mr-2 text-2xl font-semibold" />
                        <h1>Kin Multi-Speciality Physiotherapy Clinic</h1>
                    </div>
                    <p className="ml-12">
                        Syamaunil Kumar
                        <br /> OBR Enclave 301 Flat, Vidiyanagar 1st Lane,
                        <br /> Guntur, Andhra Pradesh 522006, India
                    </p>
                    <div className="flex justify-center mt-4 px-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3829.1260441096338!2d80.40884821957403!3d16.31650271396272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE5JzAxLjgiTiA4MMKwMjQnMzMuMiJF!5e0!3m2!1sen!2sin!4v1726322982382!5m2!1sen!2sin"
                            className="w-full h-64 md:h-80 rounded-md"
                            loading="lazy"
                        ></iframe>
                    </div>
                </motion.div>
                <motion.div variants={childVariants}>
                    <div className="flex items-center text-xl p-3">
                        <FaPhone className="text-[#1679AB] mr-2 text-2xl font-semibold" />
                        <h1>Phone Number:</h1>
                    </div>
                    <p className="ml-12">(+91) 70932 80464 </p>
                </motion.div>
                <motion.div variants={childVariants}>
                    <div className="flex items-center text-xl p-3">
                        <IoIosMail className="text-[#1679AB] mr-2 text-2xl font-semibold" />
                        <h1>Inquiries</h1>
                    </div>
                    <p className="ml-12">musclecareclinic@gmail.com</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ContactAddress