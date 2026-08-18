import Link from "next/link";
import { notFound } from "next/navigation";

// Define the content for each guide to simulate a database/CMS
const GUIDE_CONTENT: Record<string, { title: string, date: string, author: string, excerpt: string, content: React.ReactNode }> = {
    "how-to-use-ascii-art": {
        title: "How to Use ASCII Art in Valorant Chat",
        date: "November 15, 2023",
        author: "ValoAscii Team",
        excerpt: "A complete step-by-step guide on copying, pasting, and formatting ASCII masterpieces perfectly in Riot's famous tactical shooter.",
        content: (
            <>
                <p>
                    ASCII art is an incredible way to grab attention, celebrate a victory, or just have some fun in the lobby before the match begins. But pasting a huge block of characters into Valorant's chat box doesn't always work perfectly on the first try. Here is your ultimate guide.
                </p>
                
                <h3>1. Choosing the Right Art size</h3>
                <p>
                    The Valorant chat box is relatively narrow compared to a full web browser window. If you paste ASCII art that is wider than about 40 characters, the game's text engine will automatically wrap the line, destroying your beautiful art piece entirely. Always pick narrow, vertical-focused ASCII arts, or use a tool specifically optimized for the game.
                </p>

                <h3>2. The "All Chat" vs "Team Chat" Dilemma</h3>
                <p>
                    By default, hitting <code>Enter</code> opens Team Chat. If you want to drop your art to the enemy team (for example, a massive "GG WP" after a clutch), you must press <code>Shift + Enter</code>. Make sure the little prefix says <code>[All]</code> before you hit paste!
                </p>

                <h3>3. Copying and Pasting Techniques</h3>
                <p>
                    Sometimes the clipboard can grab extra whitespace or a trailing new line. Look out for the blinking cursor after you paste. If it drops to a seemingly empty line below your art, hit backspace once before sending. This prevents the chat box from creating massive empty gaps.
                </p>

                <div className="bg-gray-800 p-6 border-l-4 border-valorant-red my-8 text-white not-prose">
                    <strong className="uppercase tracking-widest text-valorant-red mb-2 block">NOTE:</strong>
                    <p className="m-0 text-sm leading-relaxed text-gray-300">Be careful not to spam. Sending 5 massive ASCII arts in a row can get you chat-restricted by Riot's automated systems!</p>
                </div>
            </>
        )
    },
    "top-5-chat-tricks": {
        title: "Top 5 Valorant Chat Tricks You Didn't Know",
        date: "October 22, 2023",
        author: "ValoAscii Team",
        excerpt: "From hidden commands to sending blank messages. Elevate your chat game with these lesser-known tricks.",
        content: (
            <>
                <p>
                    You think you know all there is to know about the Riot Games client? Think again. Here are 5 hidden features of the Valorant chat system.
                </p>
                
                <h3>1. The Slash Commands (/ff, /remake)</h3>
                <p>
                    While most players know <code>/ff</code> (forfeit), fewer know that you can type <code>/remake</code> before the start of round 2 if a player has disconnected. You can also use <code>/w [Player Name]</code> to whisper someone privately!
                </p>

                <h3>2. Replying Quickly</h3>
                <p>
                    If someone whispers you while you are playing, you don't need to type out their full name. Just press <code>/r</code> and hit Space. It will automatically populate the name of the last person who whispered you!
                </p>

                <h3>3. Emojis and Special Characters</h3>
                <p>
                    Did you know Valorant supports standard Unicode emojis? Pressing <code>Win + .</code> (Windows) or <code>Cmd + Ctrl + Space</code> (Mac) opens the emoji picker, and you can paste icons like 🔥, 💀, or 💯 directly into the chat!
                </p>

                <h3>4. Chat History Scrolling</h3>
                <p>
                    Missed a callout? You can scroll up in chat using the mouse wheel, but a faster way during intense moments is sometimes just hitting <code>Enter</code> to open the box, then Page Up or Page Down if you have those keys.
                </p>
            </>
        )
    },
    "perfect-crosshair-ascii": {
        title: "Creating the Perfect Crosshair ASCII",
        date: "September 08, 2023",
        author: "ValoAscii Team",
        excerpt: "Why settle for sharing crosshair codes when you can draw them in chat? Let's explore the geometry of text-based crosshairs.",
        content: (
            <>
                <p>
                    Crosshairs in Valorant are an art form themselves. But drawing one in text requires understanding basic monospace layout principles. Let's break down how to create the perfect "Dot" or "Plus" sign for chat.
                </p>
                
                <h3>The Basics of Spacing</h3>
                <p>
                    To make an ASCII shape perfectly aligned, you have to use standard spaces. Tab characters do not render correctly in Valorant. A simple crosshair utilizing the plus (+), minus (-), and pipe (|) keys can look stunning if spaced perfectly.
                </p>
                
                <pre className="!bg-valo-dark !text-white p-6 border border-gray-700 font-mono font-bold">
                    {`   |   \n --+-- \n   |   `}
                </pre>
                
                <p>
                    You can try substituting symbols like "O" or "0" for the center mass, or relying on entirely full-block characters (█) for a thicker, more impactful design. Play around with our editor on the Home Page to construct your perfect creation.
                </p>

                <h3>Why Post it?</h3>
                <p>
                    Usually, players post a crosshair emoji or ASCII art into chat when spectating someone who has an absolutely terrible in-game crosshair (like a giant smiley face or snowflake that covers the whole screen) as a joke! It's one of the fun micro-cultures within the game.
                </p>
            </>
        )
    }
};

export function generateStaticParams() {
    return Object.keys(GUIDE_CONTENT).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<{ title: string, description: string }> {
    const resolvedParams = await params;
    const guide = GUIDE_CONTENT[resolvedParams.slug];

    if (!guide) {
        return {
            title: "Guide Not Found — ValoAscii",
            description: "This guide could not be found on ValoAscii.",
        };
    }

    return {
        title: `${guide.title} — ValoAscii`,
        description: guide.excerpt,
    };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const guide = GUIDE_CONTENT[slug];

    if (!guide) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-valo-dark pb-12">
            <div className="bg-valorant-red h-1 w-full shadow-[0_0_10px_rgba(250,68,84,0.5)]"></div>
            
            <div className="max-w-4xl mx-auto px-6 pt-10 w-full">
                <Link href="/guides" className="text-gray-400 font-bold uppercase tracking-widest hover:text-valorant-red transition-colors flex items-center mb-8 group w-fit">
                    <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
                    BACK TO GUIDES
                </Link>

                <article className="bg-gray-900 border border-gray-800 relative z-10">
                    <div className="absolute top-0 right-0 w-3 h-3 bg-valo-dark transform translate-x-1.5 -translate-y-1.5 rotate-45"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 bg-valo-dark transform -translate-x-1.5 translate-y-1.5 rotate-45"></div>
                    
                    <div className="p-8 md:p-14">
                        <header className="mb-12 text-center border-b border-gray-800 pb-10 relative">
                            <span className="text-valorant-red font-black uppercase tracking-widest text-sm mb-4 block">TUTORIAL</span>
                            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest leading-tight mb-6">
                                {guide.title}
                            </h1>
                            <div className="flex items-center justify-center gap-4 text-gray-500 font-bold tracking-widest text-xs uppercase">
                                <span>{guide.author}</span>
                                <span className="text-valorant-red">•</span>
                                <span>{guide.date}</span>
                            </div>
                        </header>

                        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-h3:text-white prose-p:text-gray-400 prose-p:leading-relaxed prose-code:text-valorant-red prose-code:bg-valo-dark prose-code:px-2 prose-code:py-0.5 prose-code:border prose-code:border-gray-800 prose-code:rounded-sm">
                            {guide.content}
                        </div>
                    </div>
                </article>

                <div className="mt-12 bg-valorant-red p-10 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-valo-dark transform translate-x-16 -translate-y-16 rotate-45 opacity-20"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-4">READY TO CREATE YOUR OWN ART?</h3>
                        <p className="text-white/90 mb-8 font-medium">Head over to our main editor and start building your custom ASCII masterpiece.</p>
                        <Link href="/" className="inline-block bg-valo-dark text-white font-bold uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-valo-dark transition-colors duration-300 border border-transparent">
                            OPEN EDITOR
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
