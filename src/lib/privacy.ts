export const privacyLocales = ["en", "ru", "de", "pl"] as const;
export type PrivacyLocale = (typeof privacyLocales)[number];

export function isPrivacyLocale(value: string): value is PrivacyLocale {
  return (privacyLocales as readonly string[]).includes(value);
}

export const privacyLangLabels: Record<PrivacyLocale, string> = {
  en: "English",
  ru: "Русский",
  de: "Deutsch",
  pl: "Polski",
};

export const privacyLangShort: Record<PrivacyLocale, string> = {
  en: "EN",
  ru: "RU",
  de: "DE",
  pl: "PL",
};

export const privacyEmail = "alex@buildbyalex.com";

type Part =
  | { kind: "p"; text: string }
  | { kind: "sub"; title: string; text?: string; items?: string[] }
  | { kind: "list"; items: string[] }
  | { kind: "callout"; text: string }
  | { kind: "link"; text: string; label: string; href: string }
  | { kind: "contact"; text: string };

type Section = { n: string; title: string; parts: Part[] };

export type PrivacyDoc = {
  eyebrow: string;
  title: string;
  lead: string;
  updatedLabel: string;
  updatedDate: string;
  backLabel: string;
  langNavLabel: string;
  contactTitle: string;
  sections: Section[];
};

const en: PrivacyDoc = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  lead: "How Body Forge collects, uses, and protects your information.",
  updatedLabel: "Last updated",
  updatedDate: "January 19, 2026",
  backLabel: "Back to home",
  langNavLabel: "Choose language",
  contactTitle: "Questions?",
  sections: [
    {
      n: "1",
      title: "Introduction",
      parts: [
        {
          kind: "p",
          text: 'Body Forge (hereinafter referred to as the "App"), developed by Oleksandr Shuvalov (hereinafter referred to as "We" or "Developer"), respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.',
        },
        {
          kind: "p",
          text: "By using the App, you agree to the collection and use of information in accordance with this policy.",
        },
      ],
    },
    {
      n: "2",
      title: "Data We Collect",
      parts: [
        {
          kind: "sub",
          title: "2.1. Personal Data",
          text: "To create an account and synchronize your workouts, we may collect the following data:",
          items: ["Email address (via Firebase Auth).", "User ID and workout history."],
        },
        {
          kind: "sub",
          title: "2.2. Health Data (HealthKit)",
          text: "The App requests access to Apple Health (HealthKit) to read and display the following information during your workouts:",
          items: ["Heart Rate.", "Active Energy (Calories).", "Workout data."],
        },
        {
          kind: "callout",
          text: "We do NOT use HealthKit data for marketing, advertising, or selling to third parties. This data is used solely to display your real-time statistics within the App.",
        },
        {
          kind: "sub",
          title: "2.3. Usage and Diagnostics",
          text: "We collect anonymized data to improve app stability (via Firebase Crashlytics and Analytics):",
          items: [
            "Crash reports.",
            "Device information (model, iOS version).",
            "App performance data.",
          ],
        },
      ],
    },
    {
      n: "3",
      title: "Use of Your Information",
      parts: [
        {
          kind: "sub",
          title: "",
          text: "We use the information we collect for the following purposes:",
          items: [
            "To provide and maintain the App functionality (login, history tracking).",
            "To display health metrics during your workout.",
            "To detect and fix technical issues (crashes and bugs).",
          ],
        },
      ],
    },
    {
      n: "4",
      title: "Third-Party Services",
      parts: [
        {
          kind: "p",
          text: "The App uses third-party services that may collect information used to identify you. Link to the privacy policy of third-party service providers used by the App:",
        },
        {
          kind: "link",
          text: "Google Firebase (Analytics, Crashlytics, Auth):",
          label: "firebase.google.com/policies/analytics",
          href: "https://firebase.google.com/policies/analytics",
        },
      ],
    },
    {
      n: "5",
      title: "Data Retention and Deletion",
      parts: [
        {
          kind: "p",
          text: 'Your data is stored as long as your account exists. You have the right to delete your account and all associated data at any time. To do this, use the "Delete Account" feature in the App\'s settings. Upon confirmation, your account and personal data will be permanently deleted from our servers.',
        },
      ],
    },
    {
      n: "6",
      title: "Security",
      parts: [
        {
          kind: "p",
          text: "We value your trust in providing us your Personal Information and use commercially acceptable means of protecting it. However, remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
        },
      ],
    },
    {
      n: "7",
      title: "Contact Us",
      parts: [
        {
          kind: "contact",
          text: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:",
        },
      ],
    },
  ],
};

const ru: PrivacyDoc = {
  eyebrow: "Правовая информация",
  title: "Политика конфиденциальности",
  lead: "Как Body Forge собирает, использует и защищает ваши данные.",
  updatedLabel: "Обновлено",
  updatedDate: "19 января 2026",
  backLabel: "На главную",
  langNavLabel: "Выбор языка",
  contactTitle: "Остались вопросы?",
  sections: [
    {
      n: "1",
      title: "Введение",
      parts: [
        {
          kind: "p",
          text: 'Body Forge (далее - «Приложение»), разработанное Александром Шуваловым (далее - «Мы» или «Разработчик»), уважает вашу конфиденциальность. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем вашу информацию при использовании нашего мобильного приложения.',
        },
        {
          kind: "p",
          text: "Используя Приложение, вы соглашаетесь на сбор и использование информации в соответствии с настоящей Политикой.",
        },
      ],
    },
    {
      n: "2",
      title: "Какие данные мы собираем",
      parts: [
        {
          kind: "sub",
          title: "2.1. Персональные данные",
          text: "Для создания аккаунта и синхронизации ваших тренировок мы можем собирать следующие данные:",
          items: [
            "Адрес электронной почты (через Firebase Auth).",
            "Идентификатор пользователя и историю тренировок.",
          ],
        },
        {
          kind: "sub",
          title: "2.2. Данные о здоровье (HealthKit)",
          text: "Приложение запрашивает доступ к Apple Health (HealthKit), чтобы считывать и показывать следующую информацию во время ваших тренировок:",
          items: ["Частота пульса.", "Активная энергия (калории).", "Данные о тренировках."],
        },
        {
          kind: "callout",
          text: "Мы НЕ используем данные HealthKit для маркетинга, рекламы или продажи третьим лицам. Эти данные используются исключительно для отображения вашей статистики в реальном времени внутри Приложения.",
        },
        {
          kind: "sub",
          title: "2.3. Использование и диагностика",
          text: "Мы собираем обезличенные данные, чтобы улучшать стабильность приложения (через Firebase Crashlytics и Analytics):",
          items: [
            "Отчёты о сбоях.",
            "Информацию об устройстве (модель, версия iOS).",
            "Данные о производительности приложения.",
          ],
        },
      ],
    },
    {
      n: "3",
      title: "Как мы используем вашу информацию",
      parts: [
        {
          kind: "sub",
          title: "",
          text: "Собранную информацию мы используем в следующих целях:",
          items: [
            "Чтобы обеспечивать и поддерживать работу Приложения (вход, ведение истории).",
            "Чтобы показывать метрики здоровья во время тренировки.",
            "Чтобы выявлять и устранять технические проблемы (сбои и ошибки).",
          ],
        },
      ],
    },
    {
      n: "4",
      title: "Сторонние сервисы",
      parts: [
        {
          kind: "p",
          text: "Приложение использует сторонние сервисы, которые могут собирать информацию, позволяющую вас идентифицировать. Ссылка на политику конфиденциальности сторонних поставщиков услуг, используемых Приложением:",
        },
        {
          kind: "link",
          text: "Google Firebase (Analytics, Crashlytics, Auth):",
          label: "firebase.google.com/policies/analytics",
          href: "https://firebase.google.com/policies/analytics",
        },
      ],
    },
    {
      n: "5",
      title: "Хранение и удаление данных",
      parts: [
        {
          kind: "p",
          text: 'Ваши данные хранятся до тех пор, пока существует ваш аккаунт. Вы вправе в любой момент удалить свой аккаунт и все связанные с ним данные. Для этого воспользуйтесь функцией «Удалить аккаунт» в настройках Приложения. После подтверждения ваш аккаунт и персональные данные будут безвозвратно удалены с наших серверов.',
        },
      ],
    },
    {
      n: "6",
      title: "Безопасность",
      parts: [
        {
          kind: "p",
          text: "Мы ценим ваше доверие при передаче нам персональной информации и используем коммерчески приемлемые способы её защиты. Однако помните, что ни один способ передачи данных через интернет или способ электронного хранения не является на 100% безопасным и надёжным, и мы не можем гарантировать их абсолютную защиту.",
        },
      ],
    },
    {
      n: "7",
      title: "Связаться с нами",
      parts: [
        {
          kind: "contact",
          text: "Если у вас есть вопросы или предложения по нашей Политике конфиденциальности, не стесняйтесь написать нам:",
        },
      ],
    },
  ],
};

const de: PrivacyDoc = {
  eyebrow: "Rechtliches",
  title: "Datenschutzerklärung",
  lead: "Wie Body Forge Ihre Daten erhebt, nutzt und schützt.",
  updatedLabel: "Zuletzt aktualisiert",
  updatedDate: "19. Januar 2026",
  backLabel: "Zur Startseite",
  langNavLabel: "Sprache wählen",
  contactTitle: "Noch Fragen?",
  sections: [
    {
      n: "1",
      title: "Einleitung",
      parts: [
        {
          kind: "p",
          text: 'Body Forge (nachfolgend „App"), entwickelt von Oleksandr Shuvalov (nachfolgend „Wir" oder „Entwickler"), respektiert Ihre Privatsphäre. Diese Datenschutzerklärung erläutert, wie wir Ihre Daten bei der Nutzung unserer mobilen Anwendung erheben, verwenden, offenlegen und schützen.',
        },
        {
          kind: "p",
          text: "Durch die Nutzung der App stimmen Sie der Erhebung und Verwendung von Daten gemäß dieser Erklärung zu.",
        },
      ],
    },
    {
      n: "2",
      title: "Welche Daten wir erheben",
      parts: [
        {
          kind: "sub",
          title: "2.1. Personenbezogene Daten",
          text: "Um ein Konto zu erstellen und Ihre Trainings zu synchronisieren, erheben wir gegebenenfalls folgende Daten:",
          items: [
            "E-Mail-Adresse (über Firebase Auth).",
            "Nutzer-ID und Trainingsverlauf.",
          ],
        },
        {
          kind: "sub",
          title: "2.2. Gesundheitsdaten (HealthKit)",
          text: "Die App fordert Zugriff auf Apple Health (HealthKit) an, um während Ihres Trainings folgende Informationen zu lesen und anzuzeigen:",
          items: ["Herzfrequenz.", "Aktive Energie (Kalorien).", "Trainingsdaten."],
        },
        {
          kind: "callout",
          text: "Wir verwenden HealthKit-Daten NICHT für Marketing, Werbung oder den Verkauf an Dritte. Diese Daten dienen ausschließlich dazu, Ihre Statistiken in Echtzeit innerhalb der App anzuzeigen.",
        },
        {
          kind: "sub",
          title: "2.3. Nutzung und Diagnose",
          text: "Wir erheben anonymisierte Daten, um die Stabilität der App zu verbessern (über Firebase Crashlytics und Analytics):",
          items: [
            "Absturzberichte.",
            "Geräteinformationen (Modell, iOS-Version).",
            "Daten zur App-Leistung.",
          ],
        },
      ],
    },
    {
      n: "3",
      title: "Verwendung Ihrer Daten",
      parts: [
        {
          kind: "sub",
          title: "",
          text: "Die erhobenen Daten verwenden wir für folgende Zwecke:",
          items: [
            "Um die Funktionen der App bereitzustellen und aufrechtzuerhalten (Anmeldung, Verlauf).",
            "Um während Ihres Trainings Gesundheitswerte anzuzeigen.",
            "Um technische Probleme zu erkennen und zu beheben (Abstürze und Fehler).",
          ],
        },
      ],
    },
    {
      n: "4",
      title: "Dienste von Drittanbietern",
      parts: [
        {
          kind: "p",
          text: "Die App nutzt Dienste von Drittanbietern, die Daten erheben können, mit denen Sie identifiziert werden. Link zur Datenschutzerklärung der von der App genutzten Drittanbieter:",
        },
        {
          kind: "link",
          text: "Google Firebase (Analytics, Crashlytics, Auth):",
          label: "firebase.google.com/policies/analytics",
          href: "https://firebase.google.com/policies/analytics",
        },
      ],
    },
    {
      n: "5",
      title: "Aufbewahrung und Löschung von Daten",
      parts: [
        {
          kind: "p",
          text: 'Ihre Daten werden gespeichert, solange Ihr Konto besteht. Sie haben jederzeit das Recht, Ihr Konto und alle damit verbundenen Daten zu löschen. Nutzen Sie dazu die Funktion „Konto löschen" in den Einstellungen der App. Nach Bestätigung werden Ihr Konto und Ihre personenbezogenen Daten dauerhaft von unseren Servern gelöscht.',
        },
      ],
    },
    {
      n: "6",
      title: "Sicherheit",
      parts: [
        {
          kind: "p",
          text: "Wir schätzen Ihr Vertrauen, uns Ihre personenbezogenen Daten anzuvertrauen, und setzen wirtschaftlich angemessene Mittel zu deren Schutz ein. Bedenken Sie jedoch, dass keine Methode der Übertragung über das Internet oder der elektronischen Speicherung zu 100% sicher und zuverlässig ist, weshalb wir keine absolute Sicherheit garantieren können.",
        },
      ],
    },
    {
      n: "7",
      title: "Kontakt",
      parts: [
        {
          kind: "contact",
          text: "Wenn Sie Fragen oder Anregungen zu unserer Datenschutzerklärung haben, zögern Sie nicht, uns zu kontaktieren:",
        },
      ],
    },
  ],
};

const pl: PrivacyDoc = {
  eyebrow: "Informacje prawne",
  title: "Polityka prywatności",
  lead: "Jak Body Forge zbiera, wykorzystuje i chroni Twoje dane.",
  updatedLabel: "Ostatnia aktualizacja",
  updatedDate: "19 stycznia 2026",
  backLabel: "Na stronę główną",
  langNavLabel: "Wybór języka",
  contactTitle: "Masz pytania?",
  sections: [
    {
      n: "1",
      title: "Wprowadzenie",
      parts: [
        {
          kind: "p",
          text: 'Body Forge (dalej „Aplikacja"), stworzona przez Oleksandra Shuvalova (dalej „My" lub „Deweloper"), szanuje Twoją prywatność. Niniejsza Polityka prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy, udostępniamy i chronimy Twoje dane podczas korzystania z naszej aplikacji mobilnej.',
        },
        {
          kind: "p",
          text: "Korzystając z Aplikacji, wyrażasz zgodę na zbieranie i wykorzystywanie danych zgodnie z niniejszą Polityką.",
        },
      ],
    },
    {
      n: "2",
      title: "Jakie dane zbieramy",
      parts: [
        {
          kind: "sub",
          title: "2.1. Dane osobowe",
          text: "Aby utworzyć konto i zsynchronizować Twoje treningi, możemy zbierać następujące dane:",
          items: [
            "Adres e-mail (przez Firebase Auth).",
            "Identyfikator użytkownika i historię treningów.",
          ],
        },
        {
          kind: "sub",
          title: "2.2. Dane zdrowotne (HealthKit)",
          text: "Aplikacja prosi o dostęp do Apple Health (HealthKit), aby odczytywać i wyświetlać następujące informacje podczas Twoich treningów:",
          items: ["Tętno.", "Aktywna energia (kalorie).", "Dane treningowe."],
        },
        {
          kind: "callout",
          text: "NIE wykorzystujemy danych z HealthKit do celów marketingowych, reklamowych ani sprzedaży podmiotom trzecim. Dane te służą wyłącznie do wyświetlania Twoich statystyk w czasie rzeczywistym w Aplikacji.",
        },
        {
          kind: "sub",
          title: "2.3. Użytkowanie i diagnostyka",
          text: "Zbieramy zanonimizowane dane, aby poprawiać stabilność aplikacji (przez Firebase Crashlytics i Analytics):",
          items: [
            "Raporty o awariach.",
            "Informacje o urządzeniu (model, wersja iOS).",
            "Dane o wydajności aplikacji.",
          ],
        },
      ],
    },
    {
      n: "3",
      title: "Wykorzystanie Twoich danych",
      parts: [
        {
          kind: "sub",
          title: "",
          text: "Zebrane informacje wykorzystujemy w następujących celach:",
          items: [
            "Aby zapewniać i utrzymywać działanie Aplikacji (logowanie, historia).",
            "Aby wyświetlać wskaźniki zdrowotne podczas treningu.",
            "Aby wykrywać i naprawiać problemy techniczne (awarie i błędy).",
          ],
        },
      ],
    },
    {
      n: "4",
      title: "Usługi zewnętrzne",
      parts: [
        {
          kind: "p",
          text: "Aplikacja korzysta z usług zewnętrznych, które mogą zbierać dane umożliwiające Twoją identyfikację. Link do polityki prywatności zewnętrznych dostawców usług wykorzystywanych przez Aplikację:",
        },
        {
          kind: "link",
          text: "Google Firebase (Analytics, Crashlytics, Auth):",
          label: "firebase.google.com/policies/analytics",
          href: "https://firebase.google.com/policies/analytics",
        },
      ],
    },
    {
      n: "5",
      title: "Przechowywanie i usuwanie danych",
      parts: [
        {
          kind: "p",
          text: 'Twoje dane są przechowywane tak długo, jak istnieje Twoje konto. Masz prawo w każdej chwili usunąć swoje konto i wszystkie powiązane z nim dane. Aby to zrobić, użyj funkcji „Usuń konto" w ustawieniach Aplikacji. Po potwierdzeniu Twoje konto i dane osobowe zostaną trwale usunięte z naszych serwerów.',
        },
      ],
    },
    {
      n: "6",
      title: "Bezpieczeństwo",
      parts: [
        {
          kind: "p",
          text: "Cenimy zaufanie, jakim nas obdarzasz, przekazując nam swoje dane osobowe, i stosujemy komercyjnie akceptowalne środki ich ochrony. Pamiętaj jednak, że żadna metoda przesyłania danych przez internet ani sposób elektronicznego przechowywania nie jest w 100% bezpieczna i niezawodna, dlatego nie możemy zagwarantować jej absolutnego bezpieczeństwa.",
        },
      ],
    },
    {
      n: "7",
      title: "Kontakt",
      parts: [
        {
          kind: "contact",
          text: "Jeśli masz pytania lub sugestie dotyczące naszej Polityki prywatności, skontaktuj się z nami:",
        },
      ],
    },
  ],
};

export const privacyDocs: Record<PrivacyLocale, PrivacyDoc> = { en, ru, de, pl };
