const LoadingSkeleton = () => {
    const width = 26
    const fakeLi = () => {
        let content = []
        for (let i = 0; i < 5; i++) {
            content.push(
                <li key={i} className="bg-gray-800 mb-2 rounded-md">
                    <div className="flex flex-row justify-between px-2 bg-transparent border-none">
                        <button className="h-6 w-32 bg-gray-700 rounded m-2 animate-pulse"></button>
                        <button className="text-center text-xl font-extrabold text-gray-700 px-2 animate-pulse"> - </button>
                    </div>
                </li>
            )
        }
        return content;
    }

    const fakeCreateCanvas = () => {
        let content = [];
        for (let i = 0; i < 7; i++) {
            content.push(<div className="flex flex-row" key={i}> {fakeCreateLine(i)} </div>);
        }
        return content;
    }

    const fakeCreateLine = (pos: number) => {
        let content = [];
        for (let i: number = 0; i < width; i++) {
            content.push(
                <div className="bg-gray-800 w-1/2 pb-1/2 border border-gray-700 p-6 m-0.5 rounded-sm" key={i} />
            )
        }
        return content;
    }

    return (
        <div className="flex flex-row flex-wrap md:flex-nowrap bg-valo-dark min-h-screen">
            <div className="basis-full md:basis-1/4 p-6 border-r border-gray-800 bg-gray-900/50">
                <div className="flex flex-row justify-between mb-8">
                    <div className="flex flex-col gap-2">
                        <div className="h-8 w-32 bg-gray-800 rounded animate-pulse"></div>
                        <div className="h-4 w-24 bg-gray-800 rounded animate-pulse"></div>
                    </div>
                    <div className="h-10 w-10 bg-gray-800 rounded-lg animate-pulse"></div>
                </div>
                <ul className="mt-4">
                    {fakeLi()}
                </ul>
            </div>
            
            <div className="flex flex-col gap-6 basis-full p-6 lg:p-10">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl">
                    <div className="flex flex-row gap-6 mb-4">
                        <div className="w-64 h-12 bg-gray-800 rounded animate-pulse"></div>
                        <div className="w-32 h-12 bg-gray-800 rounded animate-pulse"></div>
                        <div className="w-12 h-12 bg-gray-800 rounded animate-pulse ml-auto"></div>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl overflow-x-auto text-center w-fit mx-auto animate-pulse">
                    {fakeCreateCanvas()}
                </div>
                
                <div className="flex flex-row justify-between bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl">
                    <div className="flex gap-4">
                        <div className="w-32 h-12 bg-gray-800 rounded animate-pulse"></div>
                        <div className="w-24 h-12 bg-gray-800 rounded animate-pulse"></div>
                    </div>
                    <div className="w-24 h-12 bg-gray-800 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default function Loading() {
    return <LoadingSkeleton />
}