import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Motion from "./Motion";

const ListProblems = () => {
  const [formData, setFormData] = useState({});
  const [allproblems, setAllProblems] = useState([]);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [motionVisible, setMotionVisible] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `https://realestateproblems-2.onrender.com/api/user/getProblems/`,
        formData
      );
      setAllProblems(res.data.allProblems);
      setEmailSubmitted(true);
      navigate("/viewProblems", {
        state: { allproblems: res.data.allProblems },
      });
    } catch (error) {
      console.log(error);
      if (error.response.data) {
        setErrMsg(error.response.data);
      }
      setMotionVisible(true);
    }
  };

  const handleClose = () => {
    setErrMsg("");
    setMotionVisible(false)
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!emailSubmitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="bg-white rounded-lg p-8 shadow-lg"
        >
          <label htmlFor="email" className="block text-xl font-medium mb-4">
            Enter email to view Problems
          </label>
          <input
            id="email"
            type="email"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full mb-4"
            placeholder="Enter registered email"
            required
            name="email"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mb-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </motion.div>
      )}
      {motionVisible && <Motion text={errMsg} handleClose={handleClose} />}
    </div>
  );
};

export default ListProblems;
