import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NavLink({to, title, overmsg}) {
    const [hovering, flipHovering] = useState(false)
    return(
        <div className="relative">
        <Link to={to}>
            <motion.div
            onHoverEnd={() => flipHovering(false)}
            onHoverStart={() => flipHovering(true)}
            whileHover={{ scale: 1.02, backgroundColor: 'rgb(239, 68, 68)' }}
            whileTap={{ scale: .99, backgroundColor: 'rgb(239, 68, 68)' }}
            className='px-10 xsm:mr-2'
            >
                <div className="m-2 p-5 ">
                    <h1 className="text-white text-4xl">{title}</h1>
                </div>
            </motion.div>
        </Link>
            <AnimatePresence>
                {hovering &&
                    <motion.div
                    animate={{ scale: 1, opacity:1 }}
                    exit={{ scale: .5, opacity:0 }}
                    initial={{ scale: .5, opacity:0 }}
                    className="absolute left-72 top-5 bg-red-800 p-3 px-5 rounded w-40 text-white xsm:hidden"
                    >
                        <div className="absolute right-40 top-3 w-4 overflow-hidden inline-block">
                            <div className="h-16 bg-red-800 -rotate-45 transform origin-top-right"></div>
                        </div>
                        <h1>{overmsg}</h1>
                    </motion.div>  
                }
            </AnimatePresence>
        </div>
    )
}