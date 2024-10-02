import Header from "@/components/Header"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <main className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-col items-center p-10 h-screen">
                <h1 className="mb-10 text-4xl font-bold"> Contact us</h1>
                <p className="italic mb-5"> If you have any questions, you can contact us here 👇👇</p>
                <h1 className="text-2xl font-extrabold text-blue-500 underline"> <a href="mailto:hamzamah1030@gmail.com"> hamzamah1030@gmail.com </a></h1>
            </div>
        </main>
    )
}
