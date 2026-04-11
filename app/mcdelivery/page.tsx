'use client'


import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { navbarData } from "@/data/data"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import pic from '@/public/delivery.png'
import { mcdeliveryContent, mcdeliveryPartners } from "@/data/mcdeliveryData"
import wolt from '@/public/wolt.png'
import bolt from '@/public/bolt.png'
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

function page() {

    const { lang } = useSelector((state: RootState) => state.counter)

    const heroText = navbarData[lang as keyof typeof navbarData]
    const deliveryTexts = mcdeliveryContent[lang as keyof typeof mcdeliveryContent]
    const partnersText = mcdeliveryPartners[lang as keyof typeof mcdeliveryPartners]

    return (
        <div id="mainMcdelivery">
            <Navbar />
            <SectionHero text='Mcdelivery' pic={pic} />

            <div className="container-delivery">
                <h2>{deliveryTexts.header}</h2>
                <p>{deliveryTexts.description}</p>
                <p>{deliveryTexts.note}</p>
                <p>{deliveryTexts.actionTitle}</p>
                <p>{deliveryTexts.actionDescription}</p>





                <div className="wolt-bolt-wrapper">
                    <div className="delivery-company">
                        <Image className="company-pic" src={wolt} alt="company" />
                        <h3>{partnersText.wolt.title}</h3>
                        <p>{partnersText.wolt.description}</p>
                        <Link target="_blank" href='https://wolt.com/az/search?q=mcdonalds&target=venues' className="center moreBtn-mario partnersBtn">{partnersText.wolt.button}</Link>



                    </div>
                    <div className="delivery-company">
                        <Image className="company-pic" src={bolt} alt="company" />
                        <h3>{partnersText.bolt.title}</h3>
                        <p>{partnersText.bolt.description}</p>
                        <Link target="_blank" href='https://food.bolt.eu/en/' className="center moreBtn-mario partnersBtn">{partnersText.bolt.button}</Link>


                    </div>

                </div>




            </div>
            <Footer />




        </div>
    )
}

export default page