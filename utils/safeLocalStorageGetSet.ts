const setValueInLocalStorage = (key, value) => {
    if (window === undefined) {
      return;
    }
    localStorage.setItem(key, value);
  }
console.log(window)
  const getValueInLocalStorage = (key) => {
    if (window === undefined) {
        return;
      }
      return localStorage.getItem(key);
  }

  export {setValueInLocalStorage, getValueInLocalStorage};