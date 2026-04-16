'use client'


import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import pic from '@/public/makAvto.png'
import { RootState } from "@/redux/store"
import Link from "next/link"
import { useSelector } from "react-redux"

const data = {
    type: "text",
    header: {
        az: "Avtomobildən çıxmadan “McDonald’s”da xidmət",
        en: "McDonald’s Drive Thru",
        ru: "Обслуживание в «Макдоналдс» без выхода из автомобиля"
    },
    value: {
        az: "“McDonald’s”ın MakAvto xidməti avtomobildən çıxmadan sevdiyiniz yeməkləri sifariş etməyə imkan verir. Sizə ən yaxın MakAvto restoranını tapmaq və iş saatları haqqında məlumat əldə etmək üçün “McDonald’s” restoranları üzrə axtarış bölməsindən və ya mobil tətbiqdən istifadə edə bilərsiniz.",
        en: "McDonald's Drive-Thru service allows you to order your favorite meals without leaving your car. You can find the nearest Drive-Thru restaurant and check its working hours using the McDonald's restaurant locator or mobile app.",
        ru: "Сервис МакАвто от McDonald's позволяет заказывать любимые блюда, не выходя из автомобиля. Найти ближайший ресторан МакАвто и узнать часы работы можно через раздел поиска ресторанов или мобильное приложение McDonald's."
    },
    btn: {
        az: 'Məkanları tap',
        en: 'Find Locations',
        ru: 'Найти места'
    }
}

function Page() {

    const { lang } = useSelector((state: RootState) => state.counter)








    return (
        <div id="mainMakAvto" className="min-h-screen bg-white">
            <Navbar />
            <SectionHero text="MakAvto" pic={pic} />

            <div className="max-w-4xl mx-auto px-4 py-10 text-center makAvtoContent">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {data.header[lang as keyof typeof data.header]}
                </h1>

                <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                    {data.value[lang as keyof typeof data.value]}
                </p>

                <Link href="/locations">
                    <button className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-xl font-semibold text-black shadow-md">
                        {data.btn[lang as keyof typeof data.btn]}
                    </button>
                </Link>
            </div>


            <Footer />
        </div>
    )
}

export default Page