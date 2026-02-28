import MainPage from "./MainPage"

export const metadata = {
  title: 'ValoAscii | Valorant ASCII Art Editor',
  description: 'Created by a valorant player',
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-valo-dark">
      <div className="flex flex-1">
        <MainPage />
      </div>
    </main>
  )
}
