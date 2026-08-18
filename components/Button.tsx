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

    // Default Valorant styling if no explicit classes are passed, otherwise merge
    const baseStyle = "relative w-fit px-8 py-3 bg-valorant-red text-white font-bold uppercase tracking-widest overflow-hidden group hover:scale-105 transition-transform duration-200 border border-transparent hover:border-white/20";
    const appliedStyle = style ? style : baseStyle;

    return (
        <button 
            className={appliedStyle} 
            type="submit" 
            onClick={() => { onClick(); textAnimation() }}
        >
            {/* Angled corner effect */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-valo-dark transform translate-x-1.5 -translate-y-1.5 rotate-45 group-hover:bg-white transition-colors duration-200"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-valo-dark transform -translate-x-1.5 translate-y-1.5 rotate-45 group-hover:bg-white transition-colors duration-200"></div>
            
            <span className="relative z-10 flex items-center gap-2">
                {!afterText && text}
                {!!afterText && "✅ DONE!"}
            </span>
        </button>
    )
}

export default Button;