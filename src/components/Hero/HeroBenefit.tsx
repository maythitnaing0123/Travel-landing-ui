import { type HeroBenefit } from "../../assets/utils/contentType"

interface HeroBenefitProps{
    benefit : HeroBenefit
}

const HeroBenefit = ({benefit} :HeroBenefitProps ) => {
  return (
    <li key={benefit.id} className="flex items-center gap-x-10 py-5">
       
       <div 
       style={{backgroundColor: 'rgb(240, 253, 255)'}}
       className=" w-15 h-15 flex items-center justify-center rounded-full shrink-0">
       <benefit.Icon
      className="size-8" fill={"rgb(66, 197, 219)"} 
     />
       </div>

       <div className="">
       <p className="text-gray-600 text-[1rem]/9.5 font-semibold tracking-6 w-max">{benefit.heading}</p>
        <p className="text-gray-500 tracking-6 font-light">{benefit.description}</p>
       </div>

    </li>
  )
}

export default HeroBenefit
