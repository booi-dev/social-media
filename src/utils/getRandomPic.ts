import axios from "axios";

const getRandomNumber = (min: number, max: number) => {
  const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return randomInt;
};

const getRandomPic = () => {
  const randomNumber = getRandomNumber(100, 500);
  const api = `https://picsum.photos/seed/${randomNumber}/500`;

  let randPicURL = "";
  axios
    .get(api)
    .then((res) => {
      console.log(res.request.responseURL);
      randPicURL = res.request.responseURL;
    })
    .catch((err) => {
      console.error(err);
    });
  return randPicURL;
};

export default getRandomPic;
