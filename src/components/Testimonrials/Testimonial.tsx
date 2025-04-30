import { type Testimonial } from "../../assets/utils/contentType"

interface testimonialProps {
    testimonial: Testimonial
}

const Testimonial = ({ testimonial }: testimonialProps) => {
    return (
        <li className="relative
        drop-shadow-[0px_0px_20px_rgba(0,0,0,0.05)]
         ml-24 flex rounded-3xl py-14 pt-14 pl-25 md:pl-30 pr-4 bg-white w-[300px] md:w-auto">

            <div className="absolute left-0 top-0 translate-y-[50%] -translate-x-[50%] after:absolute after:right-0 after:left-2  after:top-2 after:bottom-0 after:-z-1 after:block after:size-35 after:bg-[rgb(66,197,219)] after:rounded-full">
                <img
                className="bg-gray-300 top-0 left-0 z-5 size-35 rounded-full"
                 src={testimonial.img} alt={testimonial.alt} />
            </div>

            <div className="flex flex-col justify-between gap-y-14">
                <p className="text-base/7 font-light">{testimonial.description}</p>
                <p className="font-medium">{testimonial.name} / <span className=" text-gray-500">{testimonial.vacation}</span></p>
            </div>

        </li>

    )
}

export default Testimonial
