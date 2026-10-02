import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[480px] overflow-hidden bg-[linear-gradient(90deg,#fffaf2_0%,#fffaf2_28%,#dfe8fb_45%,#6e93e6_62%,#2c47ac_82%,#1b2b80_100%)]">
      {/* big glowing arc */}
      <div className="absolute -bottom-[60%] right-[8%] hidden aspect-square w-[75%] rounded-full border border-white/40 bg-gradient-to-tr from-transparent to-white/20 lg:block" />
      <div className="absolute -bottom-[70%] right-[14%] hidden aspect-square w-[75%] rounded-full border border-white/25 lg:block" />

      {/* right dark panel */}
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
      <div className="relative mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <p className="text-xs font-medium leading-6 tracking-[0.25em] text-navy">
          CLEAN ENERGY<br />BRIGHTER TOMORROWS
        </p>

        <h1 className="mt-10 text-6xl font-normal uppercase leading-[0.95] text-brand md:text-[68px]">
          Powering<br />
          <span className="text-accent">a cleaner</span><br />
          Nepal
        </h1>

        <p className="mt-6 max-w-sm text-lg leading-snug text-navy">
          Harnessing Nepal's natural resources for a sustainable and prosperous future.
        </p>

        <div className="mt-8">
          <p className="text-3xl font-normal">9.8 MW</p>
          <p className="mt-1 text-[11px] font-medium tracking-[0.2em]">LICENSED CAPACITY</p>
          <div className="mt-3 h-px w-10 bg-navy/60" />
        </div>

        <a href="#" className="mt-8 inline-flex items-center gap-5 text-[11px] font-medium tracking-[0.2em]">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-navy">
            <ArrowRight size={16} />
          </span>
          LEARN MORE <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}
