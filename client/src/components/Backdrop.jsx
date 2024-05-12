import { motion } from "framer-motion"
import '../App.css'
import PropTypes from 'prop-types';

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div
            className="fixed top-[0] left-[0] w-full h-full bg-[rgba(0,_0,_0,_0.5)] flex justify-center items-center z-10"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

Backdrop.propTypes = {
    children: PropTypes.node.isRequired, 
    onClick: PropTypes.func.isRequired, 
};

export default Backdrop
