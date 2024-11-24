import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
// import remarkPdf from 'remark-pdf'
import remarkRehype from 'remark-rehype'
import rehypeRewrite from 'rehype-rewrite'
import remarkCustomHeaderId from 'remark-custom-header-id';

import { remarkSectionize } from './remark-plugins.mjs'


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkParse,
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkGfm,
      remarkCustomHeaderId,
      remarkSectionize,
      remarkRehype,
    ],
    rehypePlugins: [
      rehypeRewrite,
      rehypeSlug,
      rehypeFormat,
      rehypeStringify,
    ],
  },
})
 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)
