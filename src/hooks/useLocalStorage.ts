import { TweetType } from "../redux/slice/tweet";

function useLocalStorage() {
  const addData = (data: { id: string }) => {
    console.log("add data to LS");
    console.log(data);
    localStorage.setItem(data.id, JSON.stringify(data));
  };

  const deleteData = (id: string) => {
    console.log("delete data from LS");
    localStorage.removeItem(id);
  };

  const updateData = (id: string, tobeUpdatedData: object) => {
    console.log("update data in LS");

    const currentValue = localStorage.getItem(id);

    if (!currentValue) return;

    const parsedValue = JSON.parse(currentValue);

    const updatedData = {
      ...parsedValue,
      ...tobeUpdatedData,
    };
    localStorage.setItem(id, JSON.stringify(updatedData));
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
