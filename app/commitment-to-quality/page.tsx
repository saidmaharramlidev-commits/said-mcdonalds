'use client'

import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { qualityData } from "@/data/qualityData"
import pic from '@/public/loyalty.png'
import { RootState } from "@/redux/store"
import Image from "next/image"
import { useSelector } from "react-redux"

import quality1 from '@/public/quality1.png'
import quality2 from '@/public/quality2.png'
import quality3 from '@/public/quality3.png'
import quality4 from '@/public/quality4.png'
import Footer from "@/components/Footer"

function page() {

    const { lang } = useSelector((state: RootState) => state.counter)



    return (

        <div id="mainCommitment">
            <Navbar />
            <SectionHero text="Quality" pic={pic} />


            <div className="quality-wrapper">
                <h1 className="quality-header">{qualityData[0][lang as keyof typeof qualityData[0]].question}</h1>
                <p className="quality-answer">{qualityData[0][lang as keyof typeof qualityData[0]].answer}</p>



                <div className="quality-blog-wrapper">
                    <div className="quality-blog">
                        <Image className="quality-img" src={quality1} alt="quality" />
                        <h1>{qualityData[1][lang as keyof typeof qualityData[1]].question}</h1>
                        <p>{qualityData[1][lang as keyof typeof qualityData[1]].answer}</p>
                    </div>

                    <div className="quality-blog">
                        <Image className="quality-img" src={quality2} alt="quality" />
                        <h1>{qualityData[2][lang as keyof typeof qualityData[2]].question}</h1>
                        <p>{qualityData[2][lang as keyof typeof qualityData[2]].answer}</p>
                    </div>

                    <div className="quality-blog">
                        <Image className="quality-img" src={quality3} alt="quality" />
                        <h1>{qualityData[3][lang as keyof typeof qualityData[3]].question}</h1>
                        <p>{qualityData[3][lang as keyof typeof qualityData[3]].answer}</p>
                    </div>

                    <div className="quality-blog">
                        <Image className="quality-img" src={quality4} alt="quality" />
                        <h1>{qualityData[4][lang as keyof typeof qualityData[4]].question}</h1>
                        <p>{qualityData[4][lang as keyof typeof qualityData[4]].answer}</p>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default page