import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import {
  GraduationCap,
  Smartphone,
  User,
  PlaySquare,
  Music,
  type LucideIcon,
} from "lucide-react";
import {
  PROFESSIONAL_NAME,
  IMAGE_BLOCKS,
  BUTTON_BLOCKS,
} from "@/lib/constants";

const PLACEHOLDER_ICONS: Record<string, LucideIcon> = {
  corc: GraduationCap,
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
  corc: "object-cover translate-x-[15%]",
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

export default function LinktreePage() {
  return (
    <main className="min-h-dvh flex flex-col items-center px-4 pt-10 pb-10">
      {/* Profile */}
      <section className="flex flex-col items-center gap-2 mb-8">
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-[3px] ring-[#E59F14] ring-offset-[3px] ring-offset-[#151314]">
          <Image
            src={versionedSrc("/profile-avatar.webp")}
            alt={PROFESSIONAL_NAME}
            fill
            className="object-cover"
            sizes="96px"
            priority
          />
        </div>
        <h1 className="font-heading text-3xl text-white tracking-wide text-center">
          {PROFESSIONAL_NAME}
        </h1>
      </section>

      {/* Image + text blocks */}
      <section className="w-full max-w-xl flex flex-col gap-4">
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
              className="group relative flex items-center rounded-2xl overflow-hidden bg-[#151314] min-h-[160px] sm:min-h-[240px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-all duration-200"
            >
              {/* Image */}
              {hasImage && isFullBleed && (
                <>
                  <div className="absolute inset-0">
                    <Image
                      src={versionedSrc(block.image)}
                      alt={block.h1}
                      fill
                      className="object-cover object-top scale-110 -translate-y-[5%]"
                      sizes="(max-width: 448px) 100vw, 576px"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#151314] via-[#151314]/70 to-transparent" />
                </>
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
                <span className="block w-full text-center bg-[#E59F14] group-hover:bg-[#C98A0F] transition-colors duration-200 text-white font-heading text-sm sm:text-lg rounded-lg px-6 py-2.5 sm:py-3 tracking-wide">
                  {block.cta}
                </span>
              </div>
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
            className="flex items-center justify-center text-center rounded-2xl bg-[#151314] hover:bg-[#1F1B19] transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.3)] px-6 py-5"
          >
            <span className="font-heading text-[#E59F14] text-base sm:text-xl tracking-wide">
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
