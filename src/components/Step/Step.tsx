import { steps } from "../../assets/utils/content"
import SwimmingPic from "../../../public/swimmingDudes.webp"
import Rating from "./Rating"
const Step = () => {
  return (
    <section className="px-5 md:px-24 py-30 pb-10">
      <div className="m-auto max-w-432 px-23.5">


        <div className="mt-4 text-center">
          <h2 className="tracking-6 mb-5 text-[1.7rem] md:text-[2.25rem] font-semibold">Travel to make sweet memories</h2>
          <p className="text-[1rem] md:text-[1.3rem] tracking-6 text-gray-700">Find the perfect vacation getway.</p>
        </div>

        <div className="flex flex-col 
        md:flex-row items-start 
        pt-26 justify-between gap-x-30 gap-y-10">

          {/* Left side */}
          <div className="flex-1">
            <ul className="mb-14 flex flex-col 
            gap-y-14">
              {steps.map(step => (
                <li key={step.id} className="flex flex-col gap-y-4.5">
                  <span className="bg-primary-700 text-white font-semibold w-min px-4 rounded-[.5rem] py-0.5">{step.id}</span>
                  <h3 className="text-[1.2rem]/9.5 font-semibold tracking-6 w-max">{step.heading}</h3>
                  <p className="text-gray-500 tracking-6 font-light">{step.description}</p>

                </li>
              ))}
            </ul>
            <a href="#ExploreMore" 
            className="bg-primary-700 w-max 
            text-white font-medium transition-all duration-200
            cursor-pointer 
            rounded-[0.67rem] p-2 px-4 text-md">
              Start your explore
            </a>
          </div>



          {/* Right side */}

          <figure className="relative flex-1 px-0  md:px-20">
            <div className="w-[200px] md:w-[300px]">
            
            <img src={SwimmingPic} 
            alt="A phot of two men swimming" 
            className="h-[20.8rem] w-full md:h-[30.8rem] bg-cover rounded-[1.5rem] " />
            </div>
            <Rating 
            name={"Tiffany Miller"} 
            className="absolute top-20 -left-[40%] md:left-0"
            rating={4.6} 
            img="/headshots/tiffany.webp"/>
           <Rating 
            name={"Anari Racer"} 
            className="absolute bottom-20 -right-[40%] md:right-0"
            rating={4.9} 
            img="/headshots/amari.webp"/>
          </figure>

        </div>


      </div>
    </section>
  )
}

export default Step
