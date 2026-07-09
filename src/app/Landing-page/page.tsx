import type { Metadata } from "next"
import { LandingPage } from "@/templates/landing-page/landing-page"

export const metadata: Metadata = {
  title: 'Site.set',
  description: 'Venda seus produtos como afiliado em um unico lugar.',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um unico lugar.',
    url: 'https://site-blog-topaz.vercel.app/',
    siteName: 'Site.set',
    images: [
      {
        url: 'https://site-blog-topaz.vercel.app/og-image.png',
        width: 800,
        height: 600,
        alt: 'Site.set',
      },
    ],
  }

}

export default function LandingPageRoute() {
  return <LandingPage />
}
