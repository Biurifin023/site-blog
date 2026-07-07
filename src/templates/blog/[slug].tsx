import Image from "next/image"
import type { ComponentType } from "react"

import type { PostMeta } from "@/types/post"

type PostPageProps = {
  slug: string
  metadata: PostMeta
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

function loadPostContent(slug: string): ComponentType {
  // Webpack resolve todos os .mdx em content/posts no build
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require(`../../../content/posts/${slug}.mdx`).default
}

export function PostPage({ slug, metadata }: PostPageProps) {
  const Content = loadPostContent(slug)

  return (
    <article className="container mx-auto max-w-3xl px-4 py-24">
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
    </article>
  )
}
