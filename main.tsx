/** @jsx h */
import { h } from "https://esm.sh/preact";
import blog, { ga } from "https://deno.land/x/blog/blog.tsx";

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
