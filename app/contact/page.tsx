export const metadata = {
    title: 'Contact ValoAscii — Support & Feedback',
    description: 'Get in touch with the ValoAscii team for technical support, feature requests or general feedback. We typically respond within 24 hours.',
}

export default function Contact() {
    return (
        <main className="flex flex-col min-h-screen bg-valo-dark text-valo-gray pb-12">
            
            <div className="bg-gray-900 border border-gray-800 p-8 sm:p-12 m-6 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-valorant-red transform translate-x-16 -translate-y-16 rotate-45 opacity-20"></div>
                <div className="text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 border-b border-gray-800 pb-6 inline-block">
                        CONTACT <span className="text-valorant-red">US</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We value your feedback and are here to help. Whether you have questions, suggestions, or need support, we&apos;re committed to providing you with the best experience.
                    </p>
                </div>
            </div>
            
            <div className="flex flex-col items-center px-6">
                <div className="max-w-5xl w-full">
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-l-4 border-valorant-red pl-4">Get in Touch</h2>
                            <div className="bg-gray-900 border border-gray-800 p-8 mb-6 relative group">
                                <div className="absolute top-0 right-0 w-2 h-2 bg-valorant-red group-hover:bg-valo-dark transition-colors duration-300"></div>
                                <div className="mb-6">
                                    <span className="text-4xl mb-4 block text-valorant-red">📧</span>
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Email Support</h3>
                                    <p className="text-gray-400 mb-6">For technical support, feature requests, or general inquiries</p>
                                </div>
                                <a href="mailto:hamzamah1030@gmail.com" className="inline-flex items-center gap-3 bg-valorant-red hover:bg-red-600 text-white font-bold uppercase tracking-widest py-3 px-6 transition-colors duration-200">
                                    <span>📨</span>
                                    hamzamah1030@gmail.com
                                </a>
                            </div>
                            
                            <div className="bg-gray-900 border border-gray-800 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">⏰</span>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Response Time</h3>
                                </div>
                                <p className="text-gray-300 mb-2">We typically respond within 24 hours</p>
                                <p className="text-gray-500 text-sm">For urgent technical issues, we aim to respond within 12 hours</p>
                            </div>
                        </div>
                        
                        <div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-l-4 border-valorant-red pl-4">What We Can Help With</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900 border border-gray-800 p-5 hover:border-valorant-red transition-colors duration-300">
                                    <h4 className="font-bold text-white uppercase tracking-wider mb-2">🛠️ Technical Support</h4>
                                    <p className="text-gray-400 text-sm">Issues with the editor, saving problems, or browser compatibility</p>
                                </div>
                                <div className="bg-gray-900 border border-gray-800 p-5 hover:border-valorant-red transition-colors duration-300">
                                    <h4 className="font-bold text-white uppercase tracking-wider mb-2">💡 Feature Requests</h4>
                                    <p className="text-gray-400 text-sm">Suggestions for new features or improvements to existing ones</p>
                                </div>
                                <div className="bg-gray-900 border border-gray-800 p-5 hover:border-valorant-red transition-colors duration-300">
                                    <h4 className="font-bold text-white uppercase tracking-wider mb-2">🎓 How-to Questions</h4>
                                    <p className="text-gray-400 text-sm">Need help getting started or learning advanced techniques</p>
                                </div>
                                <div className="bg-gray-900 border border-gray-800 p-5 hover:border-valorant-red transition-colors duration-300">
                                    <h4 className="font-bold text-white uppercase tracking-wider mb-2">🐛 Bug Reports</h4>
                                    <p className="text-gray-400 text-sm">Found a bug? Let us know and we&apos;ll fix it quickly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-12">
                        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900 border border-gray-800 p-6 group hover:border-valorant-red transition-colors duration-300">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Is ValoAscii really free?</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Yes! ValoAscii is completely free to use with no hidden fees, subscriptions, or premium features. We believe creativity should be accessible to everyone.</p>
                            </div>
                            <div className="bg-gray-900 border border-gray-800 p-6 group hover:border-valorant-red transition-colors duration-300">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">How do I save my work?</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Your creations are automatically saved to your browser&apos;s local storage. Click the &quot;Save changes&quot; button to ensure your work is preserved permanently.</p>
                            </div>
                            <div className="bg-gray-900 border border-gray-800 p-6 group hover:border-valorant-red transition-colors duration-300">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Can I use ASCII art in VALORANT?</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">Yes! Copy your ASCII art and paste it into VALORANT chat, Discord, or any other platform that supports text formatting and block copying.</p>
                            </div>
                            <div className="bg-gray-900 border border-gray-800 p-6 group hover:border-valorant-red transition-colors duration-300">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Do you collect my personal data?</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">We respect your privacy. We only use local storage for your creations and basic analytics. Check our Privacy Policy for details.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-valo-dark border border-gray-700 p-10 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-2 h-full bg-valorant-red"></div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-4">Have a Different Question?</h3>
                        <p className="text-gray-400 text-lg mb-8">Don&apos;t see your question answered here? We&apos;re here to help!</p>
                        <a href="mailto:hamzamah1030@gmail.com" className="inline-flex items-center gap-3 bg-white text-valo-dark font-black tracking-widest uppercase hover:bg-gray-200 py-4 px-8 transition-colors duration-200">
                            <span>📨</span>
                            SEND US AN EMAIL
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
