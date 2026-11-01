import { ArrowRight, FileText } from 'lucide-react'

// Fallback notices if the backend is down
const defaultNotices = [
  { title: 'Notice Regarding AGM', date: 'Sep 10, 2025', file_url: '#' },
  { title: 'Invitation for Bid – Civil Works', date: 'Sep 02, 2025', file_url: '#' },
  { title: 'Supplier Registration Notice', date: 'Aug 28, 2025', file_url: '#' },
  { title: 'Compliance Report Submission', date: 'Aug 18, 2025', file_url: '#' },
]

// Helper to convert "2026-10-15" to "Oct 15, 2026"
function formatDate(dateString) {
  if (!dateString) return '';
  const d = new Date(dateString);
  return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

export default function LeadershipNotices({ notices = [] }) {
  // If we have API notices, use the top 4. Otherwise, use fallbacks.
  const displayNotices = notices.length > 0 
    ? notices.slice(0, 4).map(n => ({
        title: n.title,
        date: formatDate(n.date),
        file_url: n.file_url || '/notices'
      }))
    : defaultNotices;

  return (
    <section className="grid grid-cols-1 border-b border-brand/30 lg:grid-cols-2">
      {/* ---------- MESSAGE FROM LEADERSHIP ---------- */}
      <div className="grid gap-6 px-6 py-10 sm:grid-cols-[210px_1fr] lg:border-r lg:border-brand/30 lg:px-10">
        <div>
          <p className="text-[11px] font-semibold leading-5 tracking-[0.2em] text-brand">
            MESSAGE FROM<br />LEADERSHIP
          </p>
          <h2 className="mt-6 text-[32px] font-normal leading-[1.1] text-brand">
            A Shared Vision for a Brighter Tomorrow
          </h2>
          <a href="/about" className="mt-6 grid h-10 w-10 place-items-center rounded-full border border-brand text-brand hover:bg-brand hover:text-white transition-colors">
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="bg-gradient-to-br from-[#fdf6e6] to-[#f4f1f8] px-8 py-8">
          <span className="text-6xl font-bold leading-none text-brand/40">“</span>
          <p className="-mt-2 text-base italic leading-7 text-brand">
            “We believe in the power of renewable energy to transform lives and create lasting
            value for our people, our communities and our country.”
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-6 bg-brand" />
            <div className="text-[13px] text-navy">
              <p className="text-[11px] font-semibold tracking-[0.2em]">CHAIRMAN</p>
              <p>Arris Energy Limited</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- RECENT NOTICES ---------- */}
      <div className="px-6 py-10 lg:px-10">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-brand">RECENT NOTICES</p>
          <a href="/notices" className="flex items-center gap-2 rounded-full border border-brand/40 px-4 py-1.5 text-[10px] font-medium tracking-[0.15em] text-brand hover:bg-brand hover:text-white transition-colors">
            VIEW ALL <ArrowRight size={12} />
          </a>
        </div>

        <ul className="mt-6">
          {displayNotices.map((n, index) => (
            <li key={index} className="flex items-center justify-between border-b border-brand/15 py-3 last:border-0">
              {/* Link directly to the PDF file_url from the backend */}
              <a 
                href={n.file_url} 
                target={n.file_url !== '#' ? "_blank" : "_self"}
                rel="noreferrer"
                className="flex items-center gap-4 text-sm font-medium text-brand hover:underline"
              >
                <FileText size={20} strokeWidth={1.5} className="shrink-0" />
                <span className="line-clamp-1">{n.title}</span>
              </a>
              <span className="text-sm text-navy/70 whitespace-nowrap ml-4">{n.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}