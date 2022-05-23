import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, AnimatePresence } from "react";

export default function NavLink({to, title, overmsg}) {
    const [hovering, flipHovering] = useState(false)
    return(
        <div className="relative">
        <motion.div
        onHoverEnd={() => flipHovering(false)}
        onHoverStart={() => flipHovering(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: .99 }}
        className='hover:bg-red-500 px-10'
        >
            <Link to={to}>
                <div className="m-2 p-5 ">
                    <h1 className="text-white text-4xl">{title}</h1>
                </div>
            </Link>
        </motion.div>
            {hovering &&
                <>
                    <div className="absolute left-72 top-5 bg-red-800 p-3 px-5 rounded w-40 text-white">
                        <div class="absolute right-40 top-3 w-4 overflow-hidden inline-block">
                            <div class="h-16 bg-red-800 -rotate-45 transform origin-top-right"></div>
                        </div>
                        <h1>{overmsg}</h1>
                    </div> 
                </>  
            }
        </div>
    )
}