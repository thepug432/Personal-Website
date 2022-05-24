import { motion } from "framer-motion"

export default function Button({url, title}) {

    const openlink = () => {
        return window.open(url, '_blank').focus();
    }

    return(
        <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: 'rgb(239, 68, 68)'}} 
            onClick={openlink} 
            className="bg-red-700 rounded p-3 px-4 mx-2">
        {title}
        </motion.button>
    )
}