import Image from "next/image"
import type { ComponentType } from "react"

import { ShareButtons } from "@/components/share-buttons"
import { getPostShareUrl } from "@/lib/share"
import type { PostMeta } from "@/types/post"

type PostPageProps = {
  slug: string
  metadata: PostMeta
}

function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number)
  const localDate = new Date(year, month - 1, day)

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(localDate)
}

function loadPostContent(slug: string): ComponentType {
  // Webpack resolve todos os .mdx em content/posts no build
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require(`../../../content/posts/${slug}.mdx`).default
}

export function PostPage({ slug, metadata }: PostPageProps) {
  const Content = loadPostContent(slug)
  const shareUrl = getPostShareUrl(slug)

  return (
    <article className="container  mx-auto max-w-3xl px-4 py-24 md:max-w-5xl lg:max-w-6xl">
      <div className="grid grid-cols-1 bg-gray-700 p-4 md:p-6 rounded-lg gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start lg:gap-12">
        <div className="min-w-0">
          <header className="mb-10">
            <time className="text-body-sm text-gray-300">{formatDate(metadata.date)}</time>
            <h1 className="mt-2 text-heading-lg text-gray-100">{metadata.title}</h1>
            <p className="mt-4 text-body-md text-gray-200">{metadata.description}</p>
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-500/30">
              <Image
                src={metadata.image}
                alt={metadata.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          <div className="prose-invert">
            <Content />
          </div>
        </div>

        <aside className="mt-10 md:mt-0 md:w-56 lg:w-64">
          <div className="rounded-lg border p-4 border-white/10 md:p-6">
            <h2 className="mb-4 text-heading-xs text-gray-100 ">Compartilhar</h2>
            <ShareButtons
              url={shareUrl}
              title={metadata.title}
              description={metadata.description}
            />
          </div>
        </aside>
      </div>
    </article>
  )
}
