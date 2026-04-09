'use client'


import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import { navbarData } from "@/data/data"
import pic from '@/public/eletter.png'
import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

function page() {

    const newsletterText = {
        az: {
            title: "Yeniliklərdən xəbərdar olun",
            description: "Eksklüziv təkliflər və son xəbərləri birbaşa e-poçtunuza alın.",
            firstName: "Ad",
            lastName: "Soyad",
            email: "E-poçt ünvanı",
            button: "Abunə ol"
        },
        en: {
            title: "Stay Updated",
            description: "Get exclusive offers and latest news straight to your inbox.",
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email Address",
            button: "Subscribe"
        },
        ru: {
            title: "Будьте в курсе",
            description: "Получайте эксклюзивные предложения и последние новости прямо на почту.",
            firstName: "Имя",
            lastName: "Фамилия",
            email: "Электронная почта",
            button: "Подписаться"
        }
    };

    const { lang } = useSelector((state: RootState) => state.counter)

    const heroText = navbarData[lang as keyof typeof navbarData]

    const formText = newsletterText[lang as keyof typeof newsletterText]



    return (
        <div id="main-subscriptionPage">
            <Navbar />
            <SectionHero text={heroText.top.subscribe.label} pic={pic} />



            <section className="newsletter">
                <div className="container">
                    <h2>{formText.title}</h2>
                    <p>{formText.description}</p>

                    <form className="form">
                        <div className="input-group">
                            <input type="text" required />
                            <label>{formText.firstName}</label>
                        </div>

                        <div className="input-group">
                            <input type="text" required />
                            <label>{formText.lastName}</label>
                        </div>

                        <div className="input-group">
                            <input type="email" required />
                            <label>{formText.email}</label>
                        </div>

                        <button type="submit">{formText.button}</button>
                    </form>
                </div>
            </section>


            <Footer />


        </div>
    )
}

export default page