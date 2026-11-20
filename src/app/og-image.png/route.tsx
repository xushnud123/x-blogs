import { ImageResponse } from 'next/og';
import brand from '@/utils/brand.json';
import { site } from '@/utils/site';

export const dynamic = 'force-static';

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 76px',
          background: '#f8f8f5',
          color: '#20211f',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <svg
            width="76"
            height="76"
            viewBox={brand.viewBox}
            fill="none"
            stroke={brand.color}
            strokeWidth={brand.strokeWidth}
            strokeLinecap="butt"
            strokeLinejoin="round"
          >
            {brand.parts.map((part) => (
              <path key={part.name} d={part.path} />
            ))}
          </svg>
          <span style={{ fontSize: 28, color: '#536553' }}>{site.name}</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 94,
            letterSpacing: '-5px',
            lineHeight: 1.05,
          }}
        >
          <span>Xushnudbek</span>
          <span>Raimov.</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #d6dad2',
            paddingTop: 24,
          }}
        >
          <span style={{ fontSize: 26 }}>React · Node.js · Flutter</span>
          <span style={{ fontSize: 23, color: '#5b6258' }}>{site.phoneDisplay}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
