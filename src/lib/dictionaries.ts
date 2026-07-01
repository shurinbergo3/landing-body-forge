export type Feature = {
  tag: string;
  title: string;
  text: string;
};

export type FeatureGroup = {
  id: string;
  label: string;
  tiles: Feature[];
};

export type Dict = {
  meta: { title: string; description: string };
  nav: {
    links: { href: string; label: string }[];
    download: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    accentWord: string;
    ghost: string;
    sub: string;
    primary: string;
    secondary: string;
    rating: string;
    badge: string;
  };
  marquee: string[];
  stats: { value: string; label: string }[];
  reframe: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    sub: string;
    points: { title: string; text: string }[];
  };
  loop: {
    eyebrow: string;
    title: string;
    accentWord: string;
    sub: string;
    repeat: string;
    steps: { tag: string; title: string; text: string }[];
  };
  purpose: {
    eyebrow: string;
    title: string;
    accentWord: string;
    sub: string;
    outcomes: { icon: string; title: string; text: string }[];
  };
  library: {
    eyebrow: string;
    title: string;
    accentWord: string;
    sub: string;
    headline: string;
    headlineHint: string;
    categories: { icon: string; title: string; text: string; tag: string }[];
  };
  programs: {
    eyebrow: string;
    title: string;
    accentWord: string;
    sub: string;
    goals: string[];
    points: { title: string; text: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    sub: string;
    groups: FeatureGroup[];
  };
  active: {
    eyebrow: string;
    title: string;
    accentWord: string;
    sub: string;
    points: { title: string; text: string }[];
  };
  ai: {
    eyebrow: string;
    title: string;
    accentWord: string;
    sub: string;
    chat: { role: "user" | "coach"; text: string }[];
    note: string;
    trust: { label: string; value: string; text: string }[];
    readsTitle: string;
    readsSub: string;
    reads: { icon: string; title: string; text: string }[];
    analysisTitle: string;
    analysisSub: string;
    readiness: {
      title: string;
      text: string;
      levels: { tag: string; label: string; text: string }[];
    };
    engines: { icon: string; title: string; text: string }[];
    stylesTitle: string;
    styles: { emoji: string; title: string; text: string }[];
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    accentWord: string;
    sub: string;
    items: { title: string; text: string }[];
  };
  progress: {
    eyebrow: string;
    title: string;
    accentWord: string;
    sub: string;
    cards: { value: string; label: string; hint: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    shots: { src: string; alt: string }[];
  };
  cta: {
    title: string;
    accentWord: string;
    sub: string;
    primary: string;
    secondary: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    sub: string;
    ratingLabel: string;
  };
  blog: {
    nav: string;
    href: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    allTag: string;
    readSuffix: string;
    updated: string;
    backToBlog: string;
    tocTitle: string;
    faqTitle: string;
    relatedTitle: string;
    shareTitle: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  footer: {
    tagline: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    rights: string;
    notes: string[];
    credit: string;
  };
};

const ru: Dict = {
  meta: {
    title: "Body Forge - дневник тренировок, который делает тебя сильнее",
    description:
      "Нативное iOS-приложение для серьёзных тренировок. Журнал подходов в реальном времени, AI-тренер, пульс и калории из Apple Health, таймер отдыха в Dynamic Island и зеркало на Apple Watch.",
  },
  nav: {
    links: [
      { href: "#features", label: "Возможности" },
      { href: "#ai", label: "AI-тренер" },
      { href: "#library", label: "Справочник" },
      { href: "#programs", label: "Программы" },
      { href: "#faq", label: "Вопросы" },
    ],
    download: "Скачать",
    langLabel: "EN",
  },
  hero: {
    eyebrow: "Сила · Данные · Дисциплина",
    titleLines: ["Дневник, который", "делает тебя"],
    accentWord: "сильнее",
    ghost: "FORGE",
    sub: "Каждый подход, пульс и рекорд - в одном месте. Body Forge ведёт тебя от первого повтора до новой формы и не даёт сбиться с курса.",
    primary: "Скачать в App Store",
    secondary: "Как это работает",
    rating: "Отмечено Apple в подборке «Apps We Love»",
    badge: "App Store",
  },
  marquee: [
    "640+ упражнений с техникой",
    "AI-тренер на gpt-5-mini",
    "Dynamic Island",
    "Apple Watch",
    "Apple Health",
    "Офлайн-режим",
    "4 языка",
    "Без рекламы",
  ],
  stats: [
    { value: "640+", label: "упражнений с техникой и видео" },
    { value: "100%", label: "офлайн - данные сперва на устройстве" },
    { value: "4", label: "языка интерфейса" },
    { value: "0", label: "рекламы и навязанных подписок" },
  ],
  reframe: {
    eyebrow: "Не просто дневник",
    titleLead: "Другие приложения записывают.",
    titleAccent: "Body Forge понимает.",
    sub: "Обычный трекер хранит твои цифры и оставляет тебя с ними один на один. Body Forge каждый день читает эти данные, находит смысл и говорит, что делать дальше.",
    points: [
      {
        title: "Видит контекст",
        text: "Не отдельный подход, а всю картину: тренировки, сон, пульс и восстановление вместе.",
      },
      {
        title: "Считает готовность",
        text: "Каждое утро выносит один вердикт - можно грузиться или сегодня беречь себя.",
      },
      {
        title: "Говорит, что делать",
        text: "Не графики, которые надо расшифровывать, а конкретный шаг: +2.5 кг, добить повторы или делоад.",
      },
    ],
  },
  loop: {
    eyebrow: "Как это работает",
    title: "Один цикл, который крутится",
    accentWord: "каждый день",
    sub: "Ты просто тренируешься и живёшь. Всё остальное приложение делает само - и с каждым днём знает тебя лучше.",
    repeat: "И так каждый день - точнее с каждым разом",
    steps: [
      {
        tag: "01",
        title: "Собирает данные",
        text: "Подходы, вес и рекорды с тренировки. Пульс, сон, HRV, шаги и калории - из Apple Health. Замеры и вес тела. Ничего не нужно вносить руками.",
      },
      {
        tag: "02",
        title: "ИИ анализирует",
        text: "Смотрит динамику за 6 недель, ловит плато, считает готовность из сна и стресса, сверяет нагрузку недели. Здоровье - в приоритете над прогрессом.",
      },
      {
        tag: "03",
        title: "Даёт решение",
        text: "Возвращает не абстракции, а конкретику: сколько ставить сегодня, где добавить, где отступить и когда пора отдохнуть.",
      },
    ],
  },
  purpose: {
    eyebrow: "Зачем это всё",
    title: "Чтобы ты рос стабильно, а не",
    accentWord: "наугад",
    sub: "Весь этот анализ существует ради одного - чтобы каждая тренировка вела вперёд, а не по кругу. Без догадок, без перетрена, без потерянных месяцев.",
    outcomes: [
      {
        icon: "📈",
        title: "Нет застоя",
        text: "Детектор плато замечает, где вес встал, раньше тебя - и предлагает выход, пока ты не потерял мотивацию.",
      },
      {
        icon: "🛡",
        title: "Нет перетрена",
        text: "В красный день приложение само срежет нагрузку. Прогресс не ломается о выгорание и травмы.",
      },
      {
        icon: "🎯",
        title: "Рост по данным",
        text: "Прибавка веса и повторов - не на ощущениях, а по реальной динамике твоих топ-упражнений.",
      },
      {
        icon: "💪",
        title: "Форма, которую видно",
        text: "Замеры и вес во времени показывают, что тело меняется - а не только цифры в дневнике.",
      },
    ],
  },
  library: {
    eyebrow: "Справочник",
    title: "База знаний,",
    accentWord: "а не только дневник",
    sub: "Внутри - целая библиотека, чтобы не гуглить на ходу. Техника, добавки, гормоны, сон и питание собраны в одном месте и объяснены человеческим языком.",
    headline: "640+ упражнений",
    headlineHint: "техника, разбор и видео · 9 категорий",
    categories: [
      {
        icon: "🏋",
        title: "Упражнения",
        text: "Техника, целевые мышцы и видео-разборы движений. Понятно, как делать правильно.",
        tag: "640+ · 9 категорий",
      },
      {
        icon: "📋",
        title: "Тренировки",
        text: "Гид по построению занятия: как собрать сплит, сколько подходов и как вести прогрессию.",
        tag: "Гид",
      },
      {
        icon: "💊",
        title: "Бады",
        text: "Разбор добавок без маркетинга: что реально работает, как и зачем принимать.",
        tag: "Топ добавок",
      },
      {
        icon: "❤",
        title: "Гормоны",
        text: "Как тестостерон, кортизол и сон влияют на рост и восстановление - и что от тебя зависит.",
        tag: "Влияние на жизнь",
      },
      {
        icon: "🌙",
        title: "Сон",
        text: "Почему без сна нет мышц. Как восстановление решает больше, чем лишний подход.",
        tag: "Восстановление",
      },
      {
        icon: "🥗",
        title: "Питание",
        text: "Белок, калории и дефицит по делу. Как есть под свою цель без фанатизма и голодовок.",
        tag: "Под цель",
      },
    ],
  },
  programs: {
    eyebrow: "Программы",
    title: "Готовый план под",
    accentWord: "любую цель",
    sub: "29 программ на массу, силу и жиросжигание - от первого дня в зале до продвинутого уровня. Активируй за пару касаний или собери свою.",
    goals: ["Масса", "Сила", "Жиросжигание", "Для новичков", "Продвинутым"],
    points: [
      {
        title: "По уровню и опыту",
        text: "От «без опыта» до 6+ месяцев. Программа честно говорит, на кого она рассчитана.",
      },
      {
        title: "Активная программа ведёт",
        text: "Приложение знает, какой сегодня день сплита, и открывает тренировку без лишних вопросов.",
      },
      {
        title: "Или собери свою",
        text: "Сплиты, суперсеты, силовые, кардио и круговые - конструктор под твой график.",
      },
    ],
  },
  features: {
    eyebrow: "Возможности",
    title: "Всё для тренировки. Ничего лишнего.",
    sub: "Каждый экран сделан под управление одной рукой - прямо между подходами.",
    groups: [
      {
        id: "training",
        label: "Тренировка",
        tiles: [
          {
            tag: "Журнал",
            title: "Подходы в реальном времени",
            text: "Вес, повторы и отдых фиксируются мгновенно. Стрелки роста сравнивают подход с прошлой сессией прямо на лету.",
          },
          {
            tag: "Программы",
            title: "Готовый план на каждый день",
            text: "Сплиты, суперсеты, силовые, кардио и круговые. Активируй программу за пару касаний или собери свою.",
          },
          {
            tag: "Рекорды",
            title: "Личные рекорды сами по себе",
            text: "Приложение замечает новый максимум и отмечает его без твоего участия.",
          },
          {
            tag: "Отдых",
            title: "Таймер отдыха, который не теряется",
            text: "Обратный отсчёт живёт в Dynamic Island и на экране блокировки, а хаптик подскажет, когда пора.",
          },
        ],
      },
      {
        id: "health",
        label: "Здоровье",
        tiles: [
          {
            tag: "Apple Health",
            title: "Пульс и калории вживую",
            text: "Сердечный ритм и активные калории стримятся в шапку тренировки прямо во время работы.",
          },
          {
            tag: "Кольца",
            title: "Кольца активности закрываются сами",
            text: "Тренировка пишется в Apple Health и закрывает кольца Apple Watch без лишних движений.",
          },
          {
            tag: "Сон",
            title: "Сон и восстановление",
            text: "Данные сна и шагов подтягиваются автоматически и влияют на рекомендации тренера.",
          },
          {
            tag: "Замеры",
            title: "Состав тела во времени",
            text: "Вес и замеры с визуализацией прогресса - видно, как меняется форма.",
          },
        ],
      },
      {
        id: "progress",
        label: "Прогресс",
        tiles: [
          {
            tag: "Графики",
            title: "Рост силы на графиках",
            text: "Детальная аналитика по каждому упражнению: где прибавил, где встал.",
          },
          {
            tag: "Серии",
            title: "Серии и недельная цель",
            text: "Стрики и цель по тренировкам держат ритм. Награды за то, что приходишь.",
          },
          {
            tag: "Уровни",
            title: "Уровни и награды",
            text: "Опыт капает за каждую сессию. От «Любителя» до золота - прогресс ощущается.",
          },
          {
            tag: "Справочник",
            title: "База знаний под рукой",
            text: "640+ упражнений с техникой и видео, плюс гайды по бадам, гормонам, сну и питанию.",
          },
        ],
      },
    ],
  },
  active: {
    eyebrow: "Живая тренировка",
    title: "От гантели до данных -",
    accentWord: "ноль трения",
    sub: "С момента, как взял вес, до момента, как поставил - только ты, штанга и цифры. Никаких лишних касаний.",
    points: [
      {
        title: "Прошлая сессия перед глазами",
        text: "Видишь, сколько поднимал в прошлый раз, и сразу понимаешь, куда добавить.",
      },
      {
        title: "Суперсеты и любые типы",
        text: "Силовые, кардио, круговые, суперсеты - всё в одном потоке без переключений.",
      },
      {
        title: "Карточка тренировки на шеринг",
        text: "Красивая карточка с итогами сессии - поделиться в один тап.",
      },
    ],
  },
  ai: {
    eyebrow: "AI-тренер",
    title: "Тренер, который",
    accentWord: "знает твой контекст",
    sub: "Диалоговый коуч на OpenAI gpt-5-mini сам собирает твои тренировки, замеры, сон и данные Apple Health. Ничего копировать не нужно - просто спрашивай. У него два приоритета: сначала здоровье, потом видимый прогресс.",
    chat: [
      { role: "user", text: "Разбери мою последнюю тренировку" },
      {
        role: "coach",
        text: "Вертикальная тяга блока стабильно держит 82.5 кг × 10/9/8 - за 3 недели плюс подход. Готовность сегодня зелёная, так что на жиме добиваешь до 8 повторов и потом +2.5 кг.",
      },
      { role: "user", text: "Спал 5 часов, идти на тяжёлую?" },
      {
        role: "coach",
        text: "5.0 ч против твоих обычных 7.1 - готовность падает до жёлтой. Веса с прошлой сессии не повышаем, работаем на технику и держимся в 1-2 повторах от отказа.",
      },
    ],
    note: "Ключ OpenAI хранится только на сервере, каждый запрос подписан твоим Firebase ID-токеном - в приложении ключа нет. Модель и глубину рассуждений выбирает сервер, поэтому её можно менять без обновления в App Store.",
    trust: [
      {
        label: "Модель",
        value: "gpt-5-mini",
        text: "OpenAI через защищённый Vercel-прокси",
      },
      {
        label: "Ключ",
        value: "на сервере",
        text: "в приложении его нет, запрос подписан Firebase-токеном",
      },
      {
        label: "Гибкость",
        value: "без апдейта",
        text: "модель меняется на сервере, не в App Store",
      },
    ],
    readsTitle: "Что тренер видит сам",
    readsSub: "Контекст собирается автоматически перед каждым ответом - ты ничего не вставляешь руками.",
    reads: [
      {
        icon: "🏋",
        title: "Последние тренировки",
        text: "До 10 сессий: последняя - по подходам с твоими заметками, старые - сжато. Видит объём, пульс и калории.",
      },
      {
        icon: "📋",
        title: "Активная программа",
        text: "Знает твой сплит, упражнения и какой день сегодня - советует по плану, а не в вакууме.",
      },
      {
        icon: "❤",
        title: "Apple Health",
        text: "Пульс покоя, HRV, VO₂max, шаги, минуты активности и сон - прошлая ночь и среднее за неделю.",
      },
      {
        icon: "📐",
        title: "Тело и вес",
        text: "Замеры (грудь, бицепс и т.д.) и тренд веса за 7 и 30 дней, рост, BMI.",
      },
      {
        icon: "🏃",
        title: "Внешние тренировки",
        text: "Бег, велосипед, Apple Watch, Strava из Apple Health за 14 дней - чтобы учитывать общую нагрузку недели.",
      },
      {
        icon: "📊",
        title: "Статистика и серии",
        text: "Всего тренировок, за неделю, среднее за 4 недели, объём за 30 дней, текущая и рекордная серии.",
      },
    ],
    analysisTitle: "Как он анализирует",
    analysisSub: "Не общая теория, а решения по твоим реальным цифрам - и в строгом порядке, поэтому советы никогда не противоречат друг другу.",
    readiness: {
      title: "Вердикт готовности на сегодня",
      text: "Перед нагрузкой приложение детерминированно считает один вердикт из сна, заметок о боли, индекса стресса и HRV. Этот же вердикт прокидывается во все ответы - поэтому тренер физически не может посоветовать прибавку в день, когда надо отдыхать.",
      levels: [
        {
          tag: "green",
          label: "Зелёный · готов",
          text: "Восстановление в норме - можно двигать прогрессию вперёд.",
        },
        {
          tag: "amber",
          label: "Жёлтый · умеренно",
          text: "Держим веса прошлой сессии, без прибавок. Техника и темп.",
        },
        {
          tag: "red",
          label: "Красный · низкая",
          text: "Снижаем рабочий вес на 10-15%, режем объём. Никаких прибавок.",
        },
      ],
    },
    engines: [
      {
        icon: "📈",
        title: "Двойная прогрессия",
        text: "Сначала добиваешь повторы до верха диапазона, потом +вес. Подсказки конкретные: +2.5 кг, +5 кг, +1 повтор или +1 подход - и только в зелёный день.",
      },
      {
        icon: "⚠",
        title: "Детектор плато",
        text: "Замечает упражнения, где лучший подход (вес × повторы) не растёт больше двух недель, и предлагает делоад, смену темпа, диапазона или замену.",
      },
      {
        icon: "🔄",
        title: "Делоад и периодизация",
        text: "Если вес рос несколько недель подряд без отката - советует одну лёгкую сессию, чтобы закрепить, и подаёт это как умную тактику, а не откат.",
      },
      {
        icon: "🧠",
        title: "Память на 6 недель",
        text: "Держит траекторию топ-упражнений по неделям и судит об импульсе, регрессе и прогрессе по динамике, а не по одной сессии.",
      },
      {
        icon: "🩹",
        title: "Стоп при боли",
        text: "Замечает в заметках боль, травму или болезнь - нагрузку не повышает, предлагает альтернативу или отдых и советует врача. Диагнозы не ставит.",
      },
    ],
    stylesTitle: "Четыре характера на выбор",
    styles: [
      { emoji: "🪖", title: "Жёсткий", text: "Без сантиментов. Ты не на отдыхе." },
      { emoji: "🤝", title: "Дружелюбный", text: "Поддержка и спокойный тон." },
      { emoji: "🧪", title: "Технарь", text: "Цифры, биомеханика, RPE." },
      { emoji: "🔥", title: "Мотиватор", text: "Эмоции и энергия. Поджигает." },
    ],
  },
  ecosystem: {
    eyebrow: "Экосистема",
    title: "Всё под рукой -",
    accentWord: "и на запястье",
    sub: "Dynamic Island, Apple Watch и AI-тренер работают как одно целое.",
    items: [
      {
        title: "Dynamic Island",
        text: "Таймер и пульс всегда на экране, даже когда приложение свёрнуто.",
      },
      {
        title: "Apple Watch",
        text: "Тренировка зеркалится на часы, хаптик на запястье в конце отдыха.",
      },
      {
        title: "Apple Health",
        text: "Приложение подтягивает данные из Apple Health - пульс, активность, сон и вес.",
      },
      {
        title: "AI-тренер",
        text: "Анализирует данные из Apple Health и твои тренировки, разбирает каждое занятие и отвечает по реальным цифрам.",
      },
    ],
  },
  progress: {
    eyebrow: "Прогресс",
    title: "Уровень растёт с",
    accentWord: "каждой тренировкой",
    sub: "Форма, серия и награды в одном месте. Видно, что движешься вперёд.",
    cards: [
      { value: "21", label: "тренировка", hint: "14 дней подряд в ритме" },
      { value: "26ч 43м", label: "под нагрузкой", hint: "общее время за период" },
      { value: "337", label: "подходов", hint: "записано без пропусков" },
      { value: "Золото", label: "следующая награда", hint: "ещё 9 до цели" },
    ],
  },
  gallery: {
    eyebrow: "Внутри приложения",
    title: "Посмотри, как это выглядит",
    shots: [
      { src: "02-active", alt: "Активная тренировка" },
      { src: "03-programs", alt: "Программы тренировок" },
      { src: "04-library", alt: "Справочник упражнений" },
      { src: "05-progress", alt: "Прогресс и награды" },
      { src: "06-statistics", alt: "Статистика" },
    ],
  },
  cta: {
    title: "Возьми вес.",
    accentWord: "Остальное - на нас.",
    sub: "Скачай Body Forge и преврати каждую тренировку в данные, которые ведут к новой форме.",
    primary: "Скачать в App Store",
    secondary: "Открыть возможности",
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Коротко о главном",
    items: [
      {
        q: "Нужна ли подписка?",
        a: "Нет навязанных подписок и рекламы. Скачиваешь и тренируешься.",
      },
      {
        q: "Работает ли без интернета?",
        a: "Да. Данные сперва живут на устройстве, а при появлении сети синхронизируются в облако.",
      },
      {
        q: "Нужны ли Apple Watch?",
        a: "Нет, они опциональны. С часами получаешь хаптик отдыха и пульс на запястье, но всё работает и без них.",
      },
      {
        q: "Какие языки поддерживаются?",
        a: "Русский, English, Polski и Deutsch. Язык переключается внутри приложения, независимо от системного.",
      },
      {
        q: "Что за AI-тренер?",
        a: "Диалоговый коуч на OpenAI gpt-5-mini. Он сам собирает контекст из твоих тренировок - ключ хранится на сервере, не в приложении.",
      },
    ],
  },
  reviews: {
    eyebrow: "Отзывы",
    title: "Что говорят в App Store",
    sub: "Живые оценки пользователей - подтягиваются прямо из App Store.",
    ratingLabel: "средняя оценка на основе {count} отзывов в App Store",
  },
  blog: {
    nav: "Блог",
    href: "/ru/blog",
    eyebrow: "Журнал Body Forge",
    title: "Как тренироваться так, чтобы это работало",
    subtitle: "Разборы прогрессии, восстановления и техники без воды. Пиши каждый подход, читай своё тело по данным и не топчись на месте.",
    allTag: "Все статьи",
    readSuffix: "мин чтения",
    updated: "Обновлено",
    backToBlog: "Все статьи",
    tocTitle: "В этой статье",
    faqTitle: "Частые вопросы",
    relatedTitle: "Читать дальше",
    shareTitle: "Поделиться",
    ctaTitle: "Хватит тренироваться на память",
    ctaText: "Body Forge пишет каждый подход, ведёт прогрессию и держит тебя в курсе восстановления. Бесплатно, без рекламы и навязанных подписок.",
    ctaButton: "Скачать в App Store",
  },
  footer: {
    tagline: "Сила · Данные · Дисциплина",
    columns: [
      {
        title: "Продукт",
        links: [
          { label: "Возможности", href: "#features" },
          { label: "AI-тренер", href: "#ai" },
          { label: "Блог", href: "/ru/blog" },
          { label: "Экосистема", href: "#ecosystem" },
          { label: "Вопросы", href: "#faq" },
        ],
      },
      {
        title: "Поддержка",
        links: [
          { label: "Написать в поддержку", href: "mailto:alex@buildbyalex.com" },
          { label: "Политика конфиденциальности", href: "/privacy/ru" },
          { label: "App Store", href: "https://apps.apple.com/ru/app/id6761138589" },
        ],
      },
    ],
    rights: "Body Forge. Все права защищены.",
    notes: [
      "Требуется iOS 17.0+. Apple Watch (watchOS 10.0+) опционально.",
      "Apple, App Store, Apple Watch, Apple Health и Dynamic Island - товарные знаки Apple Inc.",
    ],
    credit: "Сайт разработан в",
  },
};

const en: Dict = {
  meta: {
    title: "Body Forge - the workout log that makes you stronger",
    description:
      "A native iOS app for serious lifters. Real-time set logging, an AI coach, live heart rate and calories from Apple Health, a rest timer in the Dynamic Island and an Apple Watch mirror.",
  },
  nav: {
    links: [
      { href: "#features", label: "Features" },
      { href: "#ai", label: "AI Coach" },
      { href: "#library", label: "Library" },
      { href: "#programs", label: "Programs" },
      { href: "#faq", label: "FAQ" },
    ],
    download: "Download",
    langLabel: "RU",
  },
  hero: {
    eyebrow: "Strength · Data · Discipline",
    titleLines: ["The log that", "makes you"],
    accentWord: "stronger",
    ghost: "FORGE",
    sub: "Every set, heartbeat and personal record in one place. Body Forge takes you from the first rep to a new physique and keeps you on track.",
    primary: "Download on the App Store",
    secondary: "See how it works",
    rating: "Featured by Apple in “Apps We Love”",
    badge: "App Store",
  },
  marquee: [
    "640+ exercises with form",
    "AI coach on gpt-5-mini",
    "Dynamic Island",
    "Apple Watch",
    "Apple Health",
    "Offline mode",
    "4 languages",
    "No ads",
  ],
  stats: [
    { value: "640+", label: "exercises with form and video" },
    { value: "100%", label: "offline - your data lives on device first" },
    { value: "4", label: "interface languages" },
    { value: "0", label: "ads or forced subscriptions" },
  ],
  reframe: {
    eyebrow: "Not just a log",
    titleLead: "Other apps record.",
    titleAccent: "Body Forge understands.",
    sub: "A plain tracker stores your numbers and leaves you alone with them. Body Forge reads that data every day, finds the meaning and tells you what to do next.",
    points: [
      {
        title: "Sees the context",
        text: "Not a single set, but the whole picture: training, sleep, heart rate and recovery together.",
      },
      {
        title: "Reads your readiness",
        text: "Every morning it gives one verdict - push today, or protect yourself.",
      },
      {
        title: "Tells you what to do",
        text: "Not charts to decode, but a concrete move: +2.5 kg, fill the reps or deload.",
      },
    ],
  },
  loop: {
    eyebrow: "How it works",
    title: "One loop that runs",
    accentWord: "every day",
    sub: "You just train and live. The app does the rest by itself - and knows you better with every day.",
    repeat: "And it repeats every single day - sharper each time",
    steps: [
      {
        tag: "01",
        title: "It collects data",
        text: "Sets, weight and records from your workout. Heart rate, sleep, HRV, steps and calories from Apple Health. Body measurements. Nothing typed in by hand.",
      },
      {
        tag: "02",
        title: "The AI analyzes",
        text: "It reads a 6-week trend, catches plateaus, computes readiness from sleep and stress, weighs your weekly load. Health comes before progress.",
      },
      {
        tag: "03",
        title: "It gives a decision",
        text: "Back comes no abstraction, but specifics: what to load today, where to push, where to back off and when to rest.",
      },
    ],
  },
  purpose: {
    eyebrow: "What it's all for",
    title: "So you grow steadily, not by",
    accentWord: "guesswork",
    sub: "All this analysis exists for one thing - so every workout moves you forward, not in circles. No guessing, no overtraining, no lost months.",
    outcomes: [
      {
        icon: "📈",
        title: "No stalling",
        text: "The plateau detector spots a stuck lift before you do - and offers a way out before you lose motivation.",
      },
      {
        icon: "🛡",
        title: "No overtraining",
        text: "On a red day the app trims the load itself. Progress doesn't break on burnout or injury.",
      },
      {
        icon: "🎯",
        title: "Data-driven gains",
        text: "Adding weight and reps isn't a feeling - it's the real trend of your top lifts.",
      },
      {
        icon: "💪",
        title: "A shape you can see",
        text: "Measurements and weight over time show your body is changing - not just numbers in a log.",
      },
    ],
  },
  library: {
    eyebrow: "Library",
    title: "A knowledge base,",
    accentWord: "not just a log",
    sub: "Inside is a whole library so you don't google mid-set. Form, supplements, hormones, sleep and nutrition, all in one place and explained in plain language.",
    headline: "640+ exercises",
    headlineHint: "form, breakdown and video · 9 categories",
    categories: [
      {
        icon: "🏋",
        title: "Exercises",
        text: "Form, target muscles and video breakdowns of the movements. Clear on how to do it right.",
        tag: "640+ · 9 categories",
      },
      {
        icon: "📋",
        title: "Training",
        text: "A guide to building a session: how to set a split, how many sets and how to progress.",
        tag: "Guide",
      },
      {
        icon: "💊",
        title: "Supplements",
        text: "Supplements without the marketing: what actually works, how and why to take it.",
        tag: "Top picks",
      },
      {
        icon: "❤",
        title: "Hormones",
        text: "How testosterone, cortisol and sleep shape growth and recovery - and what's in your control.",
        tag: "Real impact",
      },
      {
        icon: "🌙",
        title: "Sleep",
        text: "Why there's no muscle without sleep. How recovery decides more than an extra set.",
        tag: "Recovery",
      },
      {
        icon: "🥗",
        title: "Nutrition",
        text: "Protein, calories and deficit that make sense. How to eat for your goal without starving.",
        tag: "For your goal",
      },
    ],
  },
  programs: {
    eyebrow: "Programs",
    title: "A ready plan for",
    accentWord: "any goal",
    sub: "29 programs for mass, strength and fat loss - from your first day in the gym to advanced. Activate in two taps or build your own.",
    goals: ["Mass", "Strength", "Fat loss", "For beginners", "For advanced"],
    points: [
      {
        title: "By level and experience",
        text: "From no experience to 6+ months. Each program is honest about who it's for.",
      },
      {
        title: "The active program leads",
        text: "The app knows which split day is today and opens your workout with no questions asked.",
      },
      {
        title: "Or build your own",
        text: "Splits, supersets, strength, cardio and circuits - a builder for your schedule.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Everything for the lift. Nothing else.",
    sub: "Every screen is built for one-handed use - right between your sets.",
    groups: [
      {
        id: "training",
        label: "Training",
        tiles: [
          {
            tag: "Logging",
            title: "Sets in real time",
            text: "Weight, reps and rest are captured instantly. Trend arrows compare each set against your last session on the fly.",
          },
          {
            tag: "Programs",
            title: "A ready plan for every day",
            text: "Splits, supersets, strength, cardio and circuits. Activate a program in two taps or build your own.",
          },
          {
            tag: "Records",
            title: "Personal records on autopilot",
            text: "The app spots a new max and logs it without you lifting a finger.",
          },
          {
            tag: "Rest",
            title: "A rest timer that never gets lost",
            text: "The countdown lives in the Dynamic Island and on the Lock Screen, with a haptic when it is time.",
          },
        ],
      },
      {
        id: "health",
        label: "Health",
        tiles: [
          {
            tag: "Apple Health",
            title: "Live heart rate and calories",
            text: "Heart rate and active calories stream into the workout header while you train.",
          },
          {
            tag: "Rings",
            title: "Activity rings close themselves",
            text: "Workouts write to Apple Health and close your Apple Watch rings with zero extra steps.",
          },
          {
            tag: "Sleep",
            title: "Sleep and recovery",
            text: "Sleep and step data sync automatically and feed into your coach's advice.",
          },
          {
            tag: "Body",
            title: "Body composition over time",
            text: "Weight and measurements with progress visuals - see your shape change.",
          },
        ],
      },
      {
        id: "progress",
        label: "Progress",
        tiles: [
          {
            tag: "Charts",
            title: "Strength growth on charts",
            text: "Detailed analytics per exercise: where you gained and where you stalled.",
          },
          {
            tag: "Streaks",
            title: "Streaks and a weekly goal",
            text: "Streaks and a workout goal keep the rhythm. You're rewarded for showing up.",
          },
          {
            tag: "Levels",
            title: "Levels and rewards",
            text: "XP drips in for every session. From Amateur to gold - progress you can feel.",
          },
          {
            tag: "Library",
            title: "A knowledge base on hand",
            text: "640+ exercises with form and video, plus guides on supplements, hormones, sleep and nutrition.",
          },
        ],
      },
    ],
  },
  active: {
    eyebrow: "Live workout",
    title: "From the iron to the data -",
    accentWord: "zero friction",
    sub: "From the moment you grip the bar to the moment you rack it - just you, the iron and the numbers. No wasted taps.",
    points: [
      {
        title: "Last session in front of you",
        text: "See what you lifted last time and know instantly where to push.",
      },
      {
        title: "Supersets and any type",
        text: "Strength, cardio, circuits, supersets - all in one flow, no switching.",
      },
      {
        title: "A shareable workout card",
        text: "A clean card with your session summary - share it in one tap.",
      },
    ],
  },
  ai: {
    eyebrow: "AI Coach",
    title: "A coach that",
    accentWord: "knows your context",
    sub: "A conversational coach on OpenAI gpt-5-mini pulls your workouts, measurements, sleep and Apple Health data by itself. Nothing to copy - just ask. It has two priorities: health first, then visible progress.",
    chat: [
      { role: "user", text: "Break down my last workout" },
      {
        role: "coach",
        text: "Your lat pulldown holds 82.5 kg × 10/9/8 - up a set over 3 weeks. Today's readiness is green, so fill the bench to 8 reps, then go +2.5 kg.",
      },
      { role: "user", text: "Slept 5 hours, should I go heavy?" },
      {
        role: "coach",
        text: "5.0h vs your usual 7.1 drops readiness to amber. Hold last session's weights, work technique and stay 1-2 reps shy of failure.",
      },
    ],
    note: "The OpenAI key stays on the server, every request is signed with your Firebase ID token - there's no key in the app. The server picks the model and reasoning depth, so it can change with no App Store update.",
    trust: [
      {
        label: "Model",
        value: "gpt-5-mini",
        text: "OpenAI via a secured Vercel proxy",
      },
      {
        label: "Key",
        value: "server-side",
        text: "never in the app, every request is Firebase-signed",
      },
      {
        label: "Flexibility",
        value: "no update",
        text: "the model changes on the server, not in the App Store",
      },
    ],
    readsTitle: "What the coach sees on its own",
    readsSub: "The context is built automatically before every reply - you never paste anything in by hand.",
    reads: [
      {
        icon: "🏋",
        title: "Recent workouts",
        text: "Up to 10 sessions: the latest set-by-set with your notes, older ones compact. It sees volume, heart rate and calories.",
      },
      {
        icon: "📋",
        title: "Active program",
        text: "It knows your split, your exercises and which day is today - advice fits the plan, not a vacuum.",
      },
      {
        icon: "❤",
        title: "Apple Health",
        text: "Resting HR, HRV, VO₂max, steps, exercise minutes and sleep - last night and the weekly average.",
      },
      {
        icon: "📐",
        title: "Body and weight",
        text: "Measurements (chest, arm, etc.) and your weight trend over 7 and 30 days, height, BMI.",
      },
      {
        icon: "🏃",
        title: "External workouts",
        text: "Running, cycling, Apple Watch, Strava from Apple Health over 14 days - to weigh your total weekly load.",
      },
      {
        icon: "📊",
        title: "Stats and streaks",
        text: "Total workouts, this week, the 4-week average, 30-day volume, your current and longest streaks.",
      },
    ],
    analysisTitle: "How it analyzes",
    analysisSub: "Not generic theory - decisions on your real numbers, applied in a strict order, so the advice never contradicts itself.",
    readiness: {
      title: "Today's readiness verdict",
      text: "Before any load, the app deterministically computes one verdict from sleep, pain notes, the stress index and HRV. That same verdict flows into every reply - so the coach physically cannot suggest a bump on a day you should be resting.",
      levels: [
        {
          tag: "green",
          label: "Green · ready",
          text: "Recovery is fine - you can move the progression forward.",
        },
        {
          tag: "amber",
          label: "Amber · moderate",
          text: "Hold last session's weights, no increases. Technique and tempo.",
        },
        {
          tag: "red",
          label: "Red · low",
          text: "Drop working load 10-15%, trim volume. No increases of any kind.",
        },
      ],
    },
    engines: [
      {
        icon: "📈",
        title: "Double progression",
        text: "Fill the reps to the top of the range first, then add load. Suggestions are concrete: +2.5 kg, +5 kg, +1 rep or +1 set - and only on a green day.",
      },
      {
        icon: "⚠",
        title: "Plateau detector",
        text: "Spots lifts whose best set (weight × reps) hasn't moved in over two weeks and proposes a deload, a tempo change, a range tweak or a swap.",
      },
      {
        icon: "🔄",
        title: "Deload and periodization",
        text: "If a lift has climbed for weeks with no back-off, it suggests one lighter session to consolidate - framed as smart tactics, not a setback.",
      },
      {
        icon: "🧠",
        title: "6-week memory",
        text: "It keeps the trajectory of your top lifts by week and judges momentum, regression and progress from the trend, not a single session.",
      },
      {
        icon: "🩹",
        title: "Pain stop",
        text: "It catches pain, injury or illness in your notes - never pushes load, offers an alternative or rest, and points you to a doctor. It never diagnoses.",
      },
    ],
    stylesTitle: "Four personalities to pick from",
    styles: [
      { emoji: "🪖", title: "Strict", text: "No sentiment. You're not on vacation." },
      { emoji: "🤝", title: "Friendly", text: "Support and a calm tone." },
      { emoji: "🧪", title: "Technical", text: "Numbers, biomechanics, RPE." },
      { emoji: "🔥", title: "Motivator", text: "Emotion and energy. Lights you up." },
    ],
  },
  ecosystem: {
    eyebrow: "Ecosystem",
    title: "Everything on hand -",
    accentWord: "and on your wrist",
    sub: "The Dynamic Island, Apple Watch and AI coach work as one.",
    items: [
      {
        title: "Dynamic Island",
        text: "Timer and heart rate always on screen, even when the app is in the background.",
      },
      {
        title: "Apple Watch",
        text: "The workout mirrors to your watch, with a haptic on the wrist when rest ends.",
      },
      {
        title: "Apple Health",
        text: "The app pulls your Apple Health data - heart rate, activity, sleep and weight.",
      },
      {
        title: "AI Coach",
        text: "Analyzes your Apple Health data and workouts, breaks down every session and answers based on real numbers.",
      },
    ],
  },
  progress: {
    eyebrow: "Progress",
    title: "Your level grows with",
    accentWord: "every workout",
    sub: "Form, streak and rewards in one place. You can see you're moving forward.",
    cards: [
      { value: "21", label: "workouts", hint: "14 days in a row in rhythm" },
      { value: "26h 43m", label: "under load", hint: "total time for the period" },
      { value: "337", label: "sets", hint: "logged without a miss" },
      { value: "Gold", label: "next reward", hint: "9 more to the goal" },
    ],
  },
  gallery: {
    eyebrow: "Inside the app",
    title: "See how it looks",
    shots: [
      { src: "02-active", alt: "Active workout" },
      { src: "03-programs", alt: "Workout programs" },
      { src: "04-library", alt: "Exercise library" },
      { src: "05-progress", alt: "Progress and rewards" },
      { src: "06-statistics", alt: "Statistics" },
    ],
  },
  cta: {
    title: "Grip the iron.",
    accentWord: "We've got the rest.",
    sub: "Download Body Forge and turn every workout into data that drives a new physique.",
    primary: "Download on the App Store",
    secondary: "Explore features",
  },
  faq: {
    eyebrow: "FAQ",
    title: "The short version",
    items: [
      {
        q: "Do I need a subscription?",
        a: "No forced subscriptions and no ads. Download it and train.",
      },
      {
        q: "Does it work offline?",
        a: "Yes. Your data lives on the device first and syncs to the cloud when a network is available.",
      },
      {
        q: "Do I need an Apple Watch?",
        a: "No, it's optional. With a watch you get the rest haptic and heart rate on your wrist, but everything works without one.",
      },
      {
        q: "Which languages are supported?",
        a: "Russian, English, Polish and German. The language switches inside the app, independent of the system locale.",
      },
      {
        q: "What is the AI coach?",
        a: "A conversational coach on OpenAI gpt-5-mini. It builds context from your workouts by itself - the key stays on the server, not in the app.",
      },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What people say on the App Store",
    sub: "Real ratings from users - pulled straight from the App Store.",
    ratingLabel: "average rating from {count} App Store reviews",
  },
  blog: {
    nav: "Blog",
    href: "/blog",
    eyebrow: "The Body Forge Journal",
    title: "How to train so it actually works",
    subtitle: "No-fluff breakdowns of progression, recovery and technique. Log every set, read your body from the data and stop spinning your wheels.",
    allTag: "All posts",
    readSuffix: "min read",
    updated: "Updated",
    backToBlog: "All posts",
    tocTitle: "In this article",
    faqTitle: "Frequently asked",
    relatedTitle: "Keep reading",
    shareTitle: "Share",
    ctaTitle: "Stop training from memory",
    ctaText: "Body Forge logs every set, drives your progression and keeps you honest about recovery. Free, no ads, no forced subscriptions.",
    ctaButton: "Download on the App Store",
  },
  footer: {
    tagline: "Strength · Data · Discipline",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "AI Coach", href: "#ai" },
          { label: "Blog", href: "/blog" },
          { label: "Ecosystem", href: "#ecosystem" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Contact support", href: "mailto:alex@buildbyalex.com" },
          { label: "Privacy Policy", href: "/privacy/en" },
          { label: "App Store", href: "https://apps.apple.com/us/app/id6761138589" },
        ],
      },
    ],
    rights: "Body Forge. All rights reserved.",
    notes: [
      "Requires iOS 17.0+. Apple Watch (watchOS 10.0+) optional.",
      "Apple, App Store, Apple Watch, Apple Health and Dynamic Island are trademarks of Apple Inc.",
    ],
    credit: "Site crafted by",
  },
};

export const dictionaries: Record<"ru" | "en", Dict> = { ru, en };
