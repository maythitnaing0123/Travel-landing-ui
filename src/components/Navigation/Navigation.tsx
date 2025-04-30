import { navigationLinks } from "../../assets/utils/content";
import BellIcon from "../Icons/BellIcon";
import CaretUp from "../Icons/CareUp";
import Hamburger from "../Icons/Hamburger";
import LogoIcon from "../Icons/LogoIcon";
import SearchIcon from "../Icons/SearchIcon";
import DesktopDropDown from "./DesktopDropDown";

const Navigation = () => {
  return (
   <nav className="flex flex-col m-auto relative z-10 md:px-5   mb-7 max-w-432">
    
    
    <div className="flex items-center justify-between
    px-2.5">
        <a href='/' className="flex gap-x-2.5 items-center">
        <LogoIcon className={"size-10"}/>
        <span className="text-xl font-semibold">Go Travel</span>
        </a>

        <ul className="hidden md:flex items-stretch gap-x-10">
            {navigationLinks.map(Link => (
              <li key={Link.id} className="group relative flex cursor-pointer items-center gap-x-1.75 font-medium transition-all duration-200">
                <a href={Link.href} 
                className="text-gray-600 group-hover:text-black"
                >{Link.text}</a>
                {Link.dropdown && (
                  <span className="flex size-6 items-center justify-center">
                    <CaretUp className="size-3.5 fill-gray-600
                     rotate-180 transition-all duration-200 group-hover:fill-black group-hover:rotate-360"/>
                  </span>
                )}
                {Link.dropdown && <DesktopDropDown link={Link.dropdownLinks}/>}
              </li>
             
            ))}
        </ul>

        <div className="hidden md:flex items-center gap-x-5">
          <BellIcon fill={""} className="fill-gray-600 cursor-pointer hover:fill-black"/>
          <SearchIcon 
          className="fill-gray-600 cursor-pointer hover:fill-black"/>
          <button className="bg-primary-700 rounded-[0.625rem] 
           cursor-pointer p-2 px-4 text-sm font-medium text-white transition-all duration-200">Join Now</button>
        </div>

        <Hamburger Str={`flex items-end md:hidden`}/>


    </div>


   </nav>
  )
}

export default Navigation
