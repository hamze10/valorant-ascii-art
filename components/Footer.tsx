"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-valo-gray py-12 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1 border-l-2 border-valorant-red pl-4">
                        <h3 className="font-valorant text-xl text-white tracking-widest uppercase mb-4">
                            Valo<span className="text-valorant-red">Ascii</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            The premier ASCII art editor for VALORANT players and gaming enthusiasts. Create, edit, and share stunning ASCII artwork with ease.
                        </p>
                        <div className="flex gap-4">
                            <span className="bg-valorant-red/10 text-valorant-red border border-valorant-red/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">Free Forever</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-valorant-red transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-1 bg-valorant-red rotate-45"></div> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/twitch" className="text-gray-400 hover:text-valorant-red transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-1 bg-valorant-red rotate-45"></div> Twitch ASCII
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-gray-400 hover:text-valorant-red transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-1 bg-valorant-red rotate-45"></div> Features & Examples
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-valorant-red transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-1 bg-valorant-red rotate-45"></div> About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-4">Support</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-valorant-red transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-1 bg-valorant-red rotate-45"></div> Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:hamzamah1030@gmail.com" className="text-gray-400 hover:text-valorant-red transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-1 bg-valorant-red rotate-45"></div> Tech Support
                                </a>
                            </li>
                            <li>
                                <Link href="/guides" className="text-gray-400 hover:text-valorant-red transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-1 bg-valorant-red rotate-45"></div> Guides
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-valorant-red transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-1 bg-valorant-red rotate-45"></div> Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/mentions-legales" className="text-gray-400 hover:text-valorant-red transition-colors text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                    <div className="w-1 h-1 bg-valorant-red rotate-45"></div> Mentions Légales
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">
                                © {new Date().getFullYear()} ValoAscii. All rights reserved.
                            </p>
                            <p className="text-gray-600 text-[10px] uppercase tracking-wider max-w-xl">
                                ⚠️ Not affiliated with Riot Games or VALORANT. VALORANT is a trademark of Riot Games, Inc.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
                                <span className="w-2 h-2 bg-valorant-red animate-pulse"></span>
                                System Online
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
