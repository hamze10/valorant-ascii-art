"use client";

import { useRouter } from "next/navigation";
import BuyMeACoffeeButton from "./BuyMeACoffee";

const Header = () => {
    const router = useRouter();

    const buttonStyle = "mr-3 border-2 border-white/20 rounded-lg px-4 py-2 bg-white/90 hover:bg-white text-gray-800 font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 backdrop-blur-sm"

    return (
        <div className="bg-gradient-to-r from-valorant-red via-pink-500 to-valorant-red p-6 shadow-2xl">
            <div className="flex flex-row justify-center align-middle text-center text-white">
                <h1 className="font-valorant text-5xl drop-shadow-lg">
                    VALASCII
                </h1>
                <p className="font-mono font-semibold text-lg ml-3 self-end mb-2 opacity-90">ASCII art</p>
            </div>

            <div className="flex justify-center mt-8 gap-1 flex-wrap">
                <button className={buttonStyle} type="button" onClick={() => router.push("/")}>
                    Home
                </button>
                <button className={buttonStyle} type="button" onClick={() => router.push("/twitch")}>
                    Twitch
                </button>
                <button className={buttonStyle} type="button" onClick={() => router.push("/features")}>
                    Features
                </button>
                <button className={buttonStyle} type="button" onClick={() => router.push("/about")}>
                    About
                </button>
                <button className={buttonStyle} type="button" onClick={() => router.push("/contact")}>
                    Contact
                </button>
                <button className={buttonStyle} type="button" onClick={() => router.push("/privacy-policy")}>
                    Privacy
                </button>
            </div>
            <div className="flex justify-center mt-8 gap-1 flex-wrap">
                <BuyMeACoffeeButton />
            </div>

        </div>
    )
}

export default Header;