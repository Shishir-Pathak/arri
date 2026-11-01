import { Link } from 'react-router-dom'
import { User, Zap, FileText, ArrowRight, MapPin, Phone, Mail } from 'lucide-react'
import { useApi } from '../lib/useApi'
import { fetchAboutPage, fetchCapitalStructure, fetchPeople, fetchProjects } from '../lib/endpoints'

/* ---------------- FALLBACK DATA (If backend is down) ---------------- */
const fallbackMilestones = [
  { title: '22 July 2018', text: 'Original registration as Arris Energy Private Limited' },
  { title: '9.8 MW', text: 'Generation license granted for Luja Khola Cascade Hydropower Project' },
  { title: '13 July 2026', text: 'Conversion to public limited company (Arris Energy Limited)' },
  { title: '14 July 2026', text: 'Certificate of conversion issued by the Office of the Company Registrar' },
  { title: 'Present', text: 'Building a broader renewable energy platform' },
]

const fallbackMissionList = [
  "Harness Nepal's river systems", 
  'Diversify the energy mix', 
  'Extend energy access', 
  'Build technical capability'
]

const fallbackGoals = [
  'Hydropower development', 'End-to-end project services', 'Energy diversification', 'Energy infrastructure',
  'PPAs and power sales', 'Supply and demand balancing', 'Broader energy infrastructure investment', 'Regulatory compliance',
]

const fallbackStrategy = [
  'Regulatory-first development', 'Public-private capital structure', 'Diversified generation portfolio',
  'Vertical technical capability', 'National grid integration', 'Long-term institutional continuity',
]

const fallbackPromoters = [
  ['Kunal Kayal', 'Kathmandu'], ['Kumar Kharel', 'Dolakha'], ['Mukti Bodh Neupane', 'Kathmandu'],
  ['Dilliram Rimal', 'Chitwan'], ['Bhawana Kharel', 'Dolakha'], ['Ridhika Bodh Neupane (Upadhyay)', 'Kathmandu'],
  ['Mohit Agrawal', 'Morang'], ['Niraj Jalan', 'Mahottari'], ['Nitu Kayal', 'Kathmandu'],
  ['Nitin Jalan', 'Mahottari'], ['Pankaj Kumar Sanghai', 'Kathmandu'], ['Satya Bhama Kayal', 'Kathmandu'],
]

const fallbackLeaders = [
  { name: 'Kunal Kayal', role: 'Director' },
  { name: 'Kumar Kharel', role: 'Director' },
  { name: 'Mukti Bodh Neupane', role: 'Director' },
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
        <li key={`${t}-${i}`} className="flex gap-6 border-b border-brand/15 py-2 text-[13px] text-navy/90 last:border-0">
          <span className="w-6 font-semibold text-brand">{String(i + 1).padStart(2, '0')}</span>
          {t}
        </li>
      ))}
    </ol>
  )
}

/* ---------------- PAGE ---------------- */
export default function About() {
  // 1. Fetch Page Content (Vision, Mission, Timeline)
  const { data: aboutData } = useApi(fetchAboutPage)
  
  // 2. Fetch Capital Structure (Ownership percentages & values)
  const { data: capitalData } = useApi(fetchCapitalStructure)

  // 3. Fetch People (Promoters & Directors)
  const { data: peopleData } = useApi(fetchPeople)

  // 4. Fetch Projects (For Principal Project section)
  const { data: projectsData } = useApi(fetchProjects)

  // --- Process Data with Fallbacks ---
  const milestones = aboutData?.timeline?.length > 0 
    ? aboutData.timeline.map(t => ({ title: t.year, text: t.title + (t.description ? ` - ${t.description}` : '') }))
    : fallbackMilestones

  const visionText = aboutData?.vision || 'To be a leading renewable energy company in Nepal, recognized for our contribution to a cleaner, greener and more prosperous nation, where Nepal\'s abundant natural resources are harnessed responsibly to provide reliable, affordable and sustainable energy for generations to come.'
  
  const missionText = aboutData?.mission || 'To generate and deliver electricity to the people of Nepal through responsible hydropower development in coordination with the Nepal Electricity Authority, while diversifying into solar and wind power to strengthen the resilience and reliability of Nepal\'s energy supply.'
  
  const missionList = aboutData?.values?.length > 0 
    ? aboutData.values.map(v => v.title) 
    : fallbackMissionList

  // Capital Structure calculations
  const promoterPct = capitalData?.promoter_shares_percent ?? 80
  const publicPct = capitalData?.public_shares_percent ?? 20
  // Circle circumference for r=38 is approx 238.76. 
  // strokeDasharray needs (promoterPct% of 238.76) and 238.76
  const dashLength = (promoterPct / 100) * 238.76

  const authCapital = capitalData?.authorized_capital || '30,00,00,000'
  const issuedCapital = capitalData?.issued_capital || '30,00,00,000'
  const faceValue = capitalData?.face_value_per_share || '100'

  // People lists (Filtering based on API flags)
  const promoters = peopleData?.length > 0
    ? peopleData.filter(p => p.is_promoter).map(p => [p.name, p.location || 'Nepal'])
    : fallbackPromoters

  const leaders = peopleData?.length > 0
    ? peopleData.filter(p => p.is_director).map(p => ({ name: p.name, role: p.designation }))
    : fallbackLeaders

  // Principal Project
  const principalProject = projectsData?.results?.find(p => p.is_principal) || projectsData?.results?.[0]
  const projectName = principalProject?.name || 'Luja Khola Cascade Hydropower Project'
  const projectCapacity = principalProject?.capacity_display || '9.8 MW'
  const projectType = principalProject?.project_type || 'Run-of-River (Cascade)'
  const projectDistrict = principalProject?.district || 'Solukhumbu District'
  const projectProvince = principalProject?.province || 'Koshi Province'

  return (
    <div className="mx-auto max-w-[1200px] bg-white">
      {/* ===== PAGE BANNER ===== */}
      <section className="relative aspect-[929/155] min-h-[160px] w-full overflow-hidden bg-[#e4eefc]">
        <svg viewBox="0 0 929 155" preserveAspectRatio="xMaxYMax slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="bannerSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dbe8fb" />
              <stop offset="1" stopColor="#f1f6fd" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="0.5" cy="1" r="0.6">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="929" height="155" fill="url(#bannerSky)" />
          <path d="M0 98 C150 78 300 128 500 108 C650 92 800 118 929 96 V155 H0Z" fill="#d3e3f9" opacity="0.8" />
          <path d="M0 122 C200 106 360 150 560 138 L700 155 H0Z" fill="#eaf2fd" />
          <circle cx="700" cy="118" r="100" fill="#2f5cae" />
          {rays.map((p, i) => <polygon key={i} points={p} fill="#fff" />)}
          <ellipse cx="700" cy="150" rx="150" ry="34" fill="url(#sunGlow)" />
          <path d="M585 148 Q700 128 815 148 L830 155 H570Z" fill="#fff" />
          <path d="M470 155 C520 136 585 128 660 140 L700 155Z" fill="#4a78c4" />
          <path d="M500 155 C540 145 590 140 640 146 L660 155Z" fill="#2f5cae" />
          <path d="M690 155 C760 140 840 118 929 116 V155Z" fill="#fbd98a" />
          <path d="M730 155 C800 145 870 132 929 132 V155Z" fill="#f5b955" />
        </svg>

        <div className="relative z-10 pl-[6.5%] pt-[2.5%] text-navy">
          <p className="text-[13px]">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>About Us
          </p>
          <h1 className="mt-3 text-[40px] font-extrabold leading-none tracking-tight text-[#1a3a8f] md:text-[46px]">
            ABOUT US
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

      {/* ===== WHO WE ARE ===== */}
      <section className="grid gap-8 border-b border-brand/15 px-6 py-8 lg:grid-cols-2 lg:px-10">
        <div>
          <Label>OUR COMPANY</Label>
          <h2 className="mt-1 text-3xl font-bold text-navy">Who We Are</h2>
          <p className="mt-4 text-[13px] leading-6 text-navy/85">
            Arris Energy Limited is a Nepal-registered public limited company operating in the energy
            generation sector, with a focus on hydropower, solar and wind power. Originally
            incorporated as Arris Energy Pvt. Ltd., the company was later converted into a public
            limited company to broaden ownership and enable public participation in Nepal's energy future.
          </p>
          <p className="mt-3 text-[13px] leading-6 text-navy/85">
            Arris Energy Limited has inherited the assets, liabilities and generation license of its
            predecessor company, including a {projectCapacity} hydropower generation license. We are committed to
            developing renewable energy projects that support Nepal's energy security and sustainable development.
          </p>
        </div>
        <div
          className="min-h-[240px] rounded-2xl bg-cover bg-center shadow"
          style={{ backgroundImage: "url('/river.jpg'), linear-gradient(135deg,#7fc8d4,#3f8fa8)" }}
        />
      </section>

      {/* ===== KEY MILESTONES ===== */}
      <section className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>OUR JOURNEY</Label>
        <h2 className="mt-1 text-3xl font-bold text-navy">Key Milestones</h2>
        <div className="relative mt-8 grid gap-6 sm:grid-cols-5">
          <span className="absolute left-[10%] right-[10%] top-[6px] hidden h-px bg-brand/60 sm:block" />
          {milestones.map((m, i) => (
            <div key={i} className="relative text-center">
              <span className={`relative mx-auto block h-3.5 w-3.5 rounded-full ${i === milestones.length - 1 ? 'bg-accent' : 'bg-brand'}`} />
              <p className="mt-3 text-xs font-semibold text-navy">{m.title}</p>
              <p className="mx-auto mt-1 max-w-[150px] text-[11px] leading-4 text-navy/75">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== VISION / MISSION ===== */}
      <section className="grid border-b border-brand/15 lg:grid-cols-2">
        <div className="px-6 py-8 lg:border-r lg:border-brand/15 lg:px-10">
          <Label>OUR VISION</Label><Bar />
          <p className="mt-6 text-[13px] leading-7 text-navy/85">
            {visionText}
          </p>
        </div>
        <div className="px-6 py-8 lg:px-10">
          <Label>OUR MISSION</Label><Bar />
          <p className="mt-6 text-[13px] leading-6 text-navy/85">
            {missionText}
          </p>
          <NumList items={missionList} className="mt-3" />
        </div>
      </section>

      {/* ===== GOALS / STRATEGY ===== */}
      <section className="grid border-b border-brand/15 lg:grid-cols-2">
        <div className="px-6 py-8 lg:border-r lg:border-brand/15 lg:px-10">
          <Label>OUR GOALS &amp; OBJECTIVES</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Building a Cleaner, Greener Nepal</h2><Bar />
          <NumList items={fallbackGoals} className="mt-4" />
        </div>
        <div className="px-6 py-8 lg:px-10">
          <Label>OUR STRATEGY</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">A Responsible Path Forward</h2><Bar />
          <NumList items={fallbackStrategy} className="mt-4" />
        </div>
      </section>

      {/* ===== OWNERSHIP ===== */}
      <section className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>OWNERSHIP, SHAREHOLDING &amp; LEADERSHIP</Label>
        <div className="mt-6 grid gap-8 lg:grid-cols-[330px_1fr]">
          {/* donut + capital */}
          <div>
            <div className="flex items-center gap-6">
              <div className="relative h-36 w-36 shrink-0">
                <svg viewBox="0 0 100 100" className="-rotate-90">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#f7c35b" strokeWidth="16" />
                  {/* Dynamic strokeDasharray based on API percentage */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#1d3f9a" strokeWidth="16"
                    strokeDasharray={`${dashLength} 238.76`} />
                </svg>
                <div className="absolute inset-0 grid place-items-center text-center text-[10px] leading-3 text-navy">
                  <span><b className="block text-lg leading-5">100%</b>Total<br />Shareholding</span>
                </div>
              </div>
              <ul className="space-y-6 text-xs text-navy/80">
                <li className="flex gap-2"><span className="mt-1 h-3.5 w-3.5 rounded-full bg-[#1d3f9a]" />
                  <span><b className="block text-lg text-navy">{promoterPct}%</b>Promoter Group</span></li>
                <li className="flex gap-2"><span className="mt-1 h-3.5 w-3.5 rounded-full bg-[#f7c35b]" />
                  <span><b className="block text-lg text-navy">{publicPct}%</b>Public / IPO Allocation</span></li>
              </ul>
            </div>
            <dl className="mt-5 space-y-1 text-[11px] text-navy/80">
              <div className="flex"><dt className="w-28">Authorized Capital</dt><dd>: NPR {authCapital}</dd></div>
              <div className="flex"><dt className="w-28">Issued Capital</dt><dd>: NPR {issuedCapital}</dd></div>
              <div className="flex"><dt className="w-28 font-semibold">Face Value</dt><dd>: NPR {faceValue} per share</dd></div>
            </dl>
          </div>

          {/* promoters + leadership */}
          <div className="lg:border-l lg:border-brand/15 lg:pl-8">
            <h3 className="text-sm font-semibold text-brand">Our Founding Promoters &amp; Shareholders</h3>
            <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
              {promoters.map(([name, place], i) => (
                <li key={`${name}-${i}`} className="flex gap-3 py-[3px] text-[11px] text-navy/85">
                  <span className="w-5 font-semibold text-brand">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1">{name}</span>
                  <span className="w-20 text-navy/70">– {place}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_230px]">
              <div>
                <h3 className="text-sm font-semibold text-brand">Our Leadership</h3>
                <div className="mt-3 flex flex-wrap gap-5">
                  {leaders.map((l, i) => (
                    <div key={`${l.name}-${i}`} className="text-center">
                      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#e3ecfb] text-brand">
                        <User size={26} fill="currentColor" />
                      </span>
                      <p className="mt-2 text-[11px] font-semibold text-navy">{l.name}</p>
                      <p className="text-[10px] text-navy/70">{l.role}</p>
                      <span className="mx-auto mt-1 block h-[2px] w-6 bg-accent" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[10px] leading-4 text-navy/75">
                The company is governed by a five-member Board comprising promoter-group,
                public-shareholder and independent representation, with at least one woman director.
                <a href="/api/documents/?category=investor" className="mt-3 flex items-center gap-3 rounded-lg bg-[#eef3fc] p-3 text-brand hover:bg-[#e3ecfb] transition-colors">
                  <FileText size={20} />
                  <span className="font-semibold tracking-wide">
                    COMPANY PROFILE / GOVERNANCE PDF
                    <span className="block text-[10px] text-navy">VIEW PDF →</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRINCIPAL PROJECT ===== */}
      <section className="relative overflow-hidden border-b border-brand/15 bg-[#f1f6fd] px-6 py-8 lg:px-10">
        <div
          className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center md:block"
          style={{ backgroundImage: "linear-gradient(90deg,#f1f6fd,transparent 40%), url('/mountain.jpg'), linear-gradient(135deg,#9db8dd,#4d7bb8)" }}
        />
        <div className="relative grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Label>PRINCIPAL PROJECT</Label>
            <h2 className="mt-3 text-2xl font-bold text-navy">{projectName}</h2>
            <p className="mt-3 max-w-xl text-[12px] leading-5 text-navy/85">
              Arris Energy Limited holds a generation license for the {projectCapacity} {projectName},
              a run-of-river project located in {projectDistrict}, {projectProvince}. The project will utilize the
              tailrace discharge from the upstream project and will generate
              clean, renewable electricity to contribute to Nepal's growing energy demand.
            </p>
          </div>
          <div className="flex items-center gap-4 text-navy">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-accent text-accent">
              <Zap size={22} />
            </span>
            <div className="text-[11px] leading-5">
              <p className="font-semibold">Licensed Capacity</p>
              <p className="text-2xl font-bold text-brand">{projectCapacity}</p>
              {projectType}<br />{projectDistrict}<br />{projectProvince}
            </div>
          </div>
        </div>
        <Link to="/projects" className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy md:absolute md:bottom-6 md:right-10 md:mt-0 hover:bg-[#e5a840] transition-colors">
          LEARN MORE <ArrowRight size={14} />
        </Link>
      </section>

      {/* ===== CONTACT STRIP ===== */}
      <section className="px-6 py-8 lg:px-10">
        <Label>CONTACT US</Label>
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