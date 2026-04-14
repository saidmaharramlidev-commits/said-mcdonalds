'use client'


import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import pic from '@/public/values/valuesPic.png'
import { betterWayContent, content } from "@/data/valuesData"
import Link from "next/link"
import Image from "next/image"



import quality from '@/public/values/qualityMeal.png'
import environment from '@/public/values/environment.png'
import support from '@/public/values/support.png'
import { moreText } from "@/data/data"
import Footer from "@/components/Footer"


function page() {

    const { lang } = useSelector((state: RootState) => state.counter)


    const heroText = {
        az: 'Dəyərlərimiz',
        en: 'Our Values',
        ru: "наши ценности"
    }


    const moreBtnText = moreText[lang as keyof typeof moreText]






    return (
        <div id="mainValues">
            <Navbar />

            <SectionHero text={heroText[lang as keyof typeof heroText]} pic={pic} />

            <div className='values-content-wrapper'>
                <h1 className="header-values">{betterWayContent[lang as keyof typeof betterWayContent].header}</h1>

                <p className="text-values">{betterWayContent[lang as keyof typeof betterWayContent].text}</p>





                <div className="container-news">
                    <div className="blogs-div news-div-wrapper">
                        <div className="blog-wrapper-about flex flex-col items-center values-blog-wrapper">
                            <div className="blog-img-wrapper-about">
                                <Image alt="pic" src={quality} className="blogPic" />
                            </div>
                            <h1>{content.header[0][lang as keyof typeof content.header[0]]}</h1>
                            <p>{content.text[0][lang as keyof typeof content.text[0]]}</p>
                            <Link href={`/values/${1}`} className="center moreBtn-mario">{moreBtnText}</Link>

                        </div>

                        <div className="blog-wrapper-about flex-col items-center values-blog-wrapper">
                            <div className="blog-img-wrapper-about">
                                <Image alt="pic" src={environment} className="blogPic" />
                            </div>
                            <h1>{content.header[1][lang as keyof typeof content.header[1]]}</h1>
                            <p>{content.text[1][lang as keyof typeof content.text[1]]}</p>
                            <Link href={`/values/${2}`} className="center moreBtn-mario">{moreBtnText}</Link>

                        </div>

                        <div className="blog-wrapper-about flex-col items-center values-blog-wrapper">
                            <div className="blog-img-wrapper-about">
                                <Image alt="pic" src={support} className="blogPic" />
                            </div>
                            <h1>{content.header[2][lang as keyof typeof content.header[2]]}</h1>
                            <p>{content.text[2][lang as keyof typeof content.text[2]]}</p>
                            <Link href={`/values/${3}`} className="center moreBtn-mario">{moreBtnText}</Link>

                        </div>

                    </div>
                </div>










            </div>

            <Footer />

        </div>
    )
}

export default page