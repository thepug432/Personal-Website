import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function NavInfo() {
    const [msg, changemsg] = useState(false)

    const copy = () => {
        navigator.clipboard.writeText('kirbou06012@gmail.com')
    }

    return(
        <div className="bg-red-700 text-white p-10 rounded">
            <h1 className="text-4xl ml-2">Contact me directly!</h1>
            <div className="relative">
                <motion.div 
                onClick={copy} 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: .95 }}
                onHoverStart={() => changemsg(true)} 
                onHoverEnd={() => changemsg(false)}>
                    <p className="text-xl mt-3 cursor-default ml-2">Email: kirbou06012@gmail.com</p>
                </motion.div>
                <AnimatePresence>
                    {msg && 
                        <motion.div 
                        initial={{scale:0}}
                        exit={{scale:0}}
                        animate={{scale:1}}
                        className="absolute top-12 bg-red-800 p-2 px-4 rounded">
                            <div class="absolute bottom-10 w-16 overflow-hidden inline-block">
                                <div class=" h-5 w-11 bg-red-800 rotate-45 transform origin-bottom-left"></div>
                            </div>
                            <p>Tap to copy email</p>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>  
    )
}