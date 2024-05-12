import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-3xl font-semibold mb-4">
          REAL ESTATE DISPUTE RESOLUTION
        </h1>
        <p className="text-gray-700 mb-6">
          Are you looking to initiate legal action against a Real Estate
          Builder/Promoter? Are you also aggrieved by the delay in the
          construction of the Project? Don’t worry, you are at the right place!
        </p>
        <button
          onClick={() => navigate("/addProblems")}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
        >
          Add Details
        </button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
