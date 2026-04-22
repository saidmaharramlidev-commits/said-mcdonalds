'use client'


import Navbar from "@/components/Navbar";
import Image from "next/image";
import mario from '@/public/marioPlc.png'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { adsText, cardTexts, moreText, sectionTexts } from "@/data/data";
import Link from "next/link";

import delivery from '@/public/delivery.png'
import mobileApp from '@/public/mobileApp.png'

import family from '@/public/family.png'
import eLetter from '@/public/eletter.png'
import meat from '@/public/meat.png'
import Footer from "@/components/Footer";






export default function Home() {
  const { lang } = useSelector((state: RootState) => state.counter)

  const adText = adsText[lang as keyof typeof adsText]
  const moreBtnText = moreText[lang as keyof typeof moreText]
  const cardText = cardTexts[lang as keyof typeof moreText]


  const sectionLang = sectionTexts[lang as keyof typeof sectionTexts]






  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <div id="mainMario-wrapper">
        <Image id="marioPic" src={mario} alt="picture" />

        <div id="white-div-mario">
          <p className="md:text-3xl sm:text-2xl font-semibold">{adText}</p>
          <Link href='/news/1' className="center moreBtn-mario">{moreBtnText}</Link>


        </div>

      </div>



      <div id='otherPartsHome'>

        <div className="other-wrapper">
          <div className="left-other">
            <Image className="w-full h-full object-cover rounded-2xl hover:transform hover:scale-103 transition-all" alt="pic" src={delivery} />

          </div>

          <div className="right-other">
            <h1>{sectionLang.deliveryTitle}</h1>
            <p>{sectionLang.deliveryDesc}</p>

            <Link href='/mcdelivery' className="center moreBtn-mario">{moreBtnText}</Link>
          </div>

        </div>

        <div className="other-wrapper" id="mobileApp-wrapper">


          <div className="right-other">
            <h1>{sectionLang.appTitle}</h1>
            <p>{sectionLang.appDesc}</p>

            <Link href='/downloadApp' className="center moreBtn-mario">{moreBtnText}</Link>

          </div>

          <div className="left-other">
            <Image className="w-full h-full object-cover rounded-2xl hover:transform hover:scale-103 transition-all" alt="pic" src={mobileApp} />

          </div>

        </div>



      </div>



      <div id='blogs-wrapper-home'>
        <div className="blog-wrapper">
          <div className="blog-img-wrapper">
            <Image alt="pic" src={eLetter} className="blogPic" />
          </div>
          <h1>{cardText.subscribeTitle}</h1>
          <p>{cardText.subscribeDesc}</p>
          <Link href='/subscription' className="center moreBtn-mario">{moreBtnText}</Link>

        </div>

        <div className="blog-wrapper">
          <div className="blog-img-wrapper">
            <Image alt="pic" src={family} className="blogPic" />
          </div>
          <h1>{cardText.joinTitle}</h1>
          <p>{cardText.joinDesc}</p>
          <Link href='/career' className="center moreBtn-mario">{moreBtnText}</Link>

        </div>

        <div className="blog-wrapper">
          <div className="blog-img-wrapper">
            <Image alt="pic" src={meat} className="blogPic" />
          </div>
          <h1>{cardText.qualityTitle}</h1>
          <p>{cardText.qualityDesc}</p>
          <Link href='/about' className="center moreBtn-mario">{moreBtnText}</Link>

        </div>


      </div>

      <Footer />



    </div>
  );
}
