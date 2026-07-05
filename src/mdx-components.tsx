import type { MDXComponents } from "mdx/types"
import Link from "next/link"

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-heading-lg text-gray-100 mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-heading-md text-gray-100 mt-10 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-heading-sm text-gray-100 mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-body-md text-gray-200 mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-gray-200 mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-gray-200 mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-body-md text-gray-200">{children}</li>
  ),
  a: ({ href, children }) => (
    <Link href={href ?? "#"} className="text-cyan-100 underline hover:text-cyan-200">
      {children}
    </Link>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-gray-100">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-cyan-300 pl-4 my-6 text-gray-300 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-gray-500 px-1.5 py-0.5 text-sm text-cyan-100">{children}</code>
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
