export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-brand">
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="currentColor">
        <path d="M32 4a28 28 0 0 1 28 28H4A28 28 0 0 1 32 4Z" />
        <g stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
          <path d="M32 30V14M22 30l-6-12M42 30l6-12M14 30l-8-6M50 30l8-6" />
        </g>
        <path d="M6 38c10 0 14 6 18 18-12 0-18-6-18-18ZM58 38c-10 0-14 6-18 18 12 0 18-6 18-18Z" />
      </svg>
      <span className="text-4xl font-semibold tracking-tight">ARRI</span>
      <svg viewBox="0 0 16 32" className="-ml-1 h-8 w-4" fill="currentColor">
        <path d="M10 0 0 18h6l-2 14L16 12H9z" />
      </svg>
    </div>
  )
}
