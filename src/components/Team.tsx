import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const team = [
  {
    avatar: "/kin.jpg",
    name: "Poukinlung Kamei",
    title: "Physiotherapist, Dietician, Professional Boxer",
  },
  {
    avatar: "/mahesh.jpg",
    name: "Prudhivi",
    title: "Manager and Administrator",
  },
];

const Team = () => {
  // Animation variants for team cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-20 font-manrope container mx-auto px-4">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto gap-12">
        {/* Heading Animation */}
        <motion.div
          className="max-w-xl text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-5xl md:text-6xl font-semibold text-white">
            Meet Our Team
          </h3>
        </motion.div>

        {/* Team Members */}
        <div className="mt-12 w-full">
          <ul className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {team.map((item, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-center gap-4 items-center text-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="flex-none h-28 w-28 md:h-40 md:w-40 bg-gold rounded-full p-1 shadow-lg">
                  <img
                    src={item.avatar}
                    className="w-full h-full rounded-full object-cover"
                    alt={item.name}
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-lg md:text-xl">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base">{item.title}</p>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={`/team-contact?name=${encodeURIComponent(item.name)}&title=${encodeURIComponent(item.title)}`}
                      className="inline-block bg-white text-gold px-4 py-2 rounded-2xl font-medium shadow-md hover:bg-gray-100 transition-colors duration-200"
                    >
                      Reach Out
                    </Link>
                  </motion.div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;