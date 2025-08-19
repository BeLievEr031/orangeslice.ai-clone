import BGRectangleImg from "../assets/bg-rectangle.svg"
import AgentImg from "../assets/agent.png"
import BlackLogoImg from "../assets/black_logo.svg"
function SalesAgentSection() {
    return (
        <div className="relative px-4 text-black md:h-[700px] md:px-20">
            <img
                src={BGRectangleImg}
                alt="Rectangle 155.svg"
                className="absolute inset-0 size-full object-cover"
            />
            <div className="relative z-10 flex h-full flex-col-reverse items-center justify-center overflow-hidden pt-12 md:flex-row md:py-0">
                <div className="flex h-full flex-col items-center justify-end md:w-1/2 md:items-start">
                    <img
                        src={AgentImg}
                        alt="AgentImg"
                        className="bottom-0 max-h-[700px] w-4/5 object-contain"
                    />
                </div>
                <div className="flex h-full flex-col justify-center md:w-1/2">
                    <div className="flex max-w-md flex-col text-center md:text-left">
                        <div className="flex flex-row items-center justify-center gap-2 md:justify-start">
                            <img src={BlackLogoImg} className="mb-2 w-10" alt="BlackLogoImg" />
                            <span className="text-3xl tracking-tight">
                                Orange Slice <span className="font-extralight">Agents</span>
                            </span>
                        </div>
                        <p className="mt-5 text-4xl">
                            Your best sales rep, automated and always on
                        </p>
                        <p className="mt-4 text-neutral-800">
                            AI agents that work 24/7 to identify your ideal customers, delivering
                            qualified leads while you sleep.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SalesAgentSection