import { useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

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

// Component for selecting purpose based on specialist
const PurposeSelection: React.FC<{ name: string; reason: string; setReason: (value: string) => void }> = ({ name, reason, setReason }) => {
  const purposes: { [key: string]: string[] } = {
    "Poukinlung Kamei": [
      "Physiotherapy",
      "Massage Therapy",
      "Chiropractic",
      "Acupuncture",
      "Rehabilitation",
      "Nutrition and Diet"
    ],
    "Abhishek": [
      "Personal Training",
      "Weight Management",
      "Strength Training",
      "Cardio Training",
      "Flexibility Training"
    ],
    "Prudhivi": ["General Enquiry", "Membership Management", "Complaints", "Feedback", "Fees Enquiry"]
  };

  const options = purposes[name] || ["General Enquiry"];

  return (
    <motion.div variants={childVariants} className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
        Reason for Contacting
      </label>
      <select
        id="reason"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      >
        <option value="">Select a reason</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </motion.div>
  );
};

const TeamContact: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name") || "Prudhivi";
  const title = queryParams.get("title") || "Team Member";

  const [reason, setReason] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const validatePhone = (number: string) => {
    return /^[0-9]{10}$/.test(number);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    
    const teamNumbers: { [key: string]: string } = {
      "Poukinlung Kamei": "+917093280464",
      "Abhishek": "+917997605423",
      "Prudhivi": "+918639028264"
    };

    const whatsappNumber = teamNumbers[name] || "";
    const whatsappMessage = `Hello, my name is ${userName}. I am reaching out regarding ${reason}. My email is ${email}, my phone number is ${phone}. Message: ${message}`;
    
    const whatsappURL = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className=" flex flex-col items-center pb-8">
      <motion.div
        className="bg-white py-8 px-4 rounded shadow-md w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl font-bold mb-4 text-text"
          variants={titleVariants}
        >
          Contact {name}
        </motion.h1>
        <motion.p
          className="text-gray-700 mb-4"
          variants={childVariants}
        >
          {title}
        </motion.p>
        <motion.form onSubmit={sendMessage} variants={containerVariants}>
          <PurposeSelection name={name} reason={reason} setReason={setReason} />
          
          <motion.div variants={childVariants} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </motion.div>
          
          <motion.div variants={childVariants} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </motion.div>
          
          <motion.div variants={childVariants} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </motion.div>
          
          <motion.div variants={childVariants} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
            ></textarea>
          </motion.div>
          
          <motion.div
            variants={childVariants}
            className="flex items-center justify-between"
          >
            <motion.button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Send via WhatsApp
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default TeamContact;
