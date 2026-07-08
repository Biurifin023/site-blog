import { getAllPosts } from "@/lib/posts"
import { BlogPage } from "@/templates/blog"

type BlogRouteProps = {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function BlogRoute({ searchParams }: BlogRouteProps) {
  const posts = await getAllPosts()
  const { q } = await searchParams

  return <BlogPage posts={posts} search={q ?? ""} />
}
