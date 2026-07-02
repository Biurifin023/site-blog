import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRightIcon, Clock01Icon, StoreIcon } from "@hugeicons/core-free-icons"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
    return (
        <section className="container relative flex items-center justify-center mt-16 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
                <div className="flex flex-col gap-4 items-center justify-center md:items-start lg:items-start">
                    <h1 className="text-gray-100 text-heading-hg">Venda seus produtos como afiliado em um único lugar
                    </h1>
               

                <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
                    <div>
                        <div className="flex items-center gap-2">
                            <HugeiconsIcon icon={Clock01Icon} className="text-cyan-100 h-4 w-4" />
                            <span className="text-body-md text-gray-200">
                            Crie o seu site em menos de 5 minutos
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <HugeiconsIcon icon={StoreIcon} className="text-cyan-100 h-4 w-4" />
                            <span className="text-body-md text-gray-200">
                            Acompanhe e otimize seu negócio online
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 mt-5 md:items-start lg:items-start">
                        <Link
                            href="/criar-loja"
                            className={cn(buttonVariants({ variant: "default" }), "rounded-full")}
                        >
                            Criar loja grátis
                            <HugeiconsIcon icon={ArrowRightIcon} className="text-gray-100 h-4 w-4" />
                        </Link>
                        <p className="text-gray-300 text-body-xs">
                        Não precisa de cartão de crédito
                        </p>
                    </div>
                </div>
                </div>

                    <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
                        <Image 
                        src="/assets/bg-hero.png" 
                        alt="Imagem de exemplo da loja"
                        width={200}
                        height={400}
                        className="w-auto h-full object-contain"
                        />
                    </div>
            </div>
        </section>
    
    )
}