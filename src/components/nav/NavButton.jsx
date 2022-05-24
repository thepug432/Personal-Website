import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const variants ={
    hover: {
        scale: 1.3,
        transition: {
            duration: .2
        }
    }
}

export default function NavButton({open, changeOpen}) {
    return(
        <div onClick={() => changeOpen(!open)} className="mr-5 ml-auto p-3 relative">
            <AnimatePresence>
                {open ?
                    <motion.div
                    key='open'
                    whileHover={'hover'}
                    initial={{ scale: 0 }}
                    exit={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: .3 }}
                    variants={variants}
                    className='absolute left-2 my-auto top-0 text-white cursor-pointer'
                    style={{ fill:'white' }}
                    >
                        <IoMdClose size={30}/>
                    </motion.div>
                    :
                    <motion.div
                    key='closed'
                    whileHover={'hover'}
                    initial={{ scale: 0 }}
                    exit={{ scale: 0 }}
                    animate={{ scale: 1}}
                    transition={{ duration: .3 }}
                    variants={variants}
                    className='absolute left-2 my-auto top-0 text-white cursor-pointer'
                    >
                        <FiMenu size={30}/>
                    </motion.div>
                }
                    
                 
            </AnimatePresence>
        </div>
    )
}