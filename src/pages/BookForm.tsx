
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

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

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const BookForm = () => {
  const location = useLocation();
  const serviceTitle = location.state?.serviceTitle || "Selected Service";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    additionalNotes: "",
    location: "",
  });

  const [visitType, setVisitType] = useState("at-site");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVisitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisitType(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceID = "service_659j6oh";
    const templateID = "template_lacobkk";
    const userID = "X1NAjQb8QBuvYQzB0";

    const emailData = {
      ...formData,
      serviceName: serviceTitle,
      visitType,
    };

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then(() => {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          additionalNotes: "",
          location: "",
        });
      })
      .catch((err) => {
        console.log("Error while submitting the form:", err);
        alert("Failed to send the appointment. Please try again");
      });
  };

  return (
    <div className="py-8">
      <motion.div
        className=""
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-4 text-center text-primary"
          variants={titleVariants}
        >
          Book Appointment for {serviceTitle}
        </motion.h1>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 p-5"
          variants={containerVariants}
        >
          <motion.div variants={childVariants} className="flex gap-2 flex-col">
            <p className="text-md text-blue-400 font-semibold text-center">
              Select the mode of service you are looking for:
            </p>
            <div className="flex gap-4 justify-center items-center">
              <label className="text-gray-400">
                <input
                  type="radio"
                  name="visitType"
                  value="at-site"
                  checked={visitType === "at-site"}
                  onChange={handleVisitChange}
                  className="mr-2"
                />
                At Site
              </label>
              <label className="text-gray-400">
                <input
                  type="radio"
                  name="visitType"
                  value="home-visit"
                  checked={visitType === "home-visit"}
                  onChange={handleVisitChange}
                  className="mr-2"
                />
                Home Visit
              </label>
            </div>
          </motion.div>

          {visitType === "home-visit" && (
            <motion.div variants={childVariants}>
              <label className="block text-sm font-medium mb-1 text-gray-500" htmlFor="location">
                Enter Your Location or URL
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter address or location URL"
                required
              />
            </motion.div>
          )}

          <motion.div variants={childVariants}>
            <label className="block text-sm font-medium mb-1 text-gray-500" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your full name"
              required
            />
          </motion.div>

          <motion.div variants={childVariants}>
            <label className="block text-sm font-medium mb-1 text-gray-500" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div variants={childVariants}>
            <label className="block text-sm font-medium mb-1 text-gray-500" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your phone number"
              required
            />
          </motion.div>

          <motion.div variants={childVariants}>
            <label className="block text-sm font-medium mb-1 text-gray-500" htmlFor="date">
              Appointment Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </motion.div>

          <motion.div variants={childVariants}>
            <label className="block text-sm font-medium mb-1 text-gray-500" htmlFor="time">
              Appointment Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </motion.div>

          <motion.div variants={childVariants}>
            <label className="block text-sm font-medium mb-1 text-gray-500" htmlFor="additionalNotes">
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              rows={4}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter any additional notes"
            />
            <p className="text-red-500 mt-1 text-sm mt-2">
              <span className="text-red-500 mr-1">*</span>Please share your problems, we collect information only for medical purposes. Your information is not shared with anyone apart from your doctor.
            </p>
          </motion.div>

          <motion.div variants={childVariants}>
            <motion.button
              type="submit"
              className="w-full bg-primary hover:bg-blue-500 text-white px-4 py-2 rounded-md"
              whileHover={{ scale: 1.0125 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Submit Appointment
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default BookForm;