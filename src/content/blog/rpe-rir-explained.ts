import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "rpe-rir-explained",
  date: "2026-06-23",
  accent: "cool",
  audience: "warm",
  related: ["how-many-sets-per-week", "rest-timer-between-sets", "overtraining-recovery"],
  ru: {
    title: "RPE и RIR простыми словами: как не убиваться на каждом подходе",
    description:
      "RPE и RIR - шкалы, которые показывают, насколько тяжело было на самом деле. Разбираем, как дозировать усилие, зачем отказ вредит и как логировать RPE в Body Forge.",
    excerpt:
      "Ты дожимаешь каждый подход до трясучки и гордишься этим. А через месяц удивляешься, почему веса стоят, спина ноет, а мотивация на нуле. Отказ на каждом сете - это не героизм, это мусорный объём.",
    keyword: "RPE RIR",
    tag: "Тренинг",
    readingMin: 8,
    body: `Есть особый тип лифтера, который считает, что если после подхода не темнеет в глазах - значит, тренировка не засчитана. Каждый сет до полного отказа, лицо красное, штанга дрожит, гордость до потолка. А результат стоит на месте, суставы поют, и через полтора месяца такого режима хочется не в зал, а в отпуск от зала.

Проблема не в том, что ты мало стараешься. Проблема в том, что ты не умеешь дозировать усилие. Есть простой инструмент, который решает это за пару тренировок, - шкалы RPE и RIR. Звучит как аббревиатуры из методички, но на деле это самое понятное, что можно применить к своему тренингу уже сегодня.

> Честный вопрос: ты вообще знаешь, сколько повторов у тебя оставалось в запасе на последнем подходе? Если ответ "ну, я всё выложил" - ты не тренируешься по нагрузке, ты просто каждый раз доводишь себя до предела и называешь это прогрессом.

## Что такое RPE и RIR

RPE (rate of perceived exertion) - это оценка того, насколько тяжело дался подход, по шкале от 1 до 10. Десятка - это абсолютный отказ, когда следующий повтор физически невозможен. RPE 8 значит, что ты мог бы сделать ещё пару повторов, но остановился.

RIR (reps in reserve) - это то же самое, только с другого конца. Это количество повторов, которые у тебя оставались в запасе. RIR 2 значит, что ты остановился за два повтора до отказа. По сути RPE и RIR - зеркала друг друга: RPE 8 = RIR 2, RPE 9 = RIR 1, RPE 10 = RIR 0.

Выбери ту шкалу, которая тебе понятнее. Большинству новичков проще думать в RIR: "сколько я ещё мог бы?" Это конкретный вопрос с конкретным ответом.

## Почему отказ на каждом подходе тебя тормозит

Отказ - мощный стимул, но у него дикая цена. Один подход в отказ выжигает нервную систему сильнее, чем три подхода с RIR 2. И вот что важно: прироста мышц он даёт примерно столько же. Ты платишь втрое больше усталости за тот же результат.

Когда ты пашешь в отказ каждый сет, происходит вот что. Первый подход убивает тебя, и во втором ты уже не можешь показать нормальный вес. Реальный рабочий объём падает, техника плывёт, а восстановление растягивается на дни. В итоге за неделю ты делаешь меньше качественной работы, чем сделал бы с запасом в пару повторов.

[[CTA]]

## Как выбирать RPE под задачу

Не всякий подход должен быть тяжёлым. Умный тренинг - это когда усилие подобрано под цель.

- **Базовые упражнения на силу.** Держись в районе RPE 7-8, RIR 2-3. Приседы и становая в отказ - прямой путь к травме, а не к рекорду.
- **Изоляция и подсобка.** Тут можно ближе к RPE 8-9. Отказ на разгибаниях не убьёт тебя, как отказ в приседе, а стимул хороший.
- **Последний подход упражнения.** Иногда его можно догнать до RPE 9-10, если чувствуешь силы. Но не каждый последний сет и не в каждом движении.
- **Начало нового цикла.** Первые недели держи RPE ниже, около 6-7. Ты копишь объём, а не проверяешь пределы. Пределы оставь на пик.

Смысл простой: большую часть работы ты делаешь с запасом, а к отказу подходишь дозированно и осознанно, а не потому что "надо же выложиться".

## Как научиться оценивать RIR честно

Первое время ты будешь ошибаться. Почти все переоценивают, насколько близко они к отказу: думаешь, что остановился на RIR 1, а на деле мог бы сделать ещё четыре. Это нормально, калибровка приходит с практикой.

Хороший тест раз в пару недель: дожми один подход до реального отказа и запомни это ощущение. Скорость последнего повтора, дрожь, момент, когда штанга буквально ползёт. Теперь у тебя есть эталон, с которым ты сравниваешь все остальные подходы. Со временем ты начнёшь ловить RIR 2 и RIR 1 без всякого отказа.

## Как это выглядит в Body Forge

Оценивать RPE в голове - половина дела. Вторая половина - видеть, что из этого получается по неделям. [Body Forge](/ru/blog/how-many-sets-per-week) пишет каждый подход в реальном времени, и рядом с весом и повторами ты фиксируешь, насколько тяжело было. Так усилие перестаёт быть ощущением и становится цифрой, которую можно отследить.

- Логируешь вес, повторы и RPE к каждому подходу - и видишь реальную нагрузку, а не то, что тебе кажется постфактум.
- Стрелки роста сравнивают текущий подход с прошлой сессией на лету, так что ты понимаешь, растёшь ли ты по весу или просто добавляешь усилия впустую.
- Личные рекорды приложение отмечает само, без твоего участия.
- Таймер отдыха живёт в Dynamic Island и подсказывает хаптиком, когда пора, - потому что при работе с запасом отдых важнее, чем при отказе.

Никакой рекламы и навязанных подписок. Просто картина твоей реальной нагрузки, по которой видно, где ты пашешь с толком, а где просто убиваешься.

## План на ближайшие тренировки

Не переделывай программу. Поменяй только то, как ты подходишь к усилию.

1. На ближайшей тренировке к каждому рабочему подходу оценивай RIR: сколько повторов осталось в запасе.
2. Держи базу на RIR 2-3, изоляцию можешь ближе к RIR 1.
3. Записывай эту оценку рядом с весом и повторами, чтобы видеть динамику.
4. Через две недели раз догони один подход до чистого отказа и сверь ощущения. Скорее всего, окажется, что раньше ты недобирал.

Тренировка не обязана быть пыткой, чтобы работать. Дозируй усилие, оставляй пару повторов в запасе на большинстве подходов - и ты удивишься, насколько быстрее пойдёт прогресс, когда перестанешь каждый раз выжигать себя дотла.`,
    faq: [
      {
        q: "Значит, до отказа вообще нельзя работать?",
        a: "Можно, но дозированно. Отказ уместен на последнем подходе изоляции или в конце цикла, но не на каждом сете и не в тяжёлой базе. Большую часть работы делай с запасом в 1-3 повтора - стимул почти тот же, а усталости в разы меньше.",
      },
      {
        q: "Чем RPE отличается от RIR?",
        a: "Это одна и та же идея с разных сторон. RPE оценивает тяжесть подхода по шкале 1-10, RIR считает оставшиеся в запасе повторы. RPE 8 - это то же самое, что RIR 2. Бери ту шкалу, в которой тебе проще думать.",
      },
      {
        q: "Как понять, что я правильно оцениваю RIR?",
        a: "Первое время почти все переоценивают близость к отказу. Раз в пару недель дожимай один подход до реального отказа, запоминай ощущение и калибруйся по нему. Если логировать RPE к подходам в Body Forge, со временем видно, насколько твои оценки совпадают с реальной динамикой весов.",
      },
      {
        q: "Работает ли RPE для новичка?",
        a: "Да, но с поправкой на то, что калибровка придёт не сразу. Новичку проще держать RIR 2-3 почти везде: это безопасно для техники и суставов, а стимул для роста полноценный. Пределы проверять пока рано.",
      },
    ],
  },
  en: {
    title: "RPE and RIR in plain English: stop grinding every set to failure",
    description:
      "RPE and RIR are scales that tell you how hard a set really was. Learn how to dose effort, why training to failure backfires, and how logging RPE in Body Forge shows your true load.",
    excerpt:
      "You grind every set until you're shaking and you're proud of it. A month later you're wondering why the weights won't move, your joints ache, and you dread the gym. Failure on every set isn't heroic - it's junk volume.",
    keyword: "RPE RIR training",
    tag: "Training",
    readingMin: 8,
    body: `There's a certain kind of lifter who believes a set doesn't count unless the room goes dark for a second afterward. Every set to the wall, face red, bar shaking, pride sky-high. Meanwhile the numbers won't budge, the joints complain, and six weeks in you don't want the gym - you want a vacation from it.

The problem isn't that you're not trying hard enough. The problem is you have no way to dose your effort. There's a dead-simple tool that fixes this in a couple of sessions: the RPE and RIR scales. They sound like textbook acronyms, but they're actually the most usable thing you can apply to your training today.

> Honest question: do you even know how many reps you had left in the tank on your last set? If the answer is "I gave it everything," you're not training by load. You're just dragging yourself to the edge every time and calling it progress.

## What RPE and RIR actually mean

RPE (rate of perceived exertion) rates how hard a set felt on a scale of 1 to 10. A 10 is absolute failure - the next rep is physically impossible. An RPE 8 means you could have squeezed out a couple more reps but chose to stop.

RIR (reps in reserve) is the same idea from the other end. It's how many reps you had left. RIR 2 means you stopped two reps short of failure. RPE and RIR are mirrors of each other: RPE 8 equals RIR 2, RPE 9 equals RIR 1, RPE 10 equals RIR 0.

Pick whichever scale clicks for you. Most beginners find RIR easier - "how many more could I have done?" is a concrete question with a concrete answer.

## Why failure on every set holds you back

Failure is a powerful stimulus, but the price is brutal. A single set to failure fries your nervous system harder than three sets left at RIR 2. And here's the kicker: it grows about the same amount of muscle. You're paying triple the fatigue for the same result.

When you grind every set to the wall, this happens. The first set wrecks you, so the second one comes in with a lighter, uglier weight. Your real working volume drops, your form falls apart, and recovery stretches out over days. Add it up and you get less quality work across the week than you would with a couple of reps in the bank.

[[CTA]]

## How to match RPE to the job

Not every set should be brutal. Smart training means the effort fits the goal.

- **Heavy compound lifts.** Live around RPE 7-8, RIR 2-3. Squats and deadlifts to failure are a fast track to an injury, not a PR.
- **Isolation and accessories.** Here you can push toward RPE 8-9. Failing a leg extension won't crush you the way a failed squat will, and the stimulus is solid.
- **The last set of an exercise.** Sometimes you can chase it to RPE 9-10 if you've got it in you. But not every last set, and not on every movement.
- **The start of a new block.** Keep RPE lower in the first weeks, around 6-7. You're banking volume, not testing limits. Save the limits for the peak.

The logic is simple: most of your work sits comfortably in the tank, and you approach failure on purpose and in measured doses, not because you feel obligated to "leave it all on the floor."

## How to judge RIR honestly

You'll get it wrong at first. Almost everyone overestimates how close they are to failure: you think you stopped at RIR 1 when you actually had four more in you. That's normal - calibration comes with reps.

A good check every couple of weeks: take one set to true failure and burn the feeling into memory. The speed of that last rep, the shake, the moment the bar barely crawls. Now you have a reference point to compare every other set against. Over time you'll start catching RIR 2 and RIR 1 without ever hitting failure.

## What this looks like in Body Forge

Judging RPE in your head is half the job. The other half is seeing what it adds up to across the weeks. [Body Forge](/blog/how-many-sets-per-week) logs every set in real time, and right next to the weight and reps you record how hard it felt. Effort stops being a vague feeling and becomes a number you can actually track.

- Log weight, reps, and RPE on every set, and you see your real load instead of whatever you talk yourself into after the fact.
- Growth arrows compare the current set to last session on the fly, so you know whether you're gaining on the bar or just piling on effort for nothing.
- Personal records flag themselves, no input from you.
- The rest timer lives in the Dynamic Island and taps you when it's time - because when you train with reps in reserve, quality rest matters even more than it does at failure.

No ads, no forced subscriptions. Just a clear picture of your true load, so you can tell where you're working smart and where you're just burning yourself to the ground.

## Your plan for the next few sessions

Don't rebuild the program. Change only how you approach effort.

1. Next session, rate the RIR on every working set: how many reps did you have left?
2. Keep compounds at RIR 2-3; you can push isolation closer to RIR 1.
3. Log that rating right next to the weight and reps so you can watch the trend.
4. Two weeks in, take one set to clean failure and check your read against it. Odds are you'll find you were undershooting before.

A workout doesn't have to be torture to work. Dose your effort, leave a couple of reps in the tank on most sets, and you'll be surprised how much faster progress comes once you stop torching yourself to ash every single time.`,
    faq: [
      {
        q: "So I should never train to failure?",
        a: "You can, but in measured doses. Failure has a place on the last set of an isolation exercise or at the end of a block, not on every set and not on heavy compounds. Keep most of your work with 1-3 reps in reserve - almost the same stimulus, a fraction of the fatigue.",
      },
      {
        q: "What's the difference between RPE and RIR?",
        a: "Same idea, opposite ends. RPE rates how hard a set felt on a 1-10 scale; RIR counts the reps you had left. RPE 8 is the same as RIR 2. Use whichever scale is easier for you to think in.",
      },
      {
        q: "How do I know if I'm judging RIR correctly?",
        a: "Early on nearly everyone overestimates how close they are to failure. Every couple of weeks, take one set to true failure, memorize the feeling, and calibrate against it. Logging RPE on your sets in Body Forge shows over time how well your ratings line up with your actual weight progression.",
      },
      {
        q: "Does RPE work for beginners?",
        a: "Yes, just expect the calibration to take a while. A beginner is better off holding RIR 2-3 nearly everywhere - it's safe on your form and joints, and the growth stimulus is fully there. Testing your limits can wait.",
      },
    ],
  },
};

export default post;
