import { Inter } from 'next/font/google'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TwitchAscii from "./twitchPage"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />

            <div className="flex flex-1">
                <TwitchAscii />
            </div>
            
            <Footer />
        </main>
    )
}
