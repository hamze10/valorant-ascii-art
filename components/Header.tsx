"use client";

import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    const buttonStyle = "mr-2 border rounded-lg p-1 bg-white"

    return (
        <div className="bg-valorant-red p-4">
            <div className="flex flex-row justify-center align-middle text-center text-white">
                <p className="font-valorant text-4xl">
                    VALASCII
                </p>
                <p className="font-mono font-semibold text-md ml-2">ASCII art</p>
            </div>

            <div className="flex justify-center mt-5">
                <button className={buttonStyle} type="button" onClick={() => router.push("/")}>
                    Home
                </button>
                <button className={buttonStyle} type="button" onClick={() => router.push("/twitch")}>
                    Twitch
                </button>
                <button className={buttonStyle} type="button" onClick={() => router.push("/about")}>
                    About
                </button>
                <button className={buttonStyle} type="button" onClick={() => router.push("/contact")}>
                    Contact
                </button>
                <button className={buttonStyle} type="button" onClick={() => router.push("/privacy-policy")}>
                    Privacy-Policy
                </button>
            </div>
        </div>
    )
}

export default Header;