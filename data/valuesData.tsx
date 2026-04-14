import quality from '@/public/values/qualityMeal.png'




export const betterWayContent = {
    az: {
        header: "Daha yaxşısına doğru yolumuz",
        text: `Əvvəldən etibarən doğru olanı etməyə qərarlıyıq. Hər gün, dünyanın hər yerində insan resurslarımızdan, proseslərdən və üsullardan düşünülmüş şəkildə faydalanaraq yeməkləri daha keyfiyyətli etmək, təchizatçı seçiminə daha məsuliyyətli yanaşmaq, cəmiyyətə daha böyük dəstək vermək və ətraf mühiti daha yaxşı etmək üçün çalışırıq. “McDonald's”ın dəyərlərinə uyğun olaraq vəziyyəti daha yaxşısına doğru dəyişməyə nail olmaq istəyirik və bu hədəfə çatmağın yollarını özümüz üçün müəyyən etmişik.`,
    },

    en: {
        header: "Our path to a better future",
        text: `From the very beginning, we are committed to doing the right thing. Every day, around the world, we thoughtfully use our people, processes, and practices to improve food quality, take a more responsible approach to supplier selection, support communities more, and make the environment better. In line with McDonald's values, we aim to create positive change and have defined clear ways to achieve this goal.`,
    },

    ru: {
        header: "Наш путь к лучшему",
        text: `С самого начала мы стремимся поступать правильно. Каждый день по всему миру мы осознанно используем наши ресурсы, процессы и подходы, чтобы улучшать качество еды, более ответственно подходить к выбору поставщиков, оказывать большую поддержку обществу и делать окружающую среду лучше. В соответствии с ценностями McDonald's мы стремимся к позитивным изменениям и определили для себя пути достижения этой цели.`,
    },
};



export const content = {
    header: [
        {
            az: "Keyfiyyətli yemək",
            en: "Quality food",
            ru: "Качественная еда"
        },
        {
            az: "Sağlam ətraf mühit",
            en: "Healthy environment",
            ru: "Здоровая окружающая среда"
        },
        {
            az: "Cəmiyyətə dəstək",
            en: "Supporting the community",
            ru: "Поддержка общества"
        }
    ],
    text: [
        {
            az: "İstifadə etdiyimiz ərzaqlar və məhz məsuliyyətli təchizatçılardan alınan məhsullara üstünlük verməyimiz haqqında məlumatlarla tanış olun.",
            en: "Learn more about the ingredients we use and our commitment to sourcing products from responsible suppliers.",
            ru: "Узнайте больше о продуктах, которые мы используем, и о нашем приоритете выбора ответственных поставщиков."
        },
        {
            az: "İqlim dəyişikliyinə qarşı mübarizə çərçivəsində atıla biləcək addımları təbliğ edirik və ətraf mühiti tullantılardan qorumağa kömək edirik.",
            en: "We promote actions to combat climate change and help protect the environment from waste.",
            ru: "Мы продвигаем меры по борьбе с изменением климата и помогаем защищать окружающую среду от отходов."
        },
        {
            az: "Çətin vaxtlarda cəmiyyətə dəstək oluruq.",
            en: "We support the community in difficult times.",
            ru: "Мы поддерживаем общество в трудные времена."
        }
    ]
};



export const valuesIdData = {
    1: {
        heroText: { az: "Keyfiyyətli yemək", en: "Quality food", ru: "Качественная еда" },
        pic: quality,
        content: [
            {
                type: "text",
                value: {
                    az: "Biz dadlı və keyfiyyətli ərzaqların seçiminə məsuliyyətlə yanaşırıq. Yeməklərimizin necə istehsal olunması və haradan əldə edilməsi ilə bağlı məsələlər müştərilərimiz, cəmiyyət və ətraf mühit üçün çox önəmli olduğundan, biz keyfiyyətli, təhlükəsiz və ekoloji qida məhsullarının gələcəyini yaratmağa kömək edirik. Buraya keyfiyyətli ərzaqların məsuliyyətli yanaşma ilə əldə edilməsi və kənd təsərrüfatı icmalarının dəstəklənməsi daxildir. Qidalanmağa gəldikdə isə, biz ailələrin və uşaqların istəklərinə üstünlük veririk, çünki bu məsələdə ən böyük təsirə malik olduğumuza inanırıq.",

                    en: "We are sourcing delicious, quality ingredients in responsible ways. We are helping to create a future of quality, secure and sustainable food because how our food is produced and where it comes from matter to our customers, communities and the environment. This includes sourcing quality ingredients in responsible ways and supporting farming communities. When it comes to nutrition, we are focused on families and children, as that’s where we believe we can have the biggest impact.",

                    ru: "Мы ответственно подходим к выбору поставщиков, вкусных и качественных ингредиентов. Мы помогаем создавать будущее качественных, безопасных и экологичных продуктов питания, поскольку для наших клиентов, сообществ и экологии важно то, как они производятся и откуда поступают. Это включает в себя ответственный выбор качественных ингредиентов и поддержку фермерских сообществ. Что касается питания, мы ориентируемся на семьи и детей, поскольку считаем, что именно здесь мы можем оказать наибольшее влияние."
                }
            },
            {
                type: "text",
                header: {
                    az: "Qida məhsullarının təhlükəsizliyi",
                    en: "Food safety",
                    ru: "Безопасность пищевых продуктов"
                },
                value: {
                    az: "Qida məhsullarımızın təhlükəsizliyi və keyfiyyəti bizim ən əsas prioritetimizdir. Müştərilərimizin gözləntilərini qarşılamaq, hətta üstələmək üçün daima yeniliklər tətbiq edirik. Qida məhsullarının təhlükəsizliyi məsələsini fəaliyyətimizin hər sahəsinə inteqrasiya etdiririk; buraya daxildir: qida məhsullarının mənbəyinin seçimi, menyunun hazırlanması, qablaşdırma, paylama və logistika, eləcə də restoranlarımızın gündəlik işi.",
                    en: "The safety and quality of our food products are our top priorities. We continuously introduce innovations to meet and even exceed our customers’ expectations. We integrate food safety into every aspect of our operations, including sourcing ingredients, menu development, packaging, distribution and logistics, as well as the daily operations of our restaurants.",
                    ru: "Безопасность и качество наших продуктов питания являются нашим главным приоритетом. Мы постоянно внедряем инновации, чтобы соответствовать ожиданиям наших клиентов и даже превосходить их. Мы интегрируем безопасность пищевых продуктов во все аспекты нашей деятельности, включая выбор источников ингредиентов, разработку меню, упаковку, распределение и логистику, а также ежедневную работу наших ресторанов."
                }
            },
            {
                type: "text",
                header: {
                    az: "Təchizatçıların məsuliyyətli seçimi",
                    en: "Responsible sourcing",
                    ru: "Ответственный выбор поставщиков"
                },
                value: {
                    az: "“McDonald's” keyfiyyətli ərzaqlar və qablaşdırma materialları təmin etmək üçün qlobal təchizatçı və fermer şəbəkəsi ilə əməkdaşlıq edir. Özümüzün təchizat zəncirini yaratmaqla biz daha çox şəffaflığa nail oluruq və daha davamlı istehsalı dəstəkləyə bilirik, beləliklə, müştərilərimizə hər zaman sevdikləri və tanıdıqları dadlı yeməkləri təqdim olunur. Təchizatçıların məsuliyyətli seçimini həyata keçirməklə qarşımıza qoyduğumuz iddialı hədəflərə nail olmaq üçün əlimizdən gələni edirik. Bunun üçün diqqətimizi müsbət dəyişiklik yaratmaq üçün daha çox potensiala malik məhsullarda toplamaşıqı: mal əti, toyuq əti, qəhvə, balıq və lif əsaslı qablaşdırmalar.",
                    en: "McDonald's works with a global network of suppliers and farmers to provide quality ingredients and packaging materials. By building our own supply chain, we achieve greater transparency and support more sustainable production, ensuring that our customers always receive the delicious food they know and love. Through responsible sourcing, we strive to achieve our ambitious goals. We focus on products with the greatest potential to create positive change: beef, chicken, coffee, fish, and fiber-based packaging.",
                    ru: "McDonald's сотрудничает с глобальной сетью поставщиков и фермеров для обеспечения качественных ингредиентов и упаковочных материалов. Создавая собственную цепочку поставок, мы достигаем большей прозрачности и поддерживаем более устойчивое производство, благодаря чему наши клиенты всегда получают вкусную и знакомую им еду. Осуществляя ответственный выбор поставщиков, мы стремимся достигать наших амбициозных целей. Мы сосредотачиваем внимание на продуктах с наибольшим потенциалом для положительных изменений: говядина, курица, кофе, рыба и упаковка на основе волокон."
                }
            },
            {
                type: "text",
                header: {
                    az: "Heyvan sağlamlığı və yaxşı yaşam şəraiti",
                    en: "Animal health and welfare",
                    ru: "Здоровье и благополучие животных"
                },
                value: {
                    az: "Təchizat zəncirimizdə biz heyvanların sağlamlığı və yaxşı şəraitdə yaşamasının qayğısına qalırıq, bu səbəbdən də onların həyatlarının davamlı inkişafı istiqamətində müəyyən əməkdaşlıqlar edirik. Əldə etdiyimiz toyuq əti, mal əti və balıqların təchizatçıları heyvanların sağlamlığı və yaxşı şəraitdə yaşamasına yönəlmiş istiqamətimizi dəstəklədiklərinə zəmanət verərək müsbət dəyişikliklərin nail olunmasına kömək edirik. Eləcə də, həyata keçirdiyimiz siyasətə və onun yerli bazarların hər birində və tətbiqetmə strategiyasına dair bizə tövsiyələr verən mütəxəssislərlə strateji əlaqələr qururuq.",
                    en: "Within our supply chain, we care about animal health and welfare, and we collaborate to support continuous improvement in their living conditions. Our suppliers of chicken, beef, and fish help drive positive change by ensuring they support our approach to animal health and welfare. We also build strategic relationships with experts who provide guidance on our policies and their implementation across local markets.",
                    ru: "В нашей цепочке поставок мы заботимся о здоровье и благополучии животных, поэтому сотрудничаем для постоянного улучшения условий их жизни. Поставщики курицы, говядины и рыбы помогают достигать положительных изменений, подтверждая свою приверженность нашим принципам заботы о животных. Мы также выстраиваем стратегические отношения с экспертами, которые дают рекомендации по нашей политике и ее реализации на локальных рынках."
                }
            },
            {
                type: "text",
                header: {
                    az: "Təchizat zəncirində insan hüquqları",
                    en: "Human rights in the supply chain",
                    ru: "Права человека в цепочке поставок"
                },
                value: {
                    az: "Mədəni, sosial və iqtisadi kontekstdən asılı olmayaraq, bütün təchizatçılardan Birləşmiş Millətlər Təşkilatının İnsan Hüquqları Bəyannaməsində təsbit edildiyi kimi bütün insanlar üçün əsas hüquqlara dair gözləntilərimizi qarşılamasını gözləyirik. Biz inanırıq ki, mədəni, sosial və iqtisadi kontekstdən asılı olmayaraq bütün təchizatçılar Birləşmiş Millətlər Təşkilatının İnsan Hüquqları haqqında Bəyannaməsində əks olunan fundamental hüquqlara dair gözləntilərimizə uyğun olacaqlar. Bu, öz işçilərinə ədalətlə, hörmət və ləyaqətlə yanaşılması və müəssisələrində çalışan insanların sağlamlığı və təhlükəsizliyini qoruyan qaydalara əməl olunması deməkdir. Təchizatçıların Davranış Kodu və Təchizatçıların İş Yerində Hesabatının Dəyərləndirilməsi proqramımızın (SWA) məqsədi təchizatçılara bizim gözləntilərimizi anlamağa kömək etmək, uyğunluğun yoxlanılması və davamlı inkişaf yolunu təşviq etməkdir.",
                    en: "Regardless of cultural, social, or economic context, we expect all suppliers to meet our expectations for fundamental human rights, as outlined in the United Nations Universal Declaration of Human Rights. We believe that all suppliers should align with these principles. This means treating employees fairly, with respect and dignity, and complying with rules that protect the health and safety of workers. Our Supplier Code of Conduct and Supplier Workplace Accountability (SWA) program aim to help suppliers understand our expectations, verify compliance, and support continuous improvement.",
                    ru: "Независимо от культурного, социального или экономического контекста, мы ожидаем, что все поставщики будут соответствовать нашим ожиданиям в области основных прав человека, закреплённых во Всеобщей декларации прав человека ООН. Мы считаем, что все поставщики должны придерживаться этих принципов. Это означает справедливое, уважительное и достойное отношение к сотрудникам, а также соблюдение правил, обеспечивающих здоровье и безопасность работников. Наш Кодекс поведения поставщиков и программа оценки условий труда поставщиков (SWA) направлены на то, чтобы помочь поставщикам понимать наши требования, проверять соответствие и поддерживать постоянное совершенствование."
                }
            },
            {
                type: "text",
                header: {
                    az: "Ekoloji kənd təsərrüfatı və mal əti",
                    en: "Sustainable agriculture and beef",
                    ru: "Экологичное сельское хозяйство и говядина"
                },
                value: {
                    az: "Biz çalışırıq ki, burgerlərimizdəki mal əti icmaların, heyvanların və planetin inkişaf edəcəyi davamlı bir qida sisteminin yaradılmasına kömək etdiyindən əmin olaq. Hələ bütün cavablara nail olmadığımızı bilirik, lakin biz daha ekoloji və bərpaedici üsulların sınaqdan keçirilməsi və modelləşdirilməsi istiqamətində təbiəti qorumağa, istixana qazı (İQ) emissiyalarını azaltmağa və fermerlərin gəlir mənbəyini qorumağa kömək edən mütəxəssis qrupları, fermerlər və sənaye müəssisələri ilə əlaqə qururuq. Bu cəhdlər istixana emissiyalarını azaltmağa və iqlimin qorunması ilə bağlı öhdəliklərimizin yerinə yetirilməsi istiqamətində irəliləməyimizə kömək edir.",
                    en: "We strive to ensure that the beef in our burgers contributes to a sustainable food system where communities, animals, and the planet can thrive. We know we don’t yet have all the answers, but we are working with experts, farmers, and industry partners to test and scale more sustainable and regenerative practices. These efforts help protect nature, reduce greenhouse gas (GHG) emissions, and support farmers’ livelihoods. They also help us make progress toward our climate commitments.",
                    ru: "Мы стремимся к тому, чтобы говядина в наших бургерах способствовала созданию устойчивой продовольственной системы, в которой могут развиваться сообщества, животные и планета. Мы понимаем, что у нас пока нет всех ответов, но мы сотрудничаем с экспертами, фермерами и представителями отрасли для тестирования и внедрения более экологичных и восстановительных методов. Эти усилия помогают сохранять природу, снижать выбросы парниковых газов и поддерживать доходы фермеров, а также продвигаться к выполнению наших климатических обязательств."
                }
            }
        ]
    },
}