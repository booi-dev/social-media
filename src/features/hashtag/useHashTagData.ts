import { nanoid } from "@reduxjs/toolkit";
import {
  addDataToDb,
  deleteDataFromDb,
  isDataInDb,
  increaseNumDataValueInDb,
  useGetDataAllFromDb,
  useGetSomeRealDataFromDb,
} from "../../data";
import { HashTagDataType } from "../../types";

function useHashTagData() {
  const rawTag: HashTagDataType = {
    createAt: new Date(),
    tagId: "",
    tagName: "",
    tagCount: 29,
    tagCategory: [],
  };

  const addHashTag = (toAddTag: HashTagDataType) => {
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

  const useGetHashTags = () => {
    const res = useGetDataAllFromDb<HashTagDataType>("hashtags");
    return res;
  };

  const useGetLatestHashTags = (count: number) => {
    const res = useGetSomeRealDataFromDb<HashTagDataType>("hashtags", count);
    console.log(res);
    return res;
  };

  const createHashTag = (tag: string) => {
    const newTag = {
      ...rawTag,
      createAt: new Date(),
      tagId: nanoid(),
      tagName: tag,
    };
    console.log(newTag);
    addHashTag(newTag);
  };

  return {
    addHashTag,
    deleteHashTag,
    isTagExist,
    addTagCount,
    useGetHashTags,
    useGetLatestHashTags,
    createHashTag,
  };
}

export default useHashTagData;
