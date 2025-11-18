import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Cybrix - Academic & Research Publication Services',
    template: '%s | Cybrix',
  },
  description: 'Expert academic and research publication services. We offer journal publication support, manuscript preparation, and help with publishing in Scopus, WoS, and peer-reviewed journals.',
  keywords: ['research publication', 'academic publication', 'scientific research papers', 'journal publication', 'publish research paper', 'research journal submission', 'international journal publication', 'scholarly articles', 'peer-reviewed journals', 'academic writing services', 'research paper writing help', 'PhD thesis publication', 'fast track journal publication', 'Scopus indexed journals', 'Web of Science journals', 'UGC CARE list journals', 'how to avoid plagiarism in research paper'],
  manifest: '/manifest.json',
  openGraph: {
    title: 'Cybrix - Premier Academic & Research Publication Services',
    description: 'Fast-track your academic career with our end-to-end publication support, from manuscript writing to getting published in high-impact international journals.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.cybrix.com', 
    siteName: 'Cybrix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybrix - Academic & Research Publication Services',
    description: 'Expert support for journal publication, manuscript writing, and getting published in Scopus, WoS, and other peer-reviewed journals.',
    // images: ['https://www.cybrix.com/og-image.jpg'], // Add a relevant OG image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
