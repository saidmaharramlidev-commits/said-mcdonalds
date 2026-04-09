'use client'


import { RootState } from "@/redux/store"
import Link from "next/link"
import { useSelector } from "react-redux"


export default function OpenDoor(): any {

    const { lang } = useSelector((state: RootState) => state.counter)




    if (lang == 'az') {
        return (
            <div className="open-door-text-wrapper">
                <h1>"Açıq Qapı" proqramı haqqında</h1>
                <p>McDonald’s sizi mətbəximizi yaxından tanımağa dəvət edir! Burada siz sevimli yeməklərinizin necə hazırlandığını, yüksək keyfiyyət və təhlükəsizlik standartlarının necə qorunduğunu öz gözlərinizlə görəcəksiniz. Bu proqram real insanlar, real proseslər və gerçək McDonald’s haqqında daha çox öyrənmək üçün unikal fürsətdir.</p>
                <p>Ekskursiya Azərbaycan dilində keçiriləcək.</p>
                <p>Ekskursiyada yalnız 16 yaş və yuxarı qonaqlar iştirak edə bilərlər.</p>
                <p>Diqqət! Müraciət formasını doldurmadan öncə, proqramda iştirak üçün nəzərdə tutulmuş “Mətbəx ziyarətçisinin sağlamlıq bəyannaməsi” ilə tanış olmağınız vacibdir. Bu bəyannamə seçdiyiniz restoranda təqdim ediləcək və ekskursiyadan əvvəl imzalanmalıdır.</p>
                <Link href={''}>Mətbəx ziyarətçisinin sağlamlıq bəyannaməsi” ilə tanış olun</Link>
                <p>Müraciət formasını doldurarkən bütün xanaların tam və düzgün şəkildə qeyd edilməsi məcburidir. Qeydiyyat zamanı sizə uyğun restoranı və tarixi seçməlisiniz. Ekskursiya günü təyin etdiyiniz vaxta gəlib çatmaq üçün restorana ən azı 15 dəqiqə əvvəl gəlməyiniz xahiş olunur. Restorana gəldikdə növbə menecerinə müraciət edin, o, sizi qeydiyyata alacaq və ekskursiya barədə qısa məlumat verəcək.</p>
                <p>Sizə restoranımızda xoş və yaddaqalan anlar arzulayırıq!</p>


            </div>
        )
    } else if (lang == 'en') {
        return (
            <div className="open-door-text-wrapper">
                <h1>About the "Open Doors" Program</h1>
                <p>McDonald’s invites you to take a closer look at our kitchen! Discover how your favorite meals are prepared and see for yourself how we ensure the highest standards of quality and safety. This program is a unique opportunity to learn more about real people, real processes, and the real McDonald’s.</p>
                <p>The tour will be conducted in Azerbaijani.</p>
                <p>Only guests aged 16 and above are allowed to participate.</p>
                <p>Note! Before submitting your application, you must review the document “Mətbəx ziyarətçisinin sağlamlıq bəyannaməsi”. This form will be provided at your chosen restaurant and must be signed before the start of the tour.</p>
                <Link href={''}>Get to know the “Kitchen Visitor Health Declaration</Link>
                <p>When filling out the application, all fields must be completed fully and correctly. During registration, you need to select your preferred restaurant and date. On the day of the tour, please arrive at the restaurant at least 15 minutes before the start time. Upon arrival, ask the shift manager — they will register you and provide a short briefing before the tour.</p>
                <p>We wish you an enjoyable and memorable time at our restaurant!</p>
            </div>
        )
    } else if (lang == 'ru') {
        return (
            <div className="open-door-text-wrapper">
                <h1>О программе “Открытые двери”</h1>
                <p>McDonald’s приглашает вас поближе познакомиться с нашей кухней! Узнайте, как готовятся ваши любимые блюда, и убедитесь сами, как мы обеспечиваем высочайшие стандарты качества и безопасности. Эта программа — уникальная возможность узнать больше о реальных людях, реальных процессах и настоящем McDonald’s.</p>
                <p>Экскурсия будет проводиться на азербайджанском языке.</p>
                <p>К участию допускаются только гости старше 16 лет.</p>
                <p>Внимание! Перед подачей заявки необходимо ознакомиться с документом «Декларация о состоянии здоровья посетителя кухни». Этот документ будет предоставлен в выбранном вами ресторане и должен быть подписан перед началом экскурсии.</p>
                <Link href={''}>Ознакомиться с «Декларацией о состоянии здоровья посетителя кухни»</Link>
                <p>При заполнении заявки все поля должны быть заполнены полностью и корректно. Во время регистрации необходимо выбрать предпочтительный ресторан и дату. В день экскурсии, пожалуйста, приходите в ресторан как минимум за 15 минут до начала. По прибытии обратитесь к менеджеру смены — он зарегистрирует вас и проведёт краткий инструктаж перед началом экскурсии.</p>
                <p>Желаем вам приятного и запоминающегося времени в нашем ресторане!</p>
            </div>
        )
    }
}




export const formLabels = {
    az: {
        title: '"Açıq qapı" proqramında iştirak üçün sorğu anketi',
        surname: 'Soyad',
        name: 'Ad',
        phone: 'Telefon nömrəsi',
        email: 'Elektron poçt ünvanı',
        restaurant: 'Üstünlük verilən restoran',
        restaurantPlaceholder: 'Restoran seçin',
        time: 'Üstünlük verilən vaxt',
        timePlaceholder: 'Əvvəlcə restoran seçin',
        submit: 'Müraciət göndər'
    },
    en: {
        title: 'Application form for participation in the "Open Door" program',
        surname: 'Surname',
        name: 'Name',
        phone: 'Phone number',
        email: 'Email address',
        restaurant: 'Preferred restaurant',
        time: 'Preferred time',
        timePlaceholder: 'First select a restaurant',
        submit: 'Submit application'
    },
    ru: {
        title: 'Анкета для участия в программе "Открытые двери"',
        surname: 'Фамилия',
        name: 'Имя',
        phone: 'Номер телефона',
        email: 'Электронная почта',
        restaurant: 'Предпочитаемый ресторан',
        time: 'Предпочитаемое время',
        timePlaceholder: 'Сначала выберите ресторан',
        submit: 'Отправить заявку'
    }
}