import { AnimatePresence } from 'framer-motion'
import { UseNavContext } from '../hooks/NavHook'


export default function Hider({ children }) {
    const SeeNav = UseNavContext()
    return(
        <AnimatePresence>
        {!SeeNav &&
            children
        }    
        </AnimatePresence>
    )
}