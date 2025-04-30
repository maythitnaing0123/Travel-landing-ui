import { type Service } from "../../assets/utils/contentType"

interface ServiceProps {
  service: Service
}

const Service = ({ service }: ServiceProps) => {
  return (
    <li key={service.id} className="px-3 h-50 flex flex-col justify-between">
      <service.Icon className="h-18
      place-self-center" />
      <div className="text-center">
        <h3 className="tracking-6 
        font-semibold text-nowrap
        mb-5 text-[1.20rem]/10.5">{service.heading}</h3>
        <p  className="text-gray-900/65 tracking-6">{service.description}</p>
      </div>
    </li>
  )
}

export default Service
