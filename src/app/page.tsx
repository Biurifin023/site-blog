import { LandingPage } from "@/templates/landing-page/landing-page"
import { Metadata } from "next"

export const revalidate = 60


export const metadata: Metadata = {
  title: 'Site.set',
  description: 'Venda seus produtos como afiliado em um unico lugar.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um unico lugar.',
    url: 'https://site-blog-topaz.vercel.app/',
    siteName: 'Site.set',
    images: [
      {
        url: 'https://site-blog-topaz.vercel.app/assets/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.set',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um unico lugar.',
    images: ['https://site-blog-topaz.vercel.app/assets/og-image.jpg'],
  },

}

export default function HomePage() {
  return <LandingPage />
}