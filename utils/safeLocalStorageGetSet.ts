const setValueInLocalStorage = (key, value) => {
    if (window === undefined) {
      return;
    }
    localStorage.setItem(key, value);
  }

  const getValueInLocalStorage = (key) => {
    if (window === undefined) {
        return;
      }
      localStorage.getItem(key);
  }

  export {setValueInLocalStorage, getValueInLocalStorage};