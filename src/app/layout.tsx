import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { profile } from '@/utils/portfolio';
import { PageMotion } from './_components/motion/motion';
import SiteHeader from './_components/site-header';
import Footer from './_components/footer/footer';
import './globals.css';

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap', variable: '--font-urbanist' });

export const metadata: Metadata = {
  metadataBase: new URL('https://x-blogs-ten.vercel.app'),
  title: profile.title,
  description: profile.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: profile.title,
    description: profile.description,
    url: '/',
    type: 'website',
    images: '/og-image-blog.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.title,
    description: profile.description,
    images: '/og-image-blog.jpg',
  },
  icons: {
    icon: [
      { url: '/brand/favicon.svg', type: 'image/svg+xml' },
      { url: '/brand/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/brand/favicon-32.png',
    apple: { url: '/brand/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <PageMotion>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <Footer />
        </PageMotion>
        <SpeedInsights />
      </body>
    </html>
  );
}
