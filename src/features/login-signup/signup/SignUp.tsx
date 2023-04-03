import React from "react";
import { useNoti } from "../../../noti";
import getRandomPicURL from "../../../utils/getRandomPic";

import useUsersData from "../../../hooks/useUsersData";

import { UserType } from "../../../types";

function SignUp() {
  const { setNoti } = useNoti();
  const { isUserInDb, addUserToDb, getUserFromDb } = useUsersData();

  let userTemplate: UserType = {
    uid: "",
    displayName: "",
    displayPicURL:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    userName: "yo",
    email: "",
    following: [],
    followers: [],
    verification: { state: false, type: "" },
  };

  const setRawUser = async (authenticatedUser) => {
    userTemplate = {
      ...userTemplate,
      uid: authenticatedUser.uid,
      displayName: authenticatedUser.displayName,
      displayPicURL: getRandomPicURL(),
      userName: authenticatedUser.email.split("@")[0],
      email: authenticatedUser.email,
    };
    setNoti(
      "a random display pic is generated. you can update in profile section",
      6
    );
  };

  return <div>SignUp</div>;
}

export default SignUp;
