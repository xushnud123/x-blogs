import { Urbanist, Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { isLocale, locales, site } from '@/utils/site';
import { pageMetadata } from '@/utils/site-metadata';
import { PageMotion } from '@/app/_components/motion/motion';
import LanguageProvider from '@/app/_components/language-provider';
import SiteHeader from '@/app/_components/site-header';
import Footer from '@/app/_components/footer/footer';
import { themeInitScript } from '@/utils/theme';
import '../globals.css';

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap', variable: '--font-urbanist' });
const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-cyrillic',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return {
    ...pageMetadata(locale),
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
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html
      lang={locale}
      className={`${urbanist.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body id="top">
        <PageMotion>
          <LanguageProvider initialLocale={locale}>
            <SiteHeader />
            <main id="main-content">{children}</main>
            <Footer />
          </LanguageProvider>
        </PageMotion>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Xushnudbek Raimov',
              url: site.url,
              telephone: site.phone,
              sameAs: [
                'https://github.com/xushnud123',
                'https://www.linkedin.com/in/xushnudbek-raimov-a876a9228/',
              ],
            }),
          }}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
