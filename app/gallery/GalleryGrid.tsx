"use client";

import { useState } from "react";
import { DocumentDuplicateIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const GALLERY_ITEMS = [
    {
        id: "crosshair-dot",
        title: "Dot Crosshair",
        description: "The classic minimalist dot crosshair, preferred by many professional players for maximum precision.",
        art: "  +\n+ O +\n  +"
    },
    {
        id: "sage-wall",
        title: "Sage Wall",
        description: "A blocky representation of Sage's Barrier Orb. Perfect for letting your team know you're walled off.",
        art: "██████\n██  ██\n██████"
    },
    {
        id: "gg-wp",
        title: "GG WP",
        description: "Good Game, Well Played. The classic sportsmanlike sign-off at the end of a long, hard-fought match.",
        art: " GG \n WP "
    },
    {
        id: "radiant-rank",
        title: "Radiant Symbol",
        description: "Show off your (imaginary or real) Radiant rank with this multi-line ASCII trophy.",
        art: "  /\\\n /  \\\n/____\\\n\\    /\n \\  /\n  \\/"
    },
    {
        id: "jett-knives",
        title: "Jett Knives",
        description: "Watch this! A quick representation of Jett's Blade Storm ultimate ability.",
        art: " /| ________________\nO|===|* >___________>\n \\|▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔"
    },
    {
        id: "spike",
        title: "The Spike",
        description: "Plant the spike! Or at least paste it in chat while you're hiding on site.",
        art: "   /\\\n  /  \\\n |    |\n |____|\n  (  )"
    }
];

export default function GalleryGrid() {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (id: string, art: string) => {
        navigator.clipboard.writeText(art);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-valo-dark text-valo-gray">
            {/* Hero Section */}
            <div className="bg-gray-900 border border-gray-800 p-8 m-6 mb-4 mt-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-valorant-red transform translate-x-12 -translate-y-12 rotate-45 opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="text-center relative z-10 mb-4">
                    <h1 className="text-4xl font-black text-white uppercase tracking-widest mb-4">
                        VALORANT ASCII ART <span className="text-valorant-red">GALLERY</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Ready-to-use ASCII art and copy-pastas for your next Valorant match. Find the perfect design, click to copy, and paste it directly into the game chat!
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pt-0">
                {GALLERY_ITEMS.map((item) => (
                    <div key={item.id} className="bg-gray-900 border border-gray-800 hover:border-valorant-red transition-colors duration-300 overflow-hidden flex flex-col relative group">
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-valo-dark group-hover:bg-valorant-red transition-colors duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-valo-dark group-hover:bg-valorant-red transition-colors duration-300"></div>
                        
                        <div className="p-6 bg-valo-dark border-b-2 border-valorant-red flex-grow flex items-center justify-center min-h-[160px]">
                            <pre className="text-white hover:text-valorant-red transition-colors duration-300 font-mono text-sm leading-tight whitespace-pre font-bold text-center">
                                {item.art}
                            </pre>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 min-h-[40px] leading-relaxed">
                                {item.description}
                            </p>
                            <button
                                onClick={() => handleCopy(item.id, item.art)}
                                className={`w-full py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 border relative overflow-hidden group/btn ${
                                    copiedId === item.id 
                                        ? "bg-green-500 text-white border-green-400" 
                                        : "bg-gray-800 hover:bg-valorant-red text-white border-transparent hover:border-white/20"
                                }`}
                            >
                                <div className="absolute top-0 right-0 w-2 h-2 bg-valo-dark transform translate-x-1 -translate-y-1 rotate-45 group-hover/btn:bg-white transition-colors duration-200"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 bg-valo-dark transform -translate-x-1 translate-y-1 rotate-45 group-hover/btn:bg-white transition-colors duration-200"></div>
                                
                                {copiedId === item.id ? (
                                    <>
                                        <CheckCircleIcon className="h-5 w-5" />
                                        COPIED!
                                    </>
                                ) : (
                                    <>
                                        <DocumentDuplicateIcon className="h-5 w-5" />
                                        COPY ART
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* SEO Text Section for AdSense Value */}
            <div className="bg-gray-900 border border-gray-800 p-8 m-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-b border-gray-800 pb-4">
                        WHY USE ASCII ART IN <span className="text-valorant-red">VALORANT</span>?
                    </h2>
                    
                    <div className="prose prose-invert prose-lg text-gray-400 prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-widest prose-h3:text-white">
                        <p className="mb-6 leading-relaxed">
                            Valorant is not just a tactical shooter; it's a social experience where communication is key. While voice comms and standard text chat are essential for gameplay, bringing a bit of personality to the lobby can lighten the mood, tilt the enemy, or hype up your team. That's where ASCII art comes in.
                        </p>
                        
                        <h3 className="text-xl mt-8 mb-4">Copy-Pastas and Chat Meta</h3>
                        <p className="mb-6 leading-relaxed">
                            The gaming community has always loved a good block of text art. In Valorant, the chat box allows for multi-line messages, making it the perfect canvas for creative "copy-pastas" – chunks of text meant to be copied and pasted continuously. Whether you're dropping a massive "GG WP" after a 13-11 victory, or placing a customized crosshair symbol to flex your aim, these small symbols create micro-moments of joy.
                        </p>

                        <h3 className="text-xl mt-8 mb-4">Formatting Tricks for Riot's Chat Box</h3>
                        <p className="mb-6 leading-relaxed">
                            It's important to remember that Valorant's text rendering engine utilizes a specific font (Din Next LT Pro) and has a character limit per message line. When designing or copying ASCII art from our gallery, you don't have to worry about broken formatting. Our gallery items are meticulously tested to ensure they align correctly in-game. Generally, you should avoid exceeding 40 characters in width, as the game will auto-wrap the text and ruin the image.
                        </p>

                        <div className="bg-gray-800 border-l-4 border-valorant-red p-6 rounded-r-sm mt-8">
                            <p className="text-sm text-gray-300 font-medium m-0 flex gap-4">
                                <span className="text-2xl">💡</span>
                                <span><strong className="text-white uppercase tracking-wider">DID YOU KNOW?</strong> Pressing <code>Shift+Enter</code> allows you to send text to [All] chat, while just pressing <code>Enter</code> sends it to your [Team]. Make sure you're bragging to the right audience!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}