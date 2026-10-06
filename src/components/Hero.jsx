import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[480px] overflow-hidden flex flex-col justify-center 
      bg-[linear-gradient(180deg,#fffaf2_0%,#fffaf2_50%,#dfe8fb_70%,#6e93e6_100%)] 
      lg:bg-[linear-gradient(90deg,#fffaf2_0%,#fffaf2_28%,#dfe8fb_45%,#6e93e6_62%,#2c47ac_82%,#1b2b80_100%)]">
      
      {/* big glowing arc - Hidden on mobile to prevent overflow */}
      <div className="absolute -bottom-[60%] right-[8%] hidden aspect-square w-[75%] rounded-full border border-white/40 bg-gradient-to-tr from-transparent to-white/20 lg:block" />
      <div className="absolute -bottom-[70%] right-[14%] hidden aspect-square w-[75%] rounded-full border border-white/25 lg:block" />

      {/* right dark panel - Hidden on mobile and tablet, shows on desktop */}
      <aside className="absolute inset-y-0 right-0 hidden w-[250px] border-l border-white/50 bg-[#1c2d8a]/90 text-white lg:block">
        <div className="absolute left-6 top-4 h-[300px] w-px bg-white/60" />
        <div className="absolute left-[60px] top-[62px] text-[13px] leading-6 tracking-[0.2em]">
          PEOPLE<br />PLANET<br />PROGRESS
          <div className="mt-4 h-px w-10 bg-white" />
        </div>
        <div className="absolute bottom-20 left-0 h-px w-8 bg-white/70" />
        <p className="absolute bottom-16 left-[18px] text-[11px] leading-6 tracking-[0.2em] ml-[24px]">
          RENEWABLE ENERGY<br />FOR GENERATIONS
        </p>
      </aside>

      {/* left content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-16 md:px-10 lg:px-16 lg:pr-[300px]">
        <p className="text-xs md:text-sm font-medium leading-6 tracking-[0.25em] text-navy">
          CLEAN ENERGY<br />BRIGHTER TOMORROWS
        </p>

        {/* Responsive Text Sizes */}
        <h1 className="mt-8 md:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[68px] font-normal uppercase leading-[0.95] text-brand break-words">
          Powering<br />
          <span className="text-accent">a cleaner</span><br />
          Nepal
        </h1>

        <p className="mt-6 max-w-sm text-base md:text-lg leading-snug text-navy">
          Harnessing Nepal's natural resources for a sustainable and prosperous future.
        </p>

        <div className="mt-8 md:mt-10">
          <p className="text-3xl md:text-4xl font-normal">9.8 MW</p>
          <p className="mt-1 text-[11px] md:text-xs font-medium tracking-[0.2em]">LICENSED CAPACITY</p>
          <div className="mt-3 h-px w-10 bg-navy/60" />
        </div>

        <a href="#" className="mt-10 md:mt-12 inline-flex items-center gap-3 md:gap-5 text-[11px] md:text-xs font-medium tracking-[0.2em] text-navy hover:text-brand transition-colors group">
          <span className="grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full border border-navy/50 group-hover:border-brand transition-colors">
            <ArrowRight size={16} />
          </span>
          <span className="whitespace-nowrap">LEARN MORE</span>
          <ArrowRight size={14} className="hidden sm:block" />
        </a>
      </div>
    </section>
  )
}