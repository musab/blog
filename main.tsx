/** @jsx h */

import blog, { h } from "https://deno.land/x/blog@0.5.0/blog.tsx";
import "https://esm.sh/prismjs/components/prism-go";
import "https://esm.sh/prismjs/components/prism-jsx";

import { Footer } from "./components/Footer.tsx";

blog({
  author: "Musa Barighzaai",
  title: "Musa Barighzaai",
  description:
    "Software Engineer from Toronto, Canada now living in Tokyo, Japan. This site is dedicated to my thoughts, observations, and learnings about engineering, and productivity.",
  avatar: "/assets/avatar.png",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:musab@icloud.com" },
    { title: "GitHub", url: "https://github.com/musab" },
    { title: "X", url: "https://twitter.com/barighzaai" },
  ],
  lang: "en",
  favicon: "/assets/favicon.png",
  theme: "auto",
  footer: <Footer />,
});
