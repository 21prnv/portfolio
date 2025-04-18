import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prnv Patil",
  initials: "PP",
  url: "https://www.prnv.space/",
  location: "Tasgaon, Maharashtra, India",
  locationLink: "https://maps.app.goo.gl/F8N8JR8vFuq1PfDeA",
  description:
    "Hey I am Pranav Patil,I'm a software engineer with a strong background in full-stack and mobile app development",
  summary:
    "I'm a passionate Software Engineer. I've worked in 2+ startups where I collaborated directly with founders, leading and shipping end-to-end projects independently. My experience includes building high-impact applications, improving user engagement, and optimizing backend performance. I've developed projects using Flutter, Next.js, Redux, and more. Alongside my tech journey, I also pursue farming. Currently, I'm pursuing an MCA degree while continuing to explore new technologies and remain curious about learning. Always eager to build, learn, and innovate!",
  avatarUrl: "/meee.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Recoil",
    "Redux",
    "Redux Toolkit",
    "React Query",
    "Zustand",
    "Bloc",
    "Getx",
    "Provider",
    "Node.js",
    "Jest",
    "Git",
    "CI/CD",
    "AWS",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Redis",
    "GraphQL",
    "Apollo",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Styled Components",
    "Saas",
    "Vite",
    "Dart",
    "Flutter",
    "Python",
    "FastAPI",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pranavpatil6251@gmail.com",
    tel: "+918261009460",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/21prnv",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pranav-patil-1b6049231/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/21prnv",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:pranavpatil6251@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1oU0e3ONUNwvehx8cFrsvk6IIeF6y_Wto/view?usp=sharing",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ZiTi",
      href: "https://letsziti.com/",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "https://letsziti.com/assets/images/ziti_logo.png",
      start: "Nov 2023",
      end: "Present",
      description:
        "Developed a business application using Flutter to facilitate job posting for thousands of gig workers.Enhanced gig worker experience by implementing features allowing for job check-ins/checkouts and real-time location tracking, resulting in a 25% improvement.Built a CI/CD pipeline reducing deployment time by 40%.",
    },
    {
      company: "Code Help ",
      badges: [],
      href: "https://www.codehelp.in/",
      location: "Remote",
      title: "Technical Content Writer",
      logoUrl:
        "https://www.codehelp.in/_next/image?url=%2Fassets%2FCommon%2FWhitelogoGIF.gif&w=640&q=75",
      start: "Jan 2024",
      end: "Oct 2024",
      description:
        "Wrote more than 80 articles about React and TypeScript,Explained difficult coding ideas in easy-to-understand ways.Helped many students learn new programming skills Got good feedback from over 1000 students who read the articles.Made complex topics clearer for people learning to code. Improved the company's collection of learning materials",
    },
    {
      company: "TarotIt",
      href: "https://tarotit.com/",
      badges: [],
      location: "Remote",
      title: "Flutter Developer Intern",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQEivupdbhcu1A/company-logo_200_200/company-logo_200_200/0/1715098662571/tarotit_logo?e=1748476800&v=beta&t=B_4EJZSK07WuTE-BEswZR8LBacV4rGjXVAjYZI2BSfk",
      start: "Jul 2023",
      end: "Nov 2023",
      description:
        "I collaborated closely with backend developers to seamlessly integrate APIs into the Flutter application, and developed a user-friendly interface for a Tarot card reading feature that allows users to input questions or problems and receive accurate Tarot card suggestions. Additionally, I implemented responsive design principles to ensure an optimal user experience across various devices.",
    },
    {
      company: "Tripo Saints",
      href: "https://triposaints.com/",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl:
        "https://triposaints.com/wp-content/uploads/2022/10/cropped-1-removebg-preview-2.png",
      start: "Mar 2023",
      end: "Jun 2023",
      description:
        "I implemented GraphQL for data optimization in web and mobile applications, enhancing processing speed by 20%, and leveraged Flutter, resulting in a 15% increase in user satisfaction and engagement. Additionally, I created over 15 responsive pages and components using React.js and Tailwind CSS. I also crafted unit tests using Jest to ensure 100% test coverage and built a CI/CD pipeline that reduced deployment time by 80%.",
    },
  ],
  education: [
    {
      school: "Dr.JJM College Of Engineering",
      href: "https://www.jjmpharmacy.com/",
      degree: "Masters of Computer Application",
      logoUrl:
        "https://s3.ap-south-1.amazonaws.com/vmedulife-s3/logo/06-10-2021-LOGO-170-1633507714.jpg",
      start: "2024",
      end: "2026",
    },
    {
      school: "PDVP College",
      href: "http://pdvpmtasgaon.edu.in/",
      degree: "Bachelors Of Computer Application",
      logoUrl: "http://pdvpmtasgaon.edu.in/images/header-new.png",
      start: "2022",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "SatyaCheck AI",
      href: "https://satya-check.vercel.app/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Satyacheck AI helps you identify and counter political propaganda and misinformation with advanced AI technology that's tailored for the Indian context.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Gen AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://satya-check.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1744963681/WhatsApp_Video_2025-04-18_at_13.36.05_a0ef4d90_xkmo6x.mp4",
    },
    {
      title: "ImpactArc AI",
      href: "https://impact-arc-4cog.vercel.app/",
      dates: "Feb 2025 - Mar 2025",
      active: true,
      description: "The AI-Powered System That Ranks Who Really Matters.",
      technologies: [
        "Next.js",
        "Typescript",
        "Scrapper",
        "Docker",
        "Railway",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Gen AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://impact-arc-4cog.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1744964965/WhatsApp_Video_2025-04-18_at_13.49.27_260a1704_wrareu.mp4",
    },
    {
      title: "Nodesq AI",
      href: "https://nodesq.site",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "NodeSQ AI revolutionizes AI conversations by transforming them into an interactive, visual experience. Unlike traditional linear chat systems, our platform maintains context by mapping conversations on an infinite canvas. Each conversation point becomes a visual node, allowing users to see connections and explore complex topics without losing track of related ideas.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Gen AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nodesq.site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1739804360/Untitled_video_-_Made_with_Clipchamp_8_l53tvh.mp4",
    },
    {
      title: "Scroll Guard",
      href: "https://play.google.com/store/apps/details?id=com.scrollguard.app",
      dates: "Nov 2024 - January 2025",
      active: true,
      description:
        "Scroll Guard helps you manage your social media time by limiting your usage. Utilizing Android's Accessibility Service, we aim to free you from endless scrolling, allowing you to focus on what really matters.",
      technologies: ["Flutter", "Kotlin", "Dart", "Android", "Java"],
      links: [
        {
          type: "App",
          href: "https://play.google.com/store/apps/details?id=com.scrollguard.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1740306239/1729507721803_zbmu24.mp4",
    },
    {
      title: "Togethrly",
      href: "https://llm.report",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "We believe strong relationships are built on connection, laughter, and shared experiences. That's why we created Togethrly - an app designed to help couples deepen their bond. With playful quizzes, shared widget, thought-provoking prompts and a more engaging and fun video calling experience.",
      technologies: [
        "Flutter",
        "Kotlin",
        "Dart",
        "Android",
        "Java",
        "Supabase",
        "Firebase",
        "CashFree",
      ],
      links: [
        {
          type: "App",
          href: "https://play.google.com/store/apps/details?id=com.togethrly.coupleapp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1740306702/Untitled_video_-_Made_with_Clipchamp_9_lzakqc.mp4",
    },
    {
      title: "asktocmd CLI",
      href: "https://www.npmjs.com/package/asktocmd",
      dates: "November 2024 - December 2024",
      active: true,
      description:
        "Did you forget your command-line commands? Don't worry! Now you can directly ask asktocmd, your AI-powered CLI helper. Ask about any command, operation, or CLI-related query, and get instant, intelligent responses powered by Google's Gemini AI.",
      technologies: ["Javascript", "Typescript", "Node.js", "Gemini"],
      links: [
        {
          type: "Package",
          href: "https://www.npmjs.com/package/asktocmd",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dqi42qbcr/video/upload/v1740310555/Untitled_video_-_Made_with_Clipchamp_10_pidjkk.mp4",
    },
  ],
  hackathons: [
    {
      title: "Auraflix Hackathon",
      dates: "Jan 23rd - 25th, 2025",
      location: "Pune, India",
      description:
        "Developed a website that Rank Content creators based on their content and engagement using AI.",
      image:
        "https://auraflix.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F65eb6744482a4083a4fcb786107c9488%2Fassets%2Ffavicon%2F152.png&w=1440&q=75",
      mlh: "https://auraflix.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F65eb6744482a4083a4fcb786107c9488%2Fassets%2Ffavicon%2F152.png&w=1440&q=75",
      links: [],
    },
    {
      title: "Hakoona Matata Hackathon",
      dates: "Dec 23rd - 25th, 2024",
      location: "IIt Kottayam, India",
      description:
        "Developed a chrome extension that check fake and propaganda content using AI.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/67bd856784f1e_logo__3_.jpg?d=200x200",
      mlh: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/67bd856784f1e_logo__3_.jpg?d=200x200",
      links: [],
    },
  ],
} as const;
