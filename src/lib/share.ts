import {
  Facebook01Icon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons"

export type SharePost = {
  url: string
  title: string
  description: string
}

type ShareProvider = {
  id: string
  label: string
  icon: typeof Facebook01Icon
  getShareUrl: (post: SharePost) => string
}

export const SHARE_PROVIDERS: ShareProvider[] = [
  {
    id: "facebook",
    label: "Facebook",
    icon: Facebook01Icon,
    getShareUrl: ({ url }) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: "twitter",
    label: "X",
    icon: NewTwitterIcon,
    getShareUrl: ({ url, title }) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin01Icon,
    getShareUrl: ({ url, title, description }) => {
      const params = new URLSearchParams({
        mini: "true",
        url,
        title,
        summary: description,
        source: getSiteUrl(),
      })

      return `https://www.linkedin.com/shareArticle?${params.toString()}`
    },
  },
]

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
}

export function getPostShareUrl(slug: string) {
  return `${getSiteUrl()}/blog/${slug}`
}
