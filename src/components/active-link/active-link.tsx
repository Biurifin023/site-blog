"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type ActiveLinkProps = {
    children: React.ReactNode}
     & LinkProps

export const ActiveLink = ({ children, href }: ActiveLinkProps) => {
    const pathname = usePathname()
    const hrefPath = typeof href === "string" ? href : href.pathname ?? ""
    const isCurrentPath = pathname === hrefPath

    return (
        <Link href={href} className={cn('text-action-sm transition-colors hover:text-blue-200', isCurrentPath ? 'text-blue-200' : 'text-white')}>{children}</Link>
    )
}