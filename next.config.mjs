import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import createMDX from '@next/mdx'
import rehypeSlugCustomId from 'rehype-slug-custom-id'
import rehypeSlug from 'rehype-slug'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRemark from 'rehype-remark'
import remarkSectionize from 'remark-sectionize'
import rehypeRewrite from 'rehype-rewrite'
import remarkCustomHeaderId from 'remark-custom-header-id';

import { visit } from 'unist-util-visit';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  // reactStrictMode: true,
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
      () => {
        return (tree) => {
          visit(
            tree,
            node => node.type === 'heading',
            (node, index, parent) => {
              const textNode = node.children.at(-1);
			        const text = textNode.value.trimEnd().toLowerCase().split(' ').join('-');
              if (!parent?.properties?.id || !parent.data?.hProperties?.id) {
                parent.data.hProperties = {
                  id: text
                }
              }
            }
          )
        }
      },
      remarkRehype,
    ],
    rehypePlugins: [ 
      // rehypeRemark,
      // rehypeDocument,
      rehypeSlug,
      rehypeFormat,
      rehypeStringify,
    ],
    // providerImportSource: '@mdx-js/react',
  },
})
 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)
