const Canvas = (props: any) => {
    const { width, onClick, onMouseOver, active, isTwitch = false } = props;

    const createCanvas = () => {
        let content = [];
        for (let i = 0; i < active.height; i++) {
            content.push(<div className="flex flew-row" key={i}> {createLine(i)} </div>);
        }

        return content;
    }

    const createLine = (pos: number) => {
        let content = [];
        for (let i: number = 0; i < width; i++) {
            let curr = (pos * width) + i
            content.push(
                <button 
                    key={i}
                    onMouseOver={e => { onMouseOver(e, pos, i) }} 
                    onClick={() => onClick(pos, i)} 
                    className={`
                        ${active.positions.indexOf(curr) == -1 ? 'bg-gray-800 hover:bg-gray-700' : 'bg-valorant-red hover:bg-pink-600'} 
                        w-1/2 pb-1/2 border border-gray-700 transition-colors duration-100 ${!isTwitch ? 'p-5 2xl:p-7' : 'p-4'}
                    `} 
                />
            )
        }

        return content;
    }

    return (
        <div>
            {createCanvas()}
        </div>
    )
}

export default Canvas;