import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight, Store } from "@hugeicons/core-free-icons"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export const CallToAction = () => {
    return (
        <section className="relative isolate overflow-hidden py-24">
            <Image
                src="/assets/bg-call-to-action.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center opacity-90"
                aria-hidden
            />

            <div className="container relative z-10">
                <div className="flex flex-col gap-6 text-center items-center">
                    <div className="p-4 bg-cyan-300 w-fit rounded-full">
                        <HugeiconsIcon icon={Store} className="text-cyan-100" />
                    </div>

                    <h2 className="text-heading-xl text-gray-100">Crie uma loja online e inicie suas vendas ainda hoje</h2>

                    <Link
                        href="/criar-loja"
                        className={cn(buttonVariants({ variant: "primary" }), "rounded-full")}>
                        Criar loja grátis
                        <HugeiconsIcon icon={ArrowRight} className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
