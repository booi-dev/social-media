const getRandomPicURL = () => {
  const width = 400;
  const height = 400;
  const randomId = Math.floor(Math.random() * 1000);

  const imageUrl = `https://picsum.photos/id/${randomId}/${width}/${height}`;
  return imageUrl;
};

export default getRandomPicURL;
