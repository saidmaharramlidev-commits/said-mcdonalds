'use client'

import { footerTexts } from "@/data/data"
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import appStore from '@/public/app_store_badge_EN_black.png'
import googlePlay from '@/public/google_play_badge_EN_black.png'


import Image from "next/image";
import Link from "next/link";



function Footer() {

    const { lang } = useSelector((state: RootState) => state.counter)

    const langOfFooter = footerTexts[lang as keyof typeof footerTexts]



    return (
        <div id='mainFooter'>
            <div id="top-footer-wrapper">
                <div className="element-top-footer">
                    <h1>{langOfFooter.about[0]}</h1>
                    <Link href={'/our-history'} className="footer-link">{langOfFooter.about[1]}</Link>
                    <Link href={'/news'} className="footer-link">{langOfFooter.about[2]}</Link>
                    <Link href={'/'} className="footer-link">{langOfFooter.about[3]}</Link>
                    <Link href={'/'} className="footer-link">{langOfFooter.about[4]}</Link>

                </div>

                <div className="element-top-footer">
                    <h1>{langOfFooter.career[0]}</h1>
                    <Link href={'/apply'} className="footer-link">{langOfFooter.career[1]}</Link>


                </div>

                <div className="element-top-footer">
                    <h1>{langOfFooter.services[0]}</h1>
                    <Link href={'/'} className="footer-link">{langOfFooter.services[1]}</Link>
                    <Link href={'/mcdelivery'} className="footer-link">{langOfFooter.services[2]}</Link>
                    <Link href={'/'} className="footer-link">{langOfFooter.services[3]}</Link>
                    <Link href={'/downloadApp'} className="footer-link">{langOfFooter.services[4]}</Link>

                </div>

            </div>

            <div id="middle-footer-wrapper">
                <div id="social-media-wrapper">
                    <Link href={'https://www.facebook.com/McDonalds.az/'} className='social-media'><FaFacebook className="media-icon" /></Link>
                    <Link href={'https://www.instagram.com/mcdonalds.az/'} className='social-media'><FaInstagram className="media-icon" /></Link>
                    <Link href={'https://www.youtube.com/channel/UCVpFg6KGunp_I7TNUNIdJYw'} className='social-media'><FaYoutube className="media-icon" /></Link>
                    <Link href={"https://www.linkedin.com/showcase/mcdonald's-azerbaijan/about/"} className='social-media'><FaLinkedin className="media-icon" /></Link>

                </div>

                <div id="badge-wrapper">
                    <Link href={'https://apps.apple.com/az/app/mcdonalds/id1217507712'}><Image className="badge" alt="badge" src={appStore} /></Link>
                    <Link href={'https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&hl=az'}><Image className="badge" alt="badge" src={googlePlay} /></Link>


                </div>

            </div>

            <div id="bottom-footer-wrapper">
                <span>{langOfFooter.copyright}</span>

            </div>

        </div>
    )
}

export default Footer