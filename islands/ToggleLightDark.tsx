import { useState } from "preact/hooks";
import { DarkButton } from "../components/DarkButton.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { setValueInLocalStorage, getValueInLocalStorage, } from "../utils/safeLocalStorageGetSet.ts"
import {
    GrActions,
    GrMoon,
} from "https://deno.land/x/react_icons@0.2.3/gr/mod.ts";

function getMode(theme): "light" | "dark" {
    if (!IS_BROWSER) {
        return "light";
    }
    // if (getValueInLocalStorage(theme) === "dark") {
    //     return "dark";
    // }
    // if (getValueInLocalStorage(theme)) {
    //     return "light";
    // }
    return "light";
}

function updateMode() {
    if (!IS_BROWSER) {
        return;
      }
    // const w = (window as unknown as { isDark: boolean });
    // w.isDark = localStorage.theme === "dark" ||
    //     (!("theme" in localStorage) &&
    //         window.matchMedia("(prefers-color-scheme: dark)").matches);
    // document.documentElement.classList[w.isDark ? "add" : "remove"]("dark");
}

export default function DarkMode() {
    /**
     * Used to format mode as text in screen
     */

    const [mode, setMode] = useState(getMode());

    const setDarkModeOn = () => {
        setValueInLocalStorage("theme", "dark");
        updateMode();
        setMode("dark");
    };

    const setDarkModeOff = () => {
        setValueInLocalStorage("theme", "light");
        updateMode();
        setMode("light");
    };

    const darkToggle = (theme) => {
        if (getValueInLocalStorage(theme) === "light") {
            return setDarkModeOn()
        } if (getValueInLocalStorage(theme) === "dark") {
            return setDarkModeOff()
        }
    }
    return null;
    return (
        <div class="flex gap-2 w-full">
            <DarkButton onClick={darkToggle}>
                {getValueInLocalStorage("theme") === "dark" && <GrActions />}
                {getValueInLocalStorage("theme") === "light" && <GrMoon />}
            </DarkButton>
        </div>
    );
}