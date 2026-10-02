import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Newspaper, Camera, Play, Image as ImageIcon, X, Download, FileText, Calendar,
  ExternalLink, Mail, Phone, MapPin, ArrowRight, Copy, Check,
} from 'lucide-react'

/* ---------------- DATA (edit text here) ---------------- */
const TBU = 'To be updated'

// date: 'YYYY-MM-DD' (or null) | link: external URL or null | file: '/docs/xyz.pdf' or null
const news = [
  {
    date: '2026-07-14',
    source: 'Company Release',
    title: 'Arris Energy Receives Certificate of Conversion',
    text: 'The Office of the Company Registrar has issued the certificate of conversion of Arris Energy Private Limited into a public limited company.',
    link: null,
    file: null,
  },
  {
    date: '2026-07-13',
    source: 'Company Release',
    title: 'Arris Energy Converts to Public Limited Company',
    text: 'Arris Energy Private Limited has been converted into a public limited company, now known as Arris Energy Limited, to broaden ownership and enable public participation.',
    link: null,
    file: null,
  },
  { date: null, source: 'Media Coverage', title: 'Media Coverage', text: TBU, link: null, file: null },
  { date: null, source: 'Interview', title: 'Interview / Feature', text: TBU, link: null, file: null },
]

// src: '/gallery/photo1.jpg' (file inside /public/gallery) or null for a placeholder
const galleryTabs = ['All', 'Project', 'Events', 'Company']
const gallery = [
  { category: 'Project', caption: 'Luja Khola Cascade Hydropower Project site', src: null },
  { category: 'Project', caption: 'Solukhumbu landscape', src: null },
  { category: 'Project', caption: 'Project works', src: null },
  { category: 'Events', caption: 'Company event', src: null },
  { category: 'Events', caption: 'Shareholder meeting', src: null },
  { category: 'Company', caption: 'Board of Directors', src: null },
]

// url: YouTube / Facebook video link or null
const videos = [
  { title: 'Company Introduction', note: TBU, url: null },
  { title: 'Project Overview', note: TBU, url: null },
  { title: 'Chairman’s Message', note: TBU, url: null },
]

const kit = [
  { title: 'Company Logo (PNG / SVG)', note: TBU, file: null },
  { title: 'Company Profile', note: 'PDF', file: null },
  { title: 'Fact Sheet', note: TBU, file: null },
  { title: 'Project Photo Pack', note: TBU, file: null },
]

const boilerplate =
  'Arris Energy Limited is a Nepal-registered public limited company operating in the energy generation sector, with a focus on hydropower, solar and wind power. The company holds a 9.8 MW generation license for the Luja Khola Cascade Hydropower Project in Solukhumbu District, Koshi Province, and is committed to developing renewable energy projects that support Nepal’s energy security and sustainable development.'

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

const sortedNews = [...news].sort((a, b) => (b.date || '').localeCompare(a.date || ''))

/* ---------------- PAGE ---------------- */
export default function Media() {
  const [tab, setTab] = useState('All')
  const [open, setOpen] = useState(null) // gallery item shown in lightbox
  const [copied, setCopied] = useState(false)

  const photos = useMemo(
    () => gallery.filter((g) => tab === 'All' || g.category === tab),
    [tab]
  )

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(boilerplate)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard not available */
    }
  }

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
            <linearGradient id="bannerSkyM" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dbe8fb" />
              <stop offset="1" stopColor="#f1f6fd" />
            </linearGradient>
            <radialGradient id="sunGlowM" cx="0.5" cy="1" r="0.6">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="929" height="155" fill="url(#bannerSkyM)" />
          <path d="M0 98 C150 78 300 128 500 108 C650 92 800 118 929 96 V155 H0Z" fill="#d3e3f9" opacity="0.8" />
          <path d="M0 122 C200 106 360 150 560 138 L700 155 H0Z" fill="#eaf2fd" />
          <circle cx="700" cy="118" r="100" fill="#2f5cae" />
          {rays.map((p, i) => <polygon key={i} points={p} fill="#fff" />)}
          <ellipse cx="700" cy="150" rx="150" ry="34" fill="url(#sunGlowM)" />
          <path d="M585 148 Q700 128 815 148 L830 155 H570Z" fill="#fff" />
          <path d="M470 155 C520 136 585 128 660 140 L700 155Z" fill="#4a78c4" />
          <path d="M500 155 C540 145 590 140 640 146 L660 155Z" fill="#2f5cae" />
          <path d="M690 155 C760 140 840 118 929 116 V155Z" fill="#fbd98a" />
          <path d="M730 155 C800 145 870 132 929 132 V155Z" fill="#f5b955" />
        </svg>

        <div className="relative z-10 pl-[6.5%] pt-[2.5%] text-navy">
          <p className="text-[13px]">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>Media
          </p>
          <h1 className="mt-3 text-[40px] font-extrabold leading-none tracking-tight text-[#1a3a8f] md:text-[46px]">
            MEDIA
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

      {/* ===== INTRO + QUICK LINKS ===== */}
      <section className="grid gap-8 border-b border-brand/15 px-6 py-8 lg:grid-cols-2 lg:px-10">
        <div>
          <Label>NEWSROOM</Label>
          <h2 className="mt-1 text-3xl font-bold text-navy">Arris Energy in the Media</h2>
          <Bar />
          <p className="mt-4 text-[13px] leading-6 text-navy/85">
            Welcome to the Arris Energy newsroom. Here you will find company news, media coverage,
            photos, videos and resources for journalists and partners who wish to learn about or
            report on our work in Nepal’s renewable energy sector.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 self-center">
          {[
            [Newspaper, 'News', '#news'],
            [Camera, 'Gallery', '#gallery'],
            [Play, 'Videos', '#videos'],
          ].map(([Icon, label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-xl bg-[#f1f6fd] p-4 text-center transition hover:bg-[#e3ecfb]"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border-2 border-accent text-accent">
                <Icon size={22} />
              </span>
              <p className="mt-2 text-[12px] font-semibold text-navy">{label}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section id="news" className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>PRESS &amp; NEWS</Label>
        <h2 className="mt-1 text-2xl font-bold text-brand">Latest News</h2>
        <Bar />
        <ul className="mt-4">
          {sortedNews.map((n) => (
            <li
              key={n.title + n.date}
              className="flex flex-col gap-3 border-b border-brand/15 py-4 last:border-0 sm:flex-row sm:items-center"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e3ecfb] text-brand">
                <Newspaper size={20} />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-navy">
                    {n.source}
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
              {n.link && (
                <a
                  href={n.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-[#eef3fc] px-4 py-2 text-[11px] font-semibold tracking-wide text-brand hover:bg-[#e3ecfb] sm:self-center"
                >
                  READ <ExternalLink size={13} />
                </a>
              )}
              {n.file && (
                <a
                  href={n.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-[#eef3fc] px-4 py-2 text-[11px] font-semibold tracking-wide text-brand hover:bg-[#e3ecfb] sm:self-center"
                >
                  <FileText size={14} /> PDF
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="border-b border-brand/15 bg-[#f1f6fd] px-6 py-8 lg:px-10">
        <Label>PHOTO GALLERY</Label>
        <h2 className="mt-1 text-3xl font-bold text-navy">Moments &amp; Milestones</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {galleryTabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-wide transition ${
                tab === t ? 'bg-brand text-white' : 'bg-white text-brand hover:bg-[#e3ecfb]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((g) => (
            <button
              key={g.caption}
              type="button"
              onClick={() => g.src && setOpen(g)}
              className={`group overflow-hidden rounded-xl bg-white text-left shadow-sm ${g.src ? 'cursor-zoom-in' : 'cursor-default'}`}
            >
              <div
                className="grid aspect-[4/3] place-items-center bg-cover bg-center transition group-hover:scale-[1.02]"
                style={{
                  backgroundImage: g.src
                    ? `url('${g.src}')`
                    : 'linear-gradient(135deg,#9db8dd,#4d7bb8)',
                }}
              >
                {!g.src && <ImageIcon size={32} className="text-white/70" />}
              </div>
              <p className="p-3 text-[11px] text-navy/80">
                <b className="text-brand">{g.category}</b> · {g.caption}
              </p>
            </button>
          ))}
        </div>
        {/* Put photos in /public/gallery and set src: '/gallery/photo1.jpg' */}
      </section>

      {/* ===== VIDEOS ===== */}
      <section id="videos" className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>VIDEOS</Label>
        <h2 className="mt-1 text-2xl font-bold text-brand">Watch Our Story</h2>
        <Bar />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => {
            const Wrapper = v.url ? 'a' : 'div'
            const props = v.url ? { href: v.url, target: '_blank', rel: 'noreferrer' } : {}
            return (
              <Wrapper key={v.title} {...props} className="group block overflow-hidden rounded-xl shadow-sm">
                <div
                  className="grid aspect-video place-items-center"
                  style={{ backgroundImage: 'linear-gradient(135deg,#2f5cae,#4a78c4)' }}
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-brand transition group-hover:scale-110">
                    <Play size={24} fill="currentColor" />
                  </span>
                </div>
                <div className="bg-[#f1f6fd] p-3">
                  <p className="text-[13px] font-semibold text-navy">{v.title}</p>
                  <p className={`text-[10px] ${v.note === TBU ? 'italic text-navy/50' : 'text-navy/70'}`}>
                    {v.url ? 'Watch video' : v.note}
                  </p>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </section>

      {/* ===== MEDIA KIT + BOILERPLATE ===== */}
      <section className="grid border-b border-brand/15 lg:grid-cols-2">
        <div className="px-6 py-8 lg:border-r lg:border-brand/15 lg:px-10">
          <Label>MEDIA KIT</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Resources for Journalists</h2>
          <Bar />
          <div className="mt-5 space-y-3">
            {kit.map((k) => {
              const Wrapper = k.file ? 'a' : 'div'
              const props = k.file ? { href: k.file, download: true } : {}
              return (
                <Wrapper
                  key={k.title}
                  {...props}
                  className="flex items-center gap-3 rounded-xl bg-[#f1f6fd] p-3 transition hover:bg-[#e3ecfb]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand">
                    <FileText size={18} />
                  </span>
                  <span className="flex-1 text-[12px] font-semibold text-navy">
                    {k.title}
                    <span className={`block text-[10px] font-normal ${k.note === TBU ? 'italic text-navy/50' : 'text-navy/70'}`}>
                      {k.note}
                    </span>
                  </span>
                  <Download size={16} className="text-brand" />
                </Wrapper>
              )
            })}
          </div>
        </div>

        <div className="px-6 py-8 lg:px-10">
          <Label>ABOUT ARRIS ENERGY</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Company Description</h2>
          <Bar />
          <p className="mt-4 text-[12px] leading-5 text-navy/85">{boilerplate}</p>
          <button
            type="button"
            onClick={copyText}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#eef3fc] px-4 py-2 text-[11px] font-semibold tracking-wide text-brand transition hover:bg-[#e3ecfb]"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'COPIED' : 'COPY TEXT'}
          </button>
        </div>
      </section>

      {/* ===== MEDIA CONTACT ===== */}
      <section className="px-6 py-8 lg:px-10">
        <Label>MEDIA ENQUIRIES</Label>
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
            to="/notices"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy"
          >
            OFFICIAL NOTICES <ArrowRight size={14} />
          </Link>
          <Link to="/projects" className="text-[11px] font-semibold tracking-[0.15em] text-brand hover:underline">
            VIEW OUR PROJECT →
          </Link>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-navy"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={open.caption} className="max-h-[80vh] w-auto rounded-lg" />
            <figcaption className="mt-2 text-center text-[12px] text-white">{open.caption}</figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}