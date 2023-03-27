function TweetWithHighlightedHashTags({ tweet }: { tweet: string }) {
  const symbol = "#";
  /* eslint-disable-next-line */
  const words = tweet.split(" ");

  const wordsWithClasses: JSX.Element[] = [];

  words.forEach((word) => {
    if (word.startsWith(symbol) && word.length > 1) {
      wordsWithClasses.push(
        <span key={word} className="text-pri-blue-1">
          {word}
        </span>
      );
    } else {
      wordsWithClasses.push(<span key={word}> {word} </span>);
    }
  });

  return <h1>{wordsWithClasses}</h1>;
}

export default TweetWithHighlightedHashTags;
