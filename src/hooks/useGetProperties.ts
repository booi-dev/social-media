import getTimeElapse from "../utils/getTimeElapse";
import getCreateOn from "../utils/getCreateOn";
import getTweetCreator from "../utils/getTweetCreator";

function useGetProperties() {
  return {
    getTweetCreator,
    getTimeElapse,
    getCreateOn,
  };
}

export default useGetProperties;
