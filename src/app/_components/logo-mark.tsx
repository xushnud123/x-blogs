/** A drawn monogram: short entrance, replayed on the home link's hover or focus. */
export default function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path className="logo-stroke logo-stroke-first" pathLength="1" d="M18 20L36 43" />
      <path className="logo-stroke logo-stroke-second" pathLength="1" d="M36 20L18 43" />
      <circle className="logo-dot" cx="46" cy="43" r="4" />
    </svg>
  );
}
