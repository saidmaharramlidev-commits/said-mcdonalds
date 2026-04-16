'use client'


import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionHero from "@/components/SectionHero"
import pic from '@/public/wifi.png'
import { useState } from "react"




const data = {
    header: {
        az: "Pulsuz Wi-Fi haqqında suallar",
        en: "Free Wi-Fi FAQs",
        ru: "Часто задаваемые вопросы о бесплатном Wi-Fi"
    },
    content: [
        {
            header: {
                az: "Pulsuz Wi-Fi xidməti",
                en: "Free Wi-Fi service",
                ru: "Бесплатный Wi-Fi"
            },
            value: {
                az: "Sevdiyiniz yeməklə birlikdə pulsuz Wi-Fi-dan istifadə edə bilərsiniz. Restoranlarımızda noutbuk və ya mobil cihazlar vasitəsilə internetə qoşularaq işləyə, e-poçtlarınızı yoxlaya və ya dostlarınızla əlaqə saxlaya bilərsiniz.",
                en: "Enjoy free Wi-Fi with your favorite meal. You can use it to work, check your email, or connect with friends using your laptop or mobile device at our restaurants.",
                ru: "Наслаждайтесь бесплатным Wi-Fi вместе с любимой едой. Вы можете работать, проверять электронную почту или общаться с друзьями, используя ноутбук или мобильные устройства в наших ресторанах."
            }
        },
        {
            header: {
                az: "McDonald’s Wi-Fi-a necə qoşulmaq olar?",
                en: "How do I connect to McDonald's Wi-Fi?",
                ru: "Как подключиться к Wi-Fi McDonald's?"
            },
            value: {
                az: "McDonald’s restoranının Wi-Fi şəbəkəsinə yaxın olduqda cihazınızın Wi-Fi ayarlarına daxil olaraq şəbəkəni seçin və qoşulun.",
                en: "When you are within range of a McDonald's restaurant, open your device’s Wi-Fi settings, select the network, and connect.",
                ru: "Когда вы находитесь в зоне действия Wi-Fi ресторана McDonald's, откройте настройки Wi-Fi на вашем устройстве, выберите сеть и подключитесь."
            }
        },
        {
            header: {
                az: "Qoşulmaq üçün hesab lazımdır?",
                en: "Do I need a login to access Wi-Fi?",
                ru: "Нужна ли регистрация для доступа к Wi-Fi?"
            },
            value: {
                az: "Xeyr, xüsusi hesab tələb olunmur. Qoşulmaq üçün sadəcə istifadə şərtlərini qəbul etməyiniz kifayətdir.",
                en: "No, you do not need a special login. Simply accept the terms of use to connect.",
                ru: "Нет, специальная регистрация не требуется. Просто примите условия использования для подключения."
            }
        },
        {
            header: {
                az: "Bütün restoranlarda Wi-Fi varmı?",
                en: "Do all restaurants have free Wi-Fi?",
                ru: "Есть ли Wi-Fi во всех ресторанах?"
            },
            value: {
                az: "Bəli, əksər restoranlarda pulsuz Wi-Fi mövcuddur. Lakin bəzi məkanlarda xidmət deaktiv edilə bilər və istifadə şərtləri fərqli ola bilər.",
                en: "Yes, most restaurants offer free Wi-Fi. However, some locations may disable the service or have different usage terms.",
                ru: "Да, большинство ресторанов предлагают бесплатный Wi-Fi. Однако в некоторых заведениях услуга может быть отключена или иметь ограничения."
            }
        },
        {
            header: {
                az: "Wi-Fi sürəti necədir?",
                en: "How fast is the Wi-Fi?",
                ru: "Какая скорость Wi-Fi?"
            },
            value: {
                az: "İnternet sürəti restorandan asılı olaraq dəyişə bilər. Pulsuz Wi-Fi şəbəkəsi prioritet baxımından məhdudlaşdırıla bilər.",
                en: "Wi-Fi speed may vary depending on the location and available bandwidth. Free Wi-Fi is provided with limited network priority.",
                ru: "Скорость Wi-Fi может различаться в зависимости от ресторана и доступной пропускной способности. Бесплатный Wi-Fi предоставляется с ограниченным приоритетом сети."
            }
        }
    ]
}





function page() {


    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number | null) => {
        setOpenIndex(openIndex === index ? null : index)
    }





    return (
        <div id="mainWifi">
            <Navbar />
            <SectionHero text="Wi-Fi" pic={pic} />

            <div className="max-w-3xl mx-auto px-4 py-20">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    {data.header.en}
                </h1>

                {/* FAQ */}
                <div className="space-y-4">
                    {data.content.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-xl shadow-sm overflow-hidden"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-gray-50 transition wifiFaq"
                            >
                                <span className="font-semibold">
                                    {item.header.en}
                                </span>

                                <span className="text-xl">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="px-5 pb-4 text-gray-600 leading-relaxed faqAnswer">
                                    {item.value.en}
                                </div>
                            )}
                        </div>
                    ))}
                </div>



            </div>
            <Footer />

        </div>
    )
}

export default page