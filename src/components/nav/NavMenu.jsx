import { motion } from "framer-motion"
import NavLink from './NavLink'
import {VscTriangleUp } from 'react-icons/vsc'

export default function NavMenu() {
    return(
        <motion.div 
        animate={{ x:0 }}
        exit={{x: screen.width*-1 }}
        initial={{ x: screen.width*-1 }}
        transition={{ duration: .3 }}
        className="absolute bg-red-600 right-0 top-10 opacity-90 w-screen h-screen flex">
            <div className="flex flex-col bg-red-700">
                <NavLink title={'Home'} to={'/'} overmsg={'Go home'}/>
                <NavLink title={'Resume'} to={'resume'} overmsg={'See my resume'}/>
                <NavLink title={'Projects'} to={'projects'} overmsg={'See my projects'}/>
                <NavLink title={'Github'} to={'github'} overmsg={'Go to my Github'}/>
            </div>
            <div>
                asdd
            </div>
        </motion.div>
    )
}