import { Inter } from 'next/font/google'
import Header from "@/components/Header"
import TwitchAscii from "./twitchPage"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className="flex flex-col h-screen">
            <Header />

            <div className="flex ml-10">
                <TwitchAscii />
            </div>
        </main>
    )
}
