'use client'

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { newsData } from "@/data/newsData"
import { RootState } from "@/redux/store"
import { ParamValue } from "next/dist/server/request/params"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useSelector } from "react-redux"

function renderNewsContent(id: ParamValue, data: any, lang: string) {

    switch (id) {

        case "1":
            return (
                <>
                    <p className="mt-10">
                        {data.content[0].value[lang]}
                    </p>

                    <Image
                        src={data.content[1].value}
                        alt="img"
                        className="marioToys-img"
                    />

                    <Image
                        src={data.content[2].value}
                        alt="img"
                        className="marioToys-img"
                    />
                </>
            )

        case "2":
            return (
                <>
                    <p className="mt-10">
                        {data.content[0].value[lang]}
                    </p>
                    <Image className="friendMenu-pic" src={data.content[4].value} alt="img" />
                    <p className="mt-10">
                        {data.content[1].value[lang]}
                    </p>

                    <Image className="friendMenu-pic" src={data.content[5].value} alt="img" />
                    <p className="mt-10">
                        {data.content[2].value[lang]}
                    </p>
                    <Image className="friendMenu-pic" src={data.content[6].value} alt="img" />
                    <p className="mt-10">
                        {data.content[3].value[lang]}
                    </p>



                </>
            )

        case "3":
            return (
                <>
                    <h1 className="event-dates-news">{data.content[0].value[lang].date}</h1>

                    <p className="events-news">{data.content[0].value[lang].events}</p>

                    <p className="ending-text-news">{data.content[0].value[lang].endingText}</p>



                </>
            )

        case "4":
            return (
                <>
                    <div className="mcCafeTopTexts">
                        <p className="my-5">{data.content[0].value[lang]}</p>
                        <p className="my-5">{data.content[1].value[lang]}</p>
                        <strong className="my-5">{data.content[2].value[lang]}</strong>
                        <p className="my-5 mb-15">{data.content[3].value[lang]}</p>
                    </div>



                    {data.content[4].value[lang].map((element: any, index: any) => (
                        <div key={index} className="locationsOfMcCafe my-10">
                            <strong>{index + 1}.{element.name}</strong>
                            <p>{element.address}</p>
                            <p><strong>DineIn:</strong> {element.dineIn}</p>
                        </div>
                    ))}


                </>
            )

    }
}

function Page() {

    const { lang } = useSelector((state: RootState) => state.counter)
    const params = useParams()

    const id = params.id
    const data = newsData[Number(id) as keyof typeof newsData]

    if (!data) return <div>Not found</div>

    return (
        <div id="mainNewsId">

            <Navbar />

            <SectionHero
                pic={data.pic}
                text={data.heroText[lang as keyof typeof data.heroText]}
            />

            <div className="container-news">
                {renderNewsContent(id, data, lang)}
            </div>

            <Footer />

        </div>
    )
}

export default Page