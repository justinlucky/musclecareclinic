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

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-800 font-semibold">Name</th>
                <th className="px-4 py-2 text-left text-gray-800 font-semibold"> Patient ID</th>
                <th className="px-4 py-2 text-left text-gray-800 font-semibold">Service</th>
                <th className="px-4 py-2 text-left text-gray-800 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <motion.tr
                  key={patient.customer_id}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="border-b"
                >
                  <td className="px-4 py-3 text-gray-800">{patient.name}</td>
                  <td className="px-4 py-3 text-gray-600">{patient.customer_id}</td>
                  <td className="px-4 py-3 text-gray-600">{patient.type_of_services}</td>
                  <td className="px-4 py-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => navigate(`/admin-patient-form/${patient.customer_id}`)}
                      className="text-[#1679AB] hover:text-[#146290]"
                    >
                      View Details →
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;