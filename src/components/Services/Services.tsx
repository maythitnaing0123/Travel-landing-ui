import Service from "./Service"
import {type Service as IsService} from "../../assets/utils/contentType"
import { services } from "../../assets/utils/content"


const customizerPackages : IsService = services[0]
const culinaryPackages : IsService = services[1]
const DestinationPackages : IsService = services[2]

const Services = () => {
  return (
   <section 
  
   className="bg-color px-24 py-30">
    <ul className="border-gray-500/40 m-auto flex flex-col lg:flex-row gap-y-6 lg:gap-y-0
    justify-between max-w-389 border-y-1 py-24">
       <Service service={customizerPackages}/> 
       <li aria-label="a grey dividor element"  className="bg-gray-500/40 block w-0.25 self-stretch"/>
       <Service service={culinaryPackages}/>
       <li aria-label="a grey dividor element" className="bg-gray-500/40 block w-0.25 self-stretch"/>
       <Service service={DestinationPackages}/>
    </ul>
   </section>
  )
}

export default Services
