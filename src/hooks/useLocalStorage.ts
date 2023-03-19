import { TweetType } from "../types";

function useLocalStorage() {
  const addData = (data: TweetType) => {
    console.log("add data to LS");
    // localStorage.setItem(data.tid, JSON.stringify(data));
  };

  const deleteData = (did: string) => {
    console.log("delete data from LS");
    localStorage.removeItem(did);
  };

  const updateData = (did: string, tobeUpdatedData: object) => {
    console.log("update data in LS", tobeUpdatedData);

    const currentValue = localStorage.getItem(did);

    if (!currentValue) return;

    const parsedValue = JSON.parse(currentValue);

    const updatedData = {
      ...parsedValue,
      ...tobeUpdatedData,
    };
    localStorage.setItem(did, JSON.stringify(updatedData));
  };

  const getData = () => {
    console.log("get data from LS");
    const dataList: TweetType[] = [];
    Object.values(localStorage).forEach((d) => {
      dataList.push(JSON.parse(d));
    });
    return dataList;
  };

  const clearData = () => {
    console.log("clearing local storage");
    localStorage.clear();
  };

  return { addData, deleteData, updateData, getData, clearData };
}

export default useLocalStorage;
