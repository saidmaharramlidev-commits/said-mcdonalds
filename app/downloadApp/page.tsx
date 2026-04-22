'use client'


import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { mobileAppContent } from "@/data/downloadAppData"
import pic from '@/public/mobileApp.png'
import { RootState } from "@/redux/store"
import Link from "next/link"
import { useSelector } from "react-redux"

function page() {

    const { lang } = useSelector((state: RootState) => state.counter)

    const downloadAppText = mobileAppContent[lang as keyof typeof mobileAppContent]
    return (
        <div id='mainDownloadApp'>
            <Navbar />
            <SectionHero text="Mobile App" pic={pic} />

            <div className="container-downloadApp">
                <h1>{downloadAppText.header}</h1>
                <p>{downloadAppText.description}</p>

                <div className="download-buttons">
                    <Link href={'https://apps.apple.com/az/app/mcdonalds/id1217507712'} className="store-btn ios">iOS</Link>
                    <Link href={'https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&hl=en'} className="store-btn android">Android</Link>
                </div>


            </div>

            <Footer />

        </div>
    )
}

export default page