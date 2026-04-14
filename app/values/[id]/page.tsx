'use client'


import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { valuesIdData } from "@/data/valuesData"
import { RootState } from "@/redux/store"
import { ParamValue } from "next/dist/server/request/params"
import { useParams } from "next/navigation"
import { useSelector } from "react-redux"






function renderNewsContent(id: ParamValue, data: any, lang: string) {

    switch (id) {

        case "1":
            return (
                <>
                    <p className="mt-10 qualityFirstText">
                        {data.content[0].value[lang]}
                    </p>


                    <div className="text-wrapper-values">
                        <h1>{data.content[1].header[lang]}</h1>

                        <p>{data.content[1].value[lang]}</p>
                    </div>



                    <div className="text-wrapper-values">
                        <h1>{data.content[2].header[lang]}</h1>

                        <p>{data.content[2].value[lang]}</p>
                    </div>



                    <div className="text-wrapper-values">
                        <h1>{data.content[3].header[lang]}</h1>

                        <p>{data.content[3].value[lang]}</p>
                    </div>



                    <div className="text-wrapper-values">
                        <h1>{data.content[4].header[lang]}</h1>

                        <p>{data.content[4].value[lang]}</p>
                    </div>



                    <div className="text-wrapper-values">
                        <h1>{data.content[5].header[lang]}</h1>

                        <p>{data.content[5].value[lang]}</p>
                    </div>


                </>
            )



    }
}





















function page() {

    const { lang } = useSelector((state: RootState) => state.counter)

    const params = useParams()

    const id = params.id
    const data = valuesIdData[Number(id) as keyof typeof valuesIdData]

    if (!data) return <div>Not found</div>






    return (
        <div id='mainValuesId'>

            <Navbar />

            <SectionHero text={data.heroText[lang as keyof typeof data.heroText]} pic={data.pic} />

            <div className="container-news">
                {renderNewsContent(id, data, lang)}
            </div>

            <Footer />

        </div>
    )
}

export default page