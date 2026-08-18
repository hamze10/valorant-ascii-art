import AsciiGenerator from "./AsciiGenerator";

export const metadata = {
    title: 'Text to ASCII Generator — Valorant ASCII Art',
    description: 'Convert your name or clan tag into massive ASCII text art for Valorant chat. Pick from multiple fonts and copy the result instantly.',
};

export default function TextToAsciiPage() {
    return <AsciiGenerator />;
}