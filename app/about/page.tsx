'use client'



import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { moreText, navbarData } from "@/data"
import { aboutCards, aboutInfo } from "@/data(2)"
import pic from "@/public/meat.png"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

import loyalty from '@/public/loyalty.png'
import quiz from '@/public/quiz.png'
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"




function page() {

    const { lang } = useSelector((state: RootState) => state.counter)

    const endpoints = navbarData[lang as keyof typeof navbarData]

    const aboutText = aboutInfo[lang as keyof typeof aboutInfo]
    const aboutBlogs = aboutCards[lang as keyof typeof aboutCards]
    const moreBtnText = moreText[lang as keyof typeof moreText]



    return (
        <div id="mainAboutPage">
            <Navbar />
            <SectionHero pic={pic} text={endpoints.main.about.label} />


            <div id="about-other-wrapper">
                <h1 id="headerAbout">{aboutText.title}</h1>
                <p id="textAbout">{aboutText.text}</p>







                <div className="video-wrapper">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/_lGAZWxaWBI"
                        title="YouTube video"
                        id="about-video"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>




                <div className="blogs-div">
                    <div className="blog-wrapper-about">
                        <div className="blog-img-wrapper-about">
                            <Image alt="pic" src={loyalty} className="blogPic" />
                        </div>
                        <h1>{aboutBlogs.loyaltyTitle}</h1>
                        <p>{aboutBlogs.loyaltyDesc}</p>
                        <Link href='/commitment-to-quality' className="center moreBtn-mario">{moreBtnText}</Link>

                    </div>

                    <div className="blog-wrapper-about">
                        <div className="blog-img-wrapper-about">
                            <Image alt="pic" src={quiz} className="blogPic" />
                        </div>
                        <h1>{aboutBlogs.quizTitle}</h1>
                        <p>{aboutBlogs.quizDesc}</p>
                        <Link href='/questions' className="center moreBtn-mario">{moreBtnText}</Link>

                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default page