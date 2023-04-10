const LoadingSkeleton = () => {
    const width = 26
    const fakeLi = () => {
        let content = []
        for (let i = 0; i < 5; i++) {
            content.push(
                <li key={i} className="bg-gray-300 mb-2 rounded-md">
                    <div className="flex flex-row justify-between px-2bg-transparent border-none shadow-lg">
                        <button>  </button>
                        <button className="text-center text-xl font-extrabold text-gray-300 px-2"> - </button>
                    </div>
                </li>
            )
        }
        return content;
    }

    const fakeCreateCanvas = () => {
        let content = [];
        for (let i = 0; i < 7; i++) {
            content.push(<div className="flex flew-row" key={i}> {fakeCreateLine(i)} </div>);
        }

        return content;
    }

    const fakeCreateLine = (pos: number) => {
        let content = [];
        for (let i: number = 0; i < width; i++) {
            content.push(
                <button className="bg-gray-300 w-1/2 pb-1/2 border border-gray-400 shadow-md p-6" key={i} />
            )
        }

        return content;
    }

    return (
        <div className="flex flex-row flex-wrap md:flex-nowrap">
            <div className="basis-full md:basis-1/4 p-4 border-r-2 border-slate-200">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <p className="text-2xl font-medium"> My Ascii</p>
                        <p className="text-sm font-light text-gray-400"> Your saved arts!</p>
                    </div>

                    <button type="button" className="w-fit h-fit">
                        <span className="text-center text-3xl font-bold text-gray-400 hover:text-gray-500 px-2"> + </span>
                    </button>
                </div>
                <ul className="mt-4 animate-pulse">
                    {fakeLi()}
                </ul>
            </div>
            <div className="flex flex-col gap-4 basis-full p-4">
                <div className="flex flex-row gap-4">
                    <div>
                        <p className="text-sm tracking-wider bg-gray-300 text-gray-300 mb-1 animate-pulse rounded shadow-lg"> NAME </p>
                        <input className="p-1.5 rounded border border-gray-300 bg-gray-300 animate-pulse shadow-lg" />
                    </div>

                    <div>
                        <p className="text-sm tracking-wider bg-gray-300 text-gray-300 mb-1 animate-pulse rounded shadow-lg"> HEIGHT</p>
                        <input className="p-1.5 rounded border border-gray-300 bg-gray-300 animate-pulse shadow-lg" type="number" min={1} max={13} />
                    </div>
                </div>

                <div className="animate-pulse">
                    {fakeCreateCanvas()}
                </div>
            </div>
        </div>
    )
}

export default function Loading() {
    return <LoadingSkeleton />
}