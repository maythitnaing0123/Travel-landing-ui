import { useContext, useState } from "react"
import Close from "../Icons/Close"
import { navigationLinks } from "../../assets/utils/content"
import CaretUp from "../Icons/CareUp"
import MobileDropDowns from "./MobileDropDownProps"
import { AnimatePresence , motion} from "motion/react"
import { MenuContext } from "../../content/MobileMenuContent"

const MobileMenu = () => {

    const {menuOpened , setMenuOpened} = useContext(MenuContext)

    const [activeLinkId, setActiveLinkId] = useState<number>(-1)
    
    


    return (
        <motion.div 

        animate={menuOpened ? "visiable" : "hidden"}

        variants={{
            hidden: {
                opacity: 0 , display: "none"
            },
            visible: { opacity: 1 , display: "flex" },

        }}

        className="z-20 fixed flex h-full top-0 right-0 justify-end left-0 button-0  bg-white/30 pl-20">

            <motion.nav 

             animate={menuOpened ? "visiable" : "hidden"}

             variants={{
                hidden: {
                    opacity: 0 , x: "100%"
                },
                visible: { opacity: 1 , x: "0%" },
    
            }}

            transition={{
                duration: 0.35,
                ease: "easeInOut"
            }}
            className="flex bg-white h-full p-6 pl-7 w-full max-w-96 min-w-65 flex-col items-start gap-y-18">
                
                <button onClick={() => setMenuOpened(!menuOpened)}>
                
                <Close />
                </button>
                
                <ul className="flex flex-col gap-y-8">
                    {navigationLinks.map(links => (
                        <li 
                    
                        onClick={() => setActiveLinkId(activeLinkId === links.id ? -1 : links.id)}
                        key={links.id} className={`group relative flex flex-col font-medium transition-all duration-300 ease-in-out ${activeLinkId === links.id ? "gap-y-6" : "gap-y-0"}`}>
                            <div className="flex items-center gap-x-3">

                                <a href="#" className={` ${activeLinkId === links.id ? "text-black" : "text-gray-500"}`}>{links.text}</a>
                                {links.dropdown && <span 
                                className={`flex items-center justify-center transition-all duration-200 ${links.id === activeLinkId ? "rotate-180" : ""}`}>
                                    <CaretUp className={`fill-gray-500 size-3.5 transition-all duration-200 ${activeLinkId === links.id ? "fill-black" : ""}`}/>
                                    </span>
                                }

                                
                            </div>

                            <AnimatePresence>

                            {links.dropdown && activeLinkId === links.id && 
                            <MobileDropDowns links={links.dropdownLinks}/>}
                            </AnimatePresence>

                        </li>
                    ))}
                </ul>

                <button className="bg-primary-700 rounded-[0.625rem] 
           cursor-pointer p-2 px-4 text-sm font-medium text-white transition-all duration-200">Join Now</button>
            </motion.nav>


        </motion.div>
    )
}

export default MobileMenu
