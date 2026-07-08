import { HugeiconsIcon } from "@hugeicons/react"

import { SHARE_PROVIDERS, type SharePost } from "@/lib/share"

import { CopyLinkButton } from "./copy-link-button"

type ShareButtonsProps = SharePost

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const post: SharePost = { url, title, description }

  return (
    <div className="flex flex-wrap gap-3">
      {SHARE_PROVIDERS.map(({ id, label, icon, getShareUrl }) => (
        <a
          key={id}
          href={getShareUrl(post)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartilhar no ${label}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-gray-100 transition-colors hover:bg-gray-500 hover:text-cyan-100"
        >
          <HugeiconsIcon icon={icon} className="h-5 w-5" />
        </a>
      ))}
      <CopyLinkButton url={url} />
    </div>
  )
}
