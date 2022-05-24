import { UseNavContext, UseChangeNavContext } from '../hooks/NavHook'
import { AnimatePresence } from 'framer-motion'
import NavButton from './nav/NavButton'
import NavMenu from './nav/NavMenu'

export default function Nav() {
    const SeeNav = UseNavContext()
    const ChangeSeeNav = UseChangeNavContext()
    return(
        <nav className="flex p-3 bg-red-700 relative">
            <NavButton open={SeeNav} changeOpen={ChangeSeeNav}/>
            <AnimatePresence>
                {SeeNav &&
                    <NavMenu />
                }
            </AnimatePresence>
        </nav>
    )
}