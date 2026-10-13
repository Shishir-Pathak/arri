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

/* Frosted icon tile shared by every card */
const iconTile =
  'grid place-items-center rounded-2xl border border-white/25 ' +
  'bg-[linear-gradient(145deg,rgba(255,255,255,0.32),rgba(255,255,255,0.06))] ' +
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_24px_-12px_rgba(0,0,0,0.75)] ' +
  'transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3'

/* Shared glass-card look for the bento grid */
const card =
  'hero-rise glass-card group relative overflow-hidden rounded-[26px] p-5 text-white ' +
  'border border-white/15 bg-[#101d5c]/50 backdrop-blur-xl ' +
  'bg-[linear-gradient(150deg,rgba(255,255,255,0.14),rgba(255,255,255,0.035)_55%,rgba(255,255,255,0)_100%)] ' +
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_38px_-16px_rgba(6,12,45,0.75)] ' +
  'transition-all duration-500 ease-out ' +
  'hover:-translate-y-1.5 hover:border-white/35 hover:bg-[#101d5c]/65 ' +
  'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_30px_64px_-20px_rgba(6,12,45,0.9)]'

export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[640px] w-full flex-col justify-center overflow-hidden antialiased
      bg-[linear-gradient(180deg,#dbe6fc_0%,#a9c1f4_28%,#6e93e6_58%,#2f4bb4_100%)]
      lg:min-h-[600px]
      lg:bg-[linear-gradient(105deg,#dbe6fc_0%,#adc3f5_20%,#6e93e6_45%,#2a45ab_72%,#131f66_100%)]"
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
          0%, 100% { opacity: .55; transform: scale(1); }
          50%      { opacity: .95; transform: scale(1.12); }
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

        /* fill-mode: backwards -> the entrance keeps hover transforms working afterwards */
        .hero-rise  { animation: hero-rise .85s cubic-bezier(.22,1,.36,1) backwards; }
        .hero-line  { transform-origin: left; animation: hero-line .9s 1s cubic-bezier(.22,1,.36,1) backwards; }
        .hero-drift { animation: hero-drift 14s ease-in-out infinite; }
        .hero-drift-slow { animation: hero-drift 20s ease-in-out infinite reverse; }
        .hero-glow  { animation: hero-glow 8s ease-in-out infinite; }
        .hero-panel { animation: hero-panel 1s .3s cubic-bezier(.22,1,.36,1) backwards; }
        .hero-float { animation: hero-float 6s ease-in-out infinite; }
        .hero-ping  { animation: hero-ping 2s ease-out infinite; }

        /* glass card hover sheen */
        .glass-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background: radial-gradient(120% 85% at 50% -10%, rgba(255,255,255,.26), rgba(255,255,255,0) 62%);
          opacity: 0;
          transition: opacity .5s ease;
        }
        .glass-card:hover::after { opacity: 1; }

        @media (prefers-reduced-motion: reduce) {
          .hero-rise, .hero-line, .hero-panel { animation: none; opacity: 1; transform: none; }
          .hero-drift, .hero-drift-slow, .hero-glow, .hero-float, .hero-ping { animation: none; }
          .glass-card::after { transition: none; }
        }
      `}</style>

      {/* layered ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow absolute -left-40 -top-32 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85),rgba(255,255,255,0)_62%)] blur-2xl" />
        <div
          className="hero-glow absolute left-[34%] top-[-12%] hidden h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.5),rgba(255,255,255,0)_65%)] blur-2xl lg:block"
          style={{ animationDelay: '2.5s' }}
        />
        <div className="hero-glow absolute right-[6%] top-[30%] hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(120,180,255,0.45),rgba(120,180,255,0)_65%)] blur-3xl lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(180deg,transparent,rgba(8,15,55,0.35))]" />
      </div>

      {/* subtle dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(19,31,102,0.35) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          WebkitMaskImage:
            'radial-gradient(120% 90% at 10% 10%, #000 0%, rgba(0,0,0,0.5) 38%, transparent 72%)',
          maskImage:
            'radial-gradient(120% 90% at 10% 10%, #000 0%, rgba(0,0,0,0.5) 38%, transparent 72%)',
        }}
      />

      {/* fine grain for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* big glowing arcs — hidden on mobile to prevent overflow */}
      <div className="hero-drift absolute -bottom-[58%] right-[4%] hidden aspect-square w-[80%] rounded-full border border-white/25 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),rgba(255,255,255,0)_62%)] shadow-[inset_0_0_90px_rgba(255,255,255,0.14)] lg:block" />
      <div className="hero-drift-slow absolute -bottom-[70%] right-[13%] hidden aspect-square w-[80%] rounded-full border border-white/15 lg:block" />

      {/* right dark panel — desktop only */}
      <aside className="hero-panel absolute inset-y-0 right-0 hidden w-[250px] flex-col justify-between overflow-hidden border-l border-white/20 bg-[#0b1550]/75 px-7 py-14 text-white backdrop-blur-md lg:flex">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0)_45%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.05))]" />

        <div className="relative flex items-start gap-5">
          <span className="mt-1 h-[240px] w-px shrink-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0.28),transparent)]" />
          <div className="text-[13px] leading-7 tracking-[0.28em] text-white/90">
            PEOPLE
            <br />
            PLANET
            <br />
            PROGRESS
            <span className="mt-5 block h-px w-10 bg-white/80" />
          </div>
        </div>

        <div className="relative">
          <span className="mb-4 block h-px w-8 bg-white/60" />
          <p className="text-[11px] leading-6 tracking-[0.22em] text-white/75">
            RENEWABLE ENERGY
            <br />
            FOR GENERATIONS
          </p>
        </div>
      </aside>

      {/* main content: 2 columns on desktop */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-12 lg:gap-10 lg:px-16 lg:pr-[300px]">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-6">
          {/* eyebrow pill */}
          <p
            className="hero-rise inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/55 px-4 py-2 text-[11px] font-medium leading-5 tracking-[0.25em] text-navy shadow-[0_10px_28px_-14px_rgba(9,17,60,0.7)] backdrop-blur-md md:text-xs"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="hero-ping absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>
              CLEAN ENERGY
              <br />
              BRIGHTER TOMORROWS
            </span>
          </p>

          <h1
            className="hero-rise mt-8 break-words text-4xl font-normal uppercase leading-[0.94] tracking-[-0.015em] text-brand [text-shadow:0_1px_0_rgba(255,255,255,0.28)] sm:text-5xl md:mt-10 md:text-6xl lg:text-7xl xl:text-[68px]"
            style={{ animationDelay: '0.25s' }}
          >
            Powering
            <br />
            <span className="text-accent">a cleaner</span>
            <br />
            Nepal
          </h1>

          <p
            className="hero-rise mt-6 max-w-sm text-base leading-snug text-navy/90 md:text-lg"
            style={{ animationDelay: '0.45s' }}
          >
            Harnessing Nepal's natural resources for a sustainable and prosperous future.
          </p>

          <a
            href="#"
            className="hero-rise group relative mt-10 inline-flex items-center gap-4 overflow-hidden rounded-full bg-navy py-2 pl-6 pr-2 text-[11px] font-medium tracking-[0.2em] text-white ring-1 ring-white/25 shadow-[0_16px_38px_-14px_rgba(9,17,60,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_50px_-16px_rgba(9,17,60,1)] md:mt-12 md:text-xs"
            style={{ animationDelay: '0.65s' }}
          >
            {/* shine sweep */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative whitespace-nowrap">LEARN MORE</span>
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_6px_16px_-6px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:translate-x-1 md:h-11 md:w-11">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        {/* RIGHT COLUMN: bento grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-6">
          {/* big capacity card (spans 2 columns) */}
          <div className={card + ' col-span-2'} style={{ animationDelay: '0.5s' }}>
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="flex items-baseline text-5xl font-normal leading-none tracking-tight tabular-nums md:text-6xl">
                  <CountUp end={9.8} />
                  <span className="ml-2 text-2xl font-light text-white/80 md:text-3xl">MW</span>
                </p>
                <p className="mt-3 text-[11px] font-medium tracking-[0.22em] text-white/75 md:text-xs">
                  LICENSED CAPACITY
                </p>
              </div>
              <span className={iconTile + ' h-12 w-12 shrink-0 hero-float'}>
                <Zap size={22} />
              </span>
            </div>
            <div className="hero-line mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.85),rgba(255,255,255,0.25),transparent)]" />
          </div>

          {/* small cards */}
          <div className={card} style={{ animationDelay: '0.65s' }}>
            <span className={iconTile + ' h-10 w-10'}>
              <Leaf size={18} />
            </span>
            <p className="mt-5 text-3xl font-normal leading-none tracking-tight">100%</p>
            <p className="mt-2 text-[11px] font-medium tracking-[0.22em] text-white/75">RENEWABLE</p>
          </div>

          <div className={card} style={{ animationDelay: '0.75s' }}>
            <span className={iconTile + ' h-10 w-10'}>
              <Droplets size={18} />
            </span>
            <p className="mt-5 text-3xl font-normal leading-none tracking-tight">Hydro</p>
            <p className="mt-2 text-[11px] font-medium tracking-[0.22em] text-white/75">
              NATURAL SOURCE
            </p>
          </div>

          {/* wide bottom card */}
          <div
            className={card + ' col-span-2 flex items-center gap-4'}
            style={{ animationDelay: '0.85s' }}
          >
            <span className={iconTile + ' h-12 w-12 shrink-0'}>
              <Mountain size={22} />
            </span>
            <div>
              <p className="text-xl font-normal tracking-tight md:text-2xl">Made in Nepal</p>
              <p className="mt-1 text-[11px] font-medium tracking-[0.22em] text-white/75">
                LOCAL RESOURCES, LOCAL FUTURE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}