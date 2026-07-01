import type { Dict } from "@/lib/dictionaries";
import type { AppRating, Review } from "@/lib/reviews";
import Reveal from "./Reveal";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5 text-[15px]" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < value ? "text-volt" : "text-white/15"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews({
  dict,
  reviews,
  rating,
}: {
  dict: Dict;
  reviews: Review[];
  rating: AppRating | null;
}) {
  if (!reviews.length && !rating) return null;

  return (
    <section id="reviews" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-narrow">
          <p className="eyebrow">{dict.reviews.eyebrow}</p>
          <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.05] tracking-tightest text-white">
            {dict.reviews.title}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ash-400">
            {dict.reviews.sub}
          </p>
          {rating && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Stars value={Math.round(rating.average)} />
              <span className="text-lg font-semibold text-white">
                {rating.average.toFixed(1)}
              </span>
              <span className="text-sm text-ash-400">
                {dict.reviews.ratingLabel.replace("{count}", String(rating.count))}
              </span>
            </div>
          )}
        </Reveal>

        {reviews.length > 0 && (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.id} delay={(i % 3) * 0.08}>
                <figure className="card flex h-full flex-col gap-4 p-6">
                  <Stars value={r.rating} />
                  {r.title && (
                    <figcaption className="font-semibold leading-snug text-white">
                      {r.title}
                    </figcaption>
                  )}
                  <blockquote className="line-clamp-6 text-[15px] leading-relaxed text-ash-400">
                    {r.text}
                  </blockquote>
                  <div className="mt-auto pt-1 text-sm text-ash-300">{r.author}</div>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
