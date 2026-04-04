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
            },
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