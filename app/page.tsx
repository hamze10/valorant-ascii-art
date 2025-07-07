import { Inter } from 'next/font/google'
import MainPage from "./MainPage"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="flex flex-1">
        <MainPage />
      </div>
      
      <Footer />
    </main>
  )
}
