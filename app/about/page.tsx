import Header from "@/components/Header"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <main className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-col items-center p-10 h-screen">
                <h1 className="mb-10 text-4xl font-bold"> Welcome to ValoAscii</h1>
                <p className="italic mb-5"> Here, you can create an ASCII you want, easy-to-use, on VALORANT !</p>
                <h1 className="text-2xl font-extrabold mb-10"> ENJOY ! :)</h1>
                <p className="font-bold"> Our site is not affiliated with Valorant or Riot Games. </p>
            </div>
        </main>
    )
}
