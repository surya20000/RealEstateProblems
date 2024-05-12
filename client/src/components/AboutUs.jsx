import photo from "../assets/siddharthKarnawat.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-8">About Me</h2>
        <motion.div
          className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-center p-6">
            <img
              src={photo}
              alt="Siddharth Karnawat"
              className="w-36 h-36 rounded-full object-cover mr-6"
            />
            <div>
              <p className="text-gray-800">
                With over 5 years of experience in Real Estate, Criminal, and
                Commercial Laws, Advocate Siddharth Karnawat offers expert
                advice and counsel to a diverse clientele including SME
                Companies, Real Estate Allottees, Proprietaries, and Real Estate
                Companies.
              </p>
              <p className="text-gray-800 mt-2">
                He possesses extensive knowledge and expertise in litigating
                cases within these domains.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-4">
            <p className="text-gray-800">
              Mr. Karnawat has worked with various top law firms in India,
              formulating case strategies and has contributed to numerous cases
              before High Courts, District Courts, and other Tribunals. He is
              renowned for pioneering dispute resolution strategies,
              particularly for aggrieved homebuyers who have long awaited the
              fulfillment of promises made by builders or encountered
              difficulties in retrieving their hard-earned money from builders
              and real estate companies.
            </p>
            <p className="text-gray-800 mt-2">
              As an advocate, Mr. Karnawat is committed to providing effective
              legal representation and resolution for his clients, ensuring that
              their rights and interests are safeguarded.
            </p>
            <p className="text-gray-800 mt-2">
              His proactive approach and track record of success make him a
              trusted ally in navigating complex legal matters.
            </p>
            <p className="text-gray-800 mt-2">
              Email Id: adv.siddharthkarnawat@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
