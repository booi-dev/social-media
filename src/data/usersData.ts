import { UserType } from "../types";

function usersData() {
  const data: UserType[] = [
    {
      uid: "c5i6jdhUBY2Eu2ITWoLpS",
      displayName: "Son Goku",
      displayPicURL:
        "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29rdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      userName: "goku",
      email: "goku@strongest.com",
      verification: {
        state: true,
        type: "blue",
      },
    },
    {
      uid: "rt25aqWm-IIR1vGZbIHFt",
      displayName: "Naruto Uzumaki",
      displayPicURL:
        "https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFydXRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userName: "naruto",
      email: "naruto@shinobi.com",
      verification: {
        state: true,
        type: "gold",
      },
    },
    {
      uid: "QpvMfXLrSsJ4fN9jrhDpW",
      displayName: "Eren Yaeger",
      displayPicURL:
        "https://c4.wallpaperflare.com/wallpaper/717/368/2/anime-anime-boys-eren-jeager-shingeki-no-kyojin-wallpaper-preview.jpg",
      userName: "er3n",
      email: "eren@genocide.com",
      verification: {
        state: true,
        type: "gray",
      },
    },
    {
      uid: "vPAb6Z8vHNTmlL9-tVtzB",
      displayName: "Luffy Mugiwara",
      displayPicURL:
        "https://c4.wallpaperflare.com/wallpaper/127/164/7/kid-luffy-monkey-d-luffy-one-piece-anime-hd-wallpaper-preview.jpg",
      userName: "luffy",
      email: "luffy@pirateking.com",
      verification: {
        state: false,
        type: "none",
      },
    },
  ];

  return data;
}

export default usersData;
