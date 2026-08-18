"use client";

import { useEffect, useReducer, useState } from "react";
import Canvas from "@/components/Canvas";
import Button from "@/components/Button";
import Loading from "../loading";
import { AsciiConfig, initDataTwitch } from "@/data/data";
import { EyeSlashIcon, EyeIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
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
        <div className="flex flex-col min-h-screen w-full bg-valo-dark">
            <div className="flex flex-row w-full flex-1">
                <div className={`${showSideBar ? "flex flex-col basis-full md:basis-1/4 xl:basis-1/5 p-6 bg-gray-900 border-r border-gray-800" : "hidden"}`}>
                    <div className="flex flex-row justify-between items-start mb-6 border-b border-gray-800 pb-4">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-black text-white uppercase tracking-widest mb-1">🎮 Twitch ASCII</h2>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Your Collection</p>
                        </div>

                        <button type="button" className="p-2 bg-valorant-red hover:bg-red-600 rounded-sm shadow-md transition-all duration-200" onClick={handleAddAscii}>
                            <PlusCircleIcon className="h-6 w-6 text-white" />
                        </button>
                    </div>
                    <ul className="mt-2 space-y-2 overflow-y-auto max-h-[70vh]">
                        {
                            ascii.map((el) => (
                                <li key={el.id}>
                                    <div className={`flex flex-row justify-between items-center px-4 py-3 border transition-all duration-200 ${active.id == el.id ? "bg-valorant-red/10 border-valorant-red text-white" : "bg-gray-800/50 border-gray-800 hover:border-gray-600 text-gray-400 hover:text-gray-200"}`}>
                                        <button onClick={e => setActive(el)} className="flex-1 text-left font-bold uppercase tracking-wider text-sm truncate"> {el.name} </button>
                                        <button className="ml-2 w-6 h-6 rounded-sm bg-red-500/10 hover:bg-valorant-red text-red-400 hover:text-white flex items-center justify-center transition-colors duration-200" onClick={e => handleDeletedAscii(el.id)}>
                                            <span className="text-sm font-bold">×</span>
                                        </button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col flex-1 gap-6 p-6">
                    <div className="bg-gray-900 border border-gray-800 p-6 relative group">
                        <div className="absolute top-0 right-0 w-2 h-2 bg-valorant-red"></div>
                        <div className="flex flex-row items-end lg:justify-between">
                            <div className="flex flex-row gap-6 flex-wrap">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">NAME</label>
                                    <input className="px-4 py-2 bg-gray-800 border-b-2 border-gray-700 focus:border-valorant-red focus:outline-none text-white transition-all duration-200 rounded-none w-48 font-mono" value={active.name} onChange={e => setActive({ ...active, name: e.target.value })} />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">HEIGHT (ROWS)</label>
                                    <input className="px-4 py-2 bg-gray-800 border-b-2 border-gray-700 focus:border-valorant-red focus:outline-none text-white transition-all duration-200 rounded-none w-24 font-mono text-center" type="number" min={1} max={13} value={active.height} onChange={e => setActive({ ...active, height: Number(e.target.value) })} />
                                </div>
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="hidden lg:block bg-gray-800 border border-gray-700 py-2 px-4">
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">💡 Use CTRL + Click to multi-select</p>
                                </div>
                                
                                <button onClick={toggleSideBar} className="p-2.5 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 border border-gray-700">
                                    {showSideBar ? <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-white" /> : <EyeIcon className="h-5 w-5 text-gray-400 hover:text-white" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 p-6 flex-1 overflow-auto flex items-center justify-center relative">
                        <Canvas width={WIDTH} onClick={checkColor} onMouseOver={checkHoverAndCtrl} active={active} isTwitch={true} />
                    </div>

                    <div className="flex flex-row flex-wrap md:justify-between items-center gap-4 bg-gray-900 border border-t-0 md:border-t border-gray-800 p-6 relative">
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-valorant-red"></div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <Button style="flex-1 md:flex-none uppercase tracking-widest font-bold" onClick={handleSaveAscii} text="💾 Save Changes" />
                            <Button style="flex-1 md:flex-none uppercase tracking-widest font-bold border-gray-700 bg-gray-800 hover:bg-gray-700 text-white" onClick={copyActive} text="📋 Copy" />
                        </div>
                        <div className="w-full md:w-auto">
                            <Button style="w-full md:w-auto uppercase tracking-widest font-bold border-red-900 bg-red-900/40 hover:bg-red-900/80 text-white" onClick={reset} text="🔄 Reset Grid" />
                        </div>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 p-4 text-center">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider"> 
                            ⚠️ Not affiliated with Valorant or Riot Games. <br className="md:hidden" />
                            <button className="underline text-valorant-red hover:text-red-400 transition-colors duration-200 ml-1" type="button" onClick={() => router.push("/mentions-legales")}> 
                                Mentions Légales 
                            </button> 
                        </p>
                    </div>
                </div>
            </div>
            
            <CookieConsent
                location="bottom"
                buttonText="I UNDERSTAND"
                cookieName="valorantAsciiConsent"
                style={{ background: "#0f1923", borderTop: "2px solid #ff4655", color: "#ece8e1", fontFamily: "monospace", fontSize: "14px", padding: "10px 20px" }}
                buttonStyle={{ background: "#ff4655", color: "#fff", fontSize: "13px", fontWeight: "bold", padding: "8px 16px", borderRadius: "0", cursor: "pointer", border: "1px solid #ff4655", marginLeft: "20px" }}
                expires={150}
            >
                This website uses cookies to store your creations and improve user experience.
            </CookieConsent>
        </div>
    );
}

export default TwitchAscii;