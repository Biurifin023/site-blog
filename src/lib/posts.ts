import fs from "fs"
import path from "path"

import type { PostMeta } from "@/types/post"

const postsDirectory = path.join(process.cwd(), "content/posts")

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = getPostSlugs()

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`../../content/posts/${slug}.mdx`)
      return { ...metadata, slug }
    }),
  )

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export async function getPostBySlug(slug: string) {
  const mod = await import(`../../content/posts/${slug}.mdx`)

  return {
    Content: mod.default,
    metadata: { ...mod.metadata, slug } as PostMeta,
  }
}
