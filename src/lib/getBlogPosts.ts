import { MOBILE_FRAMEWORK } from "@/lib/mobileFramework";

export async function getBlogPosts() {
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
        title: `Internationalization and Localization In ${MOBILE_FRAMEWORK} Stacked Framework`,
        publishedAt: "Apr 24, 2024",
        readingTime: "6 min read",
        summary:
          `Learn how to implement internationalization and localization in your ${MOBILE_FRAMEWORK} app using the Stacked framework.`,
        url: "https://medium.com/@pranavpatil6251/internationalization-and-localization-in-flutter-stacked-framework-03dcac22035f",
      },
    },
    {
      slug: "getting-started-with-typescript",
      metadata: {
        title: `Simple And Advanced JSON Serialization In ${MOBILE_FRAMEWORK}!`,
        publishedAt: "Jan 4, 2024",
        readingTime: "4 min read",
        summary:
          `Learn how to use JSON serialization in ${MOBILE_FRAMEWORK} for efficient data handling.`,
        url: "https://medium.com/@pranavpatil6251/simple-and-advanced-json-serialization-in-flutter-00dd93c9a2fe",
      },
    },
  ];
}
