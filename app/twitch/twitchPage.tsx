"use client";

import { useEffect, useReducer, useState } from "react";
import Canvas from "@/components/Canvas";
import Button from "@/components/Button";
import Loading from "../loading";
import { AsciiConfig, initDataTwitch } from "@/data/data";
import { EyeSlashIcon, EyeIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/solid'
import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/navigation";

const WIDTH: number = 32;
const LOCAL_STORAGE: string = "ascii-twitch";
const GRAY_CHAR: string = "░";
const WHITE_CHAR: string = "█";

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

const TwitchAscii = () => {
    const [loading, setLoading] = useState(true);
    const [showSideBar, setShowSideBar] = useState(true);
    const [active, setActive] = useState(initDataTwitch[0]);
    const [ascii, dispatch] = useReducer(asciiReducer, initDataTwitch);
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
            <div className={`${showSideBar ? "flex flex-col basis-full 2xl:basis-1/5 p-6 bg-white shadow-xl rounded-r-2xl" : "hidden"}`}>
                <div className="flex flex-row justify-between items-start">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"> 🎮 Twitch PC Ascii</h2>
                        <p className="text-sm text-gray-500 font-medium"> Your Twitch artwork collection</p>
                    </div>

                    <button type="button" className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" onClick={handleAddAscii}>
                        <PlusCircleIcon className="h-6 w-6 text-white" />
                    </button>
                </div>
                <ul className="mt-6 space-y-2">
                    {
                        ascii.map((el) => (
                            <li key={el.id}>
                                <div className={`flex flex-row justify-between items-center px-4 py-3 rounded-lg transition-all duration-200 ${active.id == el.id ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" : "bg-gray-50 hover:bg-gray-100"}`}>
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
                                <input className="px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 shadow-sm" value={active.name} onChange={e => setActive({ ...active, name: e.target.value })} />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide"> HEIGHT</label>
                                <input className="px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 shadow-sm" type="number" min={1} max={13} value={active.height} onChange={e => setActive({ ...active, height: Number(e.target.value) })} />
                            </div>
                        </div>

                        <button onClick={toggleSideBar} className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 ml-4">
                            {showSideBar && <EyeSlashIcon className="h-5 w-5 text-purple-500" />}
                            {!showSideBar && <EyeIcon className="h-5 w-5 text-purple-500" />}
                        </button>

                        <div className="ml-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg py-2 px-4 hidden lg:block">
                            <p className="text-sm text-white font-medium"> 💡 Use CTRL + Click to select multiple cells </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <Canvas width={WIDTH} onClick={checkColor} onMouseOver={checkHoverAndCtrl} active={active} isTwitch={true} />
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
                    <p className="text-sm text-gray-600 font-medium"> 
                        ⚠️ Our site is not affiliated with Valorant or Riot Games. 
                        <button className="font-medium underline text-purple-500 hover:text-pink-500 transition-colors duration-200" type="button" onClick={() => router.push("/mentions-legales")}> 
                            Mentions Légales 
                        </button> 
                    </p>
                </div>
            </div>
            <CookieConsent> This website use cookies to improve user experience.</CookieConsent>
        </div>
    );
}

export default TwitchAscii;