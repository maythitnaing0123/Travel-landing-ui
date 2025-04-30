import { useContexts } from "../../content/MobileMenuContent";

export default function Hamburger( {Str} : {Str: string}) {
    
  const {menuOpened , setMenuOpened} = useContexts()
  
  
  return (
      <button 
      
      onClick={() => setMenuOpened(!menuOpened)}
      className={`cursor-pointer ${Str}
      flex-col justify-center space-y-1`}>
        <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-black" />
        <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-black" />
        <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-black" />
      </button>
    );
  }