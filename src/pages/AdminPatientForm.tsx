import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import patientData from "../assets/data/patientData.json";
import { motion } from "framer-motion";

const AdminPatientForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customer_id: "",
    name: "",
    email: "",
    phone_number: "",
    type_of_services: "",
    mode_of_treatment: "",
    duration_days: 0,
    remarks: ["Initial consultation"]
  });

  useEffect(() => {
    if (id !== "new") {
      const patient = patientData.patients.find(p => p.customer_id === id);
      if (patient) {
        setFormData(patient);
      }
    } else {
      // Generate new customer ID
      const lastId = patientData.patients[patientData.patients.length - 1].customer_id;
      const newId = `MCC${parseInt(lastId.slice(3)) + 1}`;
      setFormData(prev => ({ ...prev, customer_id: newId }));
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would update the JSON file here
    // For this demo, we'll just console.log and navigate
    console.log("Form submitted:", formData);
    navigate("/admin-dashboard");
  };

  const serviceOptions = ["Fitness", "Physiotherapy", "Diet"];
  const durationOptions = [15, 30, 90, 180];
  const treatmentModeOptions = ["Home Visit", "On-Site"];

  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary min-h-screen">
      <Navbar isAdmin={true} onLogout={() => navigate("/")} />
      <motion.div 
        className="w-full my-5 bg-white py-10 px-5 rounded-2xl mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-6">
          {id === "new" ? "Add New Patient" : "Edit Patient"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Customer ID</label>
              <input
                type="text"
                value={formData.customer_id}
                disabled
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone_number}
                onChange={e => setFormData({ ...formData, phone_number: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Type of Services</label>
              <select
                value={formData.type_of_services}
                onChange={e => setFormData({ ...formData, type_of_services: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:border-[#1679AB]"
                required
              >
                <option value="">Select Service Type</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Mode of Treatment</label>
              <select
                value={formData.mode_of_treatment}
                onChange={e => setFormData({ ...formData, mode_of_treatment: e.target.value })}
                className="w-full p-2 border rounded focus:outline-none focus:border-[#1679AB]"
                required
              >
                <option value="">Select Treatment Mode</option>
                {treatmentModeOptions.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Duration (in days)</label>
              <select
                value={formData.duration_days}
                onChange={e => setFormData({ ...formData, duration_days: parseInt(e.target.value) })}
                className="w-full p-2 border rounded focus:outline-none focus:border-[#1679AB]"
                required
              >
                <option value="">Select Duration</option>
                {durationOptions.map((days) => (
                  <option key={days} value={days}>
                    {days} days
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Remarks</label>
              <textarea
                value={formData.remarks.join("\n")}
                onChange={e => setFormData({ ...formData, remarks: e.target.value.split("\n") })}
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <motion.button
              type="button"
              onClick={() => navigate("/admin-dashboard")}
              className="px-4 py-2 bg-gray-500 text-white rounded"
              whileHover={{ scale: 1.05 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="px-4 py-2 bg-[#1679AB] text-white rounded"
              whileHover={{ scale: 1.05 }}
            >
              Save
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminPatientForm;
