import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />
            <div className="flex flex-col items-center p-10">
                <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl w-full">
                    <div className="text-center mb-12">
                        <h1 className="mb-8 text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> 
                            Contact Us 
                        </h1>
                        <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto"> 
                            We value your feedback and are here to help. Whether you have questions, suggestions, or need support, we&apos;re committed to providing you with the best possible experience.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-6">
                                <div className="text-white mb-4">
                                    <span className="text-4xl mb-4 block">📧</span>
                                    <h3 className="text-2xl font-bold mb-2">Email Support</h3>
                                    <p className="text-white/90 mb-4">For technical support, feature requests, or general inquiries</p>
                                </div>
                                <a href="mailto:hamzamah1030@gmail.com" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold transition-all duration-200 hover:scale-105">
                                    <span>📨</span>
                                    hamzamah1030@gmail.com
                                </a>
                            </div>
                            
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">⏰</span>
                                    <h3 className="text-xl font-bold text-green-800">Response Time</h3>
                                </div>
                                <p className="text-green-700 mb-2">We typically respond within 24 hours</p>
                                <p className="text-green-600 text-sm">For urgent technical issues, we aim to respond within 12 hours</p>
                            </div>
                        </div>
                        
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Can Help With</h2>
                            <div className="space-y-4">
                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                    <h4 className="font-semibold text-blue-800 mb-2">🛠️ Technical Support</h4>
                                    <p className="text-blue-700 text-sm">Issues with the editor, saving problems, or browser compatibility</p>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                                    <h4 className="font-semibold text-purple-800 mb-2">💡 Feature Requests</h4>
                                    <p className="text-purple-700 text-sm">Suggestions for new features or improvements to existing ones</p>
                                </div>
                                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                    <h4 className="font-semibold text-green-800 mb-2">🎓 How-to Questions</h4>
                                    <p className="text-green-700 text-sm">Need help getting started or learning advanced techniques</p>
                                </div>
                                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                                    <h4 className="font-semibold text-orange-800 mb-2">🐛 Bug Reports</h4>
                                    <p className="text-orange-700 text-sm">Found a bug? Let us know and we&apos;ll fix it quickly</p>
                                </div>
                                <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                                    <h4 className="font-semibold text-pink-800 mb-2">💬 General Feedback</h4>
                                    <p className="text-pink-700 text-sm">Share your thoughts on how we can improve ValoAscii</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Is ValoAscii really free?</h3>
                                <p className="text-gray-600">Yes! ValoAscii is completely free to use with no hidden fees, subscriptions, or premium features. We believe creativity should be accessible to everyone.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">How do I save my work?</h3>
                                <p className="text-gray-600">Your creations are automatically saved to your browser&apos;s local storage. Click the &quot;Save changes&quot; button to ensure your work is preserved.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Can I use ASCII art in VALORANT?</h3>
                                <p className="text-gray-600">Yes! Copy your ASCII art and paste it into VALORANT chat, Discord, or any other platform that supports text formatting.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you collect my personal data?</h3>
                                <p className="text-gray-600">We respect your privacy. We only use local storage for your creations and basic analytics. Check our Privacy Policy for details.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">Have a Different Question?</h3>
                        <p className="text-white/90 text-lg mb-6">Don&apos;t see your question answered here? We&apos;re here to help!</p>
                        <a href="mailto:hamzamah1030@gmail.com" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-8 py-4 text-white font-semibold transition-all duration-200 hover:scale-105">
                            <span>📨</span>
                            Send us an email
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
