import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { Layout } from "@/components/layout"
import "@/styles/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Site Blog",
  description: "Projeto pratico com Next.js",
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
