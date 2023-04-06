import { nanoid } from "@reduxjs/toolkit";

function PostWithHighlightedHashTags({ post }: { post: string }) {
  const symbol = "#";
  const words = post.split(" ");

  const wordsWithClasses: React.ReactNode[] = [];

  words.forEach((word) => {
    if (word.startsWith(symbol) && word.length > 1) {
      wordsWithClasses.push(
        <span key={nanoid()} className="text-pri-blue-1">
          {word}
        </span>
      );
    } else {
      wordsWithClasses.push(` ${word} `);
    }
  });

  return <h1>{wordsWithClasses}</h1>;
}

export default PostWithHighlightedHashTags;
