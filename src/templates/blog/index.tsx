import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { Search } from "@/components/search"
import type { PostMeta } from "@/types/post"

type BlogPageProps = {
  posts: PostMeta[]
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

export function BlogPage({ posts }: BlogPageProps) {
  const router = useRouter()
  const search = (router.query.q as string) ?? ""
  const term = search.trim().toLowerCase()

  const filteredPosts = posts.filter((post) => {
    if (!term) return true

    return (
      post.title.toLowerCase().includes(term) ||
      post.description.toLowerCase().includes(term) ||
      post.author.name.toLowerCase().includes(term)
    )
  })

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
      ) : filteredPosts.length === 0 ? (
        <p className="text-body-md text-gray-300">
          Nenhum post encontrado para &quot;{search}&quot;.
        </p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
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
                <div className="flex flex-col p-6">
                  <time className="text-body-sm text-gray-300">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-2 text-heading-sm min-h-[3rem] text-gray-100 group-hover:text-cyan-100 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-body-xs text-gray-300 line-clamp-3  md:text-body-md">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-body-sm text-gray-300">{post.author.name}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
