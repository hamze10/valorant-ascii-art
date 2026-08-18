import TwitchAscii from "./twitchPage"

export const metadata = {
    title: "Twitch PC ASCII Editor | ValoAscii",
    description: "Create standard wide ASCII art for Twitch chat using our specialized grid editor."
}

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-valo-dark text-valo-gray pb-12">
            <div className="flex flex-1">
                <TwitchAscii />
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8 m-6 mb-8">
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-h2:text-white prose-p:text-gray-400 prose-strong:text-valorant-red">
                        <h2>ASCII Art for <span className="text-valorant-red">Twitch</span> Chat</h2>
                        <p>
                            Twitch chat is a different beast than VALORANT chat. Messages scroll fast, emotes fly everywhere, and the channel width is wider than an in-game text box. This editor uses a 32-column grid designed specifically for that wider format, so your art still reads cleanly in the middle of a busy stream chat.
                        </p>
                        <p>
                            It works exactly like the main VALORANT editor: pick a template or start blank, click cells to draw, hold <strong>CTRL</strong> to paint several cells at once, then hit COPY ART and paste your creation into the chat. Everything is saved automatically to your browser and stays private on your device.
                        </p>
                        <p>
                            Streamers use it for raid goodbyes, !commands, channel-points shoutouts and general chat spam. Viewers use it to make the streamer laugh mid-game. Either way, keep it to one or two lines of block art so it does not bury the conversation — a giant wall of text in a busy chat is a fast way to get ignored.
                        </p>
                    </article>
                </div>
            </div>
        </main>
    )
}
