import { motion } from "framer-motion"

export default function Button({url, title}) {

    const openlink = () => {
        return window.open(url, '_blank').focus();
    }

    return(
        <motion.div onClick={openlink}>
            <button className="bg-red-700 rounded p-3 px-4 mx-2">{title}</button>
        </motion.div>
    )
}