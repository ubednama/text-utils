import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider, ThemeScript } from '@/components/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TextUtils - Professional Text Transformation Tool | Free Online Text Utilities',
  description: 'Transform your text with TextUtils - a powerful, modern text manipulation tool featuring case conversion, text cleaning, formatting, and real-time statistics. Free online text utilities for developers, writers, and content creators.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    'text transformation', 
    'case conversion', 
    'text utilities', 
    'text manipulation', 
    'string processing',
    'camelCase converter',
    'snake_case converter',
    'text formatter',
    'text cleaner',
    'online text tools',
    'free text utilities',
    'developer tools',
    'text statistics',
    'word counter',
    'character counter'
  ],
  authors: [{ name: 'ubednama', url: 'https://github.com/ubednama' }],
  creator: 'ubednama',
  publisher: 'TextCraft',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://textutils.dev',
    title: 'TextUtils - Professional Text Transformation Tool',
    description: 'Transform your text with powerful case conversion, cleaning, and formatting tools. Free online text utilities with real-time statistics.',
    siteName: 'TextUtils',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TextUtils - Professional Text Transformation Tool',
    description: 'Transform your text with powerful case conversion, cleaning, and formatting tools.',
    creator: '@ubednama',
  },
  category: 'Technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
