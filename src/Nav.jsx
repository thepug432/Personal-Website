import { useState } from "react"
import NavButton from './components/NavButton'

export default function Nav() {
    const [SeeNav, ChangeSeeNav] = useState(false)
    return(
        <nav className="flex relative p-2">
            <NavButton open={SeeNav} changeOpen={ChangeSeeNav}/>
            
            {SeeNav &&
                <div>asd</div>
            }
        </nav>
    )
}