import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />
            <div className="flex flex-col items-center p-10">
                <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-5xl">
                    <div className="text-center mb-12">
                        <h1 className="mb-8 text-5xl font-bold bg-gradient-to-r from-valorant-red to-pink-500 bg-clip-text text-transparent"> 
                            About ValoAscii 
                        </h1>
                        <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto"> 
                            ValoAscii is the premier online ASCII art editor designed specifically for VALORANT players and gaming enthusiasts. Our platform empowers users to create, edit, and share custom ASCII artwork that enhances their gaming experience.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We believe that creativity should be accessible to everyone. ValoAscii was created to bridge the gap between artistic expression and gaming culture, providing players with tools to create unique, personalized content that stands out in the gaming community.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our mission is to democratize ASCII art creation, making it simple enough for beginners while providing advanced features for experienced artists. We're committed to fostering a creative community where players can express themselves through digital art.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose ValoAscii?</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">✓</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">100% Free</h4>
                                        <p className="text-gray-600 text-sm">No hidden fees, no subscriptions, completely free to use</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">✓</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">No Registration Required</h4>
                                        <p className="text-gray-600 text-sm">Start creating immediately without creating an account</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">✓</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Privacy Focused</h4>
                                        <p className="text-gray-600 text-sm">Your creations are stored locally on your device</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">✓</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Cross-Platform</h4>
                                        <p className="text-gray-600 text-sm">Works on desktop, tablet, and mobile devices</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Features That Make Us Special</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                                <div className="text-4xl mb-4 text-center">🎨</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Intuitive Editor</h3>
                                <p className="text-gray-600 text-center">Our grid-based editor makes creating ASCII art as simple as clicking on cells. No complex tools or confusing interfaces.</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                                <div className="text-4xl mb-4 text-center">💾</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Auto-Save Technology</h3>
                                <p className="text-gray-600 text-center">Never lose your work! Our auto-save feature ensures your creations are preserved as you work.</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                                <div className="text-4xl mb-4 text-center">🔧</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Advanced Tools</h3>
                                <p className="text-gray-600 text-center">Multi-select with CTRL, customizable canvas sizes, and one-click copy functionality for power users.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Perfect For</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">VALORANT Players</h3>
                                <p className="text-gray-600 mb-3">Create custom signatures, team logos, and chat art to stand out in the VALORANT community.</p>
                                <ul className="text-gray-600 text-sm space-y-1">
                                    <li>• Team communication enhancements</li>
                                    <li>• Unique player signatures</li>
                                    <li>• Clan and team branding</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Content Creators</h3>
                                <p className="text-gray-600 mb-3">Enhance your streams, videos, and social media with custom ASCII art that represents your brand.</p>
                                <ul className="text-gray-600 text-sm space-y-1">
                                    <li>• Twitch stream overlays</li>
                                    <li>• YouTube video thumbnails</li>
                                    <li>• Social media content</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-valorant-red to-pink-500 rounded-2xl p-8 mb-8 text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">Join Our Community</h3>
                        <p className="text-white/90 text-lg mb-6">Thousands of players trust ValoAscii for their ASCII art needs. Join the creative revolution in gaming!</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <span className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-medium">🎆 10,000+ Creations</span>
                            <span className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-medium">👥 5,000+ Users</span>
                            <span className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-medium">⭐ 4.8/5 Rating</span>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 text-center">
                        <p className="text-sm text-gray-600 font-medium mb-2"> 
                            ⚠️ Disclaimer: ValoAscii is an independent project and is not affiliated with Riot Games or VALORANT. VALORANT is a trademark of Riot Games, Inc.
                        </p>
                        <p className="text-xs text-gray-500">
                            We respect all intellectual property rights and encourage users to create original content.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
