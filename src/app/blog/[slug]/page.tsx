import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getPostBySlug, getPostSlugs } from "@/lib/posts"
import { PostPage } from "@/templates/blog/slug"

type PostRouteParams = {
  slug: string
}

type PostRouteProps = {
  params: Promise<PostRouteParams>
}

export function generateStaticParams(): PostRouteParams[] {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PostRouteProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const { metadata } = await getPostBySlug(slug)

    return {
      title: metadata.title,
      description: metadata.description,
    }
  } catch {
    return {
      title: "Post nao encontrado",
    }
  }
}

export default async function PostRoute({ params }: PostRouteProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)

  if (!post) {
    notFound()
  }

  const { Content, metadata } = post

  return <PostPage Content={Content} metadata={metadata} />
}
