import { LandingPage } from "@/templates/landing-page/landing-page"
import { Metadata } from "next"

export const revalidate = 60


export const metadata: Metadata = {
  title: 'Site.set | Landing page e blog para afiliados',
  description: 'Crie uma presença profissional para vender como afiliado em um unico lugar, com landing page otimizada, conteúdo e identidade visual para converter mais.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Site.set | Landing page e blog para afiliados',
    description: 'Crie uma presença profissional para vender como afiliado em um unico lugar, com landing page otimizada, conteúdo e identidade visual para converter mais.',
    url: 'https://site-blog-topaz.vercel.app/',
    siteName: 'Site.set',
    images: [
      {
        url: 'https://site-blog-topaz.vercel.app/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Site.set',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site.set | Landing page e blog para afiliados',
    description: 'Crie uma presença profissional para vender como afiliado em um unico lugar, com landing page otimizada, conteúdo e identidade visual para converter mais.',
    images: ['https://site-blog-topaz.vercel.app/assets/og-image.jpg'],
  },

}

export default function HomePage() {
  return <LandingPage />
}