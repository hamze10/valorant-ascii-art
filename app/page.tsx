import MainPage from "./MainPage"

export const metadata = {
  title: 'ValoAscii | Valorant ASCII Art Editor',
  description: 'Create and copy custom ASCII art for Valorant chat. Free online grid editor with templates, auto-save and one-click copy for in-game chat, Discord and more.',
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-valo-dark">
      <div className="flex flex-1">
        <MainPage />
      </div>

      <div className="bg-gray-900 border border-gray-800 p-8 m-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-h2:text-white prose-p:text-gray-400 prose-strong:text-valorant-red">
            <h2>What is <span className="text-valorant-red">ValoAscii</span>?</h2>
            <p>
              ValoAscii is a free online editor built for VALORANT players who want to stand out in the text chat. It turns a simple grid into pixel-style artwork made of block characters, which you can paste directly into the game, Discord, Twitch, or any chat that keeps monospace formatting. No accounts, no downloads, no cost — just open the editor and start drawing.
            </p>
            <p>
              The tool was made with the in-game chat box in mind. VALORANT renders text in a fixed-width font and wraps lines around 40 characters, so most art designed in a browser breaks once pasted into the game. ValoAscii keeps every creation narrow enough to survive that auto-wrap, which is exactly why players use it for signatures, GG WP messages, crosshair jokes, and team logos.
            </p>

            <h2>How to use the editor</h2>
            <ol className="list-decimal pl-6 space-y-3 marker:text-valorant-red">
              <li><strong>Pick a template or start blank.</strong> The sidebar is pre-loaded with ready-made designs like GLHF, GHWP, GGEZ, NO, SRY and WHAT. You can also add a new empty canvas and name it whatever you like.</li>
              <li><strong>Draw on the grid.</strong> Click cells to toggle them on and off. Hold <strong>CTRL</strong> and hover to paint multiple cells at once, and use the HEIGHT field to make your canvas taller or shorter.</li>
              <li><strong>Save your work.</strong> Your artwork is saved automatically to your browser. Press the SAVE CHANGES button and it stays available even if you close the tab.</li>
              <li><strong>Copy and paste.</strong> Hit COPY ART, then paste into VALORANT chat. Press <strong>Shift + Enter</strong> to switch to [All] chat before you send, so the enemy team can admire it too.</li>
            </ol>

            <h2>Frequently asked questions</h2>
            <h3 className="prose-h3:text-white">Are my creations saved?</h3>
            <p>
              Yes. Everything you draw is stored in your browser&apos;s local storage the moment you make a change. You never need an account, and your art never leaves your device. If you clear your browser data, the drawings go with it, so export anything you want to keep.
            </p>
            <h3 className="prose-h3:text-white">Is it really free?</h3>
            <p>
              Completely. There are no hidden fees, no premium tier, and no registration wall. The editor, the gallery, the text generator and the guides are all free to use. If you enjoy the tool, a cup of coffee is appreciated but never required.
            </p>
            <h3 className="prose-h3:text-white">Can I use it on mobile?</h3>
            <p>
              Yes. ValoAscii works on phones and tablets. The grid is compact enough to draw with your finger, and the copy button puts the finished art on your clipboard ready to paste into the mobile VALORANT companion app or Discord.
            </p>

            <div className="bg-gray-800 border-l-4 border-valorant-red p-6 rounded-r-sm">
              <p className="text-sm text-gray-300 font-medium m-0">
                <strong className="text-white uppercase tracking-wider">NOTE:</strong> ValoAscii is an independent project and is not affiliated with Riot Games. VALORANT is a trademark of Riot Games, Inc.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
