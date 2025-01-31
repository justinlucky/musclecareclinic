import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import FooterDark from "../components/FooterDark";

// Component for selecting purpose based on specialist
const PurposeSelection: React.FC<{ name: string; reason: string; setReason: (value: string) => void }> = ({ name, reason, setReason }) => {
  // Define purposes based on team members
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
    <div className="mb-4">
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
    </div>
  );
};

const TeamContact: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name") || "Prudhivi"; // Default to "Prudhivi" if no name is provided
  const title = queryParams.get("title") || "Team Member";

  const [reason, setReason] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Function to validate phone number (10 digits only)
  const validatePhone = (number: string) => {
    return /^[0-9]{10}$/.test(number);
  };

  // Function to send message via WhatsApp
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
    <div className="min-h-screen flex flex-col items-center pt-10 bg-secondary px-3 lg:gap-20 gap-10">
      <Navbar />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-text">Contact {name}</h1>
        <p className="text-gray-700 mb-4">{title}</p>
        <form onSubmit={sendMessage}>
          {/* Purpose selection dropdown based on team member */}
          <PurposeSelection name={name} reason={reason} setReason={setReason} />
          
          {/* Input field for user name */}
          <div className="mb-4">
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
          </div>
          
          {/* Input field for user email */}
          <div className="mb-4">
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
          </div>
          
          {/* Input field for phone number */}
          <div className="mb-4">
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
          </div>
          
          {/* Input field for user message */}
          <div className="mb-4">
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
          </div>
          
          {/* Submit button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
      <FooterDark/>
    </div>
  );
};

export default TeamContact;
