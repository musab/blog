import blog from "https://deno.land/x/blog@0.4.2/blog.tsx";
import "https://esm.sh/prismjs@1.27.0/components/prism-go";

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
  dateStyle: "long", // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  favicon: "/assets/favicon.ico",
});
