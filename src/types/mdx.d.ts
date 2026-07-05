declare module "*.mdx" {
  import type { ComponentType } from "react"

  export const metadata: {
    title: string
    date: string
    description: string
    image: string
  }

  const MDXComponent: ComponentType
  export default MDXComponent
}
