import Link from 'next/link';
import { HomeIcon, PencilSquareIcon, PhotoIcon, BookOpenIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return (
        <nav className="bg-valo-dark border-b border-valorant-red/30 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-black text-valo-gray tracking-wider transform hover:scale-105 transition-transform hover:text-valorant-red">
                                Valo<span className="text-valorant-red">Ascii</span>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                            <Link href="/" className="border-transparent text-valo-gray hover:border-valorant-red hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200">
                                <HomeIcon className="h-5 w-5 mr-1.5" />
                                Editor
                            </Link>
                            <Link href="/text-to-ascii" className="border-transparent text-valo-gray hover:border-valorant-red hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200">
                                <PencilSquareIcon className="h-5 w-5 mr-1.5" />
                                Text to ASCII
                            </Link>
                            <Link href="/gallery" className="border-transparent text-valo-gray hover:border-valorant-red hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200">
                                <PhotoIcon className="h-5 w-5 mr-1.5" />
                                Gallery
                            </Link>
                            <Link href="/twitch" className="border-transparent text-valo-gray hover:border-valorant-red hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Twitch
                            </Link>
                            <Link href="/guides" className="border-transparent text-valo-gray hover:border-valorant-red hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200">
                                <BookOpenIcon className="h-5 w-5 mr-1.5" />
                                Guides
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu - simplified for generic usage */}
            <div className="sm:hidden border-t border-valorant-red/30 bg-valo-dark">
                <div className="pt-2 pb-3 flex overflow-x-auto px-4 space-x-6 hide-scrollbar">
                    <Link href="/" className="text-valo-gray hover:text-valorant-red font-bold uppercase tracking-widest whitespace-nowrap text-xs flex items-center transition-colors">
                        <HomeIcon className="h-4 w-4 mr-1" /> Home
                    </Link>
                    <Link href="/text-to-ascii" className="text-valo-gray hover:text-valorant-red font-bold uppercase tracking-widest whitespace-nowrap text-xs flex items-center transition-colors">
                        <PencilSquareIcon className="h-4 w-4 mr-1" /> Text Gen
                    </Link>
                    <Link href="/gallery" className="text-valo-gray hover:text-valorant-red font-bold uppercase tracking-widest whitespace-nowrap text-xs flex items-center transition-colors">
                        <PhotoIcon className="h-4 w-4 mr-1" /> Gallery
                    </Link>
                    <Link href="/twitch" className="text-valo-gray hover:text-valorant-red font-bold uppercase tracking-widest whitespace-nowrap text-xs flex items-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg> 
                        Twitch
                    </Link>
                    <Link href="/guides" className="text-valo-gray hover:text-valorant-red font-bold uppercase tracking-widest whitespace-nowrap text-xs flex items-center transition-colors">
                        <BookOpenIcon className="h-4 w-4 mr-1" /> Guides
                    </Link>
                </div>
            </div>
        </nav>
    );
}
