export default function Logo({ size = 30, showTagline = false }) {
  return (
    <a
      href="#home"
      className="flex items-center gap-2.5 font-display text-xl font-bold tracking-[-0.02em] text-ink no-underline"
    >
      <svg width={size} height={size} viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <circle cx="7" cy="22" r="3.2" className="fill-accent" />
        <circle cx="15" cy="8" r="3.2" className="fill-accent-2" />
        <circle cx="23" cy="22" r="3.2" className="fill-ink" />
        <path
          d="M9.5 20.5L13 10M17 10L20.5 20.5M10.2 23H19.8"
          className="stroke-ink-faint"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <span>
        3DP
        {showTagline && (
          <span className="-mt-0.5 block font-sans text-xs font-normal tracking-[0.01em] text-ink-faint">
            Data Driven Decisions Partners
          </span>
        )}
      </span>
    </a>
  );
}
