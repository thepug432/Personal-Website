import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Example({to, title}) {
    return(
        <Link to={to}>
            <motion.div 
            whileHover={{ scale:1.1, backgroundColor: 'rgb(239, 68, 68)' }}
            className="text-white bg-red-600 p-3 rounded ml-2">
                <button>{title}</button>   
            </motion.div>
        </Link>
    ) 
}