import VeoVid2 from "../assets/veo-vid-2.2.mp4"
import MirroredVideo from "../assets/mirrored_video.mp4"
import img1 from "../assets/mortgage.svg"
import img2 from "../assets/pirros.svg"
import img3 from "../assets/tour.svg"
import img4 from "../assets/full-novoflow-white.png"
function Hero() {
    return (
        <div className="relative flex h-[calc(100vh-64px)] flex-col bg-black">
            <div className="relative flex h-full flex-col">
                <div className="absolute inset-0">
                    <div className="relative  z-10 size-full  bg-black/40" />
                </div>
                <div className="absolute inset-0 size-full">
                    <div className="absolute bottom-0 z-10 size-full h-1/2 bg-gradient-to-t from-black/100 via-black/30  to-transparent" />
                </div>
                <div className="absolute inset-0 ">
                    <video
                        className="absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out opacity-0"
                        src={VeoVid2}
                        autoPlay={true}
                        loop={true}
                        preload="auto"
                        muted
                    />
                    <video
                        className="absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
                        src={MirroredVideo}
                        autoPlay={true}
                        loop={true}
                        preload="auto"
                        muted
                    />
                </div>
                <div className="z-20 mt-[100px] flex h-full flex-col justify-between">
                    <div className="flex flex-col items-center space-y-6  px-12  text-center md:items-start md:px-24 md:text-left">
                        <div className=" flex w-fit flex-row items-center gap-2 rounded-full  bg-white/30 px-3  py-1 backdrop-blur-md">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAEBCAMAAABPMuDPAAAAQlBMVEXyZSLyZSLyZSLyZSLyZSL6roH91br2ilD+6tr4nGn0eDf7wp3+9e3zbyz3k1z0gUP7uI/5pXX+38n8y6z////yZSKuMvVfAAAABXRSTlOAQMBgICelMzEAAAOgSURBVHhe5MABDQAAAIIw3eifmSB8vA3Zt5vcuGEgCsLeUBSpnxnb4f2vmn068xK5Z8FuFQ8gCB9q80Dw42Pc+3y8UQABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBR7GnuAF6MafNKnDsv+xx/+1mv3nOKjDKXwRWbwIWYJl4F6wigvclUCcWaCKCeRKwAtNFoBN4TC1wigjelMA2+S5YRATv+VyfXKC+NYIqEphVQEfgT2Dv0ws8VAT+BEqAXbCJCPwJHAEEuorAn0AAARGBO4H1CCFw7O+JoArIuQVGERH4EhgBBFQE/gQmF9ARnP4EljG5gB5Iiz+BGkBAreTqTyCAgIzAnUAogdMbwSIm0cQCeiAtvgR6MIEqInAkEEBARuBKIJzAwxOB5SsBb822n0dQxSoOJNBFBI4EAgmMp4jAkUAAATWQ6s8SaEFvz8vPIqhiWAYQcEQgEogqMD5FBBcS+BrBBPRAqtcTqIEF2vUIqsgmgIAjApFAaIF6NQKbwPcIKKAHUr2WQI8k4I+gilUcQMARgUggvEC/EkEzAM8E7wu2CxGsdhJFEvBH0MQqDiegV3J1JBBQ4NhFBDqBzyTvC4qIQCawjgwCOgKdQIstoFdydSQQRcD2rSNoVimRQPuPCFaLFF1AR7A5EggloK/BdAIZBPRVqE6ghxLwR7BaoBQCOgKdQDqBLiIQCSQSGJuIoNlJlEVAR3C8TKCkfHX7fLn+T5tASoFjf9X6YmlSCozyYvxVO4kSCegI1r8n0FIJ6IF0igQyCej9txiWZAI6gsfoViWxwPiy+2gzqzi1QLUR2ATSCeiBtBuSfAI6AjsWkguM738I9PQC3ZFADoGxKYC95xfQEZRxA4FRRALHLQSOXSSQXkBHsB75BXQEbWQV0APJruL8AmMVCaQW0BEsI5uAXsn21FsJVJFAZgH9juJmAsVOorsLlLsJIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAm3547QAAoGPFkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBH6XAwc0AAAAAME2+ncWxOXNAI6Cs14i3Db7AAAAAElFTkSuQmCC"
                                className="size-5 rounded-sm"
                                alt=""
                            />
                            <p className="text-xs font-medium text-white">
                                Backed by Y Combinator
                            </p>
                        </div>
                        <h1 className=" text-4xl   tracking-tighter text-white sm:text-5xl md:w-[700px] md:text-7xl">
                            AI-agents that find you customers who{" "}
                            <i className="mr-1 font-extralight">already want</i> to buy
                        </h1>
                        <p className=" text-neutral-200 md:max-w-[500px]">
                            We analyze online signals to identify companies actively seeking your
                            solution
                        </p>
                        <div className="flex  flex-row gap-4  ">
                            <a
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow py-2 group h-12 rounded-full bg-white px-6 text-black hover:bg-neutral-200 flex items-center "
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
                    </div>
                    <div>
                        <div className="mt-4 flex grid w-full grid-cols-2 place-items-center justify-center gap-4 px-12 pb-12 sm:flex sm:flex-row sm:gap-8 sm:px-0">
                            <img
                                src={img1}
                                alt="Mortgage"
                                className="max-h-6 w-auto object-contain sm:max-h-12"
                            />
                            <img
                                src={img2}
                                alt="Pirros"
                                className="max-h-6 w-auto object-contain sm:max-h-8"
                            />
                            <img
                                src={img3}
                                alt="Tour"
                                className="max-h-6 w-auto object-contain sm:max-h-8"
                            />
                            <img
                                src={img4}
                                alt="Novoflow"
                                className="max-h-6 w-auto object-contain sm:max-h-6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero