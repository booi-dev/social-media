import { nanoid } from "@reduxjs/toolkit";
import {
  addDataToDb,
  deleteDataFromDb,
  isDataInDb,
  increaseNumDataValueInDb,
} from "../../data";
import { HashTagDataType } from "../../types";

function useHashTags() {
  const rawTag: HashTagDataType = {
    tagId: "",
    tagName: "",
    tagCount: 0,
    tagCategory: [],
  };

  const addHashTagTo = (toAddTag: HashTagDataType) => {
    addDataToDb("hashtags", toAddTag);
  };

  const deleteHashTag = (toRemoveTagId: string) => {
    deleteDataFromDb("hashtags", "tagId", toRemoveTagId);
  };

  const isTagExist = async (toCheckTag: string) => {
    const res = await isDataInDb("hashtags", toCheckTag);
    return res;
  };

  const addTagCount = (targetTag) => {
    increaseNumDataValueInDb("hashtags", "tagName", targetTag, "tagCount");
  };

  const createHashTag = (tag: string) => {
    const newTag = {
      ...rawTag,
      tagId: nanoid(),
      tagName: tag,
    };
    console.log(newTag);
  };

  return {
    addHashTagTo,
    deleteHashTag,
    isTagExist,
    addTagCount,
    createHashTag,
  };
}

export default useHashTags;
