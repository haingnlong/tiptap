import {
  SliderListItemData,
  TemplateListItemData,
  TiptapSuiteDataProps,
  UseCasesListItemData,
} from "./types";

export const BrandLogoListData: { imgUrl: string }[] = [
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6780370fe4f75d3e91658bf2_thomson-reuters.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6765e8e251f5f8968c12de85_softexpert.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cf1d5842eaaa1369ec6c50_devrev.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cf1d3ad95bb891bb886bf4_scispace.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cf1ceb520ae15fbc1bfc12_bcg.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cf1ccd02eedd5e7621532e_reforge.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66cef353420e0a8fd1d073f4_businessinsider.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6685ac2ed25ff116e7036155_deshawco.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66845e04c83ce5e180c03d76_posthog.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6679c641396e8cd540a7977b_gitlab-long.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6567a745a93a6c937428f137_storyblok-long.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6679c62c78c86381261859b6_ahrefs.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6567b06b17f49566a6f14e70_ycombinator.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6567a7db676805c34dc0bdb0_axioshq.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6567a8074d76ae804cd035d6_nextcloud.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e343961306cad6bbc9871_opal.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/65e8c99c97e1bfd2fe178f02_substack-wordmark.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e2cceccde7eb0623d6fc1_usertesting.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e2dfbac8a307e381bb651_trainual.svg",
  },
  {
    imgUrl:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e2e1ba78911d63f49f9cb_chegg.svg",
  },
];

export const TiptapSuiteData: TiptapSuiteDataProps[] = [
  {
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa412e8e00dbb65c3e145_editor-signet.svg",
    title: "Editor",
    tags: ["Open source"],
    description:
      "Build custom editors that align perfectly with your user's needs, offering flexibility and ease of use. Ideal for creating user-centric interfaces with minimal fuss.",
    url: "/",
  },
  {
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc67b063a50545c95d_collaboration-signet.svg",
    title: "Collaboration",
    tags: ["Cloud", "Try for free"],
    description:
      "Allow your users to collaborate in any document and media. Integrate live carets and cursors to show who is typing, support offline editing and sync content.",
    url: "/",
  },
  {
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc3f58a040b8249857_content-ai-signet.svg",
    title: "Content AI",
    tags: ["Could", "Paid feature"],
    description:
      "Help your users perfecting their tone and crossing language barriers, Tiptap's Content AI transforms words into wonders. Write, refine, and captivate with ease.",
    url: "/",
  },
  {
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc5d0a67adb5b7b76f_comments-signet.svg",
    title: "Comments",
    tags: ["Could", "Paid feature"],
    description:
      "Integrate inline and document comments directly in your editor with Tiptap Comments. Ideal for collaboration, enabling real-time discussion and suggestions within the content.",
    url: "/",
  },
  {
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc276ae556f0a6f4a9_documents-signet.svg",
    title: "Documents",
    tags: ["Cloud", "Try for free"],
    description:
      "Self-host your documents for full control, or opt for our secure, scalable cloud. Create and manipulate your documents any way you want, whether you're flying solo or on Cloud 9.",
    url: "/",
  },
];

export const SliderListData: SliderListItemData[] = [
  { text: "Headless", duration: 25, toRight: false },
  { text: "Modular", duration: 15, toRight: true },
  { text: "Expandable", duration: 20, toRight: false },
  { text: "Fully customizable", duration: 50, toRight: true },
  { text: "Maximally scalable", duration: 40, toRight: false },
  { text: "Cloud or On premises", duration: 35, toRight: true },
];

export const TemplateListData: TemplateListItemData[] = [
  {
    image:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/66703e6b957feabc6dd7f02a_notion-like-template.jpg",
    title: "Notion like template",
    description:
      "Launch your product with our prebuilt notion-like template and quickly release a full fledged editor experience.",
    url: "/",
    inDevelop: false,
  },
  {
    image:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6684707bccb9c4d8f5c8e50e_basic_editor-template.jpg",
    title: "Simple editor template",
    description:
      "Start your editor integration with a super  tiny editor template. It comes with just the things you need to start coding.",
    url: "/",
    inDevelop: true,
  },
  {
    image:
      "https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/668468208d16778b95827777_tiptap_comments_template.jpg",
    title: "Comments template",
    description:
      "Add threads and comments to your documents and app with our Editor extension and Comments UI template.",
    url: "/",
    inDevelop: true,
  },
];

export const UseCasesListData: UseCasesListItemData[] = [
  {
    image:
      "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657c6929c2caebeffbd39a0f_chat-interface.png",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657aed3d1f5f67e0e6ccad0f_comments.png",
    title: "Chat interface",
  },
  {
    image:
      "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657c692aa63569d842a9fb78_website-builder.png",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657aeddd35cfe9f85bdeec9f_Settings.png",
    title: "Website builder",
  },
  {
    image:
      "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657c6929d57f792e5cab06a3_Collaborative%20todo%20list.png",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657aee482df4dca07876ed9b_table-of-content.png",
    title: "Collaborative todo list",
  },
  {
    image:
      "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657c692967be27c5b8f02d2c_ai-copywriter.png",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657aedcf8f0f240b6e1efcce_AI-image.png",
    title: "AI copywriter",
  },
  {
    image:
      "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657c692978f74dd817118082_synced-whiteborad.png",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657aed4ef2b4256f6de762e8_TextStyle.png",
    title: "Synced whiteboard",
  },
  {
    image:
      "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657c692a05329ebd9b46f958_Notion%20like%20editor.png",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657aed571ff23b35004ec05b_bullet-list.png",
    title: "Notion like editor",
  },
  {
    image:
      "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657c692918318caccd2689f1_Block-editor.png",
    icon: "https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/657aed3d1f5f67e0e6ccad0f_comments.png",
    title: "Block editor",
  },
];
