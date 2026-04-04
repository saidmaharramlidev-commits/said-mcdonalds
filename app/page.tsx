'use client'


import Navbar from "@/components/Navbar";
import Image from "next/image";
import mario from '@/public/marioPIc.jpg'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { adsText, moreText } from "@/data";
import Link from "next/link";

export default function Home() {
  const { lang } = useSelector((state: RootState) => state.counter)

  const adText = adsText[lang as keyof typeof adsText]
  const moreBtnText = moreText[lang as keyof typeof moreText]






  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <div id="mainMario-wrapper">
        <Image id="marioPic" src={mario} alt="picture" />

        <div id="white-div-mario">
          <p className="md:text-3xl sm:text-2xl font-semibold">{adText}</p>
          <Link href='/' id="moreBtn-mario" className="center">{moreBtnText}</Link>


        </div>

      </div>

    </div>
  );
}
