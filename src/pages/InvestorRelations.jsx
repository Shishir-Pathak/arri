import { Link } from 'react-router-dom'
import {
  Zap, ShieldCheck, Landmark, Network, Users, TrendingUp, FileText, Download,
  Phone, Mail, MapPin, ArrowRight, Info,
} from 'lucide-react'

/* ---------------- DATA (edit text here) ---------------- */
const TBU = 'To be updated'

const highlights = [
  { icon: Zap, title: 'Licensed Generation Asset', text: '9.8 MW generation license for the Luja Khola Cascade Hydropower Project' },
  { icon: Network, title: 'Grid-Connected Revenue Model', text: 'Power sold in coordination with Nepal Electricity Authority through PPAs' },
  { icon: TrendingUp, title: 'Diversified Growth Plan', text: 'Planned expansion into solar and wind to strengthen supply resilience' },
  { icon: Landmark, title: 'Public-Private Structure', text: 'Public limited company enabling public participation in Nepal’s energy future' },
  { icon: ShieldCheck, title: 'Regulatory-First Approach', text: 'Development guided by licensing, compliance and institutional continuity' },
  { icon: Users, title: 'Experienced Promoter Group', text: 'Twelve founding promoters and shareholders from across Nepal' },
]

const capital = [
  ['Authorized Capital', 'NPR 30,00,00,000'],
  ['Issued Capital', 'NPR 30,00,00,000'],
  ['Face Value', 'NPR 100 per share'],
  ['Promoter Group', '80%'],
  ['Public / IPO Allocation', '20%'],
  ['Company Type', 'Public Limited Company'],
]

// Indicative figures: 20% / 80% of NPR 30 crore at NPR 100 face value. Verify before publishing.
const offering = [
  ['Offering Status', TBU],
  ['Public Allocation', '20% of issued capital'],
  ['Indicative Public Shares', '60,00,000 shares (to be confirmed)'],
  ['Indicative Public Amount', 'NPR 6,00,00,000 (to be confirmed)'],
  ['Face Value', 'NPR 100 per share'],
  ['Issue Manager', TBU],
  ['Opening / Closing Date', TBU],
  ['Share Registrar', TBU],
]

const financials = [
  ['Total Revenue', TBU],
  ['Net Profit', TBU],
  ['Total Assets', TBU],
  ['Net Worth', TBU],
  ['Earnings Per Share', TBU],
  ['Fiscal Year Reported', TBU],
]

const governance = [
  'Five-member Board of Directors',
  'Promoter-group, public-shareholder and independent representation',
  'At least one woman director',
  'Regulatory-first compliance approach',
  'Long-term institutional continuity',
]

const documents = [
  { title: 'Company Profile / Governance', note: 'PDF' },
  { title: 'Prospectus', note: TBU },
  { title: 'Annual Report', note: TBU },
  { title: 'Financial Statements', note: TBU },
  { title: 'Certificate of Conversion', note: 'Office of the Company Registrar' },
  { title: 'Generation License', note: '9.8 MW' },
]

const promoters = [
  'Kunal Kayal', 'Kumar Kharel', 'Mukti Bodh Neupane', 'Dilliram Rimal',
  'Bhawana Kharel', 'Ridhika Bodh Neupane (Upadhyay)', 'Mohit Agrawal', 'Niraj Jalan',
  'Nitu Kayal', 'Nitin Jalan', 'Pankaj Kumar Sanghai', 'Satya Bhama Kayal',
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

function Table({ rows, className = '' }) {
  return (
    <dl className={className}>
      {rows.map(([k, v]) => (
        <div key={k} className="flex gap-4 border-b border-brand/15 py-2 text-[12px] last:border-0">
          <dt className="w-44 shrink-0 font-semibold text-navy">{k}</dt>
          <dd className={v === TBU ? 'italic text-navy/50' : 'text-navy/85'}>{v}</dd>
        </div>
      ))}
    </dl>
  )
}

/* ---------------- PAGE ---------------- */
export default function InvestorRelations() {
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
            <linearGradient id="bannerSkyI" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dbe8fb" />
              <stop offset="1" stopColor="#f1f6fd" />
            </linearGradient>
            <radialGradient id="sunGlowI" cx="0.5" cy="1" r="0.6">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="929" height="155" fill="url(#bannerSkyI)" />
          <path d="M0 98 C150 78 300 128 500 108 C650 92 800 118 929 96 V155 H0Z" fill="#d3e3f9" opacity="0.8" />
          <path d="M0 122 C200 106 360 150 560 138 L700 155 H0Z" fill="#eaf2fd" />
          <circle cx="700" cy="118" r="100" fill="#2f5cae" />
          {rays.map((p, i) => <polygon key={i} points={p} fill="#fff" />)}
          <ellipse cx="700" cy="150" rx="150" ry="34" fill="url(#sunGlowI)" />
          <path d="M585 148 Q700 128 815 148 L830 155 H570Z" fill="#fff" />
          <path d="M470 155 C520 136 585 128 660 140 L700 155Z" fill="#4a78c4" />
          <path d="M500 155 C540 145 590 140 640 146 L660 155Z" fill="#2f5cae" />
          <path d="M690 155 C760 140 840 118 929 116 V155Z" fill="#fbd98a" />
          <path d="M730 155 C800 145 870 132 929 132 V155Z" fill="#f5b955" />
        </svg>

        <div className="relative z-10 pl-[6.5%] pt-[2.5%] text-navy">
          <p className="text-[13px]">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>Investor Relations
          </p>
          <h1 className="mt-3 text-[34px] font-extrabold leading-none tracking-tight text-[#1a3a8f] md:text-[46px]">
            INVESTOR RELATIONS
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
          <Label>INVEST WITH US</Label>
          <h2 className="mt-1 text-3xl font-bold text-navy">Be Part of Nepal’s Energy Future</h2>
          <Bar />
          <p className="mt-4 text-[13px] leading-6 text-navy/85">
            Arris Energy Limited was converted from a private limited company into a public limited
            company to broaden ownership and enable public participation in Nepal’s energy sector.
            The company holds a 9.8 MW generation license for the Luja Khola Cascade Hydropower Project
            and is building a broader renewable energy platform across hydropower, solar and wind.
          </p>
          <p className="mt-3 text-[13px] leading-6 text-navy/85">
            This page provides shareholders and prospective investors with information on our capital
            structure, governance, offering details and key documents.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 self-center">
          {[
            ['9.8 MW', 'Licensed Capacity'],
            ['NPR 30 Cr', 'Issued Capital'],
            ['NPR 100', 'Face Value / Share'],
            ['20%', 'Public Allocation'],
          ].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-[#f1f6fd] p-4 text-center">
              <p className="text-2xl font-bold text-brand">{v}</p>
              <p className="mt-1 text-[11px] text-navy/75">{l}</p>
              <span className="mx-auto mt-2 block h-[2px] w-6 bg-accent" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== INVESTMENT HIGHLIGHTS ===== */}
      <section className="border-b border-brand/15 bg-[#f1f6fd] px-6 py-8 lg:px-10">
        <Label>INVESTMENT HIGHLIGHTS</Label>
        <h2 className="mt-1 text-3xl font-bold text-navy">Why Invest in Arris Energy</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
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

      {/* ===== CAPITAL STRUCTURE ===== */}
      <section className="grid border-b border-brand/15 lg:grid-cols-2">
        <div className="px-6 py-8 lg:border-r lg:border-brand/15 lg:px-10">
          <Label>CAPITAL STRUCTURE</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Shareholding Pattern</h2>
          <Bar />
          <div className="mt-6 flex items-center gap-6">
            <div className="relative h-36 w-36 shrink-0">
              <svg viewBox="0 0 100 100" className="-rotate-90">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#f7c35b" strokeWidth="16" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#1d3f9a" strokeWidth="16" strokeDasharray="191 239" />
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center text-[10px] leading-3 text-navy">
                <span><b className="block text-lg leading-5">100%</b>Total<br />Shareholding</span>
              </div>
            </div>
            <ul className="space-y-6 text-xs text-navy/80">
              <li className="flex gap-2"><span className="mt-1 h-3.5 w-3.5 rounded-full bg-[#1d3f9a]" />
                <span><b className="block text-lg text-navy">80%</b>Promoter Group</span></li>
              <li className="flex gap-2"><span className="mt-1 h-3.5 w-3.5 rounded-full bg-[#f7c35b]" />
                <span><b className="block text-lg text-navy">20%</b>Public / IPO Allocation</span></li>
            </ul>
          </div>
          <Table rows={capital} className="mt-6" />
        </div>

        <div className="px-6 py-8 lg:px-10">
          <Label>PUBLIC OFFERING</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Offer Information</h2>
          <Bar />
          <Table rows={offering} className="mt-4" />
          <p className="mt-3 flex gap-2 text-[10px] leading-4 text-navy/60">
            <Info size={12} className="mt-0.5 shrink-0" />
            Indicative figures are calculated from the stated 20% allocation and are subject to the
            final approved offer terms.
          </p>
        </div>
      </section>

      {/* ===== FINANCIALS / GOVERNANCE ===== */}
      <section className="grid border-b border-brand/15 lg:grid-cols-2">
        <div className="px-6 py-8 lg:border-r lg:border-brand/15 lg:px-10">
          <Label>FINANCIAL INFORMATION</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Financial Snapshot</h2>
          <Bar />
          <Table rows={financials} className="mt-4" />
        </div>
        <div className="px-6 py-8 lg:px-10">
          <Label>CORPORATE GOVERNANCE</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Board &amp; Oversight</h2>
          <Bar />
          <NumList items={governance} className="mt-4" />
        </div>
      </section>

      {/* ===== PROMOTERS ===== */}
      <section className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>PROMOTER GROUP</Label>
        <h2 className="mt-1 text-2xl font-bold text-brand">Our Founding Promoters &amp; Shareholders</h2>
        <Bar />
        <ul className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {promoters.map((name, i) => (
            <li key={name} className="flex gap-3 border-b border-brand/10 py-2 text-[12px] text-navy/85">
              <span className="w-6 font-semibold text-brand">{String(i + 1).padStart(2, '0')}</span>
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DOCUMENTS ===== */}
      <section className="border-b border-brand/15 bg-[#f1f6fd] px-6 py-8 lg:px-10">
        <Label>DOWNLOADS</Label>
        <h2 className="mt-1 text-3xl font-bold text-navy">Investor Documents</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((d) => (
            <a
              key={d.title}
              href="#"
              className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e3ecfb] text-brand">
                <FileText size={20} />
              </span>
              <span className="flex-1 text-[12px] font-semibold text-navy">
                {d.title}
                <span className={`block text-[10px] font-normal ${d.note === TBU ? 'italic text-navy/50' : 'text-navy/70'}`}>
                  {d.note}
                </span>
              </span>
              <Download size={16} className="text-brand" />
            </a>
          ))}
        </div>
        {/* Replace href="#" with e.g. "/docs/company-profile.pdf" (files in /public/docs) */}
      </section>

      {/* ===== INVESTOR CONTACT ===== */}
      <section className="px-6 py-8 lg:px-10">
        <Label>INVESTOR ENQUIRIES</Label>
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
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy"
          >
            VIEW OUR PROJECT <ArrowRight size={14} />
          </Link>
          <Link to="/about" className="text-[11px] font-semibold tracking-[0.15em] text-brand hover:underline">
            ABOUT THE COMPANY →
          </Link>
        </div>

        <p className="mt-8 border-t border-brand/15 pt-4 text-[10px] leading-4 text-navy/60">
          <b>Disclaimer:</b> The information on this page is for general information only and does not
          constitute an offer, invitation or solicitation to buy or sell securities. Any investment
          decision should be based solely on the approved prospectus and applicable regulations of
          Nepal. Statements about future plans are forward-looking and subject to change.
        </p>
      </section>
    </div>
  )
}