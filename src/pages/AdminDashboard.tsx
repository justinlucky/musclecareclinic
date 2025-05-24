import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
    }
  };

  return (
    <div className="md:p-10 p-3 pb-1 md:px-14 flex flex-col font-manrope bg-primary min-h-screen">
      <Navbar isAdmin={true} onLogout={handleLogout} />
      <div className="w-full my-5 bg-white py-10 px-5 rounded-2xl mt-10">
        Hello Admin
      </div>
    </div>
  );
};

export default AdminDashboard;
