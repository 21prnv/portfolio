import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

// Blog data with links, titles, dates, and read times
export const getBlogPosts = async () => {
  return [
    {
      slug: "building-a-portfolio-with-nextjs",
      metadata: {
        title: "How the heck do IP addresses work in AWS?",
        publishedAt: "Sep 12, 2024",
        readingTime: "4 min read",
        summary:
          "A guide to understanding IP addresses in AWS and how they work in the cloud.",
        url: "https://medium.com/@pranavpatil6251/how-the-heck-do-ip-addresses-work-in-aws-2dbf1aa2803b",
      },
    },
    {
      slug: "react-performance-optimization",
      metadata: {
        title:
          "Internationalization and Localization In Flutter Stacked Framework",
        publishedAt: "Apr 24, 2024",
        readingTime: "6 min read",
        summary:
          "Learn how to implement internationalization and localization in your Flutter app using the Stacked framework.",
        url: "https://medium.com/@pranavpatil6251/internationalization-and-localization-in-flutter-stacked-framework-03dcac22035f",
      },
    },
    {
      slug: "getting-started-with-typescript",
      metadata: {
        title: "Simple And Advanced JSON Serialization In Flutter!",
        publishedAt: "Jan 4, 2024",
        readingTime: "4 min read",
        summary:
          "Learn how to use JSON serialization in Flutter for efficient data handling.",
        url: "https://medium.com/@pranavpatil6251/simple-and-advanced-json-serialization-in-flutter-00dd93c9a2fe",
      },
    },
  ];
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
