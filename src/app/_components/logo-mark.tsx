import brand from '@/utils/brand.json';

/** The approved lightweight symbol, with a brief three-part entrance. */
export default function LogoMark() {
  return (
    <svg
      className="logo-mark"
      viewBox={brand.viewBox}
      fill="none"
      stroke={brand.color}
      strokeWidth={brand.strokeWidth}
      strokeLinecap="butt"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {brand.parts.map((part) => (
        <path key={part.name} className={`logo-part logo-part-${part.name}`} d={part.path} />
      ))}
    </svg>
  );
}
