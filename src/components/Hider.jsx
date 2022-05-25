import { AnimatePresence, motion } from 'framer-motion'
import { UseNavContext } from '../hooks/NavHook'


export default function Hider({ children }) {
    const SeeNav = UseNavContext()
    return(
        <AnimatePresence>
        {!SeeNav &&
            <motion.div 
            initial={{ opacity:0 }}
            exit={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:.3 }}>
                {children}
            </motion.div>
        }    
        </AnimatePresence>
    )
}