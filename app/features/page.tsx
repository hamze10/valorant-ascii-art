import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Features() {
    return (
        <main className="flex flex-col min-h-screen bg-valo-dark text-valo-gray pb-12">
            <Head>
                <title>Features & Examples | ValoAscii</title>
                <meta name="description" content="Discover the powerful features that make ValoAscii the best choice for creating ASCII art." />
            </Head>
            
            {/* Hero Section */}
            <div className="bg-gray-900 border border-gray-800 p-8 m-6 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-valorant-red transform translate-x-16 -translate-y-16 rotate-45 opacity-20"></div>
                
                <div className="text-center relative z-10 mb-4">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 border-b border-gray-800 pb-6 inline-block">
                        FEATURES & <span className="text-valorant-red">EXAMPLES</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Discover the powerful features that make ValoAscii the best choice for creating ASCII art. See real examples and learn what&apos;s possible with our editor.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center px-6">
                <div className="max-w-6xl w-full">
                    
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8 border-l-4 border-valorant-red pl-4">Powerful Features</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-900 border border-gray-800 p-8 hover:border-valorant-red transition-colors duration-300">
                                <div className="text-valorant-red font-black text-4xl mb-4">01</div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Grid-Based Editor</h3>
                                <ul className="text-gray-400 space-y-3 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Customizable canvas sizes</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Click to toggle cells on/off</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Real-time preview snippet</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Intuitive drag interface</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-900 border border-gray-800 p-8 hover:border-valorant-red transition-colors duration-300">
                                <div className="text-valorant-red font-black text-4xl mb-4">02</div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Advanced Tools</h3>
                                <ul className="text-gray-400 space-y-3 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Multi-select with CTRL + Click</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> One-click copy to clipboard</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Auto-save functionality</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Manage multiple projects</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gray-900 border border-gray-800 p-8 hover:border-valorant-red transition-colors duration-300">
                                <div className="text-valorant-red font-black text-4xl mb-4">03</div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Performance</h3>
                                <ul className="text-gray-400 space-y-3 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Lightning-fast React rendering</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Smooth interactions & scaling</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Offline functionality</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red rounded-none transform rotate-45"></div> Optimized for gaming PCs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8 border-l-4 border-valorant-red pl-4">Popular Use Cases</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900 border border-gray-800 p-8">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                    <span className="text-valorant-red">🎮</span> Gaming Applications
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-valo-dark border border-gray-700 p-6">
                                        <h4 className="font-bold text-white uppercase tracking-wider mb-2">VALORANT Chat Art</h4>
                                        <p className="text-gray-400 text-sm mb-4">Create unique messages that stand out in team chat</p>
                                        <div className="bg-gray-900 p-4 border border-gray-800 text-valorant-red font-mono text-sm shadow-inner">
                                            █░░█ █▀▀ █░░ █▀▀█<br/>
                                            █▀▀█ █▀▀ █░░ █░░█<br/>
                                            ▀░░▀ ▀▀▀ ▀▀▀ █▀▀▀
                                        </div>
                                    </div>
                                    <div className="bg-valo-dark border border-gray-700 p-6 hover:border-valorant-red transition-colors duration-300">
                                        <h4 className="font-bold text-white uppercase tracking-wider mb-2">Team Signatures</h4>
                                        <p className="text-gray-400 text-sm">Professional-looking signatures for esports teams</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-900 border border-gray-800 p-8">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                                    <span className="text-valorant-red">💬</span> Social Media
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-valo-dark border border-gray-700 p-6 hover:border-valorant-red transition-colors duration-300">
                                        <h4 className="font-bold text-white uppercase tracking-wider mb-2">Discord Server Art</h4>
                                        <p className="text-gray-400 text-sm">Custom welcome messages and server branding</p>
                                    </div>
                                    <div className="bg-valo-dark border border-gray-700 p-6 hover:border-valorant-red transition-colors duration-300">
                                        <h4 className="font-bold text-white uppercase tracking-wider mb-2">Twitch Chat Emotes</h4>
                                        <p className="text-gray-400 text-sm">Engage viewers with creative ASCII art</p>
                                    </div>
                                    <div className="bg-valo-dark border border-gray-700 p-6 hover:border-valorant-red transition-colors duration-300">
                                        <h4 className="font-bold text-white uppercase tracking-wider mb-2">Social Profiles</h4>
                                        <p className="text-gray-400 text-sm">Unique bio art for Twitter, Instagram, and more</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}