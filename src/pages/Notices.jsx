import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Megaphone, Calendar, Search, FileText, Download, Phone, Mail, MapPin,
  ArrowRight, Pin, Bell,
} from 'lucide-react'

/* ---------------- DATA (edit text here) ---------------- */
// date: 'YYYY-MM-DD' (use null if unknown)
// file: '/docs/xyz.pdf' (file inside /public/docs) or null
// Add a new notice by copying one line into the list. Newest dates show first automatically.
const categories = ['All', 'Corporate', 'Share & IPO', 'Meetings', 'Regulatory']

const notices = [
  {
    date: '2026-07-14',
    category: 'Corporate',
    title: 'Certificate of Conversion Issued',
    text: 'The Office of the Company Registrar has issued the certificate of conversion of Arris Energy Private Limited into a public limited company.',
    file: null,
  },
  {
    date: '2026-07-13',
    category: 'Corporate',
    title: 'Conversion to Public Limited Company',
    text: 'Arris Energy Private Limited has been converted into a public limited company and is now known as Arris Energy Limited.',
    file: null,
  },
  {
    date: null,
    category: 'Share & IPO',
    title: 'Public Issue Notice',
    text: 'To be updated',
    file: null,
  },
  {
    date: null,
    category: 'Meetings',
    title: 'Annual General Meeting Notice',
    text: 'To be updated',
    file: null,
  },
  {
    date: null,
    category: 'Regulatory',
    title: 'Regulatory Disclosure',
    text: 'To be updated',
    file: null,
  },
]

const TBU = 'To be updated'

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

const formatDate = (d) =>
  d
    ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'Date to be updated'

const sorted = [...notices].sort((a, b) => (b.date || '').localeCompare(a.date || ''))

/* ---------------- PAGE ---------------- */
export default function Notices() {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sorted.filter(
      (n) =>
        (active === 'All' || n.category === active) &&
        (!q || n.title.toLowerCase().includes(q) || n.text.toLowerCase().includes(q))
    )
  }, [active, query])

  const latest = sorted[0]

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
            <linearGradient id="bannerSkyN" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dbe8fb" />
              <stop offset="1" stopColor="#f1f6fd" />
            </linearGradient>
            <radialGradient id="sunGlowN" cx="0.5" cy="1" r="0.6">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="929" height="155" fill="url(#bannerSkyN)" />
          <path d="M0 98 C150 78 300 128 500 108 C650 92 800 118 929 96 V155 H0Z" fill="#d3e3f9" opacity="0.8" />
          <path d="M0 122 C200 106 360 150 560 138 L700 155 H0Z" fill="#eaf2fd" />
          <circle cx="700" cy="118" r="100" fill="#2f5cae" />
          {rays.map((p, i) => <polygon key={i} points={p} fill="#fff" />)}
          <ellipse cx="700" cy="150" rx="150" ry="34" fill="url(#sunGlowN)" />
          <path d="M585 148 Q700 128 815 148 L830 155 H570Z" fill="#fff" />
          <path d="M470 155 C520 136 585 128 660 140 L700 155Z" fill="#4a78c4" />
          <path d="M500 155 C540 145 590 140 640 146 L660 155Z" fill="#2f5cae" />
          <path d="M690 155 C760 140 840 118 929 116 V155Z" fill="#fbd98a" />
          <path d="M730 155 C800 145 870 132 929 132 V155Z" fill="#f5b955" />
        </svg>

        <div className="relative z-10 pl-[6.5%] pt-[2.5%] text-navy">
          <p className="text-[13px]">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>Notices
          </p>
          <h1 className="mt-3 text-[40px] font-extrabold leading-none tracking-tight text-[#1a3a8f] md:text-[46px]">
            NOTICES
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

      {/* ===== INTRO + LATEST ===== */}
      <section className="grid gap-8 border-b border-brand/15 px-6 py-8 lg:grid-cols-2 lg:px-10">
        <div>
          <Label>OFFICIAL ANNOUNCEMENTS</Label>
          <h2 className="mt-1 text-3xl font-bold text-navy">Company Notices</h2>
          <Bar />
          <p className="mt-4 text-[13px] leading-6 text-navy/85">
            Find official notices from Arris Energy Limited here, including corporate announcements,
            share and public issue notices, meeting notices and regulatory disclosures. Shareholders
            and the public are advised to refer to this page for the latest updates.
          </p>
        </div>

        {latest && (
          <div className="rounded-2xl bg-[#f1f6fd] p-6 self-center">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-brand">
              <Pin size={14} className="text-accent" /> LATEST NOTICE
            </div>
            <h3 className="mt-3 text-lg font-bold text-navy">{latest.title}</h3>
            <p className="mt-1 flex items-center gap-2 text-[11px] text-navy/70">
              <Calendar size={12} /> {formatDate(latest.date)}
            </p>
            <p className="mt-3 text-[12px] leading-5 text-navy/85">{latest.text}</p>
          </div>
        )}
      </section>

      {/* ===== NOTICE BOARD ===== */}
      <section className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>NOTICE BOARD</Label>
        <h2 className="mt-1 text-2xl font-bold text-brand">All Notices</h2>
        <Bar />

        {/* filters + search */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-wide transition ${
                  active === c
                    ? 'bg-brand text-white'
                    : 'bg-[#e3ecfb] text-brand hover:bg-[#d3e3f9]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-full border border-brand/20 px-4 py-2 md:w-64">
            <Search size={14} className="text-brand" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search notices"
              className="w-full bg-transparent text-[12px] text-navy outline-none placeholder:text-navy/40"
            />
          </label>
        </div>

        {/* list */}
        <ul className="mt-6">
          {filtered.map((n) => (
            <li
              key={n.title + n.date}
              className="flex flex-col gap-3 border-b border-brand/15 py-4 last:border-0 sm:flex-row sm:items-center"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e3ecfb] text-brand">
                <Megaphone size={20} />
              </span>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-navy">
                    {n.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-navy/60">
                    <Calendar size={12} /> {formatDate(n.date)}
                  </span>
                </div>
                <p className="mt-1.5 text-[14px] font-semibold text-navy">{n.title}</p>
                <p className={`mt-0.5 text-[12px] leading-5 ${n.text === TBU ? 'italic text-navy/50' : 'text-navy/80'}`}>
                  {n.text}
                </p>
              </div>

              {n.file ? (
                <a
                  href={n.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-[#eef3fc] px-4 py-2 text-[11px] font-semibold tracking-wide text-brand transition hover:bg-[#e3ecfb] sm:self-center"
                >
                  <FileText size={14} /> VIEW PDF <Download size={13} />
                </a>
              ) : (
                <span className="self-start text-[10px] italic text-navy/40 sm:self-center">No attachment</span>
              )}
            </li>
          ))}

          {filtered.length === 0 && (
            <li className="rounded-xl bg-[#f1f6fd] p-8 text-center text-[13px] text-navy/70">
              No notices found. Try another category or search term.
            </li>
          )}
        </ul>
      </section>

      {/* ===== STAY UPDATED ===== */}
      <section className="border-b border-brand/15 bg-[#f1f6fd] px-6 py-8 lg:px-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-accent text-accent">
            <Bell size={24} />
          </span>
          <div className="flex-1">
            <Label>STAY UPDATED</Label>
            <p className="mt-1 text-[13px] leading-6 text-navy/85">
              Shareholders and investors are encouraged to check this page regularly. Official notices
              may also be published in national daily newspapers as required by applicable regulations.
            </p>
          </div>
          <Link
            to="/investor-relations"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy"
          >
            INVESTOR RELATIONS <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ===== CONTACT STRIP ===== */}
      <section className="px-6 py-8 lg:px-10">
        <Label>NOTICE ENQUIRIES</Label>
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
      </section>
    </div>
  )
}