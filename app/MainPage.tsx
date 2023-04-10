"use client";

import { useEffect, useReducer, useState } from "react";
import Canvas from "@/components/Canvas";
import Button from "@/components/Button";
import Loading from "./loading";
import { AsciiConfig, initData } from "@/data/data";
import { EyeSlashIcon, EyeIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/solid'

const WIDTH: number = 26;
const LOCAL_STORAGE: string = "ascii";
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

const MainPage = () => {
    const [loading, setLoading] = useState(true);
    const [showSideBar, setShowSideBar] = useState(true);
    const [active, setActive] = useState(initData[0]);
    const [ascii, dispatch] = useReducer(asciiReducer, initData);

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
        <div className="flex flex-col">
            <div className={`${showSideBar ? "flex flex-col basis-full 2xl:basis-1/5 p-4" : "hidden"}`}>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <p className="text-2xl font-medium"> My Ascii</p>
                        <p className="text-sm font-light text-gray-400"> Your saved arts!</p>
                    </div>

                    <button type="button" className="my-1" onClick={handleAddAscii}>
                        <PlusCircleIcon className="h-10 w-10 text-red-400" />
                    </button>
                </div>
                <ul className="mt-4">
                    {
                        ascii.map((el) => (
                            <li key={el.id}>
                                <div className={`flex flex-row justify-between px-2 ${active.id == el.id ? "bg-valorant-red text-white font-semibold" : "bg-transparent"}`}>
                                    <button onClick={e => setActive(el)}> {el.name} </button>
                                    <button className="text-center text-xl font-extrabold text-gray-400 hover:text-gray-500 px-2" onClick={e => handleDeletedAscii(el.id)}> - </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-row items-end lg:justify-between">
                    <div className="flex flex-row gap-4">
                        <div>
                            <p className="text-sm tracking-wider text-gray-500 mb-1"> NAME </p>
                            <input className="p-1.5 rounded border border-gray-300" value={active.name} onChange={e => setActive({ ...active, name: e.target.value })} />
                        </div>

                        <div>
                            <p className="text-sm tracking-wider text-gray-500 mb-1"> HEIGHT</p>
                            <input className="p-1.5 rounded border border-gray-300" type="number" min={1} max={13} value={active.height} onChange={e => setActive({ ...active, height: Number(e.target.value) })} />
                        </div>
                    </div>

                    <button onClick={toggleSideBar} className="text-xl text-slate-400 flex p-2 mt-2">
                        {showSideBar && <EyeSlashIcon className="h-6 w-6 text-valorant-red" />}
                        {!showSideBar && <EyeIcon className="h-6 w-6 text-valorant-red" />}
                    </button>

                    <div className="h-fit bg-red-400 rounded py-1 px-2 ml-2 hidden lg:block">
                        <p className="text-sm text-white font-medium"> Use the CTRL key to select multiple cells at once </p>
                    </div>

                </div>

                <Canvas width={WIDTH} onClick={checkColor} onMouseOver={checkHoverAndCtrl} active={active} />

                <div className="flex flew-row md:justify-between">
                    <div className="flex flex-row gap-2">
                        <Button style="bg-green-500 hover:bg-green-600" onClick={handleSaveAscii} text="Save changes" />
                        <Button style="bg-gray-400 hover:bg-gray-500" onClick={copyActive} text="Copy" />
                    </div>
                    <Button style="ml-2 bg-red-400 hover:bg-red-500" onClick={reset} text="Reset" />
                </div>

            </div>
        </div>
    );
}

export default MainPage;