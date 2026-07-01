import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
    return(
        <Link href='/' title="Página inicial">
            <Image 
            src="/assets/Logo.svg" 
            alt="Logo" 
            width={116} 
            height={32} />
        </Link>

    )
}