import Header from "@/components/Header"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function PrivacyPolicy() {
    return (
        <main className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-col items-center p-10 h-screen">
                <h1 className="mb-10 text-4xl font-bold"> Privacy Police</h1>
                <p className="italic mb-5"> Your privacy is import to us. Here is how we handle your information👇👇</p>
                <h1 className="text-2xl font-extrabold text-green-600 w-1/2 text-center"> We only use the localstorage to save your creations. We also use Google Analytics for monitoring purposes and Google AdSense for advertising. Otherwise, none of your data is saved by us!  </h1>
            </div>
        </main>
    )
}
