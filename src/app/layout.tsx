import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pushkal Garg | Data Scientist & Systems Engineer',
  description: 'Machine Learning Researcher and Engineer specializing in AI systems, healthcare analytics, and production ML infrastructure. Published researcher with 11+ papers in Springer.',
  keywords: ['Machine Learning', 'AI', 'Research', 'Data Science', 'Deep Learning', 'NLP', 'Computer Vision'],
  authors: [{ name: 'Pushkal Garg' }],
  openGraph: {
    title: 'Pushkal Garg | ML Researcher & Engineer',
    description: 'Building intelligent systems at the intersection of research and production',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="relative min-h-screen">
        {children}
      </body>
    </html>
  )
}
