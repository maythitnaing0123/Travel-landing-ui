import Star from "../Icons/Star"
import { motion } from "motion/react"

interface RatingProps{
  name: string,
  rating : number,
  img: string,
  className: string
}

const Rating = ({name,rating,img,className} : RatingProps) => {
  return (
    <motion.div 
    viewport={{ once: true }}
    transition={{duration: 0.5 , ease: "easeInOut"}}
    initial={{opacity: 0 , y: 100 , scale:0.95}}
    whileInView={{opacity:1 , y: 0 , scale:1}}    
    
    className={`flex gap-x-2.5 
      drop-shadow-[0px_4px_10px_rgba(0,0,0,.12)] backdrop-blur-3xl
    rounded-xl py-3 pr-5 pl-3 bg-white ${className}`}>


      <div className="bg-gray-300 
      flex items-end justify-center overflow-hidden rounded-full ">
        <img src={img} alt={name} className="size-15" />
      </div>

      <div className="flex flex-col gap-y-2 justify-center">
        <p className="tracking-6 font-semibold text-sm">{name}</p>
        <div className="flex items-center justify-start">
          <Star className="fill-yellow-400 mr-2 size-5"/>
          <p className="text-gray-600 text-sm">{rating}</p>
        </div>
      </div>
    </motion.div >
  )
}

export default Rating
