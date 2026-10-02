import { ArrowRight } from 'lucide-react'

export default function AboutProject() {
  return (
    <section className="grid grid-cols-1 border-b border-brand/30 lg:grid-cols-2">
      {/* ---------- ABOUT US ---------- */}
      <div className="grid gap-6 border-brand/30 px-6 py-10 sm:grid-cols-[1fr_200px] lg:border-r lg:px-10 xl:grid-cols-[1fr_205px]">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-brand">ABOUT US</p>
          <h2 className="mt-6 text-[40px] font-normal leading-[1.05] text-brand">
            Building a<br />Sustainable<br />Energy Future
          </h2>
          <p className="mt-6 max-w-[400px] text-[13px] leading-6 text-navy/90">
            Arris Energy Limited is a Nepal-registered public limited company operating in the
            energy generation sector, with a focus on hydropower, solar, and wind power. We are
            committed to harnessing Nepal's abundant natural resources to create clean energy,
            drive economic growth, and contribute to a brighter, more sustainable future for
            generations to come.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-brand px-8 py-3 text-[11px] font-medium tracking-[0.2em] text-white hover:bg-navy"
          >
            LEARN MORE <ArrowRight size={14} />
          </a>
        </div>

        {/* pastel panel with sun rays */}
        <div className="relative hidden min-h-[320px] overflow-hidden bg-gradient-to-b from-[#e3ebfb] to-[#f6f3ea] sm:block">
          <p className="absolute left-6 top-12 text-[11px] font-medium leading-[1.9] tracking-[0.3em] text-navy">
            CLEAN<br />ENERGY<br />STRONGER<br />NEPAL
            <span className="mt-4 block h-px w-8 bg-navy/60" />
          </p>
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[conic-gradient(from_180deg,transparent,#fff3c8_8deg,transparent_18deg,#fff3c8_30deg,transparent_45deg,#fff3c8_60deg,transparent_80deg,#fff3c8_100deg,transparent_120deg)]" />
          <div className="absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-[#fbe6b0]/80" />
          <p className="absolute bottom-4 left-6 text-[10px] leading-5 tracking-[0.25em] text-navy">
            OUR<br />COMMITMENT<br />OUR TOMORROW
          </p>
        </div>
      </div>

      {/* ---------- OUR PROJECT ---------- */}
      <div className="grid gap-4 px-6 py-10 sm:grid-cols-2 lg:px-10">
        <div className="flex flex-col">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-brand">OUR PROJECT</p>
          <p className="mt-6 text-4xl font-semibold text-brand">9.8 MW</p>
          <h3 className="mt-2 text-[26px] font-normal leading-[1.15] text-brand">
            Towards a Cleaner,<br />Brighter Nepal
          </h3>
          <p className="mt-10 max-w-[240px] text-[13px] leading-6 text-navy/90">
            Our current project is a 9.8 MW hydropower development, contributing to Nepal's clean
            energy goals and long-term energy security.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-brand px-8 py-3 text-[11px] font-medium tracking-[0.2em] text-brand hover:bg-brand hover:text-white"
          >
            VIEW PROJECTS <ArrowRight size={14} />
          </a>
        </div>

        <div className="flex flex-col justify-between gap-6">
          {/* Nepal outline */}
         <svg
      viewBox="0 0 318 207"
      className="w-full text-brand"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
      strokeLinecap="round"
      role="img"
      aria-label="Map of Nepal showing the Lule Khola Cascade Hydropower Project"
    >
      {/* Nepal outline */}
      <path d="M40.5 67.8 L41.8 69.2 L41.8 73.5 L39.8 75.5 L37.8 76.5 L37.5 78.8 L36.5 80.0 L36.8 81.2 L38.8 83.2 L38.8 86.5 L36.8 88.5 L36.8 89.8 L35.8 90.5 L34.8 90.5 L32.8 92.5 L32.5 94.8 L29.5 97.8 L29.5 99.8 L27.5 102.0 L32.8 106.2 L35.0 106.5 L35.8 107.2 L35.8 108.2 L37.5 110.0 L38.8 110.2 L43.2 114.8 L45.0 113.2 L45.0 110.8 L46.0 110.0 L48.2 110.0 L49.8 111.2 L49.8 112.0 L51.8 113.2 L54.0 113.5 L54.8 115.0 L55.8 115.2 L57.8 117.2 L60.0 117.5 L63.8 121.2 L66.0 121.5 L67.5 123.0 L67.8 125.2 L70.8 128.2 L70.8 129.2 L71.8 130.2 L75.0 130.2 L75.5 130.8 L75.5 132.8 L76.8 134.2 L80.5 134.0 L82.8 136.2 L85.0 136.5 L90.8 141.2 L93.2 139.2 L95.5 139.2 L97.5 141.0 L98.8 141.2 L99.8 142.2 L99.8 143.0 L101.8 144.2 L104.0 144.5 L108.8 149.2 L114.0 149.2 L115.5 148.0 L118.2 148.2 L118.8 148.8 L118.8 152.5 L117.5 154.0 L118.5 155.0 L120.2 155.8 L123.5 155.2 L126.8 157.2 L131.2 157.0 L132.8 158.2 L132.8 159.2 L133.5 160.0 L135.5 160.8 L138.0 158.2 L138.0 155.2 L139.2 154.2 L142.5 154.2 L145.8 156.2 L148.2 156.0 L150.5 158.0 L153.8 159.2 L154.8 160.2 L156.0 159.2 L156.0 158.2 L157.0 157.2 L160.0 157.2 L162.2 155.0 L165.0 154.8 L169.8 159.2 L176.5 159.2 L177.8 160.2 L180.0 160.5 L181.5 163.0 L181.5 165.8 L180.8 166.5 L180.8 170.2 L181.8 171.2 L187.5 171.2 L192.8 176.2 L194.5 176.2 L195.8 177.2 L198.2 177.0 L199.8 178.2 L199.8 179.2 L200.5 180.0 L201.8 180.2 L202.8 181.2 L205.0 181.2 L206.2 180.2 L208.0 180.2 L209.0 179.2 L212.0 178.0 L212.8 176.5 L215.5 176.2 L216.5 177.0 L216.5 178.8 L217.8 180.2 L217.8 181.2 L219.8 183.2 L219.8 184.2 L222.8 187.2 L227.2 185.0 L229.8 182.8 L232.0 182.8 L234.8 185.2 L239.2 185.0 L240.8 186.2 L243.2 186.0 L245.5 188.0 L248.8 189.2 L249.8 190.2 L253.2 190.0 L255.0 191.2 L258.2 188.2 L262.0 188.2 L262.0 187.2 L263.0 186.2 L266.8 185.8 L267.8 186.5 L267.8 189.2 L269.8 190.2 L270.8 191.2 L270.8 192.2 L273.2 192.0 L274.2 192.8 L275.0 192.2 L275.0 191.2 L276.5 190.0 L280.0 189.8 L281.8 191.2 L283.0 191.2 L284.5 190.0 L288.0 190.2 L289.8 188.8 L293.2 189.0 L296.5 191.8 L300.2 187.8 L300.2 186.0 L299.2 184.8 L299.2 182.0 L301.0 180.2 L301.2 178.0 L303.2 175.8 L303.2 171.8 L301.0 169.5 L301.0 168.5 L299.0 167.5 L298.0 166.5 L298.0 165.5 L295.0 162.5 L295.0 158.2 L297.0 155.2 L297.2 150.8 L296.8 150.2 L296.8 147.5 L298.0 146.2 L299.0 143.2 L300.2 142.0 L300.2 140.0 L302.2 136.8 L302.2 135.0 L301.0 133.5 L298.2 133.5 L297.0 132.5 L295.0 133.0 L287.8 132.5 L286.8 133.5 L286.8 134.5 L285.0 136.0 L282.8 136.0 L282.0 135.5 L278.8 136.0 L277.0 134.5 L275.2 135.8 L272.5 135.8 L271.5 135.0 L270.2 135.8 L264.5 135.8 L263.0 134.5 L263.0 133.5 L261.2 131.8 L260.0 131.5 L258.2 129.8 L258.2 127.8 L255.8 128.0 L254.0 126.5 L252.5 127.5 L249.2 127.0 L248.8 128.5 L246.8 130.5 L246.8 131.5 L245.0 133.0 L239.8 132.2 L238.0 130.5 L238.0 129.5 L236.0 126.5 L234.8 126.5 L232.5 128.8 L232.5 130.8 L231.8 131.5 L229.2 131.8 L226.0 128.5 L225.0 125.5 L223.0 124.5 L221.2 122.8 L221.2 120.0 L219.5 117.0 L216.2 119.8 L213.5 119.8 L212.2 119.0 L209.8 119.5 L207.0 122.0 L202.0 121.5 L201.0 120.8 L201.0 115.2 L203.2 111.8 L203.2 108.8 L202.0 107.5 L197.8 107.5 L195.8 110.5 L191.5 110.8 L190.0 109.5 L187.0 109.5 L184.0 106.5 L182.2 106.5 L180.0 104.5 L176.8 104.2 L176.0 102.8 L175.0 102.5 L173.0 100.5 L172.0 101.0 L169.5 100.8 L169.0 100.2 L169.0 97.2 L170.0 96.2 L170.2 95.0 L169.2 93.8 L169.2 92.0 L168.2 91.0 L168.2 88.0 L166.0 85.5 L164.2 85.5 L162.0 83.5 L160.0 84.0 L156.8 83.5 L154.8 86.5 L153.5 86.8 L151.8 88.5 L150.5 89.0 L150.0 90.5 L147.0 90.5 L143.0 86.5 L143.0 85.5 L142.2 84.8 L142.2 83.0 L140.2 80.8 L140.2 79.0 L139.0 78.5 L137.2 76.8 L137.0 74.8 L132.0 71.5 L128.0 71.5 L126.0 68.5 L124.2 68.5 L122.0 67.5 L121.2 66.8 L121.2 64.8 L120.0 63.5 L116.8 63.2 L115.0 60.5 L115.0 59.5 L113.2 59.5 L111.5 58.8 L109.0 56.5 L107.2 56.5 L105.2 54.8 L104.0 54.5 L103.0 53.5 L103.0 50.8 L101.0 49.5 L101.0 46.5 L99.5 45.0 L98.2 45.8 L92.5 45.8 L91.0 44.5 L89.2 44.5 L88.0 43.5 L85.5 43.8 L84.0 42.5 L81.8 42.5 L80.2 43.8 L76.8 43.5 L75.5 45.0 L75.5 49.8 L72.8 52.5 L71.5 53.0 L71.5 56.8 L70.2 57.8 L67.0 57.5 L65.0 54.5 L64.0 50.5 L63.0 49.5 L60.8 49.5 L58.8 50.8 L58.8 51.5 L57.5 52.8 L57.5 54.8 L55.8 56.5 L54.5 56.8 L52.5 59.8 L49.5 59.8 L48.5 60.8 L48.5 62.8 L47.8 63.5 L45.5 64.5 L43.8 64.5 Z" />

      {/* Leader line from marker to label */}
      <line x1="249" y1="137" x2="274" y2="112" strokeWidth="0.6" opacity="0.8" />

      {/* Project marker */}
      <rect x="245" y="136" width="5" height="5" fill="currentColor" stroke="none" />

      {/* Label box */}
      <rect x="239.5" y="103.5" width="78" height="8.5" strokeWidth="0.6" opacity="0.6" />
      <text
        x="242"
        y="108.6"
        fontSize="5.4"
        textLength="78"
        lengthAdjust="spacingAndGlyphs"
        fill="currentColor"
        stroke="none"
        opacity="0.75"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        LULE KHOLA CASCADE HYDROPOWER PROJECT
      </text>
    </svg>

          {/* mini map card */}
          <div className="relative h-[110px] overflow-hidden rounded-md bg-[#eeeeee]">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#cfd3dc_1px,transparent_1px),linear-gradient(90deg,#cfd3dc_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="absolute inset-x-0 top-[62px] h-3 -rotate-3 bg-[#a9bddc]" />
            <div className="absolute left-[46px] top-[22px] flex flex-col items-center">
              <span className="h-5 w-5 rounded-full bg-red-600 ring-2 ring-red-700" />
              <span className="mt-1 text-[8px] text-navy">Arris Energy Limited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}