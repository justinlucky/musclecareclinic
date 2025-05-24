import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import patientData from "../assets/data/patientData.json";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [patients] = useState(patientData.patients);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
    }
  };

  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary min-h-screen">
      <Navbar isAdmin={true} onLogout={handleLogout} />
      <div className="w-full my-5 bg-white py-10 px-5 rounded-2xl mt-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Patient Dashboard</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/admin-patient-form/new")}
            className="bg-[#1679AB] text-white px-4 py-2 rounded-md hover:bg-[#146290]"
          >
            Add New Patient
          </motion.button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {patients.map((patient) => (
            <motion.div
              key={patient.customer_id}
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-gray-50 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{patient.name}</h2>
              <p className="text-gray-600">ID: {patient.customer_id}</p>
              <p className="text-gray-600">Service: {patient.type_of_services}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(`/admin-patient-form/${patient.customer_id}`)}
                className="mt-3 text-[#1679AB] hover:text-[#146290]"
              >
                View Details →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
