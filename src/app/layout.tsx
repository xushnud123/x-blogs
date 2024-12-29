import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter, Hanken_Grotesk } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import { cn } from '@/utils/cn';
import { DockMenu, Footer } from './_components';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Raimov Xushnudbek | React & Vue.js Frontend Developer | UI/UX Designer',
  description:
    'Passionate frontend developer specializing in React and Vue.js, crafting dynamic and high-performance web applications. Combining expertise in UI/UX design, I create visually stunning and user-friendly interfaces that deliver exceptional digital experiences.',
  openGraph: {
    title: 'Raimov Xushnudbek | React & Vue.js Frontend Developer | UI/UX Designer',
    description:
      'Passionate frontend developer specializing in React and Vue.js, crafting dynamic and high-performance web applications. Combining expertise in UI/UX design, I create visually stunning and user-friendly interfaces that deliver exceptional digital experiences."',
    url: 'https://x-blogs-ten.vercel.app/',
    images: '/og-image-blog.jpg',
  },
  twitter: {
    title: 'Raimov Xushnudbek | React & Vue.js Frontend Developer | UI/UX Designer',
    description:
      'Passionate frontend developer specializing in React and Vue.js, crafting dynamic and high-performance web applications. Combining expertise in UI/UX design, I create visually stunning and user-friendly interfaces that deliver exceptional digital experiences."',
    images: '/og-image-blog.jpg',
    site: 'https://x-blogs-ten.vercel.app/',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-hanken-grotesk',
});

const satoshi = localFont({
  src: [
    {
      path: '../../public/font/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-satoshi',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        cz-shortcut-listen="true"
        className={cn(
          'bg-cod-gray relative',
          inter.variable,
          satoshi.variable,
          hankenGrotesk.variable,
        )}
      >
        <Image src="/Container.png" alt="noise" fill className="z-[1]" />
        <div>{children}</div>
        <Footer />
        <div className="fixed bottom-[10px] left-1/2 z-20 -translate-x-1/2">
          <DockMenu />
        </div>
        {/* <Menu /> */}
      </body>
    </html>
  );
}
