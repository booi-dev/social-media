import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "../types";

const genUser = async () => {
  let fakeUser: UserType = {
    uid: nanoid(),
    displayName: "",
    displayPicURL: "",
    userName: "",
    email: "",
    following: [],
    followers: [],
    verification: { state: false, type: "" },
  };

  const apiURL = "https://randomuser.me/api/";

  await axios.get(apiURL).then((res) => {
    const generatedUser = res.data.results[0];
    fakeUser = {
      ...fakeUser,
      displayName: `${generatedUser.name.first} ${generatedUser.name.last}`,
      displayPicURL: generatedUser.picture.medium,
      userName: generatedUser.login.username,
      email: generatedUser.email,
    };
  });

  return fakeUser;
};

export default genUser;
