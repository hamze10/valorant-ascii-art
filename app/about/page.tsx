import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'About ValoAscii — The ASCII Art Editor for Valorant Players',
    description: 'Learn about ValoAscii, a free online grid-based editor for creating custom ASCII art, signatures and copy-pastas for Valorant chat and gaming communities.',
}

export default function About() {
    return (
        <main className="flex flex-col min-h-screen bg-valo-dark text-valo-gray pb-12">
            
            {/* Hero Section */}
            <div className="bg-gray-900 border border-gray-800 p-8 m-6 mb-4 mt-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-valorant-red transform translate-x-16 -translate-y-16 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="text-center relative z-10 mb-4">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 border-b border-gray-800 pb-6 inline-block">
                        ABOUT <span className="text-valorant-red">VALOASCII</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        ValoAscii is the premier online ASCII art editor designed specifically for VALORANT players and gaming enthusiasts. Our platform empowers users to create, edit, and share custom ASCII artwork that enhances their gaming experience.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center px-6">
                <div className="max-w-5xl w-full">
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-900 border border-gray-800 p-8 relative group">
                            <div className="absolute top-0 left-0 w-2 h-2 bg-valo-dark group-hover:bg-valorant-red transition-colors duration-300"></div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-l-4 border-valorant-red pl-4">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                We believe that creativity should be accessible to everyone. ValoAscii was created to bridge the gap between artistic expression and gaming culture, providing players with tools to create unique, personalized content that stands out in the gaming community.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Our mission is to democratize ASCII art creation, making it simple enough for beginners while providing advanced features for experienced artists. We&apos;re committed to fostering a creative community where players can express themselves through digital art.
                            </p>
                        </div>
                        
                        <div className="bg-gray-900 border border-gray-800 p-8 relative group">
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-valo-dark group-hover:bg-valorant-red transition-colors duration-300"></div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-l-4 border-valorant-red pl-4">Why Choose Us?</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-valorant-red font-black text-xl mt-1">✓</div>
                                    <div>
                                        <h4 className="font-bold text-white uppercase tracking-wider mb-1">100% Free</h4>
                                        <p className="text-gray-400 text-sm">No hidden fees, no subscriptions, completely free to use</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-valorant-red font-black text-xl mt-1">✓</div>
                                    <div>
                                        <h4 className="font-bold text-white uppercase tracking-wider mb-1">No Registration</h4>
                                        <p className="text-gray-400 text-sm">Start creating immediately without creating an account</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-valorant-red font-black text-xl mt-1">✓</div>
                                    <div>
                                        <h4 className="font-bold text-white uppercase tracking-wider mb-1">Privacy Focused</h4>
                                        <p className="text-gray-400 text-sm">Your creations are stored locally on your device</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-valorant-red font-black text-xl mt-1">✓</div>
                                    <div>
                                        <h4 className="font-bold text-white uppercase tracking-wider mb-1">Cross-Platform</h4>
                                        <p className="text-gray-400 text-sm">Works on desktop, tablet, and mobile devices</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8 text-center">Features That Make Us Special</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-900 border border-gray-800 p-8 hover:border-valorant-red transition-colors duration-300 relative group">
                                <div className="text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🎨</div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3 text-center">Intuitive Editor</h3>
                                <p className="text-gray-400 text-center text-sm leading-relaxed">Our grid-based editor makes creating ASCII art as simple as clicking on cells. No complex tools or confusing interfaces.</p>
                            </div>
                            <div className="bg-gray-900 border border-gray-800 p-8 hover:border-valorant-red transition-colors duration-300 relative group">
                                <div className="text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">💾</div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3 text-center">Auto-Save Technology</h3>
                                <p className="text-gray-400 text-center text-sm leading-relaxed">Never lose your work! Our auto-save feature ensures your creations are preserved as you work.</p>
                            </div>
                            <div className="bg-gray-900 border border-gray-800 p-8 hover:border-valorant-red transition-colors duration-300 relative group">
                                <div className="text-4xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">🔧</div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3 text-center">Advanced Tools</h3>
                                <p className="text-gray-400 text-center text-sm leading-relaxed">Multi-select with CTRL, customizable canvas sizes, and one-click copy functionality for power users.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-valorant-red p-10 text-center relative overflow-hidden group mb-12 transform skew-x-[-2deg]">
                        <div className="transform skew-x-[2deg]">
                            <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Try It For Free</h3>
                            <p className="text-white/90 text-lg mb-8 font-medium">New project, updated regularly. Open the editor and create your first ASCII art in seconds — no registration needed.</p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <span className="bg-valo-dark/50 border border-white/20 backdrop-blur-sm px-6 py-3 text-white font-bold tracking-widest uppercase text-sm">✨ Free Forever</span>
                                <span className="bg-valo-dark/50 border border-white/20 backdrop-blur-sm px-6 py-3 text-white font-bold tracking-widest uppercase text-sm">🚀 No Registration</span>
                                <span className="bg-valo-dark/50 border border-white/20 backdrop-blur-sm px-6 py-3 text-white font-bold tracking-widest uppercase text-sm">💾 Saved Locally</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-900 border border-gray-800 p-6 text-center relative">
                        <div className="absolute top-0 right-0 w-2 h-2 bg-valorant-red"></div>
                        <p className="text-sm text-gray-400 font-medium mb-2 uppercase tracking-wider"> 
                            ⚠️ Disclaimer: ValoAscii is an independent project and is not affiliated with Riot Games or VALORANT. VALORANT is a trademark of Riot Games, Inc.
                        </p>
                        <p className="text-xs text-gray-500">
                            We respect all intellectual property rights and encourage users to create original content.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
