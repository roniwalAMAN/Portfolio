import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { PostPreview } from "@/lib/mdx";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

type Props = {
  posts: PostPreview[];
};

export function Blog({ posts }: Props) {
  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="Writing about scale and performance"
      description="Notes on real-time systems, resilient APIs, and the craft of building reliable products."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {posts.slice(0, 2).map((post) => (
          <Card key={post.slug} className="p-6">
            <p className="text-xs uppercase tracking-wide text-muted">
              {format(new Date(post.frontmatter.date), "PPP")}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              {post.frontmatter.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{post.frontmatter.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-accent">
              {post.frontmatter.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 bg-surface px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Read post <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground"
        >
          View all posts <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

