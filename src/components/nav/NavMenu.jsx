import { motion } from "framer-motion"
import NavLink from './NavLink'
import NavInfo from './NavInfo'
import A from "./A"

export default function NavMenu() {
    return(
        <motion.div 
        animate={{ x:0 }}
        exit={{x: screen.width*-1 }}
        initial={{ x: screen.width*-1 }}
        transition={{ duration: .3 }}
        className="absolute bg-red-600/95 right-0 top-12 w-screen h-screen-without-nav flex xsm:block">
            <div className="flex flex-col bg-red-700">
                <motion.div 
                initial={{ y: -300 }}
                animate={{ y: -0 }}
                transition={{ delay: .3, duration: .3 }}>
                    <NavLink title={'Home'} to={'/'} overmsg={'Go home'}/>
                    <NavLink title={'Resume'} to={'resume'} overmsg={'See my resume'}/>
                    <NavLink title={'Projects'} to={'projects'} overmsg={'See my projects'}/>
                    <A title={'Github'} to={'https://github.com/thepug432/'} overmsg={'Go to my Github'}/>
                </motion.div>
            </div>
            <div className="mx-auto mt-52 xsm:m-0">
                <NavInfo />
            </div>
        </motion.div>
    )
}