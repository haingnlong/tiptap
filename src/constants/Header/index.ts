import { FeaturesLinkListDataItemProps, LinkListDataItemProps } from "./types";

export const LinkListData: LinkListDataItemProps[] = [
  { url: "/", title: "Customers" },
  { url: "/", title: "Enterprise" },
  { url: "/", title: "Pricing" },
  { url: "/", title: "Docs" },
];

export const FeaturesLinkListData: FeaturesLinkListDataItemProps[] = [
  {
    url: "/",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa412e8e00dbb65c3e145_editor-signet.svg",
    title: "Editor",
    description: "The plug-and-play headless rich text editor framework",
    beta: false,
  },
  {
    url: "/",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc67b063a50545c95d_collaboration-signet.svg",
    title: "Collaboration",
    description: "Sync documents and interactions in realtime",
    beta: false,
  },
  {
    url: "/",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc3f58a040b8249857_content-ai-signet.svg",
    title: "Content AI",
    description: "Transform in-line text, images and documents with AI",
    beta: false,
  },
  {
    url: "/",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc5d0a67adb5b7b76f_comments-signet.svg",
    title: "Comments",
    description: "Add comments to your editor, documents and nodes",
    beta: true,
  },
  {
    url: "/",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc2cfbe39108749178_templates-signet.svg",
    title: "Templates",
    description: "User interface React templates ready-to-use for your project",
    beta: true,
  },
  {
    url: "/",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc276ae556f0a6f4a9_documents-signet.svg",
    title: "Documents",
    description:
      "Manage your documents and workflow self-hosted or in our cloud",
    beta: false,
  },
];

export const ConfidentListData: string[] = [
  "On-premises solution",
  "Dedicated support engineer",
  "99,9 % SLA",
  "Log stream",
  "Custom development & integration support",
  "SOC 2 (in progress)",
];
