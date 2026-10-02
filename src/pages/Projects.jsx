import { Link } from 'react-router-dom'
import { Zap, MapPin, Waves, Mountain, ArrowRight, Phone, Mail, CheckCircle2, Circle, Sun, Wind } from 'lucide-react'

/* ---------------- DATA (edit text here) ---------------- */
const facts = [
  { icon: Zap, label: 'Licensed Capacity', value: '9.8 MW' },
  { icon: Waves, label: 'Project Type', value: 'Run-of-River (Cascade)' },
  { icon: MapPin, label: 'District', value: 'Solukhumbu' },
  { icon: Mountain, label: 'Province', value: 'Koshi Province' },
]

const cascadeSteps = [
  { title: 'Upstream Project', text: 'Luja Khola Hydropower Project generates electricity first' },
  { title: 'Tailrace Discharge', text: 'Water released from the upstream powerhouse is reused' },
  { title: 'Cascade Project', text: 'Our 9.8 MW project generates additional clean power' },
  { title: 'National Grid', text: 'Electricity delivered in coordination with Nepal Electricity Authority' },
]

const details = [
  ['Project Name', 'Luja Khola Cascade Hydropower Project'],
  ['Licensee', 'Arris Energy Limited'],
  ['Generation License', '9.8 MW'],
  ['Project Type', 'Run-of-River (Cascade)'],
  ['Location', 'Khumbu Pasanglhamu Rural Municipality–2'],
  ['District / Province', 'Solukhumbu / Koshi Province'],
  ['Water Source', 'Tailrace discharge of upstream Luja Khola Hydropower Project'],
  ['Gross Head', 'To be updated'],
  ['Design Discharge', 'To be updated'],
  ['Power Purchaser', 'Nepal Electricity Authority (NEA)'],
]

// status: 'done' | 'current' | 'next'
const progress = [
  { title: 'Generation License', text: '9.8 MW license granted', status: 'done' },
  { title: 'License Transfer', text: 'Inherited by Arris Energy Limited after conversion', status: 'done' },
  { title: 'Financial Closure', text: 'To be updated', status: 'current' },
  { title: 'Construction', text: 'To be updated', status: 'next' },
  { title: 'Commercial Operation', text: 'To be updated', status: 'next' },
]

const benefits = [
  'Clean, renewable electricity',
  'Efficient use of existing tailrace water',
  'Supports Nepal’s energy security',
  'Contributes to national grid supply',
  'Local development opportunities',
  'Long-term sustainable generation',
]

const pipeline = [
  { icon: Sun, title: 'Solar Power', text: 'Planned diversification to strengthen supply resilience' },
  { icon: Wind, title: 'Wind Power', text: 'Planned diversification to strengthen supply reliability' },
]

/* ---------------- BANNER SUN RAYS ---------------- */
const rays = [
  [196, 62], [208, 80], [220, 68], [232, 84], [244, 70], [256, 90], [268, 76],
  [280, 92], [292, 72], [304, 86], [316, 66], [328, 80], [340, 60], [350, 50],
].map(([deg, len]) => {
  const cx = 700, cy = 124
  const rad = (d) => (d * Math.PI) / 180
  const tip = [cx + len * Math.cos(rad(deg)), cy + len * Math.sin(rad(deg))]
  const b1 = [cx + 9 * Math.cos(rad(deg - 5)), cy + 9 * Math.sin(rad(deg - 5))]
  const b2 = [cx + 9 * Math.cos(rad(deg + 5)), cy + 9 * Math.sin(rad(deg + 5))]
  return `${b1.join(',')} ${tip.join(',')} ${b2.join(',')}`
})

/* ---------------- SMALL HELPERS ---------------- */
const Label = ({ children }) => (
  <p className="text-[11px] font-semibold tracking-[0.2em] text-brand">{children}</p>
)
const Bar = () => <span className="mt-2 block h-[3px] w-8 bg-accent" />

function NumList({ items, className = '' }) {
  return (
    <ol className={className}>
      {items.map((t, i) => (
        <li key={t} className="flex gap-6 border-b border-brand/15 py-2 text-[13px] text-navy/90 last:border-0">
          <span className="w-6 font-semibold text-brand">{String(i + 1).padStart(2, '0')}</span>
          {t}
        </li>
      ))}
    </ol>
  )
}

/* ---------------- PAGE ---------------- */
export default function Projects() {
  return (
    <div className="mx-auto max-w-[1200px] bg-white">
      {/* ===== PAGE BANNER ===== */}
      <section className="relative aspect-[929/155] min-h-[160px] w-full overflow-hidden bg-[#e4eefc]">
        <svg
          viewBox="0 0 929 155"
          preserveAspectRatio="xMaxYMax slice"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="bannerSkyP" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dbe8fb" />
              <stop offset="1" stopColor="#f1f6fd" />
            </linearGradient>
            <radialGradient id="sunGlowP" cx="0.5" cy="1" r="0.6">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="929" height="155" fill="url(#bannerSkyP)" />
          <path d="M0 98 C150 78 300 128 500 108 C650 92 800 118 929 96 V155 H0Z" fill="#d3e3f9" opacity="0.8" />
          <path d="M0 122 C200 106 360 150 560 138 L700 155 H0Z" fill="#eaf2fd" />
          <circle cx="700" cy="118" r="100" fill="#2f5cae" />
          {rays.map((p, i) => <polygon key={i} points={p} fill="#fff" />)}
          <ellipse cx="700" cy="150" rx="150" ry="34" fill="url(#sunGlowP)" />
          <path d="M585 148 Q700 128 815 148 L830 155 H570Z" fill="#fff" />
          <path d="M470 155 C520 136 585 128 660 140 L700 155Z" fill="#4a78c4" />
          <path d="M500 155 C540 145 590 140 640 146 L660 155Z" fill="#2f5cae" />
          <path d="M690 155 C760 140 840 118 929 116 V155Z" fill="#fbd98a" />
          <path d="M730 155 C800 145 870 132 929 132 V155Z" fill="#f5b955" />
        </svg>

        <div className="relative z-10 pl-[6.5%] pt-[2.5%] text-navy">
          <p className="text-[13px]">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>Projects
          </p>
          <h1 className="mt-3 text-[40px] font-extrabold leading-none tracking-tight text-[#1a3a8f] md:text-[46px]">
            OUR PROJECTS
          </h1>
          <span className="mt-3 block h-[3px] w-10 bg-[#f5b955]" />
          <p className="mt-3 text-[12px] tracking-[0.3em] text-[#4a78c4]">POWERING A SUSTAINABLE TOMORROW</p>
        </div>

        <div className="absolute right-[3%] top-[5%] z-10 hidden text-[#1a3a8f] sm:block">
          <div className="border-l border-[#1a3a8f]/50 pl-3 text-[11px] font-medium leading-[18px] tracking-[0.25em]">
            PEOPLE<br />PLANET<br />PROGRESS
            <span className="mt-2 block h-[2px] w-8 bg-[#f5b955]" />
          </div>
          <div className="mt-5 pl-3 text-[10px] font-medium leading-[16px] tracking-[0.2em]">
            CLEAN ENERGY<br />BRIGHTER NEPAL
            <span className="mt-2 block h-[2px] w-8 bg-[#f5b955]" />
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className="grid gap-8 border-b border-brand/15 px-6 py-8 lg:grid-cols-2 lg:px-10">
        <div>
          <Label>PRINCIPAL PROJECT</Label>
          <h2 className="mt-1 text-3xl font-bold text-navy">Luja Khola Cascade Hydropower Project</h2>
          <Bar />
          <p className="mt-4 text-[13px] leading-6 text-navy/85">
            Arris Energy Limited holds a generation license for the 9.8 MW Luja Khola Cascade
            Hydropower Project, a run-of-river project located in Khumbu Pasanglhamu Rural
            Municipality–2, Solukhumbu District, Koshi Province.
          </p>
          <p className="mt-3 text-[13px] leading-6 text-navy/85">
            The project will utilize the tailrace discharge from the upstream Luja Khola Hydropower
            Project and will generate clean, renewable electricity to contribute to Nepal's growing
            energy demand.
          </p>
        </div>
        {/* put project.jpg inside the /public folder */}
        <div
          className="min-h-[240px] rounded-2xl bg-cover bg-center shadow"
          style={{ backgroundImage: "url('/project.jpg'), linear-gradient(135deg,#9db8dd,#4d7bb8)" }}
        />
      </section>

      {/* ===== KEY FACTS ===== */}
      <section className="border-b border-brand/15 bg-[#f1f6fd] px-6 py-8 lg:px-10">
        <Label>PROJECT AT A GLANCE</Label>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-accent text-accent">
                <Icon size={22} />
              </span>
              <div className="text-[11px] leading-5 text-navy/75">
                {label}
                <p className="text-base font-bold leading-5 text-brand">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW THE CASCADE WORKS ===== */}
      <section className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>HOW IT WORKS</Label>
        <h2 className="mt-1 text-3xl font-bold text-navy">The Cascade Concept</h2>
        <div className="relative mt-8 grid gap-6 sm:grid-cols-4">
          <span className="absolute left-[12.5%] right-[12.5%] top-[6px] hidden h-px bg-brand/60 sm:block" />
          {cascadeSteps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <span className={`relative mx-auto block h-3.5 w-3.5 rounded-full ${i === 2 ? 'bg-accent' : 'bg-brand'}`} />
              <p className="mt-3 text-xs font-semibold text-navy">{s.title}</p>
              <p className="mx-auto mt-1 max-w-[170px] text-[11px] leading-4 text-navy/75">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DETAILS / PROGRESS ===== */}
      <section className="grid border-b border-brand/15 lg:grid-cols-2">
        <div className="px-6 py-8 lg:border-r lg:border-brand/15 lg:px-10">
          <Label>PROJECT DETAILS</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Technical &amp; Licensing Summary</h2>
          <Bar />
          <dl className="mt-4">
            {details.map(([k, v]) => (
              <div key={k} className="flex gap-4 border-b border-brand/15 py-2 text-[12px] last:border-0">
                <dt className="w-36 shrink-0 font-semibold text-navy">{k}</dt>
                <dd className={v === 'To be updated' ? 'italic text-navy/50' : 'text-navy/85'}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="px-6 py-8 lg:px-10">
          <Label>PROJECT STATUS</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Development Progress</h2>
          <Bar />
          <ol className="mt-4 space-y-4">
            {progress.map((p) => (
              <li key={p.title} className="flex gap-3">
                {p.status === 'done' ? (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                ) : (
                  <Circle size={18} className={`mt-0.5 shrink-0 ${p.status === 'current' ? 'text-accent' : 'text-brand/30'}`} />
                )}
                <div>
                  <p className="text-[13px] font-semibold text-navy">{p.title}</p>
                  <p className={`text-[11px] ${p.text === 'To be updated' ? 'italic text-navy/50' : 'text-navy/75'}`}>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== BENEFITS / PIPELINE ===== */}
      <section className="grid border-b border-brand/15 lg:grid-cols-2">
        <div className="px-6 py-8 lg:border-r lg:border-brand/15 lg:px-10">
          <Label>PROJECT BENEFITS</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Why It Matters</h2>
          <Bar />
          <NumList items={benefits} className="mt-4" />
        </div>
        <div className="px-6 py-8 lg:px-10">
          <Label>FUTURE PIPELINE</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Beyond Hydropower</h2>
          <Bar />
          <div className="mt-5 space-y-4">
            {pipeline.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e3ecfb] text-brand">
                  <Icon size={24} />
                </span>
                <p className="text-[12px] leading-5 text-navy">
                  <b>{title}</b><br />{text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA / CONTACT ===== */}
      <section className="px-6 py-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#f1f6fd] p-6 md:flex-row md:items-center">
          <div>
            <Label>GET IN TOUCH</Label>
            <h2 className="mt-1 text-xl font-bold text-navy">Interested in our projects?</h2>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-navy/85">
              <span className="flex items-center gap-2"><Phone size={14} className="text-brand" />01-5920708 / 9851088339</span>
              <span className="flex items-center gap-2"><Mail size={14} className="text-brand" />energyarris@gmail.com</span>
            </div>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy"
          >
            ABOUT THE COMPANY <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}