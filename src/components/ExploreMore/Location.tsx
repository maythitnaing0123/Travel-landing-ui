import { type Location } from "../../assets/utils/contentType"
import Star from "../Icons/Star";
import { Location as LocationIcon } from "../Icons/Location";
interface LocationProps {

  location: Location;
}



const Location = ({ location }: LocationProps) => {


  return (
    <li className="group cusror-pointer">

      {/* top */}

      <div className="relative mb-4 
      rounded-xl
      overflow-hidden">
        <img src={location.img}
          className="transform transition-all duration-300 ease-in-out group-hover:scale-103"
          alt={location.alt} />


        <div className="absolute top-5 right-5 
      flex items-center gap-x-1
      rounded-[.625rem] bg-white
       backdrop-blur-3xl p-1 px-2">
          <Star className="size-4 fill-amber-400" />
          <p className="text-sm text-gray-500 font-medium">{location.rating}</p>
        </div>

      </div>


      {/* bottom */}

      <div className="flex flex-col gap-y-3">


        <p className="font-bold text-lg">{location.title}</p>

        <div className="flex justify-between">

          <div className="flex items-center">
            <LocationIcon className="size-5" />
            <p className="text-gray-600">{location.location}</p>
          </div>


          <p className="text-[1rem]">
            {location.pricePerPerson}/<span className="text-[0.75rem]">Pax</span>

          </p>
        </div>

      </div>



    </li>
  )
}

export default Location
