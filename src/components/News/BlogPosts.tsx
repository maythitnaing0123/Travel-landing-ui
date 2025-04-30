import { useState } from "react"
import { BlogPost } from "../../assets/utils/contentType"
import { motion } from "motion/react"
import FormatDate from "./FormatDate"
interface BlogsPostProp {
    post: BlogPost

}



const BlogPosts = ({ post }: BlogsPostProp) => {
    
    const [imageLoaded , setImageLoaded] = useState<boolean>(false);

    
    
    return (
        <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: imageLoaded ? 1 : 0, y:
                    imageLoaded ? 0 : 20
            }}
            className="group flex flex-col md:flex-row cursor-pointer items-center 
            justify-between gap-x-20 ">
            
          
            
            <div className="overflow-hidden rounded-[0.5rem] flex-1">
                <img src={post.img} alt={post.alt}
                    onLoad={() => setImageLoaded(true)}
                    className="max-h-108
      transform transition-all 
         ease-in-out group-hover:scale-105"/>

            </div>

            <div className="md:mr-11 max-w-195 flex-2 justify-center">
                <p className="tracking-6 pt-5 md:pt-0 text-gray-900/50 mb-4.5 text-[0.9rem] font-medium">{FormatDate(post.date)}</p>
                <h3 className="text-[1.2rem]/9.5 font-semibold tracking-6 w-max">{post.title}</h3>

                <p className="text-gray-500  text-base/9 mb-6 text-[1rem]">{post.summary}</p>
                <button className="bg-primary-700
   
        text-white transition-all duration-200
        text-[0.80rem] 
        cursor-pointer rounded-[1rem] 
      p-2 px-3">View More</button>


            </div>
        </motion.li>
    )
}

export default BlogPosts
