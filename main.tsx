/** @jsx h */

import blog, { h } from "https://deno.land/x/blog@0.5.0/blog.tsx";
import "https://esm.sh/prismjs@1.27.0/components/prism-go";
import Footer from "./components/Footer.tsx";

blog({
  author: "Musa Barighzaai",
  title: "Musa Barighzaai",
  description:
    "Software Engineer from Toronto, Canada. This site is dedicated to my thoughts, observations, and learnings about engineering, and productivity.",
  avatar: "/assets/avatar.webp",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:musab@icloud.com" },
    { title: "GitHub", url: "https://github.com/musab" },
    { title: "Twitter", url: "https://twitter.com/barighzaai" },
  ],
  lang: "en",
  favicon: "/assets/favicon.png",
  theme: "dark",
  footer: <Footer />,
});
