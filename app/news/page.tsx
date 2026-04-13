'use client'

import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import pic from '@/public/news.png'
import Image from "next/image"
import Link from "next/link"


import mario from '@/public/marioPlc.png'
import kidMenu from '@/public/kidMenu.png'
import friend from '@/public/friend.png'
import mcCafe from '@/public/mccafe.png'


import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { moreText } from "@/data/data"
import Footer from "@/components/Footer"

const promoTexts = {
    az: {
        mario: "Super Mario həyəcanı McDonald’s-da!",
        friendsMenu: "“Friends” Menyusu artıq burada!",
        kidsParty: "Uşaq şənlikləri McDonald's restoranlarında!",
        header: "Bütün yeniliklərdən xəbərdar olun."
    },
    en: {
        mario: "Super Mario excitement at McDonald’s!",
        friendsMenu: "The “Friends” Menu is now here!",
        kidsParty: "Kids' parties at McDonald's restaurants!",
        header: 'Be informed about all our latest events.'
    },
    ru: {
        mario: "Супер Марио уже в McDonald’s!",
        friendsMenu: "Меню «Friends» уже здесь!",
        kidsParty: "Детские праздники в ресторанах McDonald's!",
        header: 'Будьте в курсе всех наших последних событий.'
    }
}

function page() {


    const { lang } = useSelector((state: RootState) => state.counter)

    const moreBtnText = moreText[lang as keyof typeof moreText]
    const newsText = promoTexts[lang as keyof typeof promoTexts]





    return (
        <div id="mainNews">
            <Navbar />
            <SectionHero text="News" pic={pic} />

            <h1 className="headerNews">{newsText.header}</h1>


            <div className="container-news">
                <div className="blogs-div news-div-wrapper">
                    <div className="blog-wrapper-about">
                        <div className="blog-img-wrapper-about">
                            <Image alt="pic" src={mario} className="blogPic" />
                        </div>
                        <h1>{newsText.mario}</h1>
                        <Link href={`/news/${1}`} className="center moreBtn-mario">{moreBtnText}</Link>

                    </div>

                    <div className="blog-wrapper-about">
                        <div className="blog-img-wrapper-about">
                            <Image alt="pic" src={kidMenu} className="blogPic" />
                        </div>
                        <h1>{newsText.kidsParty}</h1>
                        <Link href={`/news/${2}`} className="center moreBtn-mario">{moreBtnText}</Link>

                    </div>

                    <div className="blog-wrapper-about">
                        <div className="blog-img-wrapper-about">
                            <Image alt="pic" src={friend} className="blogPic" />
                        </div>
                        <h1>{newsText.friendsMenu}</h1>
                        <Link href={`/news/${3}`} className="center moreBtn-mario">{moreBtnText}</Link>

                    </div>


                    <div className="blog-wrapper-about">
                        <div className="blog-img-wrapper-about">
                            <Image alt="pic" src={mcCafe} className="blogPic" />
                        </div>
                        <h1>McCafe®</h1>
                        <Link href={`/news/${4}`} className="center moreBtn-mario">{moreBtnText}</Link>

                    </div>
                </div>
            </div>


            <Footer />

        </div>
    )
}

export default page