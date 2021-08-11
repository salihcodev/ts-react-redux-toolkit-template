export const objGetter = (dataKey: string) => {
  try {
    const data = localStorage.getItem(dataKey);

    return data !== null ? JSON.parse(data) : null;

    //
  } catch (error) {
    console.log(error);
  }
};

export const stringGetter = (dataKey: string) => {
  try {
    return localStorage.getItem(dataKey);

    //
  } catch (error) {
    console.log(error);
  }
};
