import { GrClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function NavButton({open, changeOpen}) {
    return(
        <div onClick={() => changeOpen(!open)} className="mr-3 ml-auto p-3 relative">
            <AnimatePresence>
                {open ?
                    <motion.div
                    key='open'
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    exit={{ scale: 0 }}
                    animate={{ scale: 1}}
                    transition={{ duration: 1 }}
                    className='absolute left-5 top-1'
                    >
                        <GrClose size={20}/>
                    </motion.div>
                :
                    <motion.div
                    key='closed'
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    exit={{ scale: 0 }}
                    animate={{ scale: 1}}
                    transition={{ duration: 1 }}
                    className='absolute left-5 top-1'
                    >
                        <FaBars size={20}/>
                    </motion.div>
                }
                    
                 
            </AnimatePresence>
        </div>
    )
}