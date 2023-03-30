import getTimeElapse from "../utils/getTimeElapse";
import getCreateOn from "../utils/getCreateOn";
import useGetPostCreator from "./useGetPostCreator";

function useGetProperties() {
  return {
    useGetPostCreator,
    getTimeElapse,
    getCreateOn,
  };
}

export default useGetProperties;
