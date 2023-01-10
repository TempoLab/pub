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

export default () => {
    console.log(useState('light'))
    //const [mode, setMode] = useState('light')//useState(getMode());
    return (
        <div class="flex gap-2 w-full">
            <DarkButton onClick={() => {

            }}>
                {getValueInLocalStorage("theme") === "dark" && <GrActions />}
                {getValueInLocalStorage("theme") === "light" && <GrMoon />}
            </DarkButton>
        </div>
    );
}