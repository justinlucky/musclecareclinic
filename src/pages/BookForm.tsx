import { useParams } from "react-router-dom";
import { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import FooterDark from "../components/FooterDark";

const BookForm = () => {
  const { id } = useParams<{ id: string }>();

  const serviceList: Record<string, string> = {
    "body-stretching": "Full Body Stretching",
    "chiropractic": "Chiropractic Therapy",
    "dry-needle": "Dry Needle Therapy",
    "cupping-therapy": "Cupping Therapy",
    "full-body-relaxation": "Full Body Relaxation",
    "cryotherapy": "Cryotherapy",
    "boxing-and-fitness": "Boxing and Fitness",
    "high-intensity-interval-training": "HIIT",
    "post-surgery-physiotherapy": "Post Surgery Therapy",
    "orthopaedic-physiotherapy": "Orthopaedic Therapy",
    "neurology-physiotherapy": "Neurology Therapy",
    "sports-physiotherapy": "Sports Physiotherapy",
    "pediatric-physiotherapy": "Pediatric Physiotherapy",
    "rehabilitation": "Rehabilitation",
    "geriatric-care": "Geriatric Care",
    "knee-pain": "Knee pain",
    "spinal-injuries": "Spinal Injuries",
    "foot-and-ankle": "Foot and Ankle Pain",
    "stroke": "Stroke Rehabilitation",
    "massage-therapy": "Soft Muscle Mobilization",
    "weight-loss": "Weight Loss",
    "weight-gain": "Weight Gain",
    "strengthening-training": "Strength and Conditioning Training",
    "crossfit-training": "Power Lifting",
    "circuit-training": "Circuit Training",
    "athletic-training": "Athletic Training (ROM)",
    "boxing-training": "Boxing Training",
    "yoga": "Yoga",
    "nutrition-diet": "Nutrition Diet",
  };

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
  const serviceName = id && serviceList[id] ? serviceList[id] : "Selected Service";

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
      serviceName,
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
    <div className="bg-primary flex flex-col items-center content-center gap-10 p-3">
      <Navbar />
      <div className="max-w-xl max-auto flex flex-col gap-5">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          Book Appointment for {serviceName}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-secondary p-5" style={{ borderRadius: "15px" }}>
          <div className="flex gap-2 flex-col">
          <p className="text-xl text-white text-bold text-center">Select the mode of service you are looking for:</p>
          <div className="flex gap-4 justify-center">
            <label>
              <input type="radio" name="visitType" value="at-site" checked={visitType === "at-site"} onChange={handleVisitChange} />
              At Site
            </label>
            <label>
              <input type="radio" name="visitType" value="home-visit" checked={visitType === "home-visit"} onChange={handleVisitChange} />
              Home Visit
            </label>
            </div>
          </div>

          {visitType === "home-visit" && (
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="location">
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
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your full name" required />
          </div>
            <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
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
            </div>

            <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
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
            </div>

            <div>
            <label className="block text-sm font-medium mb-1" htmlFor="date">
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
            </div>

            <div>
            <label className="block text-sm font-medium mb-1" htmlFor="time">
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
            </div>

            <div>
            <label className="block text-sm font-medium mb-1" htmlFor="additionalNotes">
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter any additional notes"
            />
            </div>

          <button type="submit" className="w-full bg-blue-700 hover:bg-blue-900 text-white px-4 py-2 rounded-md">
            Submit Appointment
          </button>
        </form>
      </div>
      <FooterDark />
    </div>
  );
};

export default BookForm;
