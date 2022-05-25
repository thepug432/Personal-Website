import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import HR from './hr'

export default function Education({url, title, institution, discription, grade, date, image}) {
    const [hover, sethover] = useState(false)

    return(
        <div className='relative'>
            <div className="flex xsm:flex-col text-white border-b border-white border-solid absolute top-0 left-0">
                <div className="pl-2 self-center">
                    <h1 className="text-3xl mx-auto xsm:text-center">{title}</h1>
                    <h2 className="text-xl mx-auto xsm:text-center">{institution}</h2>
                    {grade &&
                        <div className="self-center ml-auto mr-10 xsm:mx-auto">
                            <p className='xsm:text-center'><strong>{grade} {date}</strong></p>
                        </div>
                    }
                </div>
                <HR/>
                <div className="self-center xsm:self-center">
                    <p className="xsm:text-center">{discription}</p>
                </div>
                <HR/>
                <div className="p-2 xsm:self-center">
                    <img src={image}></img>
                </div>
            </div>
            
            

        </div>
    )
}