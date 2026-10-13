import { useEffect, useState } from 'react'
import { ArrowRight, Zap, Leaf, Droplets, Mountain } from 'lucide-react'

/* Counts up to `end` once on mount (skipped if the user prefers reduced motion) */
function CountUp({ end = 9.8, duration = 1600, decimals = 1 }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(end)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(end * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    const t = setTimeout(() => (raf = requestAnimationFrame(tick)), 800)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf)
    }
  }, [end, duration])

  return <>{value.toFixed(decimals)}</>
}

/* Shared glass-card look for the grid */
const card =
  'hero-rise group relative overflow-hidden rounded-3xl border border-white/25 bg-[#1b2b80]/45 p-5 text-white backdrop-blur-md ' +
  'transition duration-300 hover:-translate-y-1.5 hover:border-white/50 hover:bg-[#1b2b80]/60 hover:shadow-2xl hover:shadow-[#0f1a55]/40'

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[640px] lg:min-h-[560px] overflow-hidden flex flex-col justify-center 
      bg-[linear-gradient(180deg,#cfdcfa_0%,#a3bcf2_30%,#6e93e6_62%,#3a58c0_100%)] 
      lg:bg-[linear-gradient(100deg,#cfdcfa_0%,#a9c0f4_24%,#6e93e6_46%,#2c47ac_72%,#1b2b80_100%)]"
    >
      <style>{`
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-line {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes hero-drift {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50%      { transform: translate3d(-14px,-18px,0) scale(1.025); }
        }
        @keyframes hero-glow {
          0%, 100% { opacity: .5; transform: scale(1); }
          50%      { opacity: .9; transform: scale(1.15); }
        }
        @keyframes hero-panel {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes hero-ping {
          0%   { transform: scale(1); opacity: .7; }
          80%, 100% { transform: scale(2.6); opacity: 0; }
        }
        .hero-rise  { opacity: 0; animation: hero-rise .85s cubic-bezier(.22,1,.36,1) forwards; }
        .hero-line  { transform-origin: left; transform: scaleX(0); animation: hero-line .9s 1s cubic-bezier(.22,1,.36,1) forwards; }
        .hero-drift { animation: hero-drift 14s ease-in-out infinite; }
        .hero-drift-slow { animation: hero-drift 20s ease-in-out infinite reverse; }
        .hero-glow  { animation: hero-glow 8s ease-in-out infinite; }
        .hero-panel { opacity: 0; animation: hero-panel 1s .3s cubic-bezier(.22,1,.36,1) forwards; }
        .hero-float { animation: hero-float 6s ease-in-out infinite; }
        .hero-ping  { animation: hero-ping 2s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-rise, .hero-line, .hero-panel { animation: none; opacity: 1; transform: none; }
          .hero-drift, .hero-drift-slow, .hero-glow, .hero-float, .hero-ping { animation: none; }
        }
      `}</style>

      {/* subtle dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(rgba(27,43,128,0.28) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          WebkitMaskImage: 'linear-gradient(90deg, #000 0%, #000 40%, transparent 75%)',
          maskImage: 'linear-gradient(90deg, #000 0%, #000 40%, transparent 75%)',
        }}
      />

      {/* soft glow blobs */}
      <div className="hero-glow pointer-events-none absolute -left-24 top-10 h-[360px] w-[360px] rounded-full bg-white/50 blur-3xl" />
      <div className="hero-glow pointer-events-none absolute right-[18%] top-[8%] hidden h-[420px] w-[420px] rounded-full bg-white/25 blur-3xl lg:block" />

      {/* big glowing arc - Hidden on mobile to prevent overflow */}
      <div className="hero-drift absolute -bottom-[60%] right-[8%] hidden aspect-square w-[75%] rounded-full border border-white/40 bg-gradient-to-tr from-transparent to-white/20 lg:block" />
      <div className="hero-drift-slow absolute -bottom-[70%] right-[14%] hidden aspect-square w-[75%] rounded-full border border-white/25 lg:block" />

      {/* right dark panel - Hidden on mobile and tablet, shows on desktop */}
      <aside className="hero-panel absolute inset-y-0 right-0 hidden w-[250px] border-l border-white/50 bg-[#1c2d8a]/90 text-white backdrop-blur-sm lg:block">
        <div className="absolute left-6 top-4 h-[300px] w-px bg-gradient-to-b from-white/80 to-white/0" />
        <div className="absolute left-[60px] top-[62px] text-[13px] leading-6 tracking-[0.2em]">
          PEOPLE<br />PLANET<br />PROGRESS
          <div className="mt-4 h-px w-10 bg-white" />
        </div>
        <div className="absolute bottom-20 left-0 h-px w-8 bg-white/70" />
        <p className="absolute bottom-16 left-[18px] text-[11px] leading-6 tracking-[0.2em] ml-[24px]">
          RENEWABLE ENERGY<br />FOR GENERATIONS
        </p>
      </aside>

      {/* main content: 2 columns on desktop */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:pr-[300px]">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-6">
          {/* eyebrow pill */}
          <p
            className="hero-rise inline-flex items-center gap-3 rounded-full border border-navy/20 bg-white/50 px-4 py-2 text-[11px] md:text-xs font-medium leading-5 tracking-[0.25em] text-navy backdrop-blur-md"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="hero-ping absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>
              CLEAN ENERGY<br />BRIGHTER TOMORROWS
            </span>
          </p>

          <h1
            className="hero-rise mt-8 md:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[68px] font-normal uppercase leading-[0.95] text-brand break-words"
            style={{ animationDelay: '0.25s' }}
          >
            Powering<br />
            <span className="text-accent">a cleaner</span><br />
            Nepal
          </h1>

          <p
            className="hero-rise mt-6 max-w-sm text-base md:text-lg leading-snug text-navy"
            style={{ animationDelay: '0.45s' }}
          >
            Harnessing Nepal's natural resources for a sustainable and prosperous future.
          </p>

          <a
            href="#"
            className="hero-rise group mt-10 md:mt-12 inline-flex items-center gap-4 rounded-full bg-navy py-2 pl-6 pr-2 text-[11px] md:text-xs font-medium tracking-[0.2em] text-white shadow-lg shadow-navy/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy/40"
            style={{ animationDelay: '0.65s' }}
          >
            <span className="whitespace-nowrap">LEARN MORE</span>
            <span className="grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full bg-white text-navy transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        {/* RIGHT COLUMN: bento grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-6">
          {/* big capacity card (spans 2 columns) */}
          <div className={card + ' col-span-2'} style={{ animationDelay: '0.5s' }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-5xl md:text-6xl font-normal leading-none">
                  <CountUp end={9.8} />
                  <span className="ml-2 text-2xl md:text-3xl">MW</span>
                </p>
                <p className="mt-3 text-[11px] md:text-xs font-medium tracking-[0.2em]">LICENSED CAPACITY</p>
              </div>
              <span className="hero-float grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30">
                <Zap size={22} />
              </span>
            </div>
            <div className="hero-line mt-5 h-px w-full bg-gradient-to-r from-white/80 to-transparent" />
          </div>

          {/* small cards */}
          <div className={card} style={{ animationDelay: '0.65s' }}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/30">
              <Leaf size={18} />
            </span>
            <p className="mt-5 text-3xl font-normal">100%</p>
            <p className="mt-1 text-[11px] font-medium tracking-[0.2em]">RENEWABLE</p>
          </div>

          <div className={card} style={{ animationDelay: '0.75s' }}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/30">
              <Droplets size={18} />
            </span>
            <p className="mt-5 text-3xl font-normal">Hydro</p>
            <p className="mt-1 text-[11px] font-medium tracking-[0.2em]">NATURAL SOURCE</p>
          </div>

          {/* wide bottom card */}
          <div className={card + ' col-span-2 flex items-center gap-4'} style={{ animationDelay: '0.85s' }}>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30">
              <Mountain size={22} />
            </span>
            <div>
              <p className="text-xl md:text-2xl font-normal">Made in Nepal</p>
              <p className="mt-1 text-[11px] font-medium tracking-[0.2em]">LOCAL RESOURCES, LOCAL FUTURE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}