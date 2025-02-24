// src/app/blog/page.tsx
import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/lib/getBlogPosts";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <a
              className="flex flex-col space-y-1 mb-4"
              href={`${post.metadata.url}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <p>{post.metadata.publishedAt}</p>
                  <span className="mx-2">•</span>
                  <p>{post.metadata.readingTime}</p>
                </div>
              </div>
            </a>
          </BlurFade>
        ))}
    </section>
  );
}
