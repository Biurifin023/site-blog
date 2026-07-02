import { Footer } from "../footer"
import { Header } from "../header"
import { Inter } from "next/font/google"

type LayoutProps = {
    children: React.ReactNode
}

const inter = Inter({
    subsets: ['latin'],
})

export const Layout = ({ children }: LayoutProps) =>{
    return(
        <div className={`relative flex min-h-screen flex-col dark ${inter.className}`}>
            <Header />
            <main className="flex-1 flex flex-col ">
                {children}
            </main>

            <Footer />
        </div>

    )
}