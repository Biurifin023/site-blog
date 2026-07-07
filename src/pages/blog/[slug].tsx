import type { GetStaticPaths, GetStaticProps } from "next"

import { getPostBySlug, getPostSlugs } from "@/lib/posts"
import { PostPage } from "@/templates/blog/slug"
import type { PostMeta } from "@/types/post"

type PostPageProps = {
  slug: string
  metadata: PostMeta
}

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getPostSlugs()

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug as string
  const { metadata } = await getPostBySlug(slug)

  return {
    props: { slug, metadata },
  }
}

export default PostPage
