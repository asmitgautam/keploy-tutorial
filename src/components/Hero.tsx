export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 px-6 py-10 mb-10">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.15] dark:opacity-[0.25]"
        viewBox="0 0 800 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F2A93C" />
            <stop offset="100%" stopColor="#2DD4BF" />
          </linearGradient>
        </defs>
        <path
          d="M0,150 C40,60 80,240 120,150 C160,60 200,240 240,150 C280,60 320,240 360,150 C400,60 440,240 480,150 C520,60 560,240 600,150 C640,60 680,240 720,150 C760,60 800,240 800,150"
          fill="none"
          stroke="url(#heroLine)"
          strokeWidth="2"
        />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}