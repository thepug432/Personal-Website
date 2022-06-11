import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UseChangeNavContext } from "../../hooks/NavHook";

export default function Example({to, title}) {
    const change = UseChangeNavContext()
    const hideNav = () => {
        change(false);
    }

    return(
        <div onClick={hideNav}>
            <a href={to} target="_blank">
                <motion.div 
                whileHover={{ scale:1.1, backgroundColor: 'rgb(203, 213, 225)', color: 'rgb(0,0,0)' }}
                className="text-white bg-gray-900 p-3 rounded ml-2">
                    <button>{title}</button>   
                </motion.div>
            </a>
        </div>
    ) 
}