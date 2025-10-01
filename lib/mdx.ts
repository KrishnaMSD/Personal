import { compileMDX } from "next-mdx-remote/rsc";

import { mdxComponents } from "@/components/articles/MDXComponents";

export async function renderMDX(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
  });

  return content;
}
