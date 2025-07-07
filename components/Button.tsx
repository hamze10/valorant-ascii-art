import { useState } from "react";

const Button = (props: any) => {
    const { style, onClick, text } = props;
    const [afterText, setAfterText] = useState(false)

    const textAnimation = () => {
        setAfterText(true)
        setTimeout(() => {
            setAfterText(false)
        }, 2000)
    }

    return (
        <button className={`w-fit px-6 py-3 border-none rounded-lg font-semibold text-white text-sm tracking-wide ${style}`} type="submit" onClick={() => { onClick(); textAnimation() }}>
            <span className="flex items-center gap-2">
                {
                    !afterText && text
                }
                {
                    !!afterText && "✅ Done!"
                }
            </span>
        </button>
    )
}

export default Button;