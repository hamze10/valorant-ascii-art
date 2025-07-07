"use client";

import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();

    return (
        <footer className="bg-gray-800 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <h3 className="font-valorant text-2xl text-valorant-red mb-4">VALASCII</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            The premier ASCII art editor for VALORANT players and gaming enthusiasts. Create, edit, and share stunning ASCII artwork with ease.
                        </p>
                        <div className="flex gap-4">
                            <span className="bg-valorant-red/20 text-valorant-red px-3 py-1 rounded-full text-xs font-medium">Free Forever</span>
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">No Registration</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => router.push("/")} 
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => router.push("/twitch")} 
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    Twitch ASCII
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => router.push("/features")} 
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    Features & Examples
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => router.push("/about")} 
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    About Us
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => router.push("/contact")} 
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    Contact Us
                                </button>
                            </li>
                            <li>
                                <a 
                                    href="mailto:hamzamah1030@gmail.com" 
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    Technical Support
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-400 text-sm">FAQ (Coming Soon)</span>
                            </li>
                            <li>
                                <span className="text-gray-400 text-sm">Tutorials (Coming Soon)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => router.push("/privacy-policy")} 
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => router.push("/mentions-legales")} 
                                    className="text-gray-300 hover:text-white transition-colors text-sm"
                                >
                                    Mentions Légales
                                </button>
                            </li>
                            <li>
                                <span className="text-gray-400 text-sm">Terms of Service (Coming Soon)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Features Highlight */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <h4 className="font-bold text-lg mb-4 text-center">Why Choose ValoAscii?</h4>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-2xl mb-2">🎨</div>
                            <h5 className="font-semibold text-sm">Easy to Use</h5>
                            <p className="text-gray-400 text-xs">Intuitive grid-based editor</p>
                        </div>
                        <div>
                            <div className="text-2xl mb-2">💾</div>
                            <h5 className="font-semibold text-sm">Auto-Save</h5>
                            <p className="text-gray-400 text-xs">Never lose your work</p>
                        </div>
                        <div>
                            <div className="text-2xl mb-2">⚡</div>
                            <h5 className="font-semibold text-sm">Lightning Fast</h5>
                            <p className="text-gray-400 text-xs">Optimized performance</p>
                        </div>
                        <div>
                            <div className="text-2xl mb-2">🔒</div>
                            <h5 className="font-semibold text-sm">Privacy First</h5>
                            <p className="text-gray-400 text-xs">Your data stays local</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm mb-1">
                                © {new Date().getFullYear()} ValoAscii. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-xs">
                                ⚠️ Not affiliated with Riot Games or VALORANT. VALORANT is a trademark of Riot Games, Inc.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-400 text-xs">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Service Status: Online
                            </div>
                            <div className="text-gray-400 text-xs">
                                Made with ❤️ for the gaming community
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;