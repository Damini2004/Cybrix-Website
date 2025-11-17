import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Cybrix - Academic Publishing & Conference Management',
    template: '%s | Cybrix',
  },
  description: 'Cybrix is a premier platform for academic publishing, conference organization, and research support. Submit your manuscript, find a conference, or get PhD guidance.',
  keywords: ['academic publishing', 'research journals', 'scientific conferences', 'manuscript submission', 'peer review', 'PhD services', 'IPR services'],
  openGraph: {
    title: 'Cybrix - Academic Publishing & Conference Management',
    description: 'The leading platform for academic journal submissions, conference management, and publication support.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.cybrix.com', 
    siteName: 'Cybrix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybrix - Academic Publishing & Conference Management',
    description: 'The leading platform for academic journal submissions, conference management, and publication support.',
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
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
