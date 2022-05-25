import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Button from "./button";

export default function Project({ title, description, Sitelink, Githublink, image, features }) {
    const [hover, setHover] = useState(false)

    return(
        <div className="mt-2 text-white flex px-5 bg-red-500">
            <div className="mx-auto relative"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <img src={image} className="w-full border-2 border-black"/>
                <AnimatePresence>
                    {hover && 
                        <motion.div 
                            exit={{ opacity: 0}}
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ duration:.3 }}
                            className="absolute top-0 left-0 w-full h-full bg-white/50 flex flex-col"
                        >
                            <div className="mx-auto p-3 rounded bg-red-700 mt-32 xsm:hidden">
                                <h1 className="text-4xl">{title}</h1>
                                <p className="mt-10">{description}</p>
                                <p className="mt-1"><strong>Features:</strong></p>
                                <ul className="pl-2">
                                {features.map((feature) => {
                                    return(
                                        <li>{feature}</li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="mx-auto mt-2 flex xsm:m-auto">
                                <Button url={Sitelink} title={'See Site'}/>
                                <Button url={Githublink} title={'Github'}/>
                            </div>
                        </motion.div> 
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}