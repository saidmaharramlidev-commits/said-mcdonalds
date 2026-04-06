import Image from "next/image"

function SectionHero({ text, pic }: {
    text: string,
    pic: any
}) {
    return (
        <div id="mainSectionHero">
            <Image className="w-full h-full object-cover sectionHeroPic" alt="picture" src={pic} />
            <p className="center">{text}</p>

        </div>
    )
}

export default SectionHero