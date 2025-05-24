import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FooterDark from "../components/FooterDark";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      username === import.meta.env.VITE_ADMIN_USERNAME &&
      password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      navigate("/admin-dashboard");
    } else {
      setError("Prohibited Zone! Unauthorized access detected.");
    }
  };

  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary min-h-screen">
      <Navbar />
      <motion.div
        className="w-full my-5 py-10 px-5 rounded-2xl mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-md mx-auto p-8 rounded-xl bg-white shadow-xl"
          variants={childVariants}
        >
          <motion.h1
            className="text-3xl font-heading font-semibold mb-6 text-text"
            variants={childVariants}
          >
            Admin Login
          </motion.h1>
          {error && (
            <motion.div
              className="bg-red-100 border-l-4 border-red-500 p-4 mb-4"
              variants={childVariants}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-red-700">{error}</p>
                  <motion.button
                    onClick={() => navigate("/")}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Return to Home
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div variants={childVariants}>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1679AB]"
                placeholder="Enter username"
                required
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1679AB] pr-10"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </motion.div>
            <motion.button
              type="submit"
              variants={childVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-[#1679AB] text-white py-2 px-4 rounded-md hover:bg-[#146290] transition-colors"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
      <FooterDark />
    </div>
  );
};

export default AdminLogin;
