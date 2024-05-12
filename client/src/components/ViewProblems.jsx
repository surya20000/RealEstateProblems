import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ViewProblems = () => {
  const location = useLocation();
  const allproblems = location.state.allproblems;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {" "}
      {allproblems.map((item) => (
        <motion.div
          key={item._id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow-md p-6 relative"
        >
          {" "}
          <div className="absolute top-0 right-0 p-2 rounded-tl-lg rounded-br-lg text-white">
            {" "}
            <p className="text-xs">{item.status}</p>{" "}
          </div>{" "}
          <h3 className="text-xl font-semibold mb-2">{item.allotteeName}</h3>{" "}
          <p className="text-gray-600">
            {" "}
            Co Allottee Name: {item.coAllotteeName}{" "}
          </p>{" "}
          <p className="text-gray-600">Contact No: {item.contactNo}</p>{" "}
          <p className="text-gray-600">Email: {item.email}</p>{" "}
          <p className="text-gray-600">Project Booked: {item.projectBooked}</p>{" "}
          <p className="text-gray-600">Promoter Name: {item.promoterName}</p>{" "}
          <p className="text-gray-600">State: {item.state}</p>{" "}
          <p className="text-gray-600">Total Paid: {item.totalPaid}</p>{" "}
        </motion.div>
      ))}{" "}
    </div>
  );
};

export default ViewProblems;
