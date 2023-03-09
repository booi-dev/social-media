import React from "react";
import Suggestion from "./Suggestion";

const suggestionUsers = [
  {
    id: 0,
    displayName: "Kishimoto",
    displayPic:
      "https://images.pexels.com/photos/698547/pexels-photo-698547.jpeg?auto=compress&cs=tinysrgb&w=600",
    userName: "red_spiral",
  },
  {
    id: 1,
    displayName: "Oda",
    displayPic:
      "https://images.pexels.com/photos/262190/pexels-photo-262190.jpeg?auto=compress&cs=tinysrgb&w=600",
    userName: "merry_monkey",
  },
  {
    id: 2,
    displayName: "Akira",
    displayPic:
      "https://images.pexels.com/photos/899739/pexels-photo-899739.jpeg?auto=compress&cs=tinysrgb&w=600",
    userName: "super_hair",
  },
];

function SuggestionList() {
  return (
    <div className="bg-app-white-2 rounded-2xl">
      <h1 className="px-4 py-3 text-app-font-20 font-bold rounded-2xl bg-app-white-2">
        Who to follow
      </h1>
      {suggestionUsers.map((suggestion) => (
        <Suggestion key={suggestion.id} suggestion={suggestion} />
      ))}
    </div>
  );
}

export default SuggestionList;
