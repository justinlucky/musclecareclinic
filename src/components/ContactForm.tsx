
import { motion } from "framer-motion";
import { useState } from "react";

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

const ContactForm = ({ onCancel }: { onCancel: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, purpose, message } = formData;

    if (!name || !phone || !email || !purpose || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPurpose: ${purpose}\nMessage: ${message}`
    );
    const whatsappUrl = `https://wa.me/917093280464?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    // Optionally clear form after submission (uncomment if desired)
    // setFormData({ name: "", phone: "", email: "", purpose: "", message: "" });
  };

  return (
    <div>
      <div className=" py-8">
        <h2 className="text-2xl md:text-3xl xl:text-4xl text-center text-primary font-semibold">Reach Us here</h2>
        <p className="text-sm text-center text-gray-700">We will try our best to provide assistance within a day or less.</p>
        <motion.form
          className="mt-8 py-4 px-2 md:px-4 xl:px-8 flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex flex-col gap-1" variants={childVariants}>
            <label htmlFor="name" className="text-gray-500 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              className="py-2 px-3 border border-gray-500 rounded-md"
              required
            />
          </motion.div>
          <motion.div className="flex flex-col gap-1" variants={childVariants}>
            <label htmlFor="phone" className="text-gray-500 text-sm">Phone Number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phonenumber..."
              value={formData.phone}
              onChange={handleChange}
              className="py-2 px-3 border border-gray-500 rounded-md"
              required
            />
          </motion.div>
          <motion.div className="flex flex-col gap-1" variants={childVariants}>
            <label htmlFor="email" className="text-gray-500 text-sm">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleChange}
              className="py-2 px-3 border border-gray-500 rounded-md"
              required
            />
          </motion.div>
          <motion.div className="flex flex-col gap-1" variants={childVariants}>
            <label htmlFor="purpose" className="text-gray-500 text-sm">Purpose</label>
            <select
              name="purpose"
              id="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="py-2 px-3 border border-gray-500 rounded-md"
              required
            >
              <option value="">--Select One--</option>
              <option value="About Services">About Services</option>
              <option value="About Pricing">About Pricing</option>
              <option value="Reviews">Reviews</option>
              <option value="Suggestion or Feedback">Suggestion or Feedback</option>
            </select>
          </motion.div>
          <motion.div className="flex flex-col gap-1" variants={childVariants}>
            <label htmlFor="message" className="text-gray-500 text-sm">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Enter your message..."
              value={formData.message}
              onChange={handleChange}
              className="py-2 px-3 border border-gray-500 rounded-md"
              required
            />
          </motion.div>
          <motion.div className="flex justify-end gap-4 mt-4" variants={childVariants}>
            <button
              className="bg-gray-500 px-4 py-2 rounded-md text-white text-sm hover:bg-gray-700 transition duration-300"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 px-4 py-2 rounded-md text-white text-sm hover:bg-blue-700 transition duration-300"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;