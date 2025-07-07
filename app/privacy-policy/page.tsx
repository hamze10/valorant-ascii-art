import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PrivacyPolicy() {
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />
            <div className="flex flex-col items-center p-10">
                <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-5xl w-full">
                    <div className="text-center mb-12">
                        <h1 className="mb-8 text-5xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent"> 
                            Privacy Policy 
                        </h1>
                        <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto"> 
                            At ValoAscii, we are committed to protecting your privacy and being transparent about how we handle your data. This privacy policy explains our practices in detail.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Information We Collect</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
                                <div className="text-green-600 mb-4">
                                    <span className="text-3xl mb-2 block">💾</span>
                                    <h3 className="text-xl font-bold">Local Storage Data</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We store your ASCII art creations in your browser's local storage. This data includes:
                                </p>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Your ASCII art designs and configurations</li>
                                    <li>• Canvas settings and preferences</li>
                                    <li>• Project names and metadata</li>
                                </ul>
                                <p className="text-green-700 text-sm mt-3 font-medium">
                                    ✅ This data never leaves your device and is not accessible to us.
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                                <div className="text-blue-600 mb-4">
                                    <span className="text-3xl mb-2 block">📊</span>
                                    <h3 className="text-xl font-bold">Analytics Data</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We use Google Analytics to understand how our website is used. This includes:
                                </p>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Page views and session duration</li>
                                    <li>• Geographic location (country/region)</li>
                                    <li>• Device and browser information</li>
                                    <li>• Traffic sources and user behavior</li>
                                </ul>
                                <p className="text-blue-700 text-sm mt-3 font-medium">
                                    🔒 This data is anonymized and aggregated.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Use Your Information</h2>
                        <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-100">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Website Improvement</h3>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• Analyzing user behavior to improve functionality</li>
                                        <li>• Identifying and fixing technical issues</li>
                                        <li>• Optimizing performance and user experience</li>
                                        <li>• Developing new features based on usage patterns</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Service Provision</h3>
                                    <ul className="text-gray-700 space-y-2">
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
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Third-Party Services</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                                <div className="text-purple-600 mb-4">
                                    <span className="text-3xl mb-2 block">📰</span>
                                    <h3 className="text-xl font-bold">Google AdSense</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We use Google AdSense to display advertisements. Google may use cookies to:
                                </p>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Show relevant ads based on your interests</li>
                                    <li>• Measure ad performance</li>
                                    <li>• Prevent ad fraud</li>
                                </ul>
                                <p className="text-purple-700 text-sm mt-3">
                                    You can opt out of personalized ads at <a href="https://www.google.com/settings/ads" className="underline hover:text-purple-600">Google Ad Settings</a>.
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                                <div className="text-orange-600 mb-4">
                                    <span className="text-3xl mb-2 block">📊</span>
                                    <h3 className="text-xl font-bold">Google Analytics</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Google Analytics helps us understand website usage through:
                                </p>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Tracking page views and user sessions</li>
                                    <li>• Analyzing user demographics</li>
                                    <li>• Monitoring site performance</li>
                                </ul>
                                <p className="text-orange-700 text-sm mt-3">
                                    You can opt out using the <a href="https://tools.google.com/dlpage/gaoptout" className="underline hover:text-orange-600">Google Analytics opt-out browser add-on</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Rights and Choices</h2>
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-800 mb-4">Data Control</h3>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• Clear local storage data anytime through your browser</li>
                                        <li>• Disable cookies in your browser settings</li>
                                        <li>• Use ad blockers to prevent tracking</li>
                                        <li>• Browse in incognito/private mode</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-800 mb-4">Contact Us</h3>
                                    <p className="text-gray-700 mb-3">
                                        If you have questions about this privacy policy or want to exercise your rights:
                                    </p>
                                    <a href="mailto:hamzamah1030@gmail.com" className="inline-flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 rounded-lg px-4 py-2 font-medium transition-colors">
                                        <span>📨</span>
                                        hamzamah1030@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Security</h2>
                        <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-100">
                            <div className="text-center mb-6">
                                <span className="text-6xl mb-4 block">🔒</span>
                                <h3 className="text-2xl font-bold text-gray-800">We Take Security Seriously</h3>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <h4 className="font-bold text-gray-800 mb-2">HTTPS Encryption</h4>
                                    <p className="text-gray-600 text-sm">All data transmission is secured with SSL encryption</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-gray-800 mb-2">No Personal Data Storage</h4>
                                    <p className="text-gray-600 text-sm">We don't store personal information on our servers</p>
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-gray-800 mb-2">Regular Security Updates</h4>
                                    <p className="text-gray-600 text-sm">We keep our platform updated with the latest security patches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Policy Updates</h2>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">📝</span>
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-800 mb-2">Changes to This Policy</h3>
                                    <p className="text-yellow-800 mb-3">
                                        We may update this privacy policy from time to time. When we do, we will:
                                    </p>
                                    <ul className="text-yellow-800 text-sm space-y-1">
                                        <li>• Update the "Last updated" date at the top of this page</li>
                                        <li>• Notify users of significant changes through our website</li>
                                        <li>• Continue to respect your privacy choices</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-green-100 border border-green-200 rounded-2xl p-8 text-center">
                        <span className="text-4xl mb-4 block">✅</span>
                        <h3 className="text-2xl font-bold text-green-800 mb-3">Your Privacy is Our Priority</h3>
                        <p className="text-green-800 mb-4">
                            We are committed to protecting your privacy and using data responsibly. We collect only what's necessary to provide and improve our service.
                        </p>
                        <p className="text-green-700 text-sm">
                            Questions about this policy? Don't hesitate to contact us at hamzamah1030@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
