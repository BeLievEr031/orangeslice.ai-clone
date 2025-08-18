import CrossImg from "../assets/cross.png"
function InsightHighlight() {
    return (
        <div className="relative px-4 text-white md:h-[700px] md:px-24">
            <div className="relative z-10 flex h-full flex-col-reverse items-center justify-center overflow-hidden py-12 md:flex-row md:py-0">
                <div className="flex h-full flex-col justify-center md:w-1/2">
                    <div className="flex max-w-md flex-col text-center md:text-left">
                        <p className="text-4xl font-light text-[#FFD37B]">GTM Intelligence</p>
                        <p className=" mt-1 text-4xl">
                            Know everything you’d ever want to know about your prospects
                        </p>
                        <p className="mt-4 text-neutral-200">
                            We don’t stop at names and logos. Get a full cross-section of your
                            prospects — who they are, what they need, and when to sell.
                        </p>
                    </div>
                </div>
                <div className="relative flex h-full flex-col items-center  justify-center md:w-1/2">
                    <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black/100 via-black/70 to-transparent" />
                    <img
                        src={CrossImg}
                        alt="CrossImg"
                        className="bottom-0  max-h-[700px] object-contain"
                    />
                </div>
            </div>
        </div>

    )
}

export default InsightHighlight