import { UserType } from "../types";

const fakeUsers: UserType[] = [
  {
    uid: "01",
    displayName: "goku",
    displayPicURL:
      "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29rdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    userName: "Son Goku",
    email: "goku@strongest.com",
  },
  {
    uid: "02",
    displayName: "naruto",
    displayPicURL:
      "https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFydXRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    userName: "Naruto Uzumaki",
    email: "naruto@shinobi.com",
  },
  {
    uid: "03",
    displayName: "er3n",
    displayPicURL:
      "https://c4.wallpaperflare.com/wallpaper/717/368/2/anime-anime-boys-eren-jeager-shingeki-no-kyojin-wallpaper-preview.jpg",
    userName: "Eren Yaeger",
    email: "eren@genocide.com",
  },
  {
    uid: "04",
    displayName: "luffy",
    displayPicURL:
      "https://c4.wallpaperflare.com/wallpaper/127/164/7/kid-luffy-monkey-d-luffy-one-piece-anime-hd-wallpaper-preview.jpg",
    userName: "Luffy Mugiwara",
    email: "luffy@pirateking.com",
  },
];

function getTweetCreator(toGetUid: string) {
  const user = fakeUsers.find((u) => u.uid === toGetUid);
  return user;
}

export default getTweetCreator;
