"use client";

import { useEffect, useReducer, useState } from "react";
import Canvas from "@/components/Canvas";
import Button from "@/components/Button";
import Loading from "./loading";
import { AsciiConfig, initData } from "@/data/data";
import { EyeSlashIcon, EyeIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/navigation";

const WIDTH: number = 26;
const LOCAL_STORAGE: string = "ascii";
const GRAY_CHAR: string = "░";
const WHITE_CHAR: string = "█";
const buttonStyle = "font-bold rounded-none px-4 py-2 bg-gray-800 text-white hover:bg-valorant-red transition-colors duration-200 border border-gray-700 hover:border-valorant-red";

const asciiReducer = (ascii: Array<AsciiConfig>, action: any) => {
    switch (action.type) {
        case 'addedAll': {
            ascii = action.items.slice(0)
            return ascii
        }
        case 'added': {
            return [...ascii, action.item];
        }
        case 'saved': {
            return ascii.map(item => {
                if (item.id === action.item.id) {
                    return action.item;
                } else {
                    return item;
                }
            })
        }
        case 'deleted': {
            return ascii.filter(item => item.id !== action.id)
        }
        default: {
            throw Error(`Unknown action: ${action.type}`)
        }
    }
}

const MainPage = () => {
    const [loading, setLoading] = useState(true);
    const [showSideBar, setShowSideBar] = useState(true);
    const [active, setActive] = useState(initData[0]);
    const [ascii, dispatch] = useReducer(asciiReducer, initData);
    const router = useRouter();

    const handleAddAscii = () => {
        let newId = ascii.length > 0 ? ascii.slice(-1)[0].id + 1 : 1
        let newElem: AsciiConfig = {
            id: newId,
            name: `Unknown${newId}`,
            height: 7,
            positions: []
        }

        dispatch({
            type: 'added',
            item: newElem
        })

        setActive(newElem)
    }

    const handleSaveAscii = () => {
        let item = ascii.findIndex(e => e.id == active.id)
        if (item == -1) return

        dispatch({
            type: 'saved',
            item: active
        })
    }

    const handleDeletedAscii = (id: number) => {
        if (ascii.length == 1) {
            return
        }

        dispatch({
            type: 'deleted',
            id: id
        })
    }

    const checkColor = (pos_x: number, pos_y: number): void => {
        let realPos: number = (pos_x * WIDTH) + pos_y
        let activePos = active.positions.indexOf(realPos)
        if (activePos == -1) {
            setActive({ ...active, positions: [...active.positions, realPos] })
            return
        }

        let newArray = active.positions.filter(item => item !== realPos)
        setActive({ ...active, positions: newArray })
    }

    const checkHoverAndCtrl = (e: MouseEvent, pos_x: number, pos_y: number) => {
        if (e.ctrlKey) {
            checkColor(pos_x, pos_y);
        }
    }

    const reset = () => {
        setActive({ ...active, positions: [] })
    }

    const copyActive = () => {
        const cal = active.height * WIDTH
        const sorted = active.positions.sort((a, b) => { return a - b })
        let content = ""
        for (let i = 0; i < cal; i++) {
            content += sorted.indexOf(i) == -1 ? GRAY_CHAR : WHITE_CHAR
        }

        navigator.clipboard.writeText(content)
    }

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    }

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE);
        if (stored) {
            const parsed = JSON.parse(stored)
            dispatch({
                type: 'addedAll',
                items: parsed
            })
            setActive(parsed[0])
        }

        setLoading(false);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(ascii))
    }, [ascii])

    useEffect(() => {
        if (!ascii.find(item => item.id == active.id)) {
            setActive(ascii[0])
        }
    }, [ascii.length])

    if (loading) {
        return <Loading />
    }

    return (
        <div className="flex flex-col min-h-screen bg-valo-dark text-valo-gray">
            {/* Hero Section */}
            <div className="bg-gray-900 border border-gray-800 p-8 m-6 mb-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-valorant-red transform translate-x-8 -translate-y-8 rotate-45 opacity-50"></div>
                
                <div className="text-center mb-8 relative z-10">
                    <h1 className="text-4xl font-bold text-white tracking-widest uppercase mb-4">
                        CREATE STUNNING <span className="text-valorant-red">ASCII ART</span> FOR VALORANT
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Transform your gaming experience with our powerful ASCII art editor. Design custom artwork, create unique signatures, and express your creativity in VALORANT chat and beyond.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8 relative z-10">
                    <div className="text-center p-6 bg-gray-800 border border-gray-700 hover:border-valorant-red transition-colors duration-300">
                        <div className="text-4xl mb-4">🎨</div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Easy to Use</h3>
                        <p className="text-gray-400">Intuitive click-and-drag interface makes creating ASCII art simple for everyone</p>
                    </div>
                    <div className="text-center p-6 bg-gray-800 border border-gray-700 hover:border-valorant-red transition-colors duration-300">
                        <div className="text-4xl mb-4">💾</div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Auto-Save</h3>
                        <p className="text-gray-400">Your creations are automatically saved locally - never lose your work</p>
                    </div>
                    <div className="text-center p-6 bg-gray-800 border border-gray-700 hover:border-valorant-red transition-colors duration-300">
                        <div className="text-4xl mb-4">📋</div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">One-Click Copy</h3>
                        <p className="text-gray-400">Copy your ASCII art instantly to paste anywhere in VALORANT or other platforms</p>
                    </div>
                </div>
                
                <div className="bg-valorant-red p-6 text-center transform skew-x-[-2deg] mx-4 relative z-10">
                    <div className="transform skew-x-[2deg]">
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Start Creating Now!</h3>
                        <p className="text-white/90 mb-4 font-medium">Join thousands of players who use ValoAscii to enhance their gaming experience</p>
                        <div className="flex justify-center gap-4">
                            <span className="bg-valo-dark/50 backdrop-blur-sm px-4 py-2 text-white font-bold tracking-widest uppercase text-sm border border-white/20">✨ Free Forever</span>
                            <span className="bg-valo-dark/50 backdrop-blur-sm px-4 py-2 text-white font-bold tracking-widest uppercase text-sm border border-white/20">🚀 No Registration</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${showSideBar ? "flex flex-col basis-full 2xl:basis-1/5 p-6 bg-gray-900 border-r border-gray-800" : "hidden"}`}>
                <div className="flex flex-row justify-between items-start">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                            <h2 className="text-3xl font-bold text-white uppercase tracking-widest mr-2"> MY ASCII </h2>
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center px-3 py-1 text-xs font-bold bg-valorant-red/20 text-valorant-red uppercase tracking-wider animate-pulse border border-valorant-red/50">
                                    ✨ NEW
                                </span>
                                <span className="text-sm text-gray-400">Try Twitch Ascii</span>
                                <button className={buttonStyle} type="button" onClick={() => router.push("/twitch")}>
                                    LAUNCH
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 font-medium"> Your saved artwork collection</p>
                    </div>

                    <button type="button" className="p-2 bg-valorant-red hover:bg-pink-600 transition-colors duration-200" onClick={handleAddAscii}>
                        <PlusCircleIcon className="h-6 w-6 text-white" />
                    </button>
                </div>
                <ul className="mt-6 space-y-2">
                    {
                        ascii.map((el) => (
                            <li key={el.id}>
                                <div className={`flex flex-row justify-between items-center px-4 py-3 transition-colors duration-200 border-l-4 ${active.id == el.id ? "bg-gray-800 border-valorant-red text-white" : "bg-gray-900 border-transparent hover:bg-gray-800 text-gray-400 hover:text-white"}`}>
                                    <button onClick={e => setActive(el)} className="flex-1 text-left font-bold uppercase tracking-wider"> {el.name} </button>
                                    <button className="ml-2 w-6 h-6 bg-gray-800 hover:bg-valorant-red text-gray-400 hover:text-white flex items-center justify-center transition-colors duration-200" onClick={e => handleDeletedAscii(el.id)}>
                                        <span className="text-sm font-bold">×</span>
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="flex flex-col gap-6 p-6">
                <div className="bg-gray-900 border border-gray-800 p-6">
                    <div className="flex flex-row items-end lg:justify-between">
                        <div className="flex flex-row gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 tracking-widest uppercase"> NAME </label>
                                <input className="px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:border-valorant-red focus:outline-none transition-colors duration-200 w-full" value={active.name} onChange={e => setActive({ ...active, name: e.target.value })} />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 tracking-widest uppercase"> HEIGHT</label>
                                <input className="px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:border-valorant-red focus:outline-none transition-colors duration-200 w-full" type="number" min={1} max={13} value={active.height} onChange={e => setActive({ ...active, height: Number(e.target.value) })} />
                            </div>
                        </div>

                        <button onClick={toggleSideBar} className="p-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 ml-4 border border-gray-700">
                            {showSideBar && <EyeSlashIcon className="h-5 w-5 text-gray-400" />}
                            {!showSideBar && <EyeIcon className="h-5 w-5 text-gray-400" />}
                        </button>

                        <div className="ml-4 bg-gray-800 border border-gray-700 py-2 px-4 hidden lg:block">
                            <p className="text-sm text-gray-300 font-medium"> 💡 Use <span className="text-valorant-red font-bold">CTRL + Click</span> to select multiple cells </p>
                        </div>
                    </div>

                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 overflow-x-auto">
                    <div className="w-fit mx-auto">
                        <Canvas width={WIDTH} onClick={checkColor} onMouseOver={checkHoverAndCtrl} active={active} />
                    </div>
                </div>

                <div className="flex flex-row md:justify-between mb-10 bg-gray-900 border border-gray-800 p-6">
                    <div className="flex flex-row gap-3">
                        <Button style="relative w-fit px-8 py-3 bg-valorant-red text-white font-bold uppercase tracking-widest overflow-hidden group hover:scale-105 transition-transform duration-200" onClick={handleSaveAscii} text="💾 SAVE CHANGES" />
                        <Button style="relative w-fit px-8 py-3 bg-gray-800 text-white font-bold uppercase tracking-widest overflow-hidden group hover:scale-105 transition-transform duration-200 border border-gray-600 hover:border-white" onClick={copyActive} text="📋 COPY ART" />
                    </div>
                    <div>
                        <Button style="relative w-fit px-8 py-3 bg-gray-800 text-red-400 font-bold uppercase tracking-widest overflow-hidden group hover:scale-105 transition-transform duration-200 border border-gray-600 hover:border-red-400 hover:bg-red-400/10" onClick={reset} text="🔄 RESET GRID" />
                    </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 transform translate-x-16 -translate-y-16 rotate-45 opacity-20"></div>
                    
                    <div className="mb-6 relative z-10">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-6">How to Use <span className="text-valorant-red">ValoAscii</span></h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 bg-gray-800 border-l-2 border-valorant-red">
                                <div className="text-valorant-red font-black text-2xl">01</div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Select or Create</h4>
                                    <p className="text-gray-400 text-sm">Choose from existing templates or create a new ASCII art from scratch</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-gray-800 border-l-2 border-valorant-red">
                                <div className="text-valorant-red font-black text-2xl">02</div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Click to Draw</h4>
                                    <p className="text-gray-400 text-sm">Click on grid cells to create your design. Hold CTRL for multi-select</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-gray-800 border-l-2 border-valorant-red">
                                <div className="text-valorant-red font-black text-2xl">03</div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Save & Copy</h4>
                                    <p className="text-gray-400 text-sm">Save your creation and copy it to use in VALORANT chat or anywhere else</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-gray-800 border-l-2 border-valorant-red">
                                <div className="text-valorant-red font-black text-2xl">04</div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Share & Enjoy</h4>
                                    <p className="text-gray-400 text-sm">Show off your ASCII art to friends and fellow VALORANT players</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 pt-8 mt-4 relative z-10">
                        <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4">Popular Use Cases</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-800 p-4 border border-gray-700 hover:border-valorant-red transition-colors">
                                <div className="text-2xl mb-2">🎮</div>
                                <h4 className="font-bold text-white uppercase tracking-wider mb-1">Gaming Signatures</h4>
                                <p className="text-gray-400 text-sm">Create unique signatures for your gaming profiles</p>
                            </div>
                            <div className="bg-gray-800 p-4 border border-gray-700 hover:border-valorant-red transition-colors">
                                <div className="text-2xl mb-2">💬</div>
                                <h4 className="font-bold text-white uppercase tracking-wider mb-1">Chat Art</h4>
                                <p className="text-gray-400 text-sm">Enhance your messages with custom ASCII designs</p>
                            </div>
                            <div className="bg-gray-800 p-4 border border-gray-700 hover:border-valorant-red transition-colors">
                                <div className="text-2xl mb-2">🏆</div>
                                <h4 className="font-bold text-white uppercase tracking-wider mb-1">Team Logos</h4>
                                <p className="text-gray-400 text-sm">Design ASCII logos for your esports team</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 pt-6 mt-8 relative z-10 text-center">
                        <p className="text-sm text-gray-500 font-medium"> 
                            ⚠️ Our site is not affiliated with Valorant or Riot Games. 
                            <button className="font-bold uppercase tracking-wider ml-2 text-valorant-red hover:text-white transition-colors duration-200" type="button" onClick={() => router.push("/mentions-legales")}> 
                                Mentions Légales 
                            </button> 
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="fixed bottom-4 right-4 z-50">
                <CookieConsent 
                    buttonText="ACCEPT" 
                    cookieName="valoAsciiConsent" 
                    style={{ background: "#0f1923", border: "1px solid #fa4454" }} 
                    buttonStyle={{ background: "#fa4454", color: "white", fontSize: "13px", fontWeight: "bold", padding: "10px 20px" }}
                >
                    This website uses cookies to improve user experience.
                </CookieConsent>
            </div>
        </div>
    );
}

export default MainPage;