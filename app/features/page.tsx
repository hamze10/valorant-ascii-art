import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Features() {
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />
            <div className="flex flex-col items-center p-10">
                <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-6xl w-full">
                    <div className="text-center mb-12">
                        <h1 className="mb-8 text-5xl font-bold bg-gradient-to-r from-valorant-red to-pink-500 bg-clip-text text-transparent"> 
                            Features & Examples 
                        </h1>
                        <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto"> 
                            Discover the powerful features that make ValoAscii the best choice for creating ASCII art. See real examples and learn what&apos;s possible with our editor.
                        </p>
                    </div>
                    
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Powerful Features</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                                <div className="text-center mb-6">
                                    <span className="text-5xl mb-4 block">🎨</span>
                                    <h3 className="text-2xl font-bold text-blue-800">Grid-Based Editor</h3>
                                </div>
                                <ul className="text-blue-700 space-y-3">
                                    <li>• Customizable canvas sizes (up to 13 rows)</li>
                                    <li>• Click to toggle cells on/off</li>
                                    <li>• Real-time preview of your creation</li>
                                    <li>• Intuitive interface for all skill levels</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                                <div className="text-center mb-6">
                                    <span className="text-5xl mb-4 block">⚡</span>
                                    <h3 className="text-2xl font-bold text-green-800">Advanced Tools</h3>
                                </div>
                                <ul className="text-green-700 space-y-3">
                                    <li>• Multi-select with CTRL + Click</li>
                                    <li>• One-click copy to clipboard</li>
                                    <li>• Auto-save functionality</li>
                                    <li>• Multiple project management</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                                <div className="text-center mb-6">
                                    <span className="text-5xl mb-4 block">🔧</span>
                                    <h3 className="text-2xl font-bold text-purple-800">Customization</h3>
                                </div>
                                <ul className="text-purple-700 space-y-3">
                                    <li>• Name your creations</li>
                                    <li>• Adjustable canvas height</li>
                                    <li>• Sidebar toggle for more space</li>
                                    <li>• Responsive design for all devices</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                                <div className="text-center mb-6">
                                    <span className="text-5xl mb-4 block">💾</span>
                                    <h3 className="text-2xl font-bold text-orange-800">Data Management</h3>
                                </div>
                                <ul className="text-orange-700 space-y-3">
                                    <li>• Local storage saves your work</li>
                                    <li>• No account required</li>
                                    <li>• Export your creations instantly</li>
                                    <li>• Delete unwanted projects easily</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
                                <div className="text-center mb-6">
                                    <span className="text-5xl mb-4 block">🚀</span>
                                    <h3 className="text-2xl font-bold text-teal-800">Performance</h3>
                                </div>
                                <ul className="text-teal-700 space-y-3">
                                    <li>• Lightning-fast loading</li>
                                    <li>• Smooth interactions</li>
                                    <li>• Works offline after first visit</li>
                                    <li>• Optimized for gaming PCs</li>
                                </ul>
                            </div>
                            
                            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100">
                                <div className="text-center mb-6">
                                    <span className="text-5xl mb-4 block">🌐</span>
                                    <h3 className="text-2xl font-bold text-pink-800">Compatibility</h3>
                                </div>
                                <ul className="text-pink-700 space-y-3">
                                    <li>• Works in all modern browsers</li>
                                    <li>• Compatible with VALORANT chat</li>
                                    <li>• Discord and social media ready</li>
                                    <li>• Mobile and desktop support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Popular Use Cases</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">🎮 Gaming Applications</h3>
                                <div className="space-y-4">
                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-2">VALORANT Chat Art</h4>
                                        <p className="text-gray-600 text-sm mb-2">Create unique messages that stand out in team chat</p>
                                        <div className="bg-gray-100 p-2 rounded text-xs font-mono">
                                            █░░█ █▀▀ █░░ █▀▀█<br/>
                                            █▀▀█ █▀▀ █░░ █░░█<br/>
                                            ▀░░▀ ▀▀▀ ▀▀▀ █▀▀▀
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-2">Team Signatures</h4>
                                        <p className="text-gray-600 text-sm">Professional-looking signatures for esports teams</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-2">Achievement Celebrations</h4>
                                        <p className="text-gray-600 text-sm">Show off ranks, wins, and special moments</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">💬 Social Media</h3>
                                <div className="space-y-4">
                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-2">Discord Server Art</h4>
                                        <p className="text-gray-600 text-sm">Custom welcome messages and server branding</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-2">Twitch Chat Emotes</h4>
                                        <p className="text-gray-600 text-sm">Engage viewers with creative ASCII art</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-bold text-gray-800 mb-2">Social Profiles</h4>
                                        <p className="text-gray-600 text-sm">Unique bio art for Twitter, Instagram, and more</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">ASCII Art Examples</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-800 mb-3 text-center">Simple Heart</h3>
                                <div className="bg-white p-4 rounded-lg font-mono text-center text-sm">
                                    ░██░░░██░<br/>
                                    █████████<br/>
                                    █████████<br/>
                                    ░███████░<br/>
                                    ░░█████░░<br/>
                                    ░░░███░░░<br/>
                                    ░░░░█░░░░
                                </div>
                                <p className="text-blue-700 text-xs mt-3 text-center">Perfect for showing love in chat!</p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                                <h3 className="text-lg font-bold text-green-800 mb-3 text-center">Victory Crown</h3>
                                <div className="bg-white p-4 rounded-lg font-mono text-center text-sm">
                                    ░░█░░█░░█░░<br/>
                                    ░███████░░<br/>
                                    ███████████<br/>
                                    ███████████<br/>
                                    ░░░░░░░░░░░
                                </div>
                                <p className="text-green-700 text-xs mt-3 text-center">Celebrate your wins in style!</p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                                <h3 className="text-lg font-bold text-purple-800 mb-3 text-center">Lightning Bolt</h3>
                                <div className="bg-white p-4 rounded-lg font-mono text-center text-sm">
                                    ███░░░░<br/>
                                    ░███░░░<br/>
                                    ░░███░░<br/>
                                    ░░░███░<br/>
                                    ░░░░███<br/>
                                    ░░░░░██<br/>
                                    ░░░░░░█
                                </div>
                                <p className="text-purple-700 text-xs mt-3 text-center">Show your speed and power!</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">How to Get Started</h2>
                        <div className="bg-gradient-to-r from-valorant-red to-pink-500 rounded-2xl p-8 text-white">
                            <div className="grid md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold">1</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Visit Homepage</h3>
                                    <p className="text-white/90 text-sm">Navigate to our main editor page</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold">2</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Start Creating</h3>
                                    <p className="text-white/90 text-sm">Click on grid cells to design your art</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold">3</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Save & Copy</h3>
                                    <p className="text-white/90 text-sm">Save your work and copy to clipboard</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold">4</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Share & Enjoy</h3>
                                    <p className="text-white/90 text-sm">Use your ASCII art anywhere you want!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-8 text-center">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Create Amazing ASCII Art?</h3>
                        <p className="text-gray-600 text-lg mb-6">Join thousands of players who use ValoAscii to enhance their gaming experience</p>
                        <a href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-valorant-red to-pink-500 hover:from-valorant-red hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <span>🎨</span>
                            Start Creating Now
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}