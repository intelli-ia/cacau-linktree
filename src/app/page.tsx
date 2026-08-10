import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import {
  ArrowRight,
  Smartphone,
  User,
  PlaySquare,
  Music,
  type LucideIcon,
} from "lucide-react";
import {
  PROFESSIONAL_NAME,
  HERO_BLOCK,
  IMAGE_BLOCKS,
  BUTTON_BLOCKS,
} from "@/lib/constants";

const PLACEHOLDER_ICONS: Record<string, LucideIcon> = {
  blog: Smartphone,
  consultas: User,
  youtube: PlaySquare,
  spotify: Music,
};

function SpotifyLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1DB954" aria-label="Spotify">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.161-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.421-1.021.599-1.561.3z" />
    </svg>
  );
}

const IMAGE_STYLES: Record<string, string> = {
  blog: "object-contain scale-125 translate-y-[20%]",
  youtube: "object-contain scale-125 translate-y-[20%]",
};

function versionedSrc(src: string): string {
  try {
    const stat = fs.statSync(path.join(process.cwd(), "public", src));
    return `${src}?v=${Math.floor(stat.mtimeMs)}`;
  } catch {
    return src;
  }
}

/**
 * Borda dos cards: moldura dourada em degradê (ver `.gold-frame`),
 * um fio de luz âmbar no topo e uma linha interna escura que afasta o ouro do
 * conteúdo — o respiro é o que separa "moldura" de "contorno".
 */
function GoldFrame({ radius }: { radius: string }) {
  return (
    <>
      <div
        aria-hidden
        className="gold-frame opacity-85 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-px ${radius} ring-1 ring-inset ring-black/40`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(255,226,160,0.6),transparent)]"
      />
    </>
  );
}

/**
 * Bloco principal. Composto em camadas, de trás para a frente:
 * base em degradê → mosaico de aulas (com máscara) → véu → brilho dourado →
 * reflexo que atravessa no hover → conteúdo.
 */
function HeroCard() {
  return (
    <a
      href={HERO_BLOCK.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative isolate block overflow-hidden rounded-[26px] bg-[#171415] shadow-[0_1px_2px_rgba(0,0,0,0.7),0_28px_64px_-28px_rgba(0,0,0,0.95),0_12px_40px_-18px_rgba(229,159,20,0.24)] transition-[transform,box-shadow] duration-500 ease-out motion-safe:hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.7),0_38px_84px_-30px_rgba(0,0,0,1),0_20px_54px_-18px_rgba(229,159,20,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B23A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B090A]"
    >
      {/* Base */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(140deg,#2B2219_0%,#1C1718_44%,#141112_100%)]" />

      {/* Mosaico de aulas, dissolvendo para a esquerda */}
      <div className="absolute inset-y-0 right-0 -z-20 w-[78%] sm:w-[64%] [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_26%,#000_66%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_26%,#000_66%)]">
        <Image
          src={versionedSrc(HERO_BLOCK.image)}
          alt={HERO_BLOCK.imageLabel}
          fill
          sizes="(max-width: 640px) 78vw, 400px"
          loading="eager"
          fetchPriority="high"
          className="translate-x-[21%] scale-110 object-cover object-[50%_18%] opacity-60 [filter:saturate(0.85)_contrast(1.05)] transition-transform duration-[900ms] ease-out motion-safe:group-hover:scale-[1.16]"
        />
      </div>

      {/* Véu horizontal + vinheta inferior: garantem contraste do texto */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#171415_14%,rgba(23,20,21,0.96)_52%,rgba(23,20,21,0.55)_80%,rgba(23,20,21,0.15)_100%)] sm:bg-[linear-gradient(to_right,#171415_8%,rgba(23,20,21,0.94)_40%,rgba(23,20,21,0.3)_74%,transparent_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(11,9,10,0.8)_0%,transparent_42%)]" />

      {/* Brilho dourado */}
      <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[#E59F14]/25 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 sm:opacity-80" />

      {/* Reflexo que atravessa o card no hover */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 -left-1/4 w-1/4 -skew-x-12 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.08),transparent)] transition-transform duration-[1100ms] ease-out motion-safe:group-hover:translate-x-[560%]" />
      </div>

      {/* Conteúdo */}
      <div className="relative flex min-h-[300px] max-w-[90%] flex-col justify-center gap-4 px-7 py-10 sm:min-h-[364px] sm:max-w-[64%] sm:gap-5 sm:px-11 sm:py-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[linear-gradient(to_right,#F0B23A,rgba(240,178,58,0))]" />
          <span className="font-heading text-[10px] uppercase tracking-[0.26em] text-[#E9BE6A] sm:text-[11px]">
            {HERO_BLOCK.eyebrow}
          </span>
        </div>

        <div>
          <p className="font-body text-sm tracking-[0.08em] text-white/50 sm:text-base">
            {HERO_BLOCK.lead}
          </p>
          <h2 className="mt-1 font-heading text-[1.75rem] leading-[1.05] tracking-[-0.015em] whitespace-pre-line text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.6)] sm:text-[2.7rem]">
            {HERO_BLOCK.h1}
          </h2>
        </div>

        <p className="max-w-[30ch] font-body text-[0.8rem] leading-relaxed text-white/55 sm:text-[0.95rem]">
          {HERO_BLOCK.subtitle}
        </p>

        <span className="mt-1 inline-flex w-fit items-center gap-2.5 rounded-full bg-[linear-gradient(180deg,#F8CB68_0%,#EFAE33_46%,#DD8B05_100%)] px-6 py-3 font-heading text-sm font-semibold tracking-wide text-[#1A1207] ring-1 ring-[#FFD98F]/40 shadow-[0_12px_30px_-10px_rgba(229,159,20,0.7),inset_0_1px_0_rgba(255,255,255,0.55)] transition-[transform,box-shadow,filter] duration-300 ease-out group-hover:brightness-[1.04] group-hover:shadow-[0_18px_42px_-12px_rgba(229,159,20,0.85),inset_0_1px_0_rgba(255,255,255,0.6)] motion-safe:group-hover:-translate-y-0.5 sm:px-7 sm:py-3.5 sm:text-base">
          {HERO_BLOCK.cta}
          <ArrowRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1"
          />
        </span>
      </div>

      <GoldFrame radius="rounded-[25px]" />
    </a>
  );
}

export default function LinktreePage() {
  return (
    <main className="min-h-dvh flex flex-col items-center px-4 pt-10 pb-10">
      {/* Profile */}
      <section className="flex flex-col items-center gap-2 mb-8">
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-[3px] ring-[#E59F14] ring-offset-[3px] ring-offset-[#0B090A] shadow-[0_10px_30px_-10px_rgba(229,159,20,0.45)]">
          <Image
            src={versionedSrc("/profile-avatar.webp")}
            alt={PROFESSIONAL_NAME}
            fill
            className="object-cover"
            sizes="96px"
            loading="eager"
          />
        </div>
        <h1 className="font-heading text-3xl text-white tracking-wide text-center">
          {PROFESSIONAL_NAME}
        </h1>
      </section>

      {/* Image + text blocks */}
      <section className="w-full max-w-xl flex flex-col gap-4">
        <HeroCard />

        {IMAGE_BLOCKS.map((block) => {
          const Icon = PLACEHOLDER_ICONS[block.id];
          const hasImage = "image" in block && !!block.image;
          const isFullBleed = "fullBleed" in block && !!block.fullBleed;
          return (
            <a
              key={block.id}
              href={block.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#1E1A1B_0%,#171415_62%)] min-h-[160px] sm:min-h-[240px] shadow-[0_1px_2px_rgba(0,0,0,0.7),0_20px_44px_-26px_rgba(0,0,0,0.95),0_10px_34px_-18px_rgba(229,159,20,0.2)] transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_1px_2px_rgba(0,0,0,0.7),0_28px_58px_-26px_rgba(0,0,0,1),0_16px_46px_-18px_rgba(229,159,20,0.4)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B23A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B090A]"
            >
              {/* Image */}
              {hasImage && isFullBleed && (
                <div className="absolute inset-0">
                  <Image
                    src={versionedSrc(block.image)}
                    alt={block.h1}
                    fill
                    className="object-cover object-[center_15%]"
                    sizes="(max-width: 448px) 100vw, 576px"
                  />
                </div>
              )}

              {hasImage && !isFullBleed && (
                <div className="absolute right-0 inset-y-0 w-1/2">
                  <Image
                    src={versionedSrc(block.image)}
                    alt={block.h1}
                    fill
                    className={IMAGE_STYLES[block.id] ?? "object-cover"}
                    sizes="(max-width: 448px) 50vw, 224px"
                  />
                </div>
              )}

              {!hasImage && block.id === "spotify" && (
                <div className="absolute right-0 inset-y-0 w-1/2 flex items-center justify-center">
                  <SpotifyLogo className="w-24 h-24 sm:w-32 sm:h-32" />
                </div>
              )}

              {!hasImage && block.id !== "spotify" && (
                <div className="absolute right-0 inset-y-0 w-1/2 flex flex-col items-center justify-center gap-2 border-l border-dashed border-white/10 bg-white/[0.03]">
                  <Icon className="w-8 h-8 text-[#E59F14]/60" />
                  <span className="font-body text-[10px] sm:text-xs text-white/40 text-center px-2">
                    {block.imageLabel}
                    {"pending" in block && block.pending ? " (link pendente)" : ""}
                  </span>
                </div>
              )}

              {/* Text content – left side */}
              <div className="relative z-10 px-8 py-8 w-[58%] flex flex-col gap-3">
                <h2 className="font-heading text-white text-[1.1rem] sm:text-[1.9rem] leading-tight whitespace-pre-line">
                  {block.h1}
                </h2>
                <span className="block w-full text-center bg-[linear-gradient(180deg,#F8CB68_0%,#EFAE33_46%,#DD8B05_100%)] ring-1 ring-[#FFD98F]/45 shadow-[0_1px_2px_rgba(0,0,0,0.45),0_10px_26px_-12px_rgba(229,159,20,0.6),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(122,76,0,0.3)] group-hover:shadow-[0_1px_2px_rgba(0,0,0,0.45),0_16px_36px_-14px_rgba(229,159,20,0.8),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(122,76,0,0.3)] group-hover:brightness-[1.04] transition-[box-shadow,filter] duration-300 ease-out text-[#1A1207] font-heading font-semibold text-xs sm:text-lg rounded-lg px-4 py-2 sm:px-6 sm:py-3 tracking-wide">
                  {block.cta}
                </span>
              </div>

              <GoldFrame radius="rounded-[21px]" />
            </a>
          );
        })}
      </section>

      {/* Button-only blocks */}
      <section className="w-full max-w-xl flex flex-col gap-4 mt-4">
        {BUTTON_BLOCKS.map((block) => (
          <a
            key={block.id}
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center text-center rounded-[22px] bg-[linear-gradient(180deg,#F8CB68_0%,#EFAE33_46%,#DD8B05_100%)] ring-1 ring-[#FFD98F]/45 shadow-[0_1px_2px_rgba(0,0,0,0.6),0_16px_38px_-18px_rgba(229,159,20,0.55),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(122,76,0,0.32)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.6),0_24px_52px_-20px_rgba(229,159,20,0.8),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(122,76,0,0.32)] hover:brightness-[1.04] active:translate-y-0 active:brightness-95 transition-[transform,box-shadow,filter] duration-300 ease-out motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE0A3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B090A] px-6 py-5"
          >
            <span className="font-heading text-[#1A1207] text-base sm:text-xl font-semibold tracking-wide">
              {block.cta}
            </span>
          </a>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="font-body text-xs text-white/40">
          © {new Date().getFullYear()} {PROFESSIONAL_NAME}
        </p>
      </footer>
    </main>
  );
}
