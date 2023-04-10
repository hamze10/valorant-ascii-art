import { Inter } from 'next/font/google'
import MainPage from "./MainPage"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-row justify-center align-middle text-center text-white p-4 bg-valorant-red">
        <p className="font-valorant text-4xl">
          VALORANT
        </p>
        <p className="font-mono font-semibold text-md ml-2">ASCII art</p>
      </div>

      <MainPage />
    </main>
  )
}
