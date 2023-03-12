export type UserType = {
  uid: string;
  displayName: string;
  displayPicURL: string;
  userName: string;
  email: string;
  verification: {
    state: boolean;
    type: string;
  };
};

// verififiation type: blue, gold, gray
