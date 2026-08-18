export const metadata = {
    title: 'Privacy Policy — ValoAscii',
    description: 'Read the ValoAscii privacy policy: how we use local storage for your creations, Google Analytics and Google AdSense.',
}

export default function PrivacyPolicy() {
    return (
        <main className="flex flex-col min-h-screen bg-valo-dark text-valo-gray pb-12">
            
            <div className="bg-gray-900 border border-gray-800 p-8 sm:p-12 m-6 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-valorant-red transform translate-x-16 -translate-y-16 rotate-45 opacity-20"></div>
                
                <div className="text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 border-b border-gray-800 pb-6 inline-block">
                        PRIVACY <span className="text-valorant-red">POLICY</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        At ValoAscii, we are committed to protecting your privacy and being transparent about how we handle your data. This privacy policy explains our practices in detail.
                    </p>
                    <p className="text-sm font-mono text-valorant-red mt-6">LAST UPDATED: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center px-6">
                <div className="max-w-5xl w-full">
                    
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-l-4 border-valorant-red pl-4">Information We Collect</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="bg-gray-900 border border-gray-800 p-8">
                                <div className="mb-4">
                                    <span className="text-3xl mb-4 block text-white">💾</span>
                                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">Local Storage Data</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    We store your ASCII art creations in your browser&apos;s local storage. This data includes:
                                </p>
                                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red"></div> Your ASCII art designs and configurations</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red"></div> Canvas settings and preferences</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red"></div> Project names and metadata</li>
                                </ul>
                                <p className="text-green-500 text-sm font-bold uppercase tracking-wider bg-green-500/10 p-3 border-l-2 border-green-500">
                                    ✅ This data never leaves your device and is not accessible to us.
                                </p>
                            </div>
                            
                            <div className="bg-gray-900 border border-gray-800 p-8">
                                <div className="mb-4">
                                    <span className="text-3xl mb-4 block text-white">📊</span>
                                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">Analytics Data</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    We use Google Analytics to understand how our website is used. This includes:
                                </p>
                                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red"></div> Page views and session duration</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red"></div> Geographic location (country/region)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red"></div> Device and browser information</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-valorant-red"></div> Traffic sources and behavior</li>
                                </ul>
                                <p className="text-blue-400 text-sm font-bold uppercase tracking-wider bg-blue-500/10 p-3 border-l-2 border-blue-500">
                                    🔒 This data is anonymized and aggregated.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-l-4 border-valorant-red pl-4">How We Use Your Information</h2>
                        <div className="bg-gray-900 border border-gray-800 p-8 relative">
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-valorant-red"></div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 text-valorant-red">Website Improvement</h3>
                                    <ul className="text-gray-400 space-y-3 text-sm">
                                        <li>• Analyzing user behavior to improve functionality</li>
                                        <li>• Identifying and fixing technical issues</li>
                                        <li>• Optimizing performance and user experience</li>
                                        <li>• Developing new features based on usage patterns</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 text-valorant-red">Service Provision</h3>
                                    <ul className="text-gray-400 space-y-3 text-sm">
                                        <li>• Displaying relevant advertisements</li>
                                        <li>• Ensuring website security and stability</li>
                                        <li>• Complying with legal requirements</li>
                                        <li>• Preventing abuse and fraud</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-l-4 border-valorant-red pl-4">Third-Party Services</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="bg-gray-900 border border-gray-800 p-8 relative hover:border-gray-600 transition-colors">
                                <div className="mb-4">
                                    <span className="text-3xl mb-4 block">📰</span>
                                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">Google AdSense</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    We use Google AdSense to display advertisements. Google may use cookies to:
                                </p>
                                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                                    <li>• Show relevant ads based on your interests</li>
                                    <li>• Measure ad performance</li>
                                    <li>• Prevent ad fraud</li>
                                </ul>
                                <p className="text-valorant-red text-sm font-bold">
                                    You can opt out of personalized ads at <br/><a href="https://www.google.com/settings/ads" className="underline hover:text-white transition-colors">Google Ad Settings</a>.
                                </p>
                            </div>
                            
                            <div className="bg-gray-900 border border-gray-800 p-8 relative hover:border-gray-600 transition-colors">
                                <div className="mb-4">
                                    <span className="text-3xl mb-4 block">📊</span>
                                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">Google Analytics</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Google Analytics helps us understand website usage through:
                                </p>
                                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                                    <li>• Tracking page views and user sessions</li>
                                    <li>• Analyzing user demographics</li>
                                    <li>• Monitoring site performance</li>
                                </ul>
                                <p className="text-valorant-red text-sm font-bold">
                                    You can opt out using the <br/><a href="https://tools.google.com/dlpage/gaoptout" className="underline hover:text-white transition-colors">Google Analytics opt-out add-on</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-l-4 border-valorant-red pl-4">Your Rights and Choices</h2>
                        <div className="bg-gray-900 border border-gray-800 p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Data Control</h3>
                                    <ul className="text-gray-400 space-y-3 text-sm">
                                        <li>• Clear local storage data anytime through your browser</li>
                                        <li>• Disable cookies in your browser settings</li>
                                        <li>• Use ad blockers to prevent tracking</li>
                                        <li>• Browse in incognito/private mode</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Contact Us</h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        If you have questions about this privacy policy or want to exercise your rights:
                                    </p>
                                    <a href="mailto:hamzamah1030@gmail.com" className="inline-flex items-center gap-3 bg-white hover:bg-gray-200 text-valo-dark px-4 py-2 font-black tracking-widest uppercase transition-colors text-sm">
                                        <span>📨</span>
                                        hamzamah1030@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
