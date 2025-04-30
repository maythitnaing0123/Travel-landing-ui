import { heroBenefits } from "../../assets/utils/content"
import HeroBenefit from "./HeroBenefit"


const Hero = () => {
  return (
    <section className="relative m-auto max-w-[100rem]">
        <div className="relative pb-[100%]
        md:pb-[40.25%]
        rounded-[1.2rem] bg-cover bg-bottom
        flex items-center justify-center bg-[url('/public/hero.webp')]">

            <div className="absolute -top-25 left-0 right-0 flex 
             justify-center text-center">
                <div>
                    <h1
                    
                     className="mb-4 pt-54 
                     racking-wide text-3xl lg:text-5xl

                     font-semibold text-white select-none">Start Your Memorabe <br/>Jourey Here</h1>
                    <p className="text-md font-semibold md:text-3xl
                   text-white">Where unforgettable adventures await you.</p>
                </div>
            </div>

            <ul className="hidden md:flex 
            absolute -bottom-10 mx-15 gap-x-10 
            rounded-[1.1rem] bg-white px-10 
            drop-shadow-[0px_2px_40px_rgba(0,0,0,.06)]">
                {heroBenefits.map(benefit => (
                    <HeroBenefit benefit={benefit} key={benefit.id}/>
                ))}
            </ul>


        </div>
      
    </section>
  )
}

export default Hero
