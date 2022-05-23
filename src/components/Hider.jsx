import { UseNavContext } from '../hooks/NavHook'

export default function Hider({ children }) {
    const SeeNav = UseNavContext()
    return(
        <>
        {!SeeNav &&
            children
        }    
        </>
    )
}