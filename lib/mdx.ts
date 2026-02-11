import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import matter from "gray-matter";
import { ReactElement } from "react";

export type PostFrontmatter = {
  title: string;
  summary: string;
  date: string;
  tags?: string[];
  readingTime?: string;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: ReactElement;
};

export type PostPreview = {
  slug: string;
  frontmatter: PostFrontmatter;
};

const contentDir = path.join(process.cwd(), "content", "blog");

async function loadSource(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const source = await fs.promises.readFile(filePath, "utf8");
  return source;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  try {
    const source = await loadSource(slug);

    const { content, frontmatter } = await compileMDX<PostFrontmatter>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug],
        },
      },
    });

    return {
      slug,
      frontmatter: frontmatter as PostFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    throw error;
  }
}

export async function getAllPosts(): Promise<PostPreview[]> {
  if (!fs.existsSync(contentDir)) return [];

  try {
    const files = await fs.promises.readdir(contentDir);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        try {
          const slug = file.replace(/\.mdx$/, "");
          if (!slug) return null;
          
          const filePath = path.join(contentDir, file);
          const source = await fs.promises.readFile(filePath, "utf8");
          const { data } = matter(source);
          
          // Validate required fields
          if (!data.title || !data.summary || !data.date) {
            console.warn(`Post ${slug} is missing required frontmatter fields`);
            return null;
          }
          
          const frontmatter: PostFrontmatter = {
            title: String(data.title),
            summary: String(data.summary),
            date: String(data.date),
            tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
            readingTime: data.readingTime ? String(data.readingTime) : undefined,
          };
          
          return {
            slug,
            frontmatter,
          };
        } catch (error) {
          console.error(`Error loading post ${file}:`, error);
          return null;
        }
      })
    );

    const validPosts = posts.filter((post): post is PostPreview => {
      return post !== null && post.slug !== undefined && post.frontmatter !== undefined;
    });

    return validPosts.sort((a, b) => {
      try {
        return (
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
        );
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.error("Error loading posts:", error);
    return [];
  }
}

