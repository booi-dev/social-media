import getTimeElapse from "../utils/getTimeElapse";
import getCreateOn from "../utils/getCreateOn";

function useGetProperties() {
  return {
    getTimeElapse,
    getCreateOn,
  };
}

export default useGetProperties;
