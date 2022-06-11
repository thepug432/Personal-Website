import { motion, AnimatePresence } from "framer-motion";


export default function Alert({ check, msg }) {
    return(
        <AnimatePresence>
        {check &&
            <motion.div 
            initial={{ x:-10, opacity:0 }}
            exit={{ x:-10, opacity:0 }}
            animate={{ x:0, opacity:1 }}
            transition={{ duration: .3 }}
            className="p-3 rounded-lg bg-gray-900 mt-6 border border-black border-solid">
                <p className="text-center text-white">{msg}</p>
            </motion.div>
        }
        </AnimatePresence> 
    );
};