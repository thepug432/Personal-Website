import { motion } from "framer-motion"

export default function Button({url, title}) {

    const openlink = () => {
        return window.open(url, '_blank').focus();
    }

    return(
        <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: 'rgb(203, 213, 225)', color: 'black'}} 
            onClick={openlink} 
            className="bg-gray-900 rounded p-3 px-4 mx-2">
        {title}
        </motion.button>
    )
}