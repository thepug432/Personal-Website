import { motion } from "framer-motion"

export default function NavMenu() {
    return(
        <motion.div 
        animate={{ x:0 }}
        exit={{x: screen.width*-1 }}
        initial={{ x: screen.width*-1 }}
        transition={{ duration: .3 }}
        className="absolute bg-red-600 right-0 top-10 w-screen h-full">
            asd
        </motion.div>
    )
}