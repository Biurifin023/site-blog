"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { CopyCheckIcon, CopyLinkIcon } from "@hugeicons/core-free-icons"
import { useState } from "react"

type CopyLinkButtonProps = {
  url: string
}

export function CopyLinkButton({ url }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Link copiado" : "Copiar link"}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-gray-100 transition-colors hover:bg-gray-500 hover:text-cyan-100"
    >
      <HugeiconsIcon icon={copied ? CopyCheckIcon : CopyLinkIcon} className="h-5 w-5" />
    </button>
  )
}
