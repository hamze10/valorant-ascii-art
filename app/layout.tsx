import Script from "next/script"
import './globals.css'

export const metadata = {
  title: 'Valscii Ascii Art',
  description: 'Free online ASCII art editor for Valorant players. Create, save and copy custom ASCII art for in-game chat, Discord, Twitch and more.',
}

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1459940579664307" crossOrigin="anonymous"></script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DHV3H46K80"></Script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={
            {
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', 'G-DHV3H46K80');
            `
            }
          }
        ></script>
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-valo-dark">
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
