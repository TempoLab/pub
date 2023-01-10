const setValueInLocalStorage = (key, value) => {
    return;
    if (window === undefined) {
      return;
    }
    localStorage.setItem(key, value);
  }

  const getValueInLocalStorage = (key) => {
    return;
    if (window === undefined) {
        return;
      }
      return localStorage.getItem(key);
  }

  export {setValueInLocalStorage, getValueInLocalStorage};