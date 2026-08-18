"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { DocumentDuplicateIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function AsciiGenerator() {
    const [text, setText] = useState("");
    const [asciiResult, setAsciiResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [font, setFont] = useState("Standard");

    const fonts = [
        "Standard",
        "Ghost",
        "Graffiti",
        "Doom",
        "Slant",
        "Speed",
        "Star Wars",
        "3D-ASCII"
    ];

    const generateAscii = async () => {
        if (!text.trim()) return;
        setLoading(true);
        try {
            const res = await fetch(`/api/ascii?text=${encodeURIComponent(text)}&font=${encodeURIComponent(font)}`);
            const data = await res.json();
            if (data.ascii) {
                setAsciiResult(data.ascii);
            }
        } catch (error) {
            console.error("Failed to generate ASCII:", error);
        }
        setLoading(false);
    };

    const copyToClipboard = () => {
        if (asciiResult) {
            navigator.clipboard.writeText(asciiResult);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-valo-dark text-valo-gray">
            {/* Hero Section */}
            <div className="bg-gray-900 border border-gray-800 p-8 m-6 mb-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-valorant-red transform translate-x-8 -translate-y-8 rotate-45 opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="text-center mb-8 relative z-10">
                    <h1 className="text-4xl font-black text-white uppercase tracking-widest mb-4">
                        TEXT TO <span className="text-valorant-red">ASCII</span> GENERATOR
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Convert your username, clan tag, or any text into massive ASCII text art. Perfect for grabbing attention in Valorant chat or your gaming profile.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <label className="block text-sm font-bold text-gray-400 mb-2 tracking-widest uppercase">YOUR TEXT</label>
                            <input 
                                type="text" 
                                placeholder="ENTER TEXT HERE..."
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:border-valorant-red focus:outline-none transition-colors duration-200 text-lg uppercase tracking-wider placeholder-gray-600" 
                                value={text} 
                                onChange={e => setText(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && generateAscii()}
                            />
                        </div>
                        <div className="w-full md:w-64">
                            <label className="block text-sm font-bold text-gray-400 mb-2 tracking-widest uppercase">FONT STYLE</label>
                            <select 
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:border-valorant-red focus:outline-none transition-colors duration-200 text-lg uppercase tracking-wider"
                                value={font}
                                onChange={e => setFont(e.target.value)}
                            >
                                {fonts.map(f => (
                                    <option key={f} value={f}>{f}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <button 
                        onClick={generateAscii}
                        disabled={loading || !text.trim()}
                        className="w-full py-4 bg-valorant-red hover:bg-pink-600 text-white font-bold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border border-transparent hover:border-white/20 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-3 h-3 bg-valo-dark transform translate-x-1.5 -translate-y-1.5 rotate-45 group-hover:bg-white transition-colors duration-200"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 bg-valo-dark transform -translate-x-1.5 translate-y-1.5 rotate-45 group-hover:bg-white transition-colors duration-200"></div>
                        
                        {loading ? (
                            <ArrowPathIcon className="h-6 w-6 animate-spin" />
                        ) : (
                            "GENERATE ASCII ART"
                        )}
                    </button>
                </div>
            </div>

            {/* Results Section */}
            {asciiResult && (
                <div className="bg-gray-900 border border-gray-800 p-6 m-6 mt-0 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-6 relative z-10">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">YOUR GENERATED ART</h2>
                        <button 
                            onClick={copyToClipboard}
                            className="flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-valorant-red text-white border border-gray-700 hover:border-valorant-red font-bold uppercase tracking-wider transition-colors duration-200 group relative"
                        >
                            <div className="absolute top-0 right-0 w-2 h-2 bg-valo-dark transform translate-x-1 -translate-y-1 rotate-45 group-hover:bg-white transition-colors duration-200"></div>
                            <DocumentDuplicateIcon className="h-5 w-5" />
                            COPY ART
                        </button>
                    </div>
                    
                    <div className="bg-valo-dark p-6 overflow-x-auto border border-gray-800 relative z-10">
                        <pre className="text-valorant-red hover:text-pink-500 transition-colors duration-300 font-mono text-sm leading-tight whitespace-pre font-bold">
                            {asciiResult}
                        </pre>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-800 border-l-4 border-valorant-red text-gray-300 flex items-start gap-4 relative z-10">
                        <span className="text-xl">💡</span>
                        <p className="text-sm font-medium leading-relaxed">
                            <strong className="text-white uppercase tracking-wider">PRO TIP:</strong> Some fonts appear larger than others. If the text wraps onto multiple lines in Valorant chat, try using a smaller font like "Speed" or "Slant", or use fewer letters.
                        </p>
                    </div>
                </div>
            )}

            {/* SEO Content Section */}
            <div className="bg-gray-900 border border-gray-800 p-8 m-6">
                <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-widest prose-h2:text-white prose-p:text-gray-400 prose-li:text-gray-400 prose-strong:text-valorant-red">
                    <h2>Why Use a Text to ASCII Generator for Valorant?</h2>
                    <p>
                        ASCII art has been a staple of internet gaming culture since the early days of multiplayer games. In modern games like Valorant, using a text-to-ASCII generator allows you to express yourself in unique ways through the in-game text chat. Whether you want to announce your presence at the start of a match, celebrate a clutch round, or showcase your clan tag, large ASCII text is guaranteed to get everyone's attention.
                    </p>
                    
                    <h2>How Does This ASCII Tool Work?</h2>
                    <p>
                        Our specialized Valorant text-to-ASCII converter uses advanced typesetting algorithms (based on the popular FIGlet library) to transform standard alphabet letters into large, multi-line graphical representations made entirely of standard keyboard characters. We've hand-picked the best fonts that render cleanly within Riot Games' chat interface without breaking formatting.
                    </p>
                    
                    <h2>Best Practices for Valorant ASCII Chat Art</h2>
                    <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-valorant-red">
                        <li><strong>KEEP IT SHORT:</strong> Valorant's chat box has line length limits. Words longer than 5-6 characters might wrap incorrectly, ruining the visual effect.</li>
                        <li><strong>TEST BEFORE YOU PASTE:</strong> Always try pasting your art in a custom game or spike rush first to ensure it looks exactly how you want it to.</li>
                        <li><strong>DON'T SPAM:</strong> While ASCII art is cool, sending massive walls of text repeatedly is considered spamming and could get you muted by other players. Use your ASCII powers responsibly!</li>
                    </ul>
                </article>
            </div>
        </div>
    );
}