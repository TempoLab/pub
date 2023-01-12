import { signal, effect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

const getTheme = () => {
    if (!IS_BROWSER) return "light";
    if (localStorage.getItem("theme") === null) {
        return "light";
    }
    return localStorage.getItem("theme");
}

const setTheme = (value) => {
    if (!IS_BROWSER) return;
    localStorage.setItem("theme", value);
}

const theme = signal(getTheme());
effect(() => {setTheme(theme.value)});

effect(() => {
    if (!IS_BROWSER) return;
    const target = document.documentElement.classList;
    const className = theme.value;
    target.remove("dark", "light");
    target.add(className);
});

export { theme }