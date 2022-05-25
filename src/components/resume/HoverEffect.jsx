import { AnimatePresence, motion } from "framer-motion";


export default function HoverEffect({ url, hover }) {
    return(
        <AnimatePresence>
            {hover &&
                <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .3 }}
                className='absolute top-0 left-0 bg-white/50 flex w-full h-full'
                >
                    <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href={url} target="_blank" className="m-auto text-red-600 p-3 bg-white/90 rounded-lg">
                        <strong>See Certificate</strong>
                    </motion.a>
                </motion.div>
            }
        </AnimatePresence>
    )
}