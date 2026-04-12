'use client'

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ourHistoryTexts } from "@/data/historyData"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"




function page() {

    const pageHeader = {
        az: "Tariximiz",
        en: "Our History",
        ru: "Наша история"
    }

    const { lang } = useSelector((state: RootState) => state.counter)

    const historyTexts = ourHistoryTexts[lang as keyof typeof ourHistoryTexts]
    const header = pageHeader[lang as keyof typeof pageHeader]



    return (
        <div id="mainOurHistory">

            <Navbar />

            <div className="container-history">
                <h1 className="historyPage-header">{header}</h1>
                {historyTexts.sections.map((section, index) => (
                    <div className="history-sections" key={index} >
                        <h1>{section.header}</h1>
                        <p>{section.text}</p>
                    </div>
                ))}

            </div>

            <Footer />

        </div>
    )
}

export default page