const setDataToLocalStorage = (dataKey: string, dataToSet: any) => {
  try {
    if (dataToSet !== null && typeof dataToSet === 'object') {
      localStorage.setItem(dataKey, JSON.stringify(dataToSet));
    } else {
      localStorage.setItem(dataKey, dataToSet);
    }

    //
  } catch (error) {
    console.log(error);
  }
};

export default setDataToLocalStorage;
