import { useState } from "react"
import { locations } from "../../assets/utils/content"
import CaretUp from "../Icons/CareUp"
import Location from "./Location"
import { LOCATION_CARDS_SHOW } from "../../assets/utils/contents"

const ExploreMore = () => {

    // take index , total

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const startNumber = currentIndex * LOCATION_CARDS_SHOW;
    const lastNumber = startNumber + LOCATION_CARDS_SHOW;
    console.log(startNumber, "lastNumber ,", lastNumber, "locations.length", locations.length)
    const totalLocations = locations.length;
    const renderLocations = locations.slice(startNumber, lastNumber)


    const handleRightClick = () => setCurrentIndex((prevIndex) => prevIndex + 1)

    const handleLeftClick = () => setCurrentIndex((prevIndex) => prevIndex - 1)



    return (
        <section className="px-24 py-30" id="ExploreMore">
            <div className="m-auto max-w-389">
                <div className="flex gap-x-33 
                items-end justify-between">
                    <div>
                        <h2 className="tracking-6 text-[2.25rem] font-semibold">Explore More</h2>
                        <p className="text-gray-500 text-base/9  text-[1.2rem]">Let's go on adventure</p>
                    </div>

                    <div className="flex gap-x-6">
                        <button
                            aria-label="arrow left"
                            onClick={handleLeftClick}
                            disabled={currentIndex === 0}
                            className="bg-grey-300
                        flex size-9 cursor-pointer place-content-center rounded-full transition-all duration-200 
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                        -rotate-90
                        bg-gray-300
                         not-disabled:hover:bg-gray-400"><CaretUp className="w-3" /></button>
                        <button
                            aria-label="arrow right"

                            disabled={lastNumber >= totalLocations}

                            onClick={handleRightClick}
                            className="bg-primary-700 bg-grey-300
                        disabled:opacity-50
rotate-90
                        flex size-9 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed
                         not-disabled:hover:bg-gray-400"><CaretUp className="w-3" /></button>                    </div>
                </div>

                {/* images */}
                <ul className="mt-25
                gap-x-29 gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        renderLocations.map((location) => (
                            <Location
                                location={location} key={location.id} />
                        ))

                    }</ul>




            </div>

        </section>
    )
}

export default ExploreMore
