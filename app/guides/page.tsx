import Link from "next/link";

export const metadata = {
    title: "Valorant Guides, Chat Tricks & ASCII Tutorials",
    description: "Learn how to use ASCII art effectively in Valorant. Discover chat tricks, formatting tips, and tutorials for creating the best in-game chat experiences.",
};

const GUIDES = [
    {
        title: "How to Use ASCII Art in Valorant Chat",
        slug: "how-to-use-ascii-art",
        excerpt: "A complete step-by-step guide on copying, pasting, and formatting ASCII masterpieces perfectly in Riot's famous tactical shooter.",
        date: "2023-11-15",
        readTime: "5 min read"
    },
    {
        title: "Top 5 Valorant Chat Tricks You Didn't Know",
        slug: "top-5-chat-tricks",
        excerpt: "From hidden commands to sending blank messages. Elevate your chat game with these lesser-known tricks.",
        date: "2023-10-22",
        readTime: "4 min read"
    },
    {
        title: "Creating the Perfect Crosshair ASCII",
        slug: "perfect-crosshair-ascii",
        excerpt: "Why settle for sharing crosshair codes when you can draw them in chat? Let's explore the geometry of text-based crosshairs.",
        date: "2023-09-08",
        readTime: "6 min read"
    }
];

export default function GuidesIndexPage() {
    return (
        <div className="flex flex-col min-h-screen bg-valo-dark text-valo-gray">
            {/* Hero Section */}
            <div className="bg-gray-900 border border-gray-800 p-8 m-6 mb-4 mt-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-valorant-red transform translate-x-16 -translate-y-16 rotate-45 opacity-10"></div>
                
                <div className="text-center relative z-10 mb-4">
                    <h1 className="text-4xl font-black text-white uppercase tracking-widest mb-4">
                        VALORANT <span className="text-valorant-red">GUIDES</span> & TUTORIALS
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Become a master of the text box. Read our comprehensive guides on Valorant chat mechanics, ASCII art creation, and communication.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pt-0">
                {GUIDES.map((guide) => (
                    <Link href={`/guides/${guide.slug}`} key={guide.slug} className="group block h-full">
                        <div className="bg-gray-900 border border-gray-800 hover:border-valorant-red transition-all duration-300 overflow-hidden h-full flex flex-col relative transform group-hover:-translate-y-1">
                            {/* Corner accents */}
                            <div className="absolute top-0 right-0 w-2 h-2 bg-valo-dark group-hover:bg-valorant-red transition-colors duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 bg-valo-dark group-hover:bg-valorant-red transition-colors duration-300"></div>
                            
                            <div className="p-1 min-h-[8px] bg-valorant-red w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            
                            <div className="p-6 flex-grow flex flex-col mt-2">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-valorant-red tracking-widest uppercase bg-valorant-red/10 px-2 py-1">TUTORIAL</span>
                                    <span className="text-xs text-gray-500 font-bold tracking-widest uppercase">{guide.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 group-hover:text-valorant-red transition-colors duration-300">{guide.title}</h3>
                                <p className="text-gray-400 text-sm flex-grow leading-relaxed">
                                    {guide.excerpt}
                                </p>
                                <div className="mt-8 flex items-center text-sm font-bold text-valorant-red uppercase tracking-widest group-hover:text-pink-600 transition-colors">
                                    READ ARTICLE <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* SEO Text Block */}
            <div className="bg-gray-900 border border-gray-800 p-8 m-6">
                <article className="prose prose-invert prose-lg max-w-none text-gray-400 prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-widest prose-h2:text-white">
                    <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6 border-b border-gray-800 pb-4">MASTERING IN-GAME COMMUNICATION</h2>
                    <p className="mb-6 leading-relaxed">
                        While aiming and ability usage are the core pillars of Valorant, communication is what differentiates a good team from a great one. Sure, you have your microphone, but game chat holds a special place in the hearts of gamers. It's the place for banter, strategy, and expression.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        Our guides aim to teach you exactly how the Valorant chat system handles text rendering, including its specific font quirks, line-break rules, and character limitations. Knowing these lets you format your ASCII creations perfectly without fear of them breaking awkwardly in-game. Read through our tutorials to uncover the deep meta of text-based hype!
                    </p>
                </article>
            </div>
        </div>
    );
}
