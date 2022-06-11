import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Alert from "../alert"

export default function NavInfo() {
    const [msg, changemsg] = useState(false)
    const [alert, setalert] = useState(false)
    const copy = () => {
        navigator.clipboard.writeText('kirbou06012@gmail.com');
        setalert(true)
        setTimeout(() => {
            setalert(false)
        }, 2000);
        return;
    }

    return(
        <>
            <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: .3, duration: .2 }}
            className="bg-gray-900 text-white p-10 rounded">
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
                            className="absolute top-12 bg-gray-900 p-2 px-4 rounded">
                                <div class="absolute bottom-10 w-16 overflow-hidden inline-block">
                                    <div class=" h-5 w-11 bg-gray-900 rotate-45 transform origin-bottom-left"></div>
                                </div>
                                <p>Tap to copy email</p>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </motion.div> 
            <Alert check={alert} msg={'Copy successful'}/>
        </>
    );
};