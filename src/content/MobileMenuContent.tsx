import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from "react";

interface Props {
    children: ReactElement
}

interface contentValuesShape{
    menuOpened : boolean,
    setMenuOpened : Dispatch<SetStateAction<boolean>>
}

export const MenuContext = createContext<contentValuesShape>(
   
    { menuOpened : false,
    setMenuOpened : () => {}
   }
)

export const useContexts = () => {
        return useContext(MenuContext)
    
}

export default function MenuContextProvider({children} : Props){

    const [menuOpened , setMenuOpened] = useState<boolean>(false)

return (
    <MenuContext.Provider value={{menuOpened , setMenuOpened}}>
        {children}
    </MenuContext.Provider>
)
}