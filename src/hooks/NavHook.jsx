import { createContext, useContext, useState } from "react";



const NavContext = createContext()
const ChangeNavContext = createContext()

export const UseNavContext = () => {
    return useContext(NavContext)
}

export const UseChangeNavContext = () => {
    return useContext(ChangeNavContext)
}

export default function NavContextProvider({children}) {
    const [Nav, ChangeSeeNav] = useState(false)
    return(
        <NavContext.Provider value={Nav}>
            <ChangeNavContext.Provider value={ChangeSeeNav}>
                {children}
            </ChangeNavContext.Provider>
        </NavContext.Provider>
    )
}   