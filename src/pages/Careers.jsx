import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase, MapPin, Clock, ChevronDown, Mail, Phone, ArrowRight, Leaf, GraduationCap,
  Users, TrendingUp, ShieldCheck, FileText, Search, UserCheck, Handshake,
} from 'lucide-react'

/* ---------------- DATA (edit text here) ---------------- */
const TBU = 'To be updated'
const APPLY_EMAIL = 'energyarris@gmail.com'

const reasons = [
  { icon: Leaf, title: 'Meaningful Work', text: 'Help harness Nepal’s river systems for clean, renewable energy' },
  { icon: TrendingUp, title: 'Growing Platform', text: 'Be part of a company expanding across hydropower, solar and wind' },
  { icon: GraduationCap, title: 'Technical Capability', text: 'Work in an environment that builds technical skills and expertise' },
  { icon: ShieldCheck, title: 'Institutional Values', text: 'A regulatory-first company focused on long-term continuity' },
  { icon: Users, title: 'Collaborative Team', text: 'Work alongside experienced promoters, directors and engineers' },
  { icon: Handshake, title: 'National Impact', text: 'Contribute to Nepal’s energy security and sustainable development' },
]

const values = [
  'Responsible development of natural resources',
  'Compliance and integrity',
  'Technical excellence',
  'Long-term thinking',
  'Respect for communities and environment',
]

// SAMPLE openings: replace or delete. Set openings = [] to show the "no openings" message.
const departments = ['All', 'Engineering', 'Finance & Admin', 'Operations']
const openings = [
  {
    title: 'Civil Engineer (Sample)',
    department: 'Engineering',
    location: 'Solukhumbu (Project Site)',
    type: 'Full-time',
    deadline: null, // 'YYYY-MM-DD' or null
    summary: TBU,
    requirements: [TBU],
  },
  {
    title: 'Accountant (Sample)',
    department: 'Finance & Admin',
    location: 'Kathmandu (Head Office)',
    type: 'Full-time',
    deadline: null,
    summary: TBU,
    requirements: [TBU],
  },
  {
    title: 'Site Operator (Sample)',
    department: 'Operations',
    location: 'Solukhumbu (Project Site)',
    type: 'Full-time',
    deadline: null,
    summary: TBU,
    requirements: [TBU],
  },
]

const steps = [
  { icon: FileText, title: 'Apply', text: 'Send your CV and a short cover letter by email' },
  { icon: Search, title: 'Screening', text: 'Our team reviews applications against the role' },
  { icon: Users, title: 'Interview', text: 'Shortlisted candidates are invited to interview' },
  { icon: UserCheck, title: 'Offer', text: 'Selected candidates receive an offer and join the team' },
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

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : null

const applyLink = (title) =>
  `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent('Application: ' + title)}`

/* ---------------- PAGE ---------------- */
export default function Careers() {
  const [dept, setDept] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const list = useMemo(
    () => openings.filter((o) => dept === 'All' || o.department === dept),
    [dept]
  )

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
            <linearGradient id="bannerSkyC" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dbe8fb" />
              <stop offset="1" stopColor="#f1f6fd" />
            </linearGradient>
            <radialGradient id="sunGlowC" cx="0.5" cy="1" r="0.6">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="929" height="155" fill="url(#bannerSkyC)" />
          <path d="M0 98 C150 78 300 128 500 108 C650 92 800 118 929 96 V155 H0Z" fill="#d3e3f9" opacity="0.8" />
          <path d="M0 122 C200 106 360 150 560 138 L700 155 H0Z" fill="#eaf2fd" />
          <circle cx="700" cy="118" r="100" fill="#2f5cae" />
          {rays.map((p, i) => <polygon key={i} points={p} fill="#fff" />)}
          <ellipse cx="700" cy="150" rx="150" ry="34" fill="url(#sunGlowC)" />
          <path d="M585 148 Q700 128 815 148 L830 155 H570Z" fill="#fff" />
          <path d="M470 155 C520 136 585 128 660 140 L700 155Z" fill="#4a78c4" />
          <path d="M500 155 C540 145 590 140 640 146 L660 155Z" fill="#2f5cae" />
          <path d="M690 155 C760 140 840 118 929 116 V155Z" fill="#fbd98a" />
          <path d="M730 155 C800 145 870 132 929 132 V155Z" fill="#f5b955" />
        </svg>

        <div className="relative z-10 pl-[6.5%] pt-[2.5%] text-navy">
          <p className="text-[13px]">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>Careers
          </p>
          <h1 className="mt-3 text-[40px] font-extrabold leading-none tracking-tight text-[#1a3a8f] md:text-[46px]">
            CAREERS
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

      {/* ===== INTRO ===== */}
      <section className="grid gap-8 border-b border-brand/15 px-6 py-8 lg:grid-cols-2 lg:px-10">
        <div>
          <Label>JOIN OUR TEAM</Label>
          <h2 className="mt-1 text-3xl font-bold text-navy">Build Nepal’s Energy Future With Us</h2>
          <Bar />
          <p className="mt-4 text-[13px] leading-6 text-navy/85">
            Arris Energy Limited is building a broader renewable energy platform across hydropower,
            solar and wind. We are looking for capable, committed people who want to contribute to
            Nepal’s energy security and sustainable development.
          </p>
          <a
            href="#openings"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy"
          >
            VIEW OPENINGS <ArrowRight size={14} />
          </a>
        </div>
        <div className="rounded-2xl bg-[#f1f6fd] p-6 self-center">
          <Label>OUR VALUES</Label>
          <NumList items={values} className="mt-2" />
        </div>
      </section>

      {/* ===== WHY WORK WITH US ===== */}
      <section className="border-b border-brand/15 bg-[#f1f6fd] px-6 py-8 lg:px-10">
        <Label>WHY ARRIS ENERGY</Label>
        <h2 className="mt-1 text-3xl font-bold text-navy">Why Work With Us</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-accent text-accent">
                <Icon size={22} />
              </span>
              <div>
                <p className="text-[13px] font-semibold text-navy">{title}</p>
                <p className="mt-1 text-[11px] leading-4 text-navy/75">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OPEN POSITIONS ===== */}
      <section id="openings" className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>OPEN POSITIONS</Label>
        <h2 className="mt-1 text-2xl font-bold text-brand">Current Openings</h2>
        <Bar />

        <div className="mt-5 flex flex-wrap gap-2">
          {departments.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => { setDept(d); setExpanded(null) }}
              className={`rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-wide transition ${
                dept === d ? 'bg-brand text-white' : 'bg-[#e3ecfb] text-brand hover:bg-[#d3e3f9]'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <ul className="mt-6 space-y-3">
          {list.map((o) => {
            const isOpen = expanded === o.title
            return (
              <li key={o.title} className="rounded-xl border border-brand/15">
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : o.title)}
                  className="flex w-full items-center gap-4 p-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e3ecfb] text-brand">
                    <Briefcase size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[14px] font-semibold text-navy">{o.title}</span>
                    <span className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-navy/65">
                      <span className="rounded-full border border-accent px-2 py-0.5 text-[10px] font-semibold text-navy">
                        {o.department}
                      </span>
                      <span className="flex items-center gap-1"><MapPin size={12} />{o.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{o.type}</span>
                    </span>
                  </span>
                  <ChevronDown size={18} className={`shrink-0 text-brand transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="border-t border-brand/15 px-4 pb-4 pt-3 sm:pl-[76px]">
                    <p className={`text-[12px] leading-5 ${o.summary === TBU ? 'italic text-navy/50' : 'text-navy/85'}`}>
                      {o.summary}
                    </p>
                    <p className="mt-3 text-[11px] font-semibold tracking-[0.15em] text-brand">REQUIREMENTS</p>
                    <ul className="mt-1 list-disc pl-5 text-[12px] leading-5 text-navy/85">
                      {o.requirements.map((r) => (
                        <li key={r} className={r === TBU ? 'italic text-navy/50' : ''}>{r}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[11px] text-navy/65">
                      Application deadline: {formatDate(o.deadline) || 'To be updated'}
                    </p>
                    <a
                      href={applyLink(o.title)}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-[11px] font-semibold tracking-[0.15em] text-navy"
                    >
                      APPLY BY EMAIL <Mail size={14} />
                    </a>
                  </div>
                )}
              </li>
            )
          })}

          {list.length === 0 && (
            <li className="rounded-xl bg-[#f1f6fd] p-8 text-center text-[13px] leading-6 text-navy/70">
              There are no open positions in this category right now.
              <br />
              You can still send us your CV for future opportunities.
            </li>
          )}
        </ul>
      </section>

      {/* ===== HIRING PROCESS ===== */}
      <section className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>HOW TO APPLY</Label>
        <h2 className="mt-1 text-3xl font-bold text-navy">Our Hiring Process</h2>
        <div className="relative mt-8 grid gap-6 sm:grid-cols-4">
          <span className="absolute left-[12.5%] right-[12.5%] top-[6px] hidden h-px bg-brand/60 sm:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <span className={`relative mx-auto block h-3.5 w-3.5 rounded-full ${i === steps.length - 1 ? 'bg-accent' : 'bg-brand'}`} />
              <p className="mt-3 text-xs font-semibold text-navy">{s.title}</p>
              <p className="mx-auto mt-1 max-w-[170px] text-[11px] leading-4 text-navy/75">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GENERAL APPLICATION ===== */}
      <section className="border-b border-brand/15 bg-[#f1f6fd] px-6 py-8 lg:px-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-accent text-accent">
            <FileText size={24} />
          </span>
          <div className="flex-1">
            <Label>DON’T SEE A ROLE FOR YOU?</Label>
            <p className="mt-1 text-[13px] leading-6 text-navy/85">
              Send your CV and a short note about your skills and interests. We will keep it on file
              for future openings.
            </p>
          </div>
          <a
            href={applyLink('General Application')}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy"
          >
            SEND YOUR CV <Mail size={14} />
          </a>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="px-6 py-8 lg:px-10">
        <Label>CAREER ENQUIRIES</Label>
        <div className="mt-5 grid gap-6 md:grid-cols-3 md:divide-x md:divide-brand/15">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e3ecfb] text-brand"><MapPin size={24} /></span>
            <p className="text-[12px] leading-5 text-navy"><b>Registered Office</b><br />Kathmandu Metropolitan City,<br />Ward No. 31, Kathmandu, Nepal</p>
          </div>
          <div className="flex items-center gap-4 md:pl-8">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e3ecfb] text-brand"><Phone size={24} /></span>
            <p className="text-[13px] font-medium leading-6 text-navy">01-5920708<br />9851088339</p>
          </div>
          <div className="flex items-center gap-4 md:pl-8">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e3ecfb] text-brand"><Mail size={24} /></span>
            <p className="text-[13px] font-medium leading-6 text-navy">energyarris@gmail.com<br />arrisenergy@gmail.com</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy"
          >
            ABOUT THE COMPANY <ArrowRight size={14} />
          </Link>
          <Link to="/projects" className="text-[11px] font-semibold tracking-[0.15em] text-brand hover:underline">
            VIEW OUR PROJECT →
          </Link>
        </div>

        <p className="mt-8 border-t border-brand/15 pt-4 text-[10px] leading-4 text-navy/60">
          Arris Energy Limited is an equal opportunity employer. Only shortlisted candidates will be contacted.
        </p>
      </section>
    </div>
  )
}