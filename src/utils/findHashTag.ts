function findHashTags(sentence: string) {
  const symbol = "#";
  const words = sentence.split(" ");
  const hashtags: string[] = [];

  words.forEach((word) => {
    if (word.startsWith(symbol) && word.length > 1) {
      console.log(word);
      hashtags.push(word);
    }
  });

  return hashtags;
}

export default findHashTags;
