import type { GetStaticProps } from "next"

import { getAllPosts } from "@/lib/posts"
import { BlogPage } from "@/templates/blog"
import type { PostMeta } from "@/types/post"

type BlogPageProps = {
  posts: PostMeta[]
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const posts = await getAllPosts()

  return {
    props: { posts },
  }
}

export default BlogPage
