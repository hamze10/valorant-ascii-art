const Canvas = (props: any) => {
    const { width, onClick, onMouseOver, active } = props;

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
                <button onMouseOver={e => { onMouseOver(e, pos, i) }} className={`${active.positions.indexOf(curr) == -1 ? 'bg-gray-300' : 'bg-white'} w-1/2 pb-1/2 border border-gray-500 shadow-md p-5 2xl:p-7`} onClick={() => onClick(pos, i)} key={i} />
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