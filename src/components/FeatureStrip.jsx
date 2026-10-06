import { Leaf, Users, TreeDeciduous, BarChart3 } from 'lucide-react'

const features = [
  { icon: Leaf, title: 'RENEWABLE ENERGY', text: 'Harnessing clean, natural resources' },
  { icon: Users, title: 'STRONGER COMMUNITIES', text: 'Creating opportunities for a better tomorrow' },
  { icon: TreeDeciduous, title: 'A GREENER PLANET', text: 'Committed to a sustainable and resilient Nepal' },
  { icon: BarChart3, title: 'LASTING VALUE', text: 'Driving growth through responsible energy' },
]

export default function FeatureStrip() {
  return (
    <section className="grid grid-cols-1 border-t border-brand/30 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_1.05fr]">
      {features.map(({ icon: Icon, title, text }) => (
        <div 
          key={title} 
          // Mobile: Centered layout & bottom border
          // Desktop (sm and up): Restores original left-aligned layout & right border
          className="flex flex-col items-center text-center border-b border-brand/20 bg-white px-6 py-10 
                     sm:items-start sm:text-left sm:border-b-0 sm:border-r sm:px-8 sm:py-8"
        >
          <Icon size={48} strokeWidth={1.2} className="text-brand" />
          
          <h3 className="mt-5 max-w-[10ch] text-[15px] font-semibold leading-6 tracking-[0.15em] text-brand">
            {title}
          </h3>
          
          <p className="mt-3 max-w-[22ch] text-sm leading-5 text-navy/80">
            {text}
          </p>
        </div>
      ))}

      {/* Decorative Panel */}
      <div 
        // Mobile: Centered layout
        // Desktop (sm and up): Restores original layout
        className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdeec6] to-[#f7c869] px-6 py-10 
                   sm:flex-row sm:justify-start sm:px-10 sm:py-8"
      >
        <div className="absolute -right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,transparent,#fff8_10deg,transparent_20deg,#fff8_40deg,transparent_55deg,#fff8_80deg,transparent_100deg)]" />
        
        <div className="relative text-center sm:text-left text-sm font-semibold leading-7 tracking-[0.2em] text-navy">
          ENERGY<br />PEOPLE<br />POSSIBILITIES
          <div className="mt-3 h-px w-10 bg-navy mx-auto sm:mx-0" />
        </div>
      </div>
    </section>
  )
}