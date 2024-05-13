import { useState } from "react";
import axios from "axios";
import Motion from "./Motion";
import { motion } from "framer-motion";

const Problems = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [whileLoadingText, setWhileLoadingText] = useState(false);
  const [motionVisible, setMotionVisible] = useState(false);
  const loadingText =
    "Sit back Relaxed! We are with you in your tough times and we’ll help you initiating a case before a Appropriate Forum.";
  const successMessage =
    "Our team will soon contact you for more information & further discussions with respect to legal fees and case papers.";
  const [successmsg, showSuccessmessage] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      setMotionVisible(true);
      e.preventDefault();
      await axios
        .post(
          `https://realestateproblems-2.onrender.com/api/user/postProblems`,
          formData
        )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setDisable(true);
          showSuccessmessage(true);
          setWhileLoadingText(" ");
        })
        .catch((err) => {
          showSuccessmessage(false);
          console.log(err);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setMotionVisible(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="mx-auto my-8 w-full max-w-[425px] bg-white rounded-[10px] box-shadow-lg p-5"
    >
      <div className="rounded-t-[8px] overflow-hidden">
        <h2 className="text-[1.75rem] font-bold text-[#735400] leading-[1.222] relative">
          {" "}
          Enter your problem
          <small className="block text-[.75em] font-normal mt-[.25em]">
            {" "}
            Help us understand your problem{" "}
          </small>
        </h2>
      </div>
      <form className="pt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col relative mb-4">
          <input
            id="allotteeName"
            type="text"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full"
            placeholder="Allottee Name"
            required
            name="allotteeName"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </div>{" "}
        <div className="flex flex-col relative mb-4">
          <input
            type="text"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full"
            placeholder="Co Allottee Name if any"
            name="coAllotteeName"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </div>{" "}
        <div className="input mb-6">
          <input
            type="email"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full"
            placeholder="Email"
            required
            name="email"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />{" "}
        </div>
        <div className="flex flex-col relative mb-4">
          <input
            type="number"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full"
            placeholder="Contact No"
            required
            name="contactNo"
            minLength={10}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />{" "}
        </div>{" "}
        <div className="flex flex-col relative mb-4">
          <input
            type="text"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full"
            placeholder="Project in which plot or unit was booked"
            required
            name="projectBooked"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />{" "}
        </div>
        <div className="flex flex-col relative mb-4">
          {" "}
          <input
            type="text"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full"
            placeholder="Promoter/Builder Name"
            required
            name="promoterName"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />{" "}
        </div>
        <div className="flex flex-col relative mb-4">
          {" "}
          <input
            type="text"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full"
            placeholder="State where the property belongs"
            required
            name="state"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />{" "}
        </div>
        <div className="flex flex-col relative mb-4">
          {" "}
          <input
            type="number"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full"
            placeholder="Total no. of Units/Plots booked"
            required
            name="noOfUnits"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />{" "}
        </div>
        <div className="flex flex-col relative mb-4">
          {" "}
          <input
            type="text"
            className="border-b-2 border-gray-300 bg-transparent focus:border-purple-500 focus:outline-none py-2 px-0 text-xl font-medium leading-tight transition-colors duration-200 w-full"
            placeholder="Total Considration paid Eg: $300"
            required
            name="totalPaid"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />{" "}
        </div>
        <div className="mt-8">
          {" "}
          <button
            className="w-full text-xl uppercase text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 disabled:opacity-70 "
            disabled={disable ? true : false}
          >
            {" "}
            {isLoading ? "Creating..." : "Submit Query"}{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
      {motionVisible && <Motion text={loadingText} handleClose={handleClose} />}
      {motionVisible && (
        <Motion text={successMessage} handleClose={handleClose} />
      )}
    </motion.div>
  );
};

export default Problems;
