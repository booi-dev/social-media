function PostWithHighlightedHashTags({ post }: { post: string }) {
  const symbol = "#";
  const words = post.split(" ");

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

export default PostWithHighlightedHashTags;
