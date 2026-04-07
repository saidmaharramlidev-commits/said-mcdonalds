import Image from "next/image"
import { FaEarthAsia } from "react-icons/fa6";

function SectionHero({ text, pic }: {
    text: string,
    pic: any
}) {
    return (
        <div id="mainSectionHero">
            <Image className="w-full h-full object-cover sectionHeroPic" alt="picture" src={pic} />
            <p className="center sectionLabel">
                <FaEarthAsia />
                <span>{text}</span>
            </p>

        </div>
    )
}

export default SectionHero