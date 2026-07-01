import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRightIcon } from "@hugeicons/core-free-icons"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export function FeatureSection() {
    return (
        <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:p-12">
            <div className="flex flex-col rounded-lg p-6 gap-4 bg-gray-500 md:p-12">
                <span className="text-blue-200 text-body-tag bg-blue-500/10 w-fit px-2 py-1 rounded-sm uppercase">simples</span>
                <h2 className="text-gray-100 text-heading-lg">Crie um catálogo em poucos minutos</h2>
            </div>

            <div className="flex flex-col rounded-lg gap-4 p-6 bg-gray-500 md:p-12">
                <span className="text-blue-200 text-body-tag bg-blue-500/10 w-fit px-2 py-1 rounded-sm uppercase">prático</span>
                <h2 className="text-gray-100 text-heading-lg">Venda para seu público através de uma plataforma única</h2>
            </div>

            <div className="col-span-full flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-blue-200 text-body-tag bg-blue-500/10 w-fit px-2 py-1 rounded-sm uppercase">personalizável</span>

                        <h2 className="text-gray-100 text-heading-lg">Tenha uma loja online personalizada com a cara da sua marca</h2>

                        <Link
                            href="/criar-loja"
                            className={cn(buttonVariants({ variant: "default" }), "rounded-full mt-4 hidden md:mt-auto md:flex w-fit")}>
                            Criar loja grátis
                            <HugeiconsIcon icon={ArrowRightIcon} className="text-gray-100 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="w-full max-w-md overflow-hidden">
                            <Image
                                src="/assets/feature-section.svg"
                                alt="Feature Section"
                                width={440}
                                height={330}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>

                    <Link
                        href="/criar-loja"
                        className={cn(buttonVariants({ variant: "default" }), " w-full gap-2 rounded-full mt-4 md:hidden")}>
                        Criar loja grátis
                        <HugeiconsIcon icon={ArrowRightIcon} className="text-gray-100 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}