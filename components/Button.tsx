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
        <button className={`w-fit shadow-lg px-4 py-1.5 border-2 border-none rounded-md ${style}`} type="submit" onClick={() => { onClick(); textAnimation() }}>
            <span className="text-base font-semibold text-white">
                {
                    !afterText && text
                }
                {
                    !!afterText && "Done!"
                }
            </span>
        </button>
    )
}

export default Button;