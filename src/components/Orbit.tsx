import OrbitingCircles from "@/components/magicui/orbiting-circles";

const RightArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5 inline"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 12h16m-7 7l7-7-7-7"
        />
    </svg>
);

export default function Orbit() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl text-center">

            {/* Inner Circles */}
            <OrbitingCircles
                className="size-[60px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={190}
            >
                <img src="/icons8-html.svg" alt="HTML" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[60px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={190}
            >
                <img src="/icons8-react-native.svg" alt="React Native" />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={300}
                duration={20}
                reverse
            >
                <img src="/icons8-css.svg" alt="CSS" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={300}
                duration={20}
                delay={20}
                reverse
            >
                <img src="/icons8-nodejs.svg" alt="NodeJS" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[70px] border-none bg-transparent"
                radius={420}
                duration={20}
                delay={20}
                reverse
            >
                <img src="/icons8-aws.svg" alt="AWS" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[70px] border-none bg-transparent"
                radius={420}
                duration={20}
                reverse
            >
                <img src="/icons8-chatgpt.svg" alt="ChatGPT" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[70px] border-none bg-transparent"
                radius={540}
                duration={20}
                delay={20}
                reverse
            >
                <img src="/icons8-firebase.svg" alt="Firebase" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[70px] border-none bg-transparent"
                radius={540}
                duration={20}
                reverse
            >
                <img src="/icons8-chatgpt.svg" alt="ChatGPT" />
            </OrbitingCircles>
            <h2 className="text-6xl font-bold text-black mb-4">
                We've really sped up our workflow
            </h2>
            <span className="flex text-gray-500">
                <p className="flex font-bold mb-2">We've just released a new update!</p><p>Check out the all new dashboard view. Pages now load faster. You can try us for free for 30 days.</p>
            </span>
            <p className="text-gray-500 mb-8">
                Join 40,000+ companies already growing
            </p>
            <div className="flex items-center space-x-4 flex-shrink-0">
                <button className="border rounded-[5px] bg-[#ffffff] text-black-600 dark:border-white/[0.2] dark:bg-purple-800 dark:text-white text-sm font-medium px-4 py-2">
                    <span className="flex items-center">
                        <RightArrowIcon />
                        <span className="ml-2">Start Learning Today</span>
                    </span>
                </button>
                <button className="border rounded-[5px] bg-blue-600 text-white dark:border-white/[0.2] text-sm font-medium px-4 py-2">
                    <span>Join now</span>
                </button>
            </div>
        </div>
    )
}
