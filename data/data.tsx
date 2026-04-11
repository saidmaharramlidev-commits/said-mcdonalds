export type Lang = "az" | "en" | "ru";

type NavItem = {
    label: string;
    href: string;
};

type NavbarLang = {
    top: {
        subscribe: NavItem;
        career: NavItem;
    };
    main: {
        menu: NavItem;
        about: NavItem;
        locations: NavItem;
        openDoor: NavItem;
    };
};







export const navbarData: Record<Lang, NavbarLang> = {
    az: {
        top: {
            subscribe: {
                label: "E-məktublara abunəlik",
                href: "/subscription",
            },
            career: {
                label: "Karyera",
                href: "/career",
            },
        },
        main: {
            menu: {
                label: "Menyumuz",
                href: "/menu",
            },
            about: {
                label: "Yeməklərimiz haqqında",
                href: "/about",
            },
            locations: {
                label: "Ünvanlarımız",
                href: "/locations",
            },
            openDoor: {
                label: '"Açıq Qapı" proqramı',
                href: "/open-door",
            }
        },
    },

    en: {
        top: {
            subscribe: {
                label: "Email subscription",
                href: "/subscription",
            },
            career: {
                label: "Career",
                href: "/career",
            },
        },
        main: {
            menu: {
                label: "Our Menu",
                href: "/menu",
            },
            about: {
                label: "About our food",
                href: "/about",
            },
            locations: {
                label: "Our locations",
                href: "/locations",
            },
            openDoor: {
                label: '"Open Door" program',
                href: "/open-door",
            },
        },
    },

    ru: {
        top: {
            subscribe: {
                label: "Подписка на email",
                href: "/subscription",
            },
            career: {
                label: "Карьера",
                href: "/career",
            },
        },
        main: {
            menu: {
                label: "Наше меню",
                href: "/menu",
            },
            about: {
                label: "О нашей еде",
                href: "/about",
            },
            locations: {
                label: "Наши адреса",
                href: "/locations",
            },
            openDoor: {
                label: 'Программа "Открытая дверь"',
                href: "/open-door",
            },
        },
    },
};



export const adsText: Record<'az' | 'en' | 'ru', string> = {
    az: 'Super Mario həyəcanı McDonald’s-da!',
    en: 'Super Mario excitement at McDonald’s!',
    ru: 'Волнение Супер Марио в McDonald’s!'
}

export const moreText: Record<'az' | 'en' | 'ru', string> = {
    az: 'Ətraflı',
    en: 'More',
    ru: 'ещё'
}



export const sectionTexts = {
    az: {
        deliveryTitle: "“McDonald’s”dan yemək sifarişlərinin çatdırılması.",
        deliveryDesc: "“McDonald’s”dan yemək sifarişlərinin çatdırılması.",
        appTitle: "“McDonald’s”ın mobil tətbiqini yükləyin.",
        appDesc: "“McDonald’s” tətbiqində xüsusi təkliflər."
    },

    en: {
        deliveryTitle: "Food delivery from McDonald’s.",
        deliveryDesc: "Food delivery from McDonald’s.",
        appTitle: "Download the McDonald’s mobile app.",
        appDesc: "Exclusive offers in the McDonald’s app."
    },

    ru: {
        deliveryTitle: "Доставка заказов из McDonald’s.",
        deliveryDesc: "Доставка заказов из McDonald’s.",
        appTitle: "Скачайте мобильное приложение McDonald’s.",
        appDesc: "Специальные предложения в приложении McDonald’s."
    }
}



export const cardTexts = {
    az: {
        subscribeTitle: "E-məktublarımıza abunə olun",
        subscribeDesc: "“McDonald’s”dan elektron məktublar almaq üçün qeydiyyatdan keçin.",

        joinTitle: "“McDonald’s” ailəsinə qoşulun",
        joinDesc: "“McDonald’s” heyətinin bir üzvü olmaq üçün onlayn müraciəti doldurun.",

        qualityTitle: "Mal Əti istehsalı və Təchizatı",
        qualityDesc: "Yeməklərimizin hazırlanma üsullarının keyfiyyətini təkmilləşdiririk."
    },

    en: {
        subscribeTitle: "Subscribe to our emails",
        subscribeDesc: "Sign up to receive emails from McDonald’s.",

        joinTitle: "Join the McDonald’s team",
        joinDesc: "Fill out an online application to become part of the McDonald’s team.",

        qualityTitle: "Beef Production & Supply",
        qualityDesc: "We continuously improve the quality of how our food is prepared."
    },

    ru: {
        subscribeTitle: "Подпишитесь на нашу рассылку",
        subscribeDesc: "Зарегистрируйтесь, чтобы получать электронные письма от McDonald’s.",

        joinTitle: "Присоединяйтесь к команде McDonald’s",
        joinDesc: "Заполните онлайн-заявку, чтобы стать частью команды McDonald’s.",

        qualityTitle: "Производство и поставка говядины",
        qualityDesc: "Мы постоянно улучшаем качество приготовления наших блюд."
    }
}



export const footerTexts = {
    az: {
        about: ["Haqqımızda", "Tariximiz", "Xəbərlər və bildirişlər", "Siz soruşursunuz. Biz cavablandırırıq", "Dəyərlərimiz"],
        career: ["Karyera", "İndi müraciət edin"],
        services: ["Xidmətlər", "Wi-Fi", "McDelivery®", "MakAvto®", "Mobil tətbiqi yükləyin"],
        copyright: "© 2026 McDonald's Bütün hüquqlar qorunur"
    },

    en: {
        about: ["About us", "Our history", "News & announcements", "You ask. We answer", "Our values"],
        career: ["Careers", "Apply now"],
        services: ["Services", "Wi-Fi", "McDelivery®", "McDrive®", "Download the mobile app"],
        copyright: "© 2026 McDonald's. All rights reserved"
    },

    ru: {
        about: ["О нас", "Наша история", "Новости и объявления", "Вы спрашиваете. Мы отвечаем", "Наши ценности"],
        career: ["Карьера", "Подать заявку"],
        services: ["Услуги", "Wi-Fi", "McDelivery®", "МакАвто®", "Скачайте мобильное приложение"],
        copyright: "© 2026 McDonald's. Все права защищены"
    }
}