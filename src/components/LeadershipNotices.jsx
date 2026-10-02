import { ArrowRight, FileText } from 'lucide-react'

const notices = [
  { title: 'Notice Regarding AGM', date: 'Sep 10, 2025' },
  { title: 'Invitation for Bid – Civil Works', date: 'Sep 02, 2025' },
  { title: 'Supplier Registration Notice', date: 'Aug 28, 2025' },
  { title: 'Compliance Report Submission', date: 'Aug 18, 2025' },
]

export default function LeadershipNotices() {
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
          <a href="#" className="mt-6 grid h-10 w-10 place-items-center rounded-full border border-brand text-brand hover:bg-brand hover:text-white">
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
          <a href="#" className="flex items-center gap-2 rounded-full border border-brand/40 px-4 py-1.5 text-[10px] font-medium tracking-[0.15em] text-brand hover:bg-brand hover:text-white">
            VIEW ALL <ArrowRight size={12} />
          </a>
        </div>

        <ul className="mt-6">
          {notices.map((n) => (
            <li key={n.title} className="flex items-center justify-between border-b border-brand/15 py-3 last:border-0">
              <a href="#" className="flex items-center gap-4 text-sm font-medium text-brand hover:underline">
                <FileText size={20} strokeWidth={1.5} />
                {n.title}
              </a>
              <span className="text-sm text-navy/70">{n.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}