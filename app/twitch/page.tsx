import TwitchAscii from "./twitchPage"
import Head from 'next/head'

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
        </main>
    )
}
