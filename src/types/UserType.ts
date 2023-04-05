export type UserType = {
  uid: string;
  displayName: string;
  displayPicURL: string;
  userName: string;
  password: string;
  email: string;
  verification: {
    state: boolean;
    type: string;
  };
  following: string[];
  followers: string[];
};

// verififiation type: blue, gold, gray
