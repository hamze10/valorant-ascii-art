import { Inter } from 'next/font/google'
import MainPage from "./MainPage"
import Header from "@/components/Header"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />

      <div className="flex ml-10">
        <MainPage />
      </div>
    </main>
  )
}
