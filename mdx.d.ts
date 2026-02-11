declare module "*.mdx" {
  const MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
  export const metadata: Record<string, unknown>;
}

