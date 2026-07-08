"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { CopyCheckIcon, CopyLinkIcon } from "@hugeicons/core-free-icons"
import { useEffect, useRef, useState } from "react"

type CopyLinkButtonProps = {
  url: string
}

export function CopyLinkButton({ url }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  async function handleCopy() {
    await navigator.clipboard.writeText(url)
    setCopied(true)

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopied(false)
      timeoutRef.current = null
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Link copiado" : "Copiar link"}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-gray-100 transition-colors hover:bg-gray-500 hover:text-cyan-100"
      >
        <HugeiconsIcon icon={copied ? CopyCheckIcon : CopyLinkIcon} className="h-5 w-5" />
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-gray-100 transition-all ${
          copied ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
        }`}
      >
        Link copiado!
      </span>
    </div>
  )
}
