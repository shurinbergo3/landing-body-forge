import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  glow?: boolean;
  video?: string;
  poster?: string;
  placeholder?: string;
};

// Фотореалистичный iPhone 16 Pro: титановый рельс, равномерный чёрный бортик и блик по стеклу.
export default function PhoneFrame({ src, alt, className = "", priority, glow, video, poster, placeholder }: Props) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div className="glow-volt absolute -inset-10 -z-10 animate-glow blur-2xl" />
      )}

      {/* боковые кнопки: слева кнопка действия + качелька громкости, справа питание + Camera Control */}
      <div className="absolute -left-[2px] top-[15.5%] h-[3.2%] w-[3px] rounded-l-[2px] bg-gradient-to-r from-[#b9bcc0] via-[#5b5e63] to-[#26272a]" />
      <div className="absolute -left-[2px] top-[24%] h-[6%] w-[3px] rounded-l-[2px] bg-gradient-to-r from-[#b9bcc0] via-[#5b5e63] to-[#26272a]" />
      <div className="absolute -left-[2px] top-[32%] h-[6%] w-[3px] rounded-l-[2px] bg-gradient-to-r from-[#b9bcc0] via-[#5b5e63] to-[#26272a]" />
      <div className="absolute -right-[2px] top-[27%] h-[10%] w-[3px] rounded-r-[2px] bg-gradient-to-l from-[#b9bcc0] via-[#5b5e63] to-[#26272a]" />
      <div className="absolute -right-[2px] top-[41%] h-[4.5%] w-[3px] rounded-r-[2px] bg-gradient-to-l from-[#a6a9ad] via-[#54575b] to-[#26272a]" />

      {/* внешняя полированная кромка титана */}
      <div
        className="relative rounded-[3.2rem] p-[1.5px] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.95)]"
        style={{
          background:
            "linear-gradient(135deg, #d4d7db 0%, #7d8085 20%, #45474b 50%, #7d8085 80%, #d4d7db 100%)",
        }}
      >
        {/* титановый рельс */}
        <div
          className="rounded-[3.1rem] p-[7px]"
          style={{
            background:
              "linear-gradient(150deg, #6a6d72 0%, #3a3c40 24%, #2a2c2f 50%, #3a3c40 76%, #6a6d72 100%)",
          }}
        >
          {/* внутренняя тёмная фаска перед стеклом */}
          <div
            className="rounded-[2.72rem] p-[2px]"
            style={{ background: "linear-gradient(150deg, #101113, #030304)" }}
          >
            {/* равномерный чёрный бортик экрана */}
            <div className="rounded-[2.62rem] bg-black p-[3px] shadow-[inset_0_0_2px_rgba(255,255,255,0.14)]">
              <div className="relative overflow-hidden rounded-[2.42rem] bg-black">
                {!src && !video ? (
                  <div className="flex aspect-[1320/2868] w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#0e0f12] to-[#050506] px-6 text-center">
                    <span className="absolute left-1/2 top-3 h-[26px] w-[30%] -translate-x-1/2 rounded-full bg-black" />
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-volt/10 text-2xl text-volt">
                      ▢
                    </span>
                    <p className="text-[13px] font-medium leading-snug text-ash-400">
                      {placeholder ?? alt}
                    </p>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-white/25">
                      Скрин приложения
                    </span>
                  </div>
                ) : video ? (
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
                    src={src as string}
                    alt={alt}
                    width={1320}
                    height={2868}
                    priority={priority}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 70vw, 360px"
                  />
                )}

                {/* стеклянный блик поверх экрана */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[2.42rem] mix-blend-screen"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 14%, rgba(255,255,255,0) 34%, rgba(255,255,255,0) 68%, rgba(255,255,255,0.05) 100%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2.42rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
