
import { footerCols, footerSocials } from "../assets/utils/content"
import LogoIconDark from "./Icons/LogoIconDark"

const Footer = () => {
    return (
        <footer className="bg-[rgb(66,197,219)] px-24 py-30 ">

            {/* parents */}
            <div className="mx-auto flex flex-col md:flex-row max-x-432 justify-between gap-x-20 
             text-white">

                {/* one div */}
                <div className="flex max-w-100 gap-x-5">
                    
                    <LogoIconDark className="shrink-0" />

                    <div className="flex flex-col">
                        <p className="mb-5 pt-3.5 font-semibold ">GoTravel - Your Vacation Awaits</p>
                        <p className="mb-8">
                            GoTravel creates vacations you'll remember.
                            simply pick your desired location, and we do the rest.An all includsive getway
                            that leaves you relaxing, not stressing.
                        </p>



                        <ul className="flex gap-x-9">
                            {footerSocials.map(social => (
                                <li key={social.id}>
                                    <a href={social.href} aria-label={social.alt}>
                                        <social.Icon className="size-11 fill-white" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>


                {/* Another div */}
                <ul className="flex flex-col md:flex-row basis-200 justify-between  items-center   mt-10 md:mt-0 md:gap-x-5">
                    {footerCols.map(col => (
                        <li key={col.id}>
                            <p className="mb-5 text-xl font-semibold">{col.heading}</p>
                            <ul className="flex flex-col gap-y-2.5">
                                {col.links.map(link => (
                                    <li className="flex items-center" key={link.id}>
                                        {link.Icon && <link.Icon className="block size-6 fill-white" />}
                                        <a href={link.href} className="font-medium hover:opacity-100 opacity-80">
                                            <p>{link.name}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

            </div>
        </footer>
    )
}

export default Footer

