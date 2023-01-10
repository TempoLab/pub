import { IS_BROWSER } from "$fresh/runtime.ts";

const setValueInLocalStorage = (key, value) => {
    if (!IS_BROWSER) {
      return;
    }
    localStorage.setItem(key, value);
  }

  const getValueInLocalStorage = (key) => {
    if (!IS_BROWSER) {
        return;
      }
      console.log(key, localStorage.getItem(key))
      return localStorage.getItem(key);
  }

  export {setValueInLocalStorage, getValueInLocalStorage};