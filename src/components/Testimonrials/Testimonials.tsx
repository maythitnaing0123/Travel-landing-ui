import { testimonials } from "../../assets/utils/content"
import Testimonial from "./Testimonial"

const Testimonials = () => {
    return (
        <section className="px-24 py-30">

            <div className="flex flex-col m-auto max-w-389 items-center justify-center gap-x-28">
                
                <h3 className="font-semibold text-2xl mb-24">What our Vactioners Says </h3>
                <ul className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0">
                    {
                        testimonials.map(testimonial => (
                            <Testimonial testimonial={testimonial} key={testimonial.id}/>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Testimonials
