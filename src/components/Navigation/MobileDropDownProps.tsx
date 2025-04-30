import { NavigationLink } from "../../assets/utils/contentType"
import {motion} from "motion/react";


interface MobileDropDown {
    links : NavigationLink[] | undefined
}

const MobileDropDowns = ({links} : MobileDropDown) => {
  return (
    <motion.ul 
    
    initial={{opacity: 0 , height: 0}}
    animate={{opacity:1 , height: "auto"}}
    exit={{opacity: 0 , height: 0}}
    transition={{duration: 0.35 , ease: "easeInOut"}}
    
    className="z-10 flex flex-col gap-y-6">
       {links?.map(link => (
        <li className="text-grey-600">
            <a href="#"> {link.text}</a>
           
        </li>
       ))} 
    </motion.ul>
  )
}

export default MobileDropDowns
