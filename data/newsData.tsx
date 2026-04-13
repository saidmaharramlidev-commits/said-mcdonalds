import mario from '@/public/marioPlc.png'
import kidMenu from '@/public/kidMenu.png'
import friend from '@/public/friend.png'
import mcCafe from '@/public/mccafe.png'
import marioToys1 from '@/public/news/marioNews1.png'
import marioToys2 from '@/public/news/marioNews2.png'
import friendMenu1 from '@/public/news/friendMenu1.png'
import friendMenu2 from '@/public/news/friendMenu2.png'
import friendMenu3 from '@/public/news/friendMenu3.png'







export const newsData = {
    1: {
        heroText: { az: "Super Mario", en: "Super Mario", ru: "Супер Марио" },
        pic: mario,
        content: [
            {
                type: "text",
                value: {
                    az: "Mario, Luigi və dostları Happy Meal qutularında səni gözləyir.Sevdiyin qəhrəmanları topla, kolleksiyanı tamamla!",
                    en: "Mario, Luigi and friends are waiting for you in Happy Meal boxes.Collect your favorite heroes and complete your collection!",
                    ru: "Марио, Луиджи и их друзья ждут вас в коробках из Хэппи Мил.Соберите своих любимых героев и пополните свою коллекцию!"
                }
            },
            {
                type: "image",
                value: marioToys1
            },
            {
                type: "image",
                value: marioToys2
            }
        ]
    },
    2: {
        heroText: { az: "'Friends' Menyu", en: "'Friends' Menu", ru: "меню 'Friends'" },
        pic: kidMenu,
        content: [
            {
                type: "text",
                value: {
                    az: "Artıq sevimli “Friends” TV serialının ab-havasına xüsusi menyu ilə qərq ola bilərsiniz. “Friends” Menyusu – klassik dadları və isti nostalji hissini bir araya gətirən özəl təklifdir.",
                    en: "Now you can immerse yourself in the atmosphere of your favorite TV series Friends with a special meal. The Friends Meal is a cozy and special offer that combines classic flavors and a warm feeling of nostalgia.",
                    ru: "Теперь вы можете окунуться в атмосферу любимого ТВ-сериала Friends с помощью специального меню. Friends Меню – это уютное и особенное предложение, которое сочетает в себе классические вкусы и теплое чувство ностальгии."
                }
            },
            {
                type: "text",
                value: {
                    az: "Menyunun daxilində sizi sevimli seçimlər gözləyir: Big Mac®, McChicken®, Dabl Çizburger, Royal Çizburger və ya 9 ədəd McNuggets®. Onlarla birlikdə orta kartof fri, orta içki və “Monica’s Marinara” sousu təqdim olunur. Bütün bu dadlar xüsusi “Friends” qutusunda verilir və siz hətta onu açmazdan əvvəl artıq özəl əhval-ruhiyyəni hiss edə biləcəksiniz.Menyuya həmçinin kolleksiya oyuncaqları da daxildir. Ros, Monika, Çendler, Reyçl, Coi və Fibi – qəhrəmanlardan istədiyini seçə və ya bütün kolleksiyanı tamamlaya bilərsən. Hər menyu öz kiçik kolleksiyanı yaratmağa doğru bir addımdır.",
                    en: "The menu features our most popular items: Big Mac®, McChicken®, Double Cheeseburger, Royal Cheeseburger, or 9 pcs McNuggets®. They come with a medium serving of French fries, a medium drink, and Monica's Marinara sauce. All these dishes are served in special Friends packaging – you'll feel the special mood even before you open it.The Meal also includes special collectibles. You can choose any character: Ross, Monica, Chandler, Rachel, Joey, and Phoebe, or collect them all. Each meal is a step towards creating your own mini-collection.",
                    ru: "В меню вас ждут наши хиты вкуса: Big Mac®, McChicken®, Дабл Чизбургер, Роял Чизбургер или 9 шт. McNuggets®. К ним прилагается средняя порция картошки фри, средний напиток и соус Monica’s Marinara. Все эти блюда подаются в специальной упаковке Friends – вы почувствуете особое настроение еще до того, как откроете ее.Также в меню также входят специальные коллекционные игрушки. Вы можете выбрать любого героя: Рос, Моника, Чендлер, Рэйчел, Джоуи и Фиби или собрать их всех. Каждое меню – это шаг к созданию вашей собственной мини-коллекции."
                }
            },
            {
                type: "text",
                value: {
                    az: "Restoranda McDonald’s mobil tətbiqindən QR kodu skan etdiyiniz zaman siz hər “Friends” Menyusu üçün +100 xal qazanacaqsınız. Bu xallarla “Friends” tematik məhsullarını – köynəklər, corablar və fincanları əldə edə bilərsiniz. Bütün məhsullar ayrıca əldə oluna və ya topladığın xallarla dəyişdirilə bilər – özünə uyğun olanı seç!",
                    en: "When you scan the QR code from the McDonald's mobile app in the restaurant, you will earn +100 points for each Friends Meal. These points can be used to get Friends-themed products – T-shirts, socks, and mugs. All products can be purchased separately and redeemed for points – choose what suits you best!",
                    ru: "При сканировании QR-код из мобильного приложения McDonald's в ресторане, вы получите +100 баллов за каждое Friends Меню. Эти баллы можно использовать для получения тематических продуктов Friends – футболок, носков и кружек. Все продукты можно приобрести отдельно и обменять на баллы – выбирайте то, что вам подходит!"
                }
            },
            {
                type: "text",
                value: {
                    az: "“Friends” Menyusu bütün restoranlarda və çatdırılma xidmətində mövcuddur.Sadəcə sifariş et və sevdiyin qəhrəmanlarla anın dadını çıxar.",
                    en: "The Friends Meal is available in all restaurants and for delivery.Just order and enjoy the moment with your favorite characters.",
                    ru: "Friends Меню доступно во всех ресторанах и для доставки.Просто закажите и наслаждайтесь моментом с любимыми персонажами."
                }
            },
            {
                type: "image",
                value: friendMenu1
            },
            {
                type: "image",
                value: friendMenu2
            },
            {
                type: "image",
                value: friendMenu3
            },

        ]
    },
    3: {
        heroText: {
            az: "Uşaq tədbirləri proqramı",
            en: "Kids Events Program",
            ru: "Программа детских мероприятий"
        },
        pic: friend,
        content: [
            {
                type: "schedule",
                value: {
                    az:
                    {
                        date: "📅12.04.2026",
                        events: `McDonald’s Fəvvarələr Meydanı (10:00–12:00) — Puzzle ilə komanda yarışları
McDonald’s Gənclik (10:00–12:00) — Bouling
McDonald’s Nəriman Nərimanov (11:00–13:00) — Günəş sistemi
McDonald’s Memar Əcəmi (10:00–12:00) — “Hoppan–Dayan” oyunu
McDonald’s Şuvələn Park (12:00–14:00) — Puzzle ilə oyunlar
McDonald’s Əhmədli (10:00–12:00) — Sehrli fiqur oyunu
McDonald’s Neftçilər (09:00–12:00) — Mimikalarla rollar
McDonald’s Gəncə Mall (11:00–13:00) — Masa boulinqi oyunu
McDonald’s Sahil (11:00–13:00) — Plastilin ilə gül düzəltmək
McDonald’s Koroğlu m/s (Bravo supermarket) (11:00–13:00) — Meyvə səbəti
McDonald’s 20 Yanvar m/s (Bravo supermarket) (11:00–13:00) — Şirinlər partisi
McDonald’s Sumqayıt, Sülh küçəsi (11:00–13:00) — Tap tapmaca
McDonald’s Binəqədi (Bravo supermarket) (11:00–13:00) — Sürətli cavablar
McDonald’s Grand Hayat (11:00–13:00) — Face art və rəngləmə
McDonald’s Blue Residence (11:00–13:00) — Topu ötür
McDonald’s Sumqayıt, Səməd Vurğun küçəsi (11:00–13:00) — Əl işləri səhəri
McDonald’s Nəsimi Mall (10:00–12:00) — Qutuya at
McDonald’s Bakıxanov (11:00–13:00) — Masa boulinqi oyunu
McDonald’s Ağ Şəhər (10:00–12:00) — Plastilindən heyvanlar düzəltmək
McDonald’s Metropark (11:00–13:00) — Təbiəti tanıyaq
McDonald’s Sevinc Mall (11:00–13:00) — Şarları ən çox kim tutacaq
McDonald’s İnşaatçılar (11:00–13:00) — Hədəfi vur
McDonald’s Qala (Rahat Gourmet Market) (11:00–13:00) — Top atma oyunu
McDonald’s Xırdalan (11:00–13:00) — Şəkli tamamla
McDonald’s Yeni Yasamal (11:00–13:00) — Şam qozalarından master klass`,
                        endingText: `Hər proqram isti və mehriban atmosferdə keçirilir.
Ailənizlə birlikdə gəlin – səhərinizi sevinc və gülümsəmə ilə McDonald’s-da keçirin ?`
                    },



                    en:
                    {
                        date: "📅12.04.2026",
                        events: `McDonald’s Fountains Square (10:00–12:00) — Team Puzzle Competition
McDonald’s Ganjlik (10:00–12:00) — Bowling
McDonald’s Nariman Narimanov (11:00–13:00) — Solar System
McDonald’s Memar Ajami (10:00–12:00) — “Hop-Stop” Game
McDonald’s Shuvalan Park (12:00–14:00) — Puzzle Games
McDonald’s Ahmadli (10:00–12:00) — Magic Shape Game
McDonald’s Neftchilar (09:00–12:00) — Mimic Role Play
McDonald’s Ganja Mall (11:00–13:00) — Table Bowling Game
McDonald’s Sahil (11:00–13:00) — Make a Flower from Clay
McDonald’s Koroglu m/s (Bravo Hypermarket) (11:00–13:00) — Fruit Basket
McDonald’s 20 January m/s (Bravo Hypermarket) (11:00–13:00) — Sweets Party
McDonald’s Sumgait, Sulh Street (11:00–13:00) — Riddle Challenge
McDonald’s Binagadi (Bravo Hypermarket) (11:00–13:00) — Quick Answers
McDonald’s Grand Hayat (11:00–13:00) — Face Art and Coloring
McDonald’s Blue Residence (11:00–13:00) — Pass the Ball
McDonald’s Sumgait, Samad Vurgun Street (11:00–13:00) — Handicrafts Morning
McDonald’s Nasimi Mall (10:00–12:00) — Throw into the Box
McDonald’s Bakikhanov (11:00–13:00) — Table Bowling Game
McDonald’s White City (10:00–12:00) — Make Animals from Clay
McDonald’s Metropark (11:00–13:00) — Let’s Explore Nature
McDonald’s Sevinc Mall (11:00–13:00) — Who Can Catch the Most Balloons?
McDonald’s Inshaatchilar (11:00–13:00) — Hit the Target
McDonald’s Gala (Rahat Gourmet Market) (11:00–13:00) — Ball Throwing Game
McDonald’s Khirdalan (11:00–13:00) — Complete the Picture
McDonald’s Yeni Yasamal (11:00–13:00) — Pine Cone Master Class`,
                        endingText: `Each event is held in a warm and friendly atmosphere.
Come with your family and start your morning with joy and smiles at McDonald’s.`
                    },



                    ru:
                    {
                        date: "📅12.04.2026",
                        events: `McDonald’s Площадь Фонтанов (10:00–12:00) — Командные соревнования с пазлами
McDonald’s Гянджлик (10:00–12:00) — Боулинг
McDonald’s Нариман Нариманов (11:00–13:00) — Солнечная система
McDonald’s Мемар Аджеми (10:00–12:00) — Игра «Прыгни-стой»
McDonald’s Shuvalan Park (12:00–14:00) — Игры с пазлами
McDonald’s Ахмедли (10:00–12:00) — Игра «Волшебные фигуры»
McDonald’s Нефтчиляр (09:00–12:00) — Роли через мимику
McDonald’s Ganja Mall (11:00–13:00) — Настольный боулинг
McDonald’s Сахиль (11:00–13:00) — Лепим цветок из пластилина
McDonald’s Кёроглу м/с (гипермаркет Bravo) (11:00–13:00) — Фруктовая корзина
McDonald’s 20 Января м/с (гипермаркет Bravo) (11:00–13:00) — Сладкая вечеринка
McDonald’s Сумгаит, улица Сулх (11:00–13:00) — Игра «Отгадай загадку»
McDonald’s Бинагади (гипермаркет Bravo) (11:00–13:00) — Быстрые ответы
McDonald’s Grand Hayat (11:00–13:00) — Фейс-арт и раскрашивание
McDonald’s Blue Residence (11:00–13:00) — Передай мяч
McDonald’s Сумгаит, улица Самед Вургун (11:00–13:00) — Утро рукоделия
McDonald’s Nasimi Mall (10:00–12:00) — Брось в коробку
McDonald’s Бакиханов (11:00–13:00) — Настольный боулинг
McDonald’s Белый город (10:00–12:00) — Лепим животных из пластилина
McDonald’s Metropark (11:00–13:00) — Знакомимся с природой
McDonald’s Sevinc Mall (11:00–13:00) — Кто поймает больше шаров?
McDonald’s Иншаатчылар (11:00–13:00) — Попади в цель
McDonald’s Гала (Rahat Gourmet Market) (11:00–13:00) — Игра «Бросание мяча»
McDonald’s Хырдалан (11:00–13:00) — Дополни рисунок
McDonald’s Ени Ясамал (11:00–13:00) — Мастер-класс с шишками`,
                        endingText: `Каждая программа проходит в тёплой и дружеской атмосфере.
Приходите всей семьёй — проведите утро с радостью и улыбкой в McDonald’s ?`
                    },


                }
            },

        ]
    },
    4: {
        heroText: { az: "McCafe", en: "McCafe", ru: "McCafe" },
        pic: mcCafe,
        content: [
            {
                type: "text",
                value: {
                    az: "McCafe® McDonald’s® restoranlarında yerləşən rahat qəhvə məkanıdır. Burada Siz yüngül və sərbəst mühitdən, həmçinin bizim qəhvə, desert və şirniyyat çeşidlərimizin gözəl dadından hər zaman zövq ala bilərsiniz.",
                    en: "McCafe® is a cozy coffee shops located in McDonald’s® stores. Here you can always enjoy the light, relaxed atmosphere and the great taste of our coffee, desserts and pastries.",
                    ru: "McCafe® – это уютные кофейни, расположенные в ресторанах McDonald’s®. Здесь Вы всегда можете насладиться легкой, непринужденной атмосферой, а также великолепным вкусом нашего кофе, десертов и выпечки."
                }
            },
            {
                type: "text",
                value: {
                    az: "Ola bilsin, Siz bilmirsiniz biz qəhvəni sizin üçün hazırlayarkən ona necə sevgi qatırıq, lakin Siz bunu elə ilk qurtumdan mütləq hiss edəcəksiniz. Biz sadəcə əla qəhvə hazırlamırıq, həm də Sizə hissləri oyadan dad bəxş edirik.",
                    en: "You may not know with what kind of love we make you coffee, but you will definitely feel it at the first sip. We don’t just make great coffee, we give you emotions of pleasure.",
                    ru: "Вы можете не знать с какой любовью мы готовим для Вас кофе, но Вы обязательно это почувствуете с первого глотка. Мы не просто делаем отличный кофе, мы дарим Вам эмоции наслаждения."
                }
            },
            {
                type: "text",
                value: {
                    az: "McCafe® qəhvəsinin dadının sirri nədir?",
                    en: "What is the secret of the taste of coffee in McCafe®?",
                    ru: "В чем секрет вкуса кофе в McCafe®?"
                }
            },
            {
                type: "text",
                value: {
                    az: "Biz Mərkəzi və Cənubi Amerikanın 100% arabikasını xüsusilə seçərək yumşaq, canlandırıcı kupaja toplayırıq və məhz o, hissləri oyadan qəhvənin əsasını təşkil edir...",
                    en: "We use carefully selected 100% Arabica beans from Central and South America, collected in a soft, invigorating blend, which becomes the basis for coffee that brings emotions...",
                    ru: "Мы используем тщательно отобранные зерна из 100% арабики из Центральной и Южной Америки, собранные в мягкий, бодрящий купаж, который и становится основой для кофе, который дарит эмоции..."
                }
            },
            {
                type: 'text',
                value: {
                    az: [
                        {
                            name: "Fəvvarələr meydanı",
                            address: "Bakı şəhəri, Səbail rayonu, Nizami küç., 340-cı məhəllə",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Əhmədli",
                            address: "Bakı şəhəri, Xətai rayonu, Sarayevo küç., 1e, 2322-ci məhəllə",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Binəqədi – Bravo supermarket",
                            address: "Bakı şəhəri, Binəqədi rayonu, Şövkət Məmmədova küç., 2",
                            dineIn: "09:00 – 01:00",
                        },
                        {
                            name: "Grand Həyat",
                            address: "Bakı şəhəri, Yasamal rayonu, Tbilisi prospekti, 1054-cü məhəllə",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Blue Residence",
                            address: "Bakı şəhəri, Xətai rayonu, 8 Noyabr prospekti, Nargilə dairəsinin yanı",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Memar Əcəmi",
                            address: "Bakı şəhəri, Nəsimi rayonu, M. Cəfərov küç., 3005-ci məhəllə",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Sumqayıt (Səməd Vurğun küçəsi)",
                            address: "Sumqayıt şəhəri, Səməd Vurğun küçəsi, 124",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Nəsimi Mall",
                            address: "Bakı şəhəri, Nəsimi rayonu, Azadlıq prospekti, 100",
                            dineIn: "08:00 – 00:00",
                        },
                        {
                            name: "Bakıxanov",
                            address: "Bakı şəhəri, Sabunçu rayonu, Bakıxanov qəsəbəsi, Sülh küçəsi, 105",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Ağ şəhər",
                            address: "Bakı şəhəri, Mərkəzi Bulvar küçəsi, 8",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "İnşaatçılar",
                            address: "Abbas Mirzə Şərifzadə küçəsi, 257",
                            dineIn: "08:00 – 01:00",
                        },
                    ],
                    en: [
                        {
                            name: "Fountains Square",
                            address: "Baku, Sabail district, Nizami str., block 340",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Ahmadli",
                            address: "Baku, Khatai district, Sarajevo str., 1e, block 2322",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Binagadi – Bravo Supermarket",
                            address: "Baku, Binagadi district, Shovkat Mammadova str., 2",
                            dineIn: "09:00 – 01:00",
                        },
                        {
                            name: "Grand Hayat",
                            address: "Baku, Yasamal district, Tbilisi avenue, block 1054",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Blue Residence",
                            address: "Baku, Khatai district, 8 November avenue, near Nargila circle",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Memar Ajami",
                            address: "Baku, Nasimi district, M. Jafarov str., block 3005",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Sumgait (Samad Vurgun str.)",
                            address: "Sumgait city, Samad Vurgun str., 124",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Nasimi Mall",
                            address: "Baku, Nasimi district, Azadliq avenue, 100",
                            dineIn: "08:00 – 00:00",
                        },
                        {
                            name: "Bakikhanov",
                            address: "Baku, Sabunchu district, Bakikhanov settlement, Sulh str., 105",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "White City",
                            address: "Baku, Central Boulevard str., 8",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Inshaatchilar",
                            address: "Abbas Mirza Sharifzade str., 257",
                            dineIn: "08:00 – 01:00",
                        },
                    ],
                    ru: [
                        {
                            name: "Площадь Фонтанов",
                            address: "г. Баку, Сабаильский район, ул. Низами, квартал 340",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Ахмедли",
                            address: "г. Баку, Хатаинский район, ул. Сараево, 1e, квартал 2322",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Бинагади – супермаркет Bravo",
                            address: "г. Баку, Бинагадинский район, ул. Шовкет Мамедова, 2",
                            dineIn: "09:00 – 01:00",
                        },
                        {
                            name: "Гранд Хаят",
                            address: "г. Баку, Ясамальский район, Тбилисский проспект, квартал 1054",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Blue Residence",
                            address: "г. Баку, Хатаинский район, проспект 8 Ноября, рядом с кругом Наргиля",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Мемар Аджеми",
                            address: "г. Баку, Насиминский район, ул. М. Джафарова, квартал 3005",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Сумгаит (ул. Самеда Вургуна)",
                            address: "г. Сумгаит, ул. Самеда Вургуна, 124",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Насими Молл",
                            address: "г. Баку, Насиминский район, проспект Азадлыг, 100",
                            dineIn: "08:00 – 00:00",
                        },
                        {
                            name: "Бакиханов",
                            address: "г. Баку, Сабунчинский район, пос. Бакиханов, ул. Сюльх, 105",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Белый город",
                            address: "г. Баку, ул. Центральный бульвар, 8",
                            dineIn: "08:00 – 01:00",
                        },
                        {
                            name: "Иншаатчылар",
                            address: "ул. Аббаса Мирзы Шарифзаде, 257",
                            dineIn: "08:00 – 01:00",
                        },
                    ]
                }
            }
        ]
    },
}