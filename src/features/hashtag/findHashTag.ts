import { nanoid } from "@reduxjs/toolkit";
import { HashTagType } from "../../types";

function findHashTags(sentence: string) {
  const symbol = "#";
  const words = sentence.split(" ");
  const hashtags: HashTagType[] = [];

  words.forEach((word) => {
    if (word.startsWith(symbol) && word.length > 1) {
      hashtags.push({
        tagId: nanoid(),
        tagName: word,
      });
    }
  });

  return hashtags;
}

export default findHashTags;
