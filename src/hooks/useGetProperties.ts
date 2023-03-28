import getTimeElapse from "../utils/getTimeElapse";
import getCreateOn from "../utils/getCreateOn";
import getPostCreator from "../utils/getPostCreator";

function useGetProperties() {
  return {
    getPostCreator,
    getTimeElapse,
    getCreateOn,
  };
}

export default useGetProperties;
