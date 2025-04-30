import { NavigationLink } from "../../assets/utils/contentType"

interface DesktopDropDownProps {
    link? : NavigationLink[]
}

const DesktopDropDown = ({ link }: DesktopDropDownProps) => {
  return (
   <ul className="invisible absolute 
   bg-white p-5 opacity-0 drop-shadow-[2px_4px_30px_rgba(0,0,0,.10)]
   top-[calc(100%+10px)] -left-8 z-1 flex  transform translate-y-2 flex-col gap-y-7 rounded-tl-lg 
   transition-all duration-300 ease-in-out 
   group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
   rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
    {link?.map(Link => (
      <li key={Link.id} className="flex cursor-pointer items-center font-medium transition-all duration-200">
        <a href={Link.href} 
        className="text-gray-600 text-nowrap hover:text-black">{Link.text}</a>
      </li>
    ))}
   </ul>
  )
}

export default DesktopDropDown
