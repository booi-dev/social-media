import { HashTagDataType } from "../types";

function hashtagData() {
  const hashtags: HashTagDataType[] = [
    { tag: "js", count: 2, category: ["coding", "programming", "web dev"] },
    {
      tag: "tailwind.css",
      count: 2,
      category: ["coding", "styling", "web dev"],
    },
    { tag: "react.js", count: 3, category: ["js", "programming", "web dev"] },
    {
      tag: "next.js",
      count: 6,
      category: ["js", "programming", "web dev", "framework"],
    },
    { tag: "anime", count: 5, category: ["anime", "japanese", "show"] },
    { tag: "hbo", count: 8, category: ["tv", "hbo"] },
    { tag: "netflix", count: 10, category: ["netflix", "tv show"] },
  ];

  return hashtags;
}

export default hashtagData;
