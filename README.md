# Body Forge - презентационный лендинг

Двуязычный (RU / EN) лендинг для iOS-приложения Body Forge. Next.js (App Router) + Tailwind CSS + Framer Motion. Тёмная OLED-эстетика приложения, неоновый volt-акцент, bento-сетка, плавные scroll-анимации и наклонённые мокапы.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000 (редиректит на /ru)
```

Сборка и прод-режим:

```bash
npm run build
npm start
```

## Языки

- `/ru` - русская версия
- `/en` - английская версия

Переключатель языка в шапке. Локаль выбирается автоматически по заголовку браузера (`src/middleware.ts`), затем закрепляется в URL. Весь текст лежит в `src/lib/dictionaries.ts` - редактировать копирайтинг нужно там.

## Где что менять

| Что | Файл |
| --- | --- |
| Тексты RU/EN | `src/lib/dictionaries.ts` |
| Ссылка на App Store, почта поддержки | `src/lib/config.ts` |
| Цвета, шрифты, анимации | `tailwind.config.ts`, `src/app/globals.css` |
| Секции страницы | `src/components/*`, сборка в `src/app/[locale]/page.tsx` |
| Картинки (скриншоты, лого) | `public/` |

### App Store

Приложение: **Body Forge - AI Fitness Coach**, `id6761138589`.
Ссылки заданы в `src/lib/config.ts` (отдельно для ru/us). Если появится единый
домен или почта поддержки - поменять там же (сейчас `support@bodyforge.app` -
плейсхолдер).

## Деплой

Проект готов к Vercel из коробки: `Framework Preset = Next.js`, без доп. настроек.
Перед публикацией укажи реальный домен в `metadataBase` (`src/app/[locale]/layout.tsx`).

## Ассеты

- `public/logo/` - логотип
- `public/screens/` - чистые скриншоты экранов (в кастомных рамках iPhone)
- `public/shots/{ru,en}/` - готовые маркетинговые композиции и картинка экосистемы
