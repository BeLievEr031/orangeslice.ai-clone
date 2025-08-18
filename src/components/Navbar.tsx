import DarkLogoImg from "../assets/black_logo.svg"
import LightLogoImg from "../assets/logo.png"
function Navbar() {
    return (
        <div className="sticky top-0 z-[100] bg-background">
            <header className=" flex w-full flex-row  items-center justify-between gap-6  px-3 py-2  backdrop-blur-lg  md:px-16">
                <div className="flex flex-row items-center gap-6 ">
                    <a className="flex items-center gap-2" href="#">
                        <img src={DarkLogoImg} className="mb-2 w-7 dark:hidden" alt="" />
                        <img src={LightLogoImg} className="mb-2 w-7 hidden dark:inline" alt="" />
                        <div className="flex flex-col">
                            <span className="whitespace-nowrap text-xl text-primary tracking-tight">
                                Orange Slice
                            </span>
                        </div>
                    </a>
                    <a
                        className="mt-1 hidden text-sm dark:text-neutral-100 md:block"
                        href="/blogs"
                    >
                        Blog
                    </a>
                </div>
                <div className="flex flex-row gap-2">
                    <a
                        className="justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 py-2 group rounded-full bg-[#FFD37B] px-4 text-black hover:bg-[#FFD37B]/80 flex items-center "
                        href="https://tally.so/r/3q840Y"
                    >
                        Book a demo
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right ml-2 size-4 transition-transform group-hover:translate-x-1"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </header>
            <hr className="w-full border-neutral-500" />
        </div>

    )
}

export default Navbar