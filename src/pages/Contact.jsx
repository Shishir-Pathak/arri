import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, ChevronDown, ArrowRight,
  TrendingUp, Newspaper, Briefcase, MessageSquare, Mountain, Loader2, Globe,
} from 'lucide-react'

/* ---------------- DATA (edit text here) ---------------- */
const TBU = 'To be updated'
const CONTACT_EMAIL = 'energyarris@gmail.com'

// OPTIONAL: paste a Formspree (or similar) endpoint to receive messages directly,
// e.g. 'https://formspree.io/f/xxxxxxx'. Leave '' to open the visitor's email app instead.
const FORM_ENDPOINT = ''

const inquiryTypes = [
  'General Inquiry',
  'Investor / Shareholder',
  'Media / Press',
  'Careers',
  'Project / Partnership',
  'Other',
]

const topics = [
  { icon: MessageSquare, title: 'General', text: 'Questions about the company', type: 'General Inquiry' },
  { icon: TrendingUp, title: 'Investors', text: 'Shares, IPO and shareholder queries', type: 'Investor / Shareholder' },
  { icon: Newspaper, title: 'Media', text: 'Press and interview requests', type: 'Media / Press' },
  { icon: Briefcase, title: 'Careers', text: 'Jobs and CV submissions', type: 'Careers' },
]

const hours = [
  ['Sunday – Friday', TBU],
  ['Saturday', TBU],
]

const faqs = [
  {
    q: 'How can I contact Arris Energy Limited?',
    a: 'You can use the form on this page, call our office numbers, or email us. Our registered office is in Kathmandu Metropolitan City, Ward No. 31.',
  },
  {
    q: 'I am a shareholder or investor. Where can I find information?',
    a: 'Visit the Investor Relations page for capital structure, governance and documents. For specific queries, select "Investor / Shareholder" in the form.',
  },
  {
    q: 'How do I apply for a job?',
    a: 'Open the Careers page to see current openings and apply by email. You can also send your CV for future opportunities.',
  },
  {
    q: 'I am a journalist. Who do I contact?',
    a: 'Visit the Media page for news and resources, and select "Media / Press" in the form for interview or information requests.',
  },
  {
    q: 'Where is the project located?',
    a: 'The 9.8 MW Luja Khola Cascade Hydropower Project is in Khumbu Pasanglhamu Rural Municipality–2, Solukhumbu District, Koshi Province.',
  },
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

const inputBase =
  'w-full rounded-lg border bg-white px-4 py-2.5 text-[13px] text-navy outline-none transition placeholder:text-navy/35 focus:border-brand focus:ring-2 focus:ring-brand/15'

function Field({ label, error, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold tracking-wide text-navy">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 flex items-center gap-1 text-[11px] text-red-600">
          <AlertCircle size={12} /> {error}
        </span>
      )}
    </label>
  )
}

const emptyForm = {
  name: '', email: '', phone: '', type: 'General Inquiry', subject: '', message: '', consent: false, website: '',
}

/* ---------------- PAGE ---------------- */
export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [openFaq, setOpenFaq] = useState(0)
  const formRef = useRef(null)

  const set = (k) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const pickTopic = (type) => {
    setForm((f) => ({ ...f, type }))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = 'Please enter a valid email address.'
    if (form.phone && !/^[+()\-\s\d]{7,18}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number.'
    if (form.subject.trim().length < 3) e.subject = 'Please add a short subject.'
    if (form.message.trim().length < 10) e.message = 'Please write a message of at least 10 characters.'
    if (!form.consent) e.consent = 'Please confirm to continue.'
    return e
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (form.website) return // honeypot: bots fill this hidden field
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return

    const subject = `[${form.type}] ${form.subject.trim()}`
    const body =
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim() || '-'}\n` +
      `Inquiry type: ${form.type}\n\n${form.message.trim()}`

    if (!FORM_ENDPOINT) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          type: form.type, subject, message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setForm(emptyForm)
    setErrors({})
    setStatus('idle')
  }

  const mapQuery = encodeURIComponent('Kathmandu Metropolitan City Ward 31, Kathmandu, Nepal')

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
            <linearGradient id="bannerSkyQ" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dbe8fb" />
              <stop offset="1" stopColor="#f1f6fd" />
            </linearGradient>
            <radialGradient id="sunGlowQ" cx="0.5" cy="1" r="0.6">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="929" height="155" fill="url(#bannerSkyQ)" />
          <path d="M0 98 C150 78 300 128 500 108 C650 92 800 118 929 96 V155 H0Z" fill="#d3e3f9" opacity="0.8" />
          <path d="M0 122 C200 106 360 150 560 138 L700 155 H0Z" fill="#eaf2fd" />
          <circle cx="700" cy="118" r="100" fill="#2f5cae" />
          {rays.map((p, i) => <polygon key={i} points={p} fill="#fff" />)}
          <ellipse cx="700" cy="150" rx="150" ry="34" fill="url(#sunGlowQ)" />
          <path d="M585 148 Q700 128 815 148 L830 155 H570Z" fill="#fff" />
          <path d="M470 155 C520 136 585 128 660 140 L700 155Z" fill="#4a78c4" />
          <path d="M500 155 C540 145 590 140 640 146 L660 155Z" fill="#2f5cae" />
          <path d="M690 155 C760 140 840 118 929 116 V155Z" fill="#fbd98a" />
          <path d="M730 155 C800 145 870 132 929 132 V155Z" fill="#f5b955" />
        </svg>

        <div className="relative z-10 pl-[6.5%] pt-[2.5%] text-navy">
          <p className="text-[13px]">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>Contact Us
          </p>
          <h1 className="mt-3 text-[36px] font-extrabold leading-none tracking-tight text-[#1a3a8f] md:text-[46px]">
            CONTACT US
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

      {/* ===== INTRO + QUICK CONTACT CARDS ===== */}
      <section className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>GET IN TOUCH</Label>
        <h2 className="mt-1 text-3xl font-bold text-navy">We’d Love to Hear From You</h2>
        <Bar />
        <p className="mt-4 max-w-2xl text-[13px] leading-6 text-navy/85">
          Whether you are a shareholder, investor, journalist, job seeker or partner, our team is
          happy to help. Choose a topic below or send us a message directly.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-[#f1f6fd] p-5">
            <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-accent text-accent"><MapPin size={22} /></span>
            <p className="mt-3 text-[11px] font-semibold tracking-[0.2em] text-brand">REGISTERED OFFICE</p>
            <p className="mt-1 text-[13px] leading-6 text-navy">
              Kathmandu Metropolitan City,<br />Ward No. 31, Kathmandu, Nepal
            </p>
          </div>
          <div className="rounded-2xl bg-[#f1f6fd] p-5">
            <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-accent text-accent"><Phone size={22} /></span>
            <p className="mt-3 text-[11px] font-semibold tracking-[0.2em] text-brand">CALL US</p>
            <p className="mt-1 text-[13px] leading-6 text-navy">
              <a href="tel:+97715920708" className="hover:underline">01-5920708</a><br />
              <a href="tel:+9779851088339" className="hover:underline">9851088339</a>
            </p>
          </div>
          <div className="rounded-2xl bg-[#f1f6fd] p-5">
            <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-accent text-accent"><Mail size={22} /></span>
            <p className="mt-3 text-[11px] font-semibold tracking-[0.2em] text-brand">EMAIL US</p>
            <p className="mt-1 break-all text-[13px] leading-6 text-navy">
              <a href="mailto:energyarris@gmail.com" className="hover:underline">energyarris@gmail.com</a><br />
              <a href="mailto:arrisenergy@gmail.com" className="hover:underline">arrisenergy@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== FORM + SIDE INFO ===== */}
      <section ref={formRef} className="grid scroll-mt-4 border-b border-brand/15 lg:grid-cols-[1.4fr_1fr]">
        {/* form */}
        <div className="px-6 py-8 lg:border-r lg:border-brand/15 lg:px-10">
          <Label>SEND A MESSAGE</Label>
          <h2 className="mt-1 text-2xl font-bold text-brand">Contact Form</h2>
          <Bar />

          {/* topic chips */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {topics.map(({ icon: Icon, title, text, type }) => {
              const active = form.type === type
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => pickTopic(type)}
                  className={`rounded-xl border p-3 text-left transition ${
                    active ? 'border-brand bg-[#e3ecfb]' : 'border-brand/15 hover:bg-[#f1f6fd]'
                  }`}
                >
                  <Icon size={18} className={active ? 'text-brand' : 'text-accent'} />
                  <p className="mt-2 text-[12px] font-semibold text-navy">{title}</p>
                  <p className="mt-0.5 text-[10px] leading-4 text-navy/65">{text}</p>
                </button>
              )
            })}
          </div>

          {status === 'success' ? (
            <div className="mt-6 rounded-2xl bg-[#f1f6fd] p-8 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-brand">
                <CheckCircle2 size={34} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">Thank you!</h3>
              <p className="mx-auto mt-2 max-w-sm text-[13px] leading-6 text-navy/80">
                {FORM_ENDPOINT
                  ? 'Your message has been sent. Our team will get back to you soon.'
                  : 'Your email app should now be open with your message ready. Please press Send there to complete it. If nothing opened, email us directly at energyarris@gmail.com.'}
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
              {/* honeypot (hidden from people) */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={set('website')}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="FULL NAME" required error={errors.name}>
                  <input
                    type="text" value={form.name} onChange={set('name')} autoComplete="name"
                    placeholder="Your full name"
                    className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-brand/20'}`}
                  />
                </Field>
                <Field label="EMAIL ADDRESS" required error={errors.email}>
                  <input
                    type="email" value={form.email} onChange={set('email')} autoComplete="email"
                    placeholder="you@example.com"
                    className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-brand/20'}`}
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="PHONE (OPTIONAL)" error={errors.phone}>
                  <input
                    type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel"
                    placeholder="98XXXXXXXX"
                    className={`${inputBase} ${errors.phone ? 'border-red-400' : 'border-brand/20'}`}
                  />
                </Field>
                <Field label="INQUIRY TYPE" required>
                  <select value={form.type} onChange={set('type')} className={`${inputBase} border-brand/20`}>
                    {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="SUBJECT" required error={errors.subject}>
                <input
                  type="text" value={form.subject} onChange={set('subject')}
                  placeholder="How can we help?"
                  className={`${inputBase} ${errors.subject ? 'border-red-400' : 'border-brand/20'}`}
                />
              </Field>

              <Field label="MESSAGE" required error={errors.message}>
                <textarea
                  rows={6} value={form.message} onChange={set('message')}
                  placeholder="Write your message here..."
                  className={`${inputBase} resize-y ${errors.message ? 'border-red-400' : 'border-brand/20'}`}
                />
              </Field>

              <div>
                <label className="flex items-start gap-2 text-[11px] leading-4 text-navy/75">
                  <input
                    type="checkbox" checked={form.consent} onChange={set('consent')}
                    className="mt-0.5 h-4 w-4 accent-[#1d3f9a]"
                  />
                  I agree that Arris Energy Limited may use my details to respond to this enquiry.
                </label>
                {errors.consent && (
                  <span className="mt-1 flex items-center gap-1 text-[11px] text-red-600">
                    <AlertCircle size={12} /> {errors.consent}
                  </span>
                )}
              </div>

              {status === 'error' && (
                <p className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-[12px] text-red-700">
                  <AlertCircle size={16} /> Something went wrong. Please try again or email us directly at {CONTACT_EMAIL}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-[12px] font-semibold tracking-[0.15em] text-navy shadow transition hover:shadow-md disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>SENDING <Loader2 size={15} className="animate-spin" /></>
                ) : (
                  <>SEND MESSAGE <Send size={15} /></>
                )}
              </button>
            </form>
          )}
        </div>

        {/* side info */}
        <aside className="px-6 py-8 lg:px-10">
          <Label>OFFICE HOURS</Label>
          <Bar />
          <dl className="mt-4">
            {hours.map(([d, t]) => (
              <div key={d} className="flex gap-4 border-b border-brand/15 py-2 text-[12px] last:border-0">
                <dt className="flex w-32 shrink-0 items-center gap-2 font-semibold text-navy">
                  <Clock size={13} className="text-brand" /> {d}
                </dt>
                <dd className={t === TBU ? 'italic text-navy/50' : 'text-navy/85'}>{t}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Label>PROJECT SITE</Label>
            <Bar />
            <div className="mt-4 flex gap-3 rounded-xl bg-[#f1f6fd] p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand">
                <Mountain size={20} />
              </span>
              <p className="text-[12px] leading-5 text-navy">
                <b>Luja Khola Cascade Hydropower Project</b><br />
                Khumbu Pasanglhamu Rural Municipality–2,<br />
                Solukhumbu District, Koshi Province
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Label>FOLLOW US</Label>
            <Bar />
            <p className="mt-4 flex items-center gap-2 text-[12px] italic text-navy/50">
              <Globe size={14} /> Social media links: {TBU}
            </p>
            {/* Add links here, for example:
                <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">Facebook</a> */}
          </div>
        </aside>
      </section>

      {/* ===== MAP ===== */}
      <section className="border-b border-brand/15 bg-[#f1f6fd] px-6 py-8 lg:px-10">
        <Label>FIND US</Label>
        <h2 className="mt-1 text-3xl font-bold text-navy">Our Location</h2>
        <div className="mt-5 overflow-hidden rounded-2xl shadow">
          <iframe
            title="Arris Energy registered office location"
            src={`https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`}
            className="h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-3 text-[11px] text-navy/60">
          The map shows the general area of Kathmandu Metropolitan City, Ward No. 31. For an exact
          pin, replace the map address in the code with your full street address or Google Maps embed link.
        </p>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-b border-brand/15 px-6 py-8 lg:px-10">
        <Label>QUICK ANSWERS</Label>
        <h2 className="mt-1 text-2xl font-bold text-brand">Frequently Asked Questions</h2>
        <Bar />
        <ul className="mt-5 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i
            return (
              <li key={f.q} className="rounded-xl border border-brand/15">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left"
                >
                  <span className="text-[13px] font-semibold text-navy">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-brand transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <p className="border-t border-brand/15 px-4 pb-4 pt-3 text-[12px] leading-5 text-navy/80">{f.a}</p>
                )}
              </li>
            )
          })}
        </ul>
      </section>

      {/* ===== EXPLORE MORE ===== */}
      <section className="px-6 py-8 lg:px-10">
        <Label>EXPLORE MORE</Label>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Link
            to="/investor-relations"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-navy"
          >
            INVESTOR RELATIONS <ArrowRight size={14} />
          </Link>
          <Link to="/careers" className="text-[11px] font-semibold tracking-[0.15em] text-brand hover:underline">
            CAREERS →
          </Link>
          <Link to="/media" className="text-[11px] font-semibold tracking-[0.15em] text-brand hover:underline">
            MEDIA →
          </Link>
          <Link to="/notices" className="text-[11px] font-semibold tracking-[0.15em] text-brand hover:underline">
            NOTICES →
          </Link>
        </div>
      </section>
    </div>
  )
}