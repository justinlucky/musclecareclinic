import { useParams } from "react-router-dom";
import { useState } from "react";

const BookForm = () => {
  const { id } = useParams<{id:string}>();

  // Service details for display (optional enhancement)
  const serviceList:Record<string,string> = {
    "stretching-card": "Stretching",
    "chiropractic-therapy": "Chiropractic Therapy",
    "needle-therapy": "Needle Therapy",
    "cupping-therapy": "Cupping Therapy",
    "full-body-relaxation": "Full Body Relaxation",
    "kinesiology-taper": "Kinesiology Tape",
    "cryotherapy": "Cryotherapy",
    "boxing-and-fitness": "Boxing and Fitness",
    "high-intensity-interval-training": "HIIT",
    "circuit-training": "Circuit Training",
  };

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    additionalNotes: "",
  });

  const serviceName = id && serviceList[id] ? serviceList[id] : "Selected Service";
  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Book Appointment for {serviceName} 
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
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
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address
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
            Preferred Date
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
            Preferred Time
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
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="additionalNotes"
          >
            Additional Notes (Optional)
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Any additional information or requests"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default BookForm;