import './globals.css'

export const metadata = {
  title: 'Valorant Ascii Art',
  description: 'Created by a valorant player',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1459940579664307" crossOrigin="anonymous"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DHV3H46K80"></script>
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
      <body>{children}</body>
    </html>
  )
}
