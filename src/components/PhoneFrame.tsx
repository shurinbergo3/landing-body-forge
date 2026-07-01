import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  glow?: boolean;
  video?: string;
  poster?: string;
};

// Рамка iPhone Pro: полированный титановый рельс со светлой кромкой и объёмными кнопками.
export default function PhoneFrame({ src, alt, className = "", priority, glow, video, poster }: Props) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div className="glow-volt absolute -inset-10 -z-10 animate-glow blur-2xl" />
      )}

      {/* боковые кнопки: кнопка действия + громкость слева, питание справа */}
      <div className="absolute -left-[3.5px] top-[16%] h-9 w-[5px] rounded-l-[3px] bg-gradient-to-r from-[#9a9da2] via-[#4a4c50] to-[#232427] shadow-[-1px_0_2px_rgba(0,0,0,0.6)]" />
      <div className="absolute -left-[3.5px] top-[26%] h-14 w-[5px] rounded-l-[3px] bg-gradient-to-r from-[#9a9da2] via-[#4a4c50] to-[#232427] shadow-[-1px_0_2px_rgba(0,0,0,0.6)]" />
      <div className="absolute -left-[3.5px] top-[37%] h-14 w-[5px] rounded-l-[3px] bg-gradient-to-r from-[#9a9da2] via-[#4a4c50] to-[#232427] shadow-[-1px_0_2px_rgba(0,0,0,0.6)]" />
      <div className="absolute -right-[3.5px] top-[28%] h-24 w-[5px] rounded-r-[3px] bg-gradient-to-l from-[#9a9da2] via-[#4a4c50] to-[#232427] shadow-[1px_0_2px_rgba(0,0,0,0.6)]" />

      {/* внешняя полированная кромка (ловит свет) */}
      <div
        className="relative rounded-[3.5rem] p-[2.5px] shadow-[0_60px_130px_-35px_rgba(0,0,0,0.95)]"
        style={{
          background:
            "linear-gradient(140deg, #c7cace 0%, #6b6e73 22%, #3a3c40 50%, #6b6e73 78%, #c7cace 100%)",
        }}
      >
        {/* титановый рельс */}
        <div
          className="rounded-[3.4rem] p-[9px]"
          style={{
            background:
              "linear-gradient(150deg, #55585d 0%, #2b2d30 26%, #202124 50%, #2b2d30 74%, #55585d 100%)",
          }}
        >
          {/* тёмная фаска перед стеклом */}
          <div
            className="rounded-[2.85rem] p-[3px] shadow-[inset_0_0_3px_rgba(0,0,0,0.9)]"
            style={{ background: "linear-gradient(150deg, #141517, #050506)" }}
          >
            {/* чёрный бортик экрана */}
            <div className="relative overflow-hidden rounded-[2.65rem] bg-black">
              {video ? (
                <video
                  className="block h-auto w-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={poster}
                  preload="metadata"
                  aria-label={alt}
                >
                  <source src={video} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={src}
                  alt={alt}
                  width={420}
                  height={912}
                  priority={priority}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 70vw, 360px"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
