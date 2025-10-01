import type { MDXComponents } from "mdx/types";

import { CodeBlock } from "./CodeBlock";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="mt-10 text-2xl font-semibold text-foreground" {...props} />,
  h3: (props) => <h3 className="mt-8 text-xl font-semibold text-foreground" {...props} />,
  p: (props) => <p className="mt-4 text-muted leading-relaxed" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-muted" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 rounded-2xl border-l-4 border-accent/60 bg-surface/70 px-6 py-4 text-muted"
      {...props}
    />
  ),
  pre: ({ children }) => {
    if (!children || typeof children !== "object" || !("props" in children)) {
      return <pre className="rounded-2xl bg-black/60 p-4 text-sm text-muted">{children}</pre>;
    }

    const { className, children: codeChildren } = children.props as { className?: string; children: React.ReactNode };
    return <CodeBlock className={className}>{codeChildren}</CodeBlock>;
  },
};
