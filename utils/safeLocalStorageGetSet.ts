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
      return localStorage.getItem(key);
  }

  export {setValueInLocalStorage, getValueInLocalStorage};