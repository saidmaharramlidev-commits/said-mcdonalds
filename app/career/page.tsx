'use client'

import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { navbarData } from "@/data/data"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import pic from '@/public/family.png'
import { careerText } from "@/data/careerData"
import Link from "next/link"
import Footer from "@/components/Footer"

function page() {



    const { lang } = useSelector((state: RootState) => state.counter)



    const heroText = navbarData[lang as keyof typeof navbarData]
    const careerLabels = careerText[lang as keyof typeof careerText]






    return (
        <div id="mainCarerr">
            <Navbar />
            <SectionHero text={heroText.top.career.label} pic={pic} />

            <div id="container-career">
                <h1>{careerLabels.title}</h1>
                <p className="subtitle">{careerLabels.subtitle}</p>

                <div className="text-block">
                    <span>{careerLabels.description}</span>
                    <span>{careerLabels.description2}</span>
                    <span>{careerLabels.description3}</span>
                </div>

                <div className="actions">
                    <div className="action-item">
                        <h2>{careerLabels.applyText}</h2>
                        <Link href="/apply">
                            <button className="primary-btn">{careerLabels.applyBtn}</button>
                        </Link>
                    </div>

                    <div className="action-item">
                        <h2>{careerLabels.jobDesc}</h2>
                        <a href="/files/HR_Jobdescription_AZ.pdf" download>
                            <button className="secondary-btn">{careerLabels.downloadBtn}</button>
                        </a>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    )
}

export default page