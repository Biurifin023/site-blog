import Image from "next/image"
import Link from "next/link"

import { Search } from "@/components/search"
import type { PostMeta } from "@/types/post"

type BlogPageProps = {
  posts: PostMeta[]
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export function BlogPage({ posts }: BlogPageProps) {
  return (
    <section className="container mx-auto max-w-5xl px-6 py-24">
      <header className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <h1 className="text-heading-lg text-gray-100 md:flex-1 md:min-w-0">
          Dicas e estratégias para impulsionar seu negócio
        </h1>
        <Search />
      </header>
      {posts.length === 0 ? (
        <p className="text-body-md text-gray-300">Nenhum post publicado ainda.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="bg-gray-600 group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 transition-colors hover:border-cyan-300/40"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-500/30">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-body-sm text-gray-300">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-2 text-heading-sm text-gray-100 group-hover:text-cyan-100">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-body-md text-gray- line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
