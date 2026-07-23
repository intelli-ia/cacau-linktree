import Image from "next/image";
import { LINKS, PROFESSIONAL_NAME, PROFESSIONAL_TITLE, PROFESSIONAL_BIO } from "@/lib/constants";

const CARD_IMAGE = "/image.webp";

export default function LinktreePage() {
  return (
    <main className="min-h-dvh flex flex-col items-center px-4 pt-4 pb-10">
      {/* Profile */}
      <section className="flex flex-col items-center gap-2 mb-4">
        <div className="relative w-24 h-24 rounded-full ring-[3px] ring-[#008538] ring-offset-[3px] ring-offset-[#F5EFE2] overflow-hidden shadow-md">
          <Image
            src="/image.webp"
            alt={PROFESSIONAL_NAME}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl text-[#13181E] tracking-wide">
            {PROFESSIONAL_NAME}
          </h1>
          <p className="font-body text-lg text-[#555] mt-1">
            {PROFESSIONAL_TITLE}
          </p>
          <p className="font-body text-lg text-[#888] mt-0.5">
            {PROFESSIONAL_BIO}
          </p>
        </div>
      </section>

      {/* Link cards */}
      <section className="w-full max-w-xl flex flex-col gap-4">
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center rounded-2xl overflow-hidden bg-[#13181E] min-h-[160px] sm:min-h-[240px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.22)] transition-all duration-200"
          >
            {/* Portrait image – right side */}
            <div className="absolute right-0 inset-y-0 w-1/2">
              <Image
                src={CARD_IMAGE}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 448px) 50vw, 224px"
              />
              {/* Gradient fade: card-bg → transparent */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#13181E] via-[#13181E]/30 to-transparent" />
            </div>

            {/* Text content – left side */}
            <div className="relative z-10 px-8 py-8 w-[58%] flex flex-col gap-1.5">
              <p className="font-heading font-medium text-[12px] uppercase tracking-[0.18em] text-[#C4940C]">
                {link.subtitle}
              </p>
              <h2 className="font-heading font-bold text-white text-[1.25rem] sm:text-[2.1rem] uppercase leading-tight">
                {link.title}
              </h2>
              <div className="mt-5">
                <span className="block w-full text-center bg-[#C4940C] group-hover:bg-[#B08309] transition-colors duration-200 text-white font-heading font-bold text-sm sm:text-xl rounded-lg px-7 py-2.5 sm:py-3 tracking-wide">
                  {link.cta}
                </span>
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="font-body text-xs text-[#AAA49C]">
          © {new Date().getFullYear()} {PROFESSIONAL_NAME}
        </p>
      </footer>
    </main>
  );
}
