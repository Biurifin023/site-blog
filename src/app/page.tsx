import { LandingPage } from "@/templates/landing-page/landing-page"
import { Metadata } from "next"

export const revalidate = 60


export const metadata: Metadata = {
  title: 'Site.set',
  description: 'Venda seus produtos como afiliado em um unico lugar.',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um unico lugar.',
    url: 'https://site-blog-topaz.vercel.app/og-image.jpg',
    siteName: 'Site.set',
    images: [
      {
        url: 'https://site-blog-topaz.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.set',
      },
    ],
  }

}

export default function HomePage() {
  return <LandingPage />
}