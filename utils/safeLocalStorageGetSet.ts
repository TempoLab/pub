const setValueInLocalStorage = (key, value) => {
    if (localStorage === undefined) {
      return;
    }
    localStorage.setItem(key, value);
  }

  const getValueInLocalStorage = (key) => {
    if (localStorage === undefined) {
        return;
      }
      return localStorage.getItem(key);
  }

  export {setValueInLocalStorage, getValueInLocalStorage};