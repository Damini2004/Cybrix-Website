import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Cybrix',
    template: '%s | Cybrix',
  },
  description: 'The leading platform for academic journal submissions, conference management, and publication support.',
  keywords: ['academic publishing', 'research journals', 'scientific conferences', 'manuscript submission', 'peer review'],
  openGraph: {
    title: 'Cybrix',
    description: 'The leading platform for academic journal submissions and management.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.cybrix.com', 
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
