"use client";

import { useEffect, useReducer, useState } from "react";
import Canvas from "@/components/Canvas";
import Button from "@/components/Button";
import Loading from "./loading";
import { AsciiConfig, initData } from "@/data/data";
import { EyeSlashIcon, EyeIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/solid'
import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/navigation";

const WIDTH: number = 26;
const LOCAL_STORAGE: string = "ascii";
const GRAY_CHAR: string = "░";
const WHITE_CHAR: string = "█";
const buttonStyle = "font-bold rounded-lg px-4 py-2 bg-white hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg";

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
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 m-6 mb-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-valorant-red to-pink-500 bg-clip-text text-transparent mb-4">
                        Create Stunning ASCII Art for VALORANT
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Transform your gaming experience with our powerful ASCII art editor. Design custom artwork, create unique signatures, and express your creativity in VALORANT chat and beyond.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                        <div className="text-4xl mb-4">🎨</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Easy to Use</h3>
                        <p className="text-gray-600">Intuitive click-and-drag interface makes creating ASCII art simple for everyone</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                        <div className="text-4xl mb-4">💾</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Auto-Save</h3>
                        <p className="text-gray-600">Your creations are automatically saved locally - never lose your work</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                        <div className="text-4xl mb-4">📋</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">One-Click Copy</h3>
                        <p className="text-gray-600">Copy your ASCII art instantly to paste anywhere in VALORANT or other platforms</p>
                    </div>
                </div>
                
                <div className="bg-gradient-to-r from-valorant-red to-pink-500 rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Start Creating Now!</h3>
                    <p className="text-white/90 mb-4">Join thousands of players who use ValoAscii to enhance their gaming experience</p>
                    <div className="flex justify-center gap-4">
                        <span className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-medium">✨ Free Forever</span>
                        <span className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-medium">🚀 No Registration</span>
                    </div>
                </div>
            </div>

            <div className={`${showSideBar ? "flex flex-col basis-full 2xl:basis-1/5 p-6 bg-white shadow-xl rounded-r-2xl" : "hidden"}`}>
                <div className="flex flex-row justify-between items-start">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-valorant-red to-pink-500 bg-clip-text text-transparent mr-2"> My Ascii </h2>
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-pulse">
                                    ✨ NEW
                                </span>
                                <span className="text-sm text-gray-600">Try Twitch Ascii</span>
                                <button className={buttonStyle} type="button" onClick={() => router.push("/twitch")}>
                                    Launch
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 font-medium"> Your saved artwork collection</p>
                    </div>

                    <button type="button" className="p-2 bg-gradient-to-r from-valorant-red to-pink-500 hover:from-valorant-red hover:to-pink-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" onClick={handleAddAscii}>
                        <PlusCircleIcon className="h-6 w-6 text-white" />
                    </button>
                </div>
                <ul className="mt-6 space-y-2">
                    {
                        ascii.map((el) => (
                            <li key={el.id}>
                                <div className={`flex flex-row justify-between items-center px-4 py-3 rounded-lg transition-all duration-200 ${active.id == el.id ? "bg-gradient-to-r from-valorant-red to-pink-500 text-white shadow-lg" : "bg-gray-50 hover:bg-gray-100"}`}>
                                    <button onClick={e => setActive(el)} className="flex-1 text-left font-medium"> {el.name} </button>
                                    <button className="ml-2 w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 flex items-center justify-center transition-colors duration-200" onClick={e => handleDeletedAscii(el.id)}>
                                        <span className="text-sm font-bold">×</span>
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="flex flex-col gap-6 p-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex flex-row items-end lg:justify-between">
                        <div className="flex flex-row gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide"> NAME </label>
                                <input className="px-4 py-3 rounded-lg border border-gray-200 focus:border-valorant-red focus:ring-2 focus:ring-valorant-red/20 transition-all duration-200 shadow-sm" value={active.name} onChange={e => setActive({ ...active, name: e.target.value })} />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide"> HEIGHT</label>
                                <input className="px-4 py-3 rounded-lg border border-gray-200 focus:border-valorant-red focus:ring-2 focus:ring-valorant-red/20 transition-all duration-200 shadow-sm" type="number" min={1} max={13} value={active.height} onChange={e => setActive({ ...active, height: Number(e.target.value) })} />
                            </div>
                        </div>

                        <button onClick={toggleSideBar} className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 ml-4">
                            {showSideBar && <EyeSlashIcon className="h-5 w-5 text-valorant-red" />}
                            {!showSideBar && <EyeIcon className="h-5 w-5 text-valorant-red" />}
                        </button>

                        <div className="ml-4 bg-gradient-to-r from-valorant-red to-pink-500 rounded-lg py-2 px-4 hidden lg:block">
                            <p className="text-sm text-white font-medium"> 💡 Use CTRL + Click to select multiple cells </p>
                        </div>
                    </div>

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <Canvas width={WIDTH} onClick={checkColor} onMouseOver={checkHoverAndCtrl} active={active} />
                </div>

                <div className="flex flex-row md:justify-between mb-10 bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex flex-row gap-3">
                        <Button style="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" onClick={handleSaveAscii} text="💾 Save changes" />
                        <Button style="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" onClick={copyActive} text="📋 Copy" />
                    </div>
                    <div>
                        <Button style="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" onClick={reset} text="🔄 Reset" />
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use ValoAscii</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-valorant-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Select or Create</h4>
                                    <p className="text-gray-600 text-sm">Choose from existing templates or create a new ASCII art from scratch</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-valorant-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Click to Draw</h4>
                                    <p className="text-gray-600 text-sm">Click on grid cells to create your design. Hold CTRL for multi-select</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-valorant-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Save & Copy</h4>
                                    <p className="text-gray-600 text-sm">Save your creation and copy it to use in VALORANT chat or anywhere else</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-valorant-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Share & Enjoy</h4>
                                    <p className="text-gray-600 text-sm">Show off your ASCII art to friends and fellow VALORANT players</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t pt-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Popular Use Cases</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="text-2xl mb-2">🎮</div>
                                <h4 className="font-semibold text-gray-800 mb-1">Gaming Signatures</h4>
                                <p className="text-gray-600 text-sm">Create unique signatures for your gaming profiles</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="text-2xl mb-2">💬</div>
                                <h4 className="font-semibold text-gray-800 mb-1">Chat Art</h4>
                                <p className="text-gray-600 text-sm">Enhance your messages with custom ASCII designs</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="text-2xl mb-2">🏆</div>
                                <h4 className="font-semibold text-gray-800 mb-1">Team Logos</h4>
                                <p className="text-gray-600 text-sm">Design ASCII logos for your esports team</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t pt-6 mt-6">
                        <p className="text-sm text-gray-600 font-medium"> 
                            ⚠️ Our site is not affiliated with Valorant or Riot Games. 
                            <button className="font-medium underline text-valorant-red hover:text-pink-500 transition-colors duration-200" type="button" onClick={() => router.push("/mentions-legales")}> 
                                Mentions Légales 
                            </button> 
                        </p>
                    </div>
                </div>
            </div>
            <CookieConsent> This website use cookies to improve user experience.</CookieConsent>
        </div>
    );
}

export default MainPage;