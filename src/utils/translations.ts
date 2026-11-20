import type { Locale } from './site';

// English is the source copy. Each entry contains Uzbek and Russian translations.
const translations: Record<string, readonly [string, string]> = {
  'Anime & imagined worlds': ['Anime va fantastik olamlar', 'Аниме и фантастические миры'],
  'Bleach, Fullmetal Alchemist, and Marvel draw me into questions about characters, their choices, and how a story fits together. I like looking beyond the ending to understand the world behind it.':
    [
      'Bleach, Po‘lat alkimyogar va Marvel olamlarida qahramonlar, ularning tanlovlari va voqealar qanday bog‘langani menga qiziq. Yakunini bilish bilan cheklanmay, hikoya ortidagi mantiqni ham tushunishga harakat qilaman.',
      'Bleach, «Стальной алхимик» и Marvel вызывают у меня вопросы о героях, их выборе и связях между событиями. Мне интересно не только узнать финал, но и разобраться в логике этого мира.',
    ],
  'Dark mode': ['Qorong‘i rejim', 'Тёмный режим'],
  'Switch to light mode': ['Yorug‘ rejimga o‘tish', 'Включить светлый режим'],
  'Switch to dark mode': ['Qorong‘i rejimga o‘tish', 'Включить тёмный режим'],
  'Architecture & engineering': ['Arxitektura va muhandislik', 'Архитектура и инженерия'],
  'I explore how drawings, BIM models, calculations, and estimates connect. I’m especially interested in using software and AI to make that work more consistent and easier to check.':
    [
      'Chizmalar, BIM modellari, hisob-kitoblar va smeta qanday bog‘lanishini o‘rganaman. Ayniqsa, dasturiy vositalar va AI yordamida bu ishlarni izchil, tekshirish oson bo‘lgan jarayonga aylantirishga qiziqaman.',
      'Изучаю, как связаны чертежи, BIM-модели, расчёты и сметы. Особенно интересно, как программы и ИИ могут сделать эту работу более последовательной и проверяемой.',
    ],
  'AI & small experiments': ['AI va kichik tajribalar', 'ИИ и небольшие эксперименты'],
  'Skip to content': ['Asosiy mazmunga o‘tish', 'Перейти к содержимому'],
  'Xushnudbek home': ['Xushnudbek — bosh sahifa', 'Хушнудбек — главная'],
  'Main navigation': ['Asosiy menyu', 'Основная навигация'],
  Work: ['Loyihalar', 'Проекты'],
  About: ['Men haqimda', 'Обо мне'],
  Expertise: ['Ko‘nikmalar', 'Навыки'],
  Motion: ['Animatsiya', 'Анимация'],
  'Reduced motion enabled': ['Kamaytirilgan animatsiya yoqilgan', 'Уменьшение движения включено'],
  'Play motion': ['Animatsiyani yoqish', 'Включить анимацию'],
  'Pause motion': ['Animatsiyani to‘xtatish', 'Остановить анимацию'],
  'Let’s talk': ['Bog‘lanish', 'Связаться'],
  'Close menu': ['Menyuni yopish', 'Закрыть меню'],
  'Open menu': ['Menyuni ochish', 'Открыть меню'],
  'Choose language': ['Tilni tanlash', 'Выбрать язык'],
  'Language changed': ['Til o‘zgartirildi', 'Язык изменён'],
  'Full-stack & mobile developer': [
    'Full-stack va mobil dasturchi',
    'Full-stack и мобильный разработчик',
  ],
  'Interfaces. Systems. Real products.': [
    'Interfeyslar. Tizimlar. Amaldagi mahsulotlar.',
    'Интерфейсы. Системы. Настоящие продукты.',
  ],
  'I build the interface, the engine,': [
    'Interfeysdan ichki tizimgacha —',
    'От интерфейса до внутренней логики —',
  ],
  'and everything in between.': [
    'mahsulotning har bir qismi ustida ishlayman.',
    'работаю над каждой частью продукта.',
  ],
  'Web platforms. Mobile apps. Thoughtful details.': [
    'Veb-platformalar. Mobil ilovalar. Puxta detallar.',
    'Веб-платформы. Мобильные приложения. Продуманные детали.',
  ],
  'Explore selected work': ['Loyihalarni ko‘rish', 'Посмотреть проекты'],
  Selected: ['Tanlangan', 'Избранные'],
  'work.': ['loyihalar.', 'проекты.'],
  'A few things I’ve helped bring to life.': [
    'Yaratilishiga hissa qo‘shgan loyihalarim.',
    'Проекты, в создании которых я участвовал.',
  ],
  'Updated November 2026.': ['2026-yil noyabrda yangilangan.', 'Обновлено в ноябре 2026 года.'],
  'All projects': ['Barchasi', 'Все проекты'],
  'Filter projects by source': [
    'Loyihalarni manba bo‘yicha saralash',
    'Фильтр проектов по источнику',
  ],
  projects: ['ta loyiha', 'проектов'],
  'Private source': ['Yopiq kod', 'Закрытый код'],
  'Public source': ['Ochiq kod', 'Открытый код'],
  Hide: ['Yopish', 'Скрыть'],
  Explore: ['Batafsil', 'Подробнее'],
  technologies: ['texnologiyalari', 'технологии'],
  'Visit website': ['Saytni ochish', 'Открыть сайт'],
  'View source': ['Manbani ko‘rish', 'Открыть источник'],
  'Click to enlarge': ['Kattalashtirish', 'Увеличить'],
  Enlarge: ['Kattalashtirish', 'Увеличить'],
  image: ['rasm', 'изображение'],
  'Close image': ['Rasmni yopish', 'Закрыть изображение'],
  'Previous image': ['Oldingi rasm', 'Предыдущее изображение'],
  'Next image': ['Keyingi rasm', 'Следующее изображение'],
  'Actual product images': ['Mahsulotning haqiqiy rasmlari', 'Настоящие изображения продукта'],
  'EV charging platform': [
    'Elektromobil quvvatlash platformasi',
    'Платформа зарядки электромобилей',
  ],
  'EV charging & operations': [
    'Elektromobil quvvatlash va boshqaruv',
    'Зарядка электромобилей и управление сетью',
  ],
  'Queue & appointment platform': [
    'Navbat va qabulga yozilish platformasi',
    'Платформа очередей и записи на приём',
  ],
  'Mobile applications': ['Mobil ilovalar', 'Мобильные приложения'],
  'Telegram Mini App': ['Telegram mini-ilovasi', 'Мини-приложение Telegram'],
  'macOS desktop experiment': [
    'macOS uchun tajriba loyihasi',
    'Экспериментальное приложение для macOS',
  ],
  'B2B payments & financing': ['B2B to‘lovlar va moliyalashtirish', 'B2B-платежи и финансирование'],
  'Public development project': ['Ochiq kodli loyiha', 'Открытый проект'],
  'Work across charging services and the admin dashboard, connecting station operations with the tools people use to manage them.':
    [
      'Quvvatlash xizmatlari va boshqaruv paneli ustida ishladim: stansiyalar faoliyatini ularni boshqarish vositalari bilan bog‘ladim.',
      'Работал над сервисами зарядки и панелью администратора, связывая работу станций с инструментами управления.',
    ],
  'OCPP station actions and OCPI roaming integrations': [
    'OCPP orqali stansiyalarni boshqarish va OCPI rouming integratsiyalari',
    'Управление станциями по OCPP и интеграции роуминга OCPI',
  ],
  'Charging limits, station-specific vouchers, and connector QR codes': [
    'Quvvatlash limitlari, stansiya vaucherlari va ulagich QR-kodlari',
    'Лимиты зарядки, ваучеры для станций и QR-коды разъёмов',
  ],
  'Backend and dashboard contributions for an EV charging platform, spanning charging sessions, payments, billing, and network reporting.':
    [
      'Elektromobil quvvatlash platformasining backend va boshqaruv paneliga hissa qo‘shdim: quvvatlash seanslari, to‘lovlar, hisob-kitoblar va tarmoq hisobotlari.',
      'Участвовал в разработке бэкенда и панели управления: сессии зарядки, платежи, биллинг и отчёты по сети.',
    ],
  'Network monitoring, growth charts, and period comparisons': [
    'Tarmoq monitoringi, o‘sish grafiklari va davrlarni taqqoslash',
    'Мониторинг сети, графики роста и сравнение периодов',
  ],
  'Charging balance validation and billing behavior tests': [
    'Quvvatlash balansini tekshirish va hisob-kitob testlari',
    'Проверка баланса зарядки и тестирование биллинга',
  ],
  'A queue and appointment project for service businesses, with customer, staff, and owner experiences across web and mobile.':
    [
      'Xizmat ko‘rsatish bizneslari uchun navbat va qabulga yozilish loyihasi. Mijozlar, xodimlar va biznes egalari uchun veb hamda mobil interfeyslar.',
      'Проект очередей и записи для сферы услуг: веб- и мобильные интерфейсы для клиентов, сотрудников и владельцев.',
    ],
  'Walk-in queues and scheduled appointments': [
    'Jonli navbat va oldindan qabulga yozilish',
    'Живая очередь и предварительная запись',
  ],
  'Shared types across web, mobile, and API': [
    'Veb, mobil va API uchun umumiy ma’lumot turlari',
    'Общие типы данных для веба, мобильных приложений и API',
  ],
  'Flutter work on EV charging apps, with station discovery, charging sessions, payments, and voucher experiences.':
    [
      'Elektromobil quvvatlash ilovalarida Flutter bilan ishladim: stansiya qidirish, quvvatlash seanslari, to‘lovlar va vaucherlar.',
      'Работал с Flutter в приложениях для зарядки: поиск станций, сессии зарядки, платежи и ваучеры.',
    ],
  'Map-based station discovery': [
    'Xaritadan quvvatlash stansiyalarini topish',
    'Поиск зарядных станций на карте',
  ],
  'Voucher balances and scheduled activation states': [
    'Vaucher balansi va rejalashtirilgan faollashtirish holatlari',
    'Баланс ваучеров и состояния отложенной активации',
  ],
  'A Telegram Mini App and bot for physical queues, helping people see their place and who they are waiting behind.':
    [
      'Jonli navbatlar uchun Telegram mini-ilovasi va bot. Foydalanuvchi navbatdagi o‘rnini va oldida kim borligini ko‘ra oladi.',
      'Мини-приложение и бот Telegram для живых очередей: помогают узнать своё место и увидеть, кто стоит впереди.',
    ],
  'Queue participation through Telegram': [
    'Telegram orqali navbatga qo‘shilish',
    'Участие в очереди через Telegram',
  ],
  'A focused web interface for waiting in line': [
    'Navbatni kuzatish uchun sodda veb-interfeys',
    'Простой веб-интерфейс для ожидания в очереди',
  ],
  'Two animated desktop companions, Oppoq and Shaftoli, that move around the screen, play, and respond to conversations with AI.':
    [
      'Oppoq va Shaftoli — ekranda yuradigan, o‘ynaydigan va sun’iy intellekt orqali suhbatga javob beradigan ikki jonlantirilgan hamroh.',
      'Два анимированных компаньона, Oppoq и Shaftoli: перемещаются по экрану, играют и отвечают на сообщения с помощью ИИ.',
    ],
  'Animated pets with interactive behavior': [
    'Foydalanuvchiga javob beradigan jonlantirilgan qahramonlar',
    'Анимированные питомцы с интерактивным поведением',
  ],
  'Conversation memory and a desktop control panel': [
    'Suhbat xotirasi va ish stoli boshqaruv paneli',
    'Память разговоров и панель управления на рабочем столе',
  ],
  'Frontend work on Comfi’s B2B payments website, presenting flexible payment terms and helping business customers discover financing options.':
    [
      'Comfi’ning B2B to‘lovlar sayti uchun frontend ustida ishladim. Sayt bizneslarga moslashuvchan to‘lov shartlari va moliyalashtirish imkoniyatlarini ko‘rsatadi.',
      'Работал над фронтендом B2B-сайта Comfi: гибкие условия оплаты и варианты финансирования для бизнеса.',
    ],
  'B2B payments and financing product pages': [
    'B2B to‘lovlar va moliyalashtirish sahifalari',
    'Страницы B2B-платежей и финансирования',
  ],
  'Responsive interfaces built with reusable components': [
    'Qayta ishlatiladigan komponentlardan tuzilgan moslashuvchan interfeyslar',
    'Адаптивные интерфейсы на основе переиспользуемых компонентов',
  ],
  'A full-stack workspace connecting a React client and Express API through tRPC, with shared validation and database packages.':
    [
      'React va Express API’ni tRPC orqali bog‘laydigan full-stack loyiha. Validatsiya va ma’lumotlar bazasi uchun umumiy paketlar ishlatilgan.',
      'Full-stack-проект, связывающий React-клиент и Express API через tRPC, с общими пакетами валидации и базы данных.',
    ],
  'Typed client–server communication': [
    'Mijoz va server o‘rtasida qat’iy tiplashtirilgan aloqa',
    'Типизированное взаимодействие клиента и сервера',
  ],
  'Shared Zod schemas and a Prisma database package': [
    'Umumiy Zod sxemalari va Prisma ma’lumotlar bazasi paketi',
    'Общие схемы Zod и пакет базы данных Prisma',
  ],
  'App screens · demo data': [
    'Ilova ekranlari · namuna ma’lumotlar',
    'Экраны приложения · демоданные',
  ],
  'Home screen · demo data': ['Bosh sahifa · namuna ma’lumotlar', 'Главный экран · демоданные'],
  'App screenshots · demo data': [
    'Ilova rasmlari · namuna ma’lumotlar',
    'Скриншоты приложения · демоданные',
  ],
  'Native app · demo data': ['Ilova · namuna ma’lumotlar', 'Нативное приложение · демоданные'],
  'App screenshot · demo data': [
    'Ilova rasmi · namuna ma’lumotlar',
    'Скриншот приложения · демоданные',
  ],
  'Comfi website': ['Comfi veb-sayti', 'Сайт Comfi'],
  'Charging session': ['Quvvatlash jarayoni', 'Сессия зарядки'],
  'Station filters': ['Stansiya filtrlari', 'Фильтры станций'],
  'Home · map & station search': [
    'Bosh sahifa · xarita va stansiya qidirish',
    'Главная · карта и поиск станций',
  ],
  'Discover services': ['Xizmatlarni topish', 'Поиск услуг'],
  'Your queue ticket': ['Navbat taloningiz', 'Ваш талон очереди'],
  'TOK BOR · charging': ['TOK BOR · quvvatlash', 'TOK BOR · зарядка'],
  'Beon · home': ['Beon · bosh sahifa', 'Beon · главная'],
  'Your place in line': ['Navbatdagi o‘rningiz', 'Ваше место в очереди'],
  'Nearby queues': ['Yaqin atrofdagi navbatlar', 'Очереди поблизости'],
  'Desktop companion': ['Ish stolidagi hamroh', 'Компаньон на рабочем столе'],
  'Flexible B2B payments': ['Moslashuvchan B2B to‘lovlar', 'Гибкие B2B-платежи'],
  'Product management': ['Mahsulotlarni boshqarish', 'Управление товарами'],
  'TOK BOR in-app charging status with a sample session': [
    'TOK BOR ilovasida namunaviy quvvatlash seansi holati',
    'Статус демонстрационной сессии зарядки в TOK BOR',
  ],
  'TOK BOR station filters with connector types and power options': [
    'TOK BOR stansiya filtrlari: ulagich turlari va quvvat tanlash',
    'Фильтры станций TOK BOR: типы разъёмов и мощность',
  ],
  'Beon home screen with the Tashkent map, station search and sample balance': [
    'Beon bosh sahifasi: Toshkent xaritasi, stansiya qidirish va namuna balans',
    'Главный экран Beon: карта Ташкента, поиск станций и демонстрационный баланс',
  ],
  'Navbat service discovery screen with sample businesses': [
    'Navbat xizmat qidirish ekrani, namuna bizneslar bilan',
    'Экран поиска услуг Navbat с демонстрационными компаниями',
  ],
  'Navbat queue ticket for a sample appointment': [
    'Navbat ilovasida namunaviy qabul taloni',
    'Демонстрационный талон на приём в Navbat',
  ],
  'TOK BOR mobile charging status with sample readings': [
    'TOK BOR mobil ilovasida namuna ko‘rsatkichli quvvatlash holati',
    'Статус зарядки TOK BOR с демонстрационными показателями',
  ],
  'Beon mobile home screen with map and station search': [
    'Beon mobil bosh sahifasi: xarita va stansiya qidirish',
    'Главный экран Beon с картой и поиском станций',
  ],
  'Jonli Navbat queue position with sample participants': [
    'Jonli Navbat’da namuna ishtirokchilar bilan navbatdagi o‘rin',
    'Позиция в очереди Jonli Navbat с демонстрационными участниками',
  ],
  'Jonli Navbat nearby queues with sample data': [
    'Jonli Navbat’da yaqin navbatlar, namuna ma’lumotlar bilan',
    'Очереди поблизости в Jonli Navbat с демоданными',
  ],
  'CoucouPet actual macOS panel with Oppoq and Shaftoli': [
    'CoucouPet’ning haqiqiy macOS paneli, Oppoq va Shaftoli bilan',
    'Настоящая панель CoucouPet для macOS с Oppoq и Shaftoli',
  ],
  'Comfi website presenting flexible B2B payment terms': [
    'Moslashuvchan B2B to‘lov shartlarini ko‘rsatuvchi Comfi sayti',
    'Сайт Comfi с гибкими условиями B2B-платежей',
  ],
  'Full-stack Monorepo product dashboard with sample products': [
    'Full-stack Monorepo boshqaruv paneli, namuna mahsulotlar bilan',
    'Панель товаров Full-stack Monorepo с демонстрационными данными',
  ],
  'Some of the teams': ['Birga ishlagan jamoalarim', 'Некоторые команды'],
  'and products along the way.': ['va loyihalarim.', 'и проекты на моём пути.'],
  'A bit about me': ['Men haqimda qisqacha', 'Немного обо мне'],
  'Curious by nature.': ['Qiziqishdan boshlanadi.', 'Всё начинается с интереса.'],
  'A builder by practice.': ['Tajribada shakllanadi.', 'И растёт в практике.'],
  'I’m Xushnudbek. I started with interfaces and kept following the questions behind them. Today, my work connects web, backend, and mobile — from the services that power EV charging to the small details that make an app feel right.':
    [
      'Men Xushnudbekman. Interfeyslar yaratishdan boshladim va ularning ortidagi tizimlarni ham o‘rganib bordim. Hozir veb, backend va mobil yo‘nalishlarda ishlayman — elektromobil quvvatlash xizmatlaridan tortib, ilovani qulay qiladigan kichik detallargacha.',
      'Я Хушнудбек. Начинал с интерфейсов и постепенно разбирался в системах за ними. Сейчас работаю с вебом, бэкендом и мобильными приложениями — от сервисов зарядки электромобилей до деталей, которые делают приложение удобным.',
    ],
  'More about me': ['Men haqimda batafsil', 'Больше обо мне'],
  'Recent contributions · 2026': ['So‘nggi ishlarim · 2026', 'Последние работы · 2026'],
  'Earlier experience': ['Avvalgi tajriba', 'Ранний опыт'],
  'Charging services, admin tools & mobile': [
    'Quvvatlash xizmatlari, boshqaruv paneli va mobil ilovalar',
    'Сервисы зарядки, админ-панель и мобильные приложения',
  ],
  'Contributions across station communication, roaming, voucher controls, and mobile charging flows.':
    [
      'Stansiyalar bilan aloqa, rouming, vaucher boshqaruvi va mobil quvvatlash jarayonlari ustida ishladim.',
      'Участвовал в работе над связью со станциями, роумингом, ваучерами и мобильными сценариями зарядки.',
    ],
  'Backend, dashboards & billing': [
    'Backend, boshqaruv panellari va hisob-kitoblar',
    'Бэкенд, панели управления и биллинг',
  ],
  'Charging and payment flows, network monitoring, growth analytics, and billing behavior coverage.':
    [
      'Quvvatlash va to‘lov jarayonlari, tarmoq monitoringi, o‘sish tahlili va hisob-kitoblarni tekshirish.',
      'Сценарии зарядки и оплаты, мониторинг сети, аналитика роста и проверка биллинга.',
    ],
  'Frontend Developer': ['Frontend dasturchi', 'Фронтенд-разработчик'],
  'Junior Frontend Developer': ['Junior frontend dasturchi', 'Младший фронтенд-разработчик'],
  'Started Jul 2021': ['2021-yil iyulda boshlangan', 'Начало — июль 2021'],
  'Oct 2020 – May 2021': ['2020-yil oktabr – 2021-yil may', 'Октябрь 2020 — май 2021'],
  'Many tools.': ['Turli vositalar.', 'Разные инструменты.'],
  'One whole product.': ['Yaxlit mahsulot.', 'Цельный продукт.'],
  'From the first interaction to the service behind it.': [
    'Birinchi bosishdan ortidagi xizmatgacha.',
    'От первого нажатия до сервиса за ним.',
  ],
  'The technologies I work with.': [
    'Ishlatadigan texnologiyalarim.',
    'Технологии, с которыми я работаю.',
  ],
  'Web interfaces': ['Veb-interfeyslar', 'Веб-интерфейсы'],
  'Backend & data': ['Backend va ma’lumotlar', 'Бэкенд и данные'],
  'Mobile & desktop': ['Mobil va ish stoli ilovalari', 'Мобильные и десктопные приложения'],
  'Integrations & tooling': ['Integratsiyalar va vositalar', 'Интеграции и инструменты'],
  'Payments & billing': ['To‘lovlar va hisob-kitoblar', 'Платежи и биллинг'],
  Good: ['Muhim', 'Хорошие'],
  'questions.': ['savollar.', 'вопросы.'],
  'A few things before we say hello.': [
    'Suhbatdan oldin foydali ma’lumotlar.',
    'Несколько ответов перед знакомством.',
  ],
  'What can we build together?': [
    'Birgalikda nimalar yarata olamiz?',
    'Что мы можем создать вместе?',
  ],
  'Web applications, admin dashboards, backend APIs, and mobile apps. My recent work includes EV charging, payment and billing flows, real-time integrations, and queue management. I’m happy to discuss a role on your team or a specific project.':
    [
      'Veb-ilovalar, boshqaruv panellari, backend API va mobil ilovalar. So‘nggi ishlarim elektromobil quvvatlash, to‘lovlar, real vaqt integratsiyalari va navbat boshqaruvini qamrab oladi. Jamoangizdagi ish o‘rni yoki alohida loyihani muhokama qilishga tayyorman.',
      'Веб-приложения, админ-панели, API и мобильные приложения. Последние работы связаны с зарядкой электромобилей, платежами, интеграциями реального времени и очередями. Готов обсудить работу в команде или отдельный проект.',
    ],
  'Do you work across the whole stack?': [
    'Loyihaning barcha qatlamlarida ishlaysizmi?',
    'Вы работаете со всем стеком?',
  ],
  'Yes. I work with React and Next.js on the web, Node.js with NestJS or Fastify for APIs, and Flutter or React Native on mobile. The tools follow the project, its existing architecture, and the people using it.':
    [
      'Ha. Veb uchun React va Next.js, API uchun Node.js, NestJS yoki Fastify, mobil ilovalar uchun Flutter yoki React Native bilan ishlayman. Vositalarni loyiha, uning arxitekturasi va foydalanuvchilariga qarab tanlayman.',
      'Да. Для веба использую React и Next.js, для API — Node.js с NestJS или Fastify, для мобильных приложений — Flutter или React Native. Инструменты выбираю под проект, его архитектуру и пользователей.',
    ],
  'Where can I explore the code?': [
    'Loyihalar kodini qayerda ko‘rish mumkin?',
    'Где можно посмотреть код?',
  ],
  'The Full-stack Monorepo links to its public GitHub repository. Other projects describe my contributions to private repositories. The galleries show actual applications with sample data; open any image to see it in full.':
    [
      'Full-stack Monorepo’ning ochiq GitHub repozitoriysiga havola bor. Boshqa loyihalarda yopiq repozitoriylarga qo‘shgan hissam tasvirlangan. Galereyalarda ilovalarning namuna ma’lumotli haqiqiy rasmlari bor; istalgan rasmni kattalashtirib ko‘rishingiz mumkin.',
      'Full-stack Monorepo ведёт в открытый репозиторий GitHub. Остальные проекты описывают мой вклад в закрытые репозитории. В галереях — настоящие приложения с демоданными; любое изображение можно увеличить.',
    ],
  'What’s the best way to reach you?': [
    'Siz bilan qanday bog‘lansa bo‘ladi?',
    'Как с вами связаться?',
  ],
  'Call +998 99 882 06 41, message me on Telegram, or send an email. Tell me about the role or project and what you’d like to build.':
    [
      '+998 99 882 06 41 raqamiga qo‘ng‘iroq qiling, Telegram yoki elektron pochta orqali yozing. Ish o‘rni yoki loyihangiz va nimalar yaratmoqchi ekaningiz haqida ayting.',
      'Позвоните по номеру +998 99 882 06 41, напишите в Telegram или на почту. Расскажите о вакансии или проекте и о том, что хотите создать.',
    ],
  'A new role. A new idea. A good conversation.': [
    'Yangi ish. Yangi g‘oya. Yaxshi suhbat.',
    'Новая работа. Новая идея. Хороший разговор.',
  ],
  'Let’s make': ['Birgalikda', 'Давайте'],
  something: ['yaxshi mahsulot', 'создавать'],
  'real.': ['yarataylik.', 'настоящее.'],
  'Say hello on Telegram': ['Telegram’da yozish', 'Написать в Telegram'],
  'Call me': ['Qo‘ng‘iroq qilish', 'Позвонить'],
  'Back to top': ['Yuqoriga', 'Наверх'],
  'Back to work': ['Loyihalarga qaytish', 'К проектам'],
  'About me': ['Men haqimda', 'Обо мне'],
  Behind: ['Loyihalar', 'За'],
  'the projects.': ['ortida.', 'проектами.'],
  'A developer, always learning.': [
    'Doim izlanishda bo‘lgan dasturchi.',
    'Разработчик, который продолжает учиться.',
  ],
  'My path': ['Bosib o‘tgan yo‘lim', 'Мой путь'],
  'How I work': ['Qanday ishlayman', 'Как я работаю'],
  'I like understanding how the whole product works: what people see, how data moves, and what happens behind each action. That curiosity has taken my work from frontend interfaces to backend services and mobile apps.':
    [
      'Mahsulotning yaxlit ishlashini tushunish menga yoqadi: foydalanuvchi nimani ko‘radi, ma’lumot qanday harakatlanadi va har bir amal ortida nima bor. Shu qiziqish meni frontend interfeyslaridan backend xizmatlari va mobil ilovalargacha olib keldi.',
      'Мне интересно понимать продукт целиком: что видит человек, как движутся данные и что стоит за каждым действием. Этот интерес привёл меня от фронтенд-интерфейсов к бэкенд-сервисам и мобильным приложениям.',
    ],
  'Things I explore': ['Qiziqish va izlanishlarim', 'Что мне интересно'],
  'Small experiments, real curiosity.': [
    'Kichik tajribalar, katta qiziqish.',
    'Небольшие эксперименты, живой интерес.',
  ],
  'Interfaces in motion': ['Harakatdagi interfeyslar', 'Интерфейсы в движении'],
  'Thoughtful typography, geometric identity, and animation that makes an interface feel clear and natural. This portfolio is one place where I explore those details.':
    [
      'Puxta tipografika, geometrik belgilar va interfeysni tushunarli qiladigan tabiiy animatsiyalar. Ushbu portfolio — shu detallarni sinab ko‘radigan joylarimdan biri.',
      'Продуманная типографика, геометрические знаки и анимация, которая делает интерфейс понятным и естественным. Этот сайт — одно из мест, где я исследую такие детали.',
    ],
  'Playful desktop tools': ['Qiziqarli ish stoli ilovalari', 'Необычные десктопные приложения'],
  'CoucouPet is an experiment with animated companions, AI conversations, and a little personality on the desktop. I enjoy exploring how software can feel more personal.':
    [
      'CoucouPet — jonlantirilgan hamrohlar va sun’iy intellekt bilan suhbatga asoslangan tajriba. Dasturlarni yanada o‘ziga xos qilish imkoniyatlarini o‘rganish menga qiziq.',
      'CoucouPet — эксперимент с анимированными компаньонами и разговорами с ИИ. Мне интересно, как сделать программы более личными и выразительными.',
    ],
  'Everyday systems': ['Kundalik hayot tizimlari', 'Повседневные системы'],
  'Charging an EV, finding a service, waiting in line: I’m drawn to the software behind ordinary moments and the details that make them easier.':
    [
      'Elektromobilni quvvatlash, xizmat topish, navbat kutish — kundalik jarayonlar ortidagi dasturlar va ularni osonlashtiradigan detallar menga qiziq.',
      'Зарядка электромобиля, поиск услуги, ожидание в очереди — мне интересны программы за повседневными действиями и детали, которые упрощают их.',
    ],
  'View my background on LinkedIn': ['LinkedIn’da tajribamni ko‘rish', 'Мой опыт в LinkedIn'],
  'Raimov Xushnudbek | Full-stack & Mobile Developer': [
    'Xushnudbek Raimov | Full-stack va mobil dasturchi',
    'Хушнудбек Раимов | Full-stack и мобильный разработчик',
  ],
  'Full-stack and mobile developer building web platforms, APIs, and mobile apps. Recent work includes EV charging at TOK BOR and Beon, queue management, and desktop experiments.':
    [
      'Veb-platformalar, API va mobil ilovalar yaratuvchi dasturchi. TOK BOR, Beon, navbat boshqaruvi va ish stoli ilovalari bo‘yicha loyihalarim.',
      'Full-stack и мобильный разработчик. Веб-платформы, API и приложения: TOK BOR, Beon, управление очередями и десктопные эксперименты.',
    ],
  'About Xushnudbek Raimov | xushnud.dev': [
    'Xushnudbek Raimov haqida | xushnud.dev',
    'О Хушнудбеке Раимове | xushnud.dev',
  ],
  'Get to know Xushnudbek Raimov: his development journey, interests, and the ideas behind his web, mobile, and desktop projects.':
    [
      'Xushnudbek Raimov bilan tanishing: dasturlashdagi yo‘li, qiziqishlari va veb, mobil hamda ish stoli loyihalari ortidagi g‘oyalar.',
      'Познакомьтесь с Хушнудбеком Раимовым: путь в разработке, интересы и идеи за веб-, мобильными и десктопными проектами.',
    ],
};

export function translate(text: string, locale: Locale): string {
  if (locale === 'en') return text;
  return translations[text]?.[locale === 'uz' ? 0 : 1] ?? text;
}
