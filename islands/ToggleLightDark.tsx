import { DarkButton } from "../components/DarkButton.tsx";
import { setValueInLocalStorage, getValueInLocalStorage, } from "../utils/safeLocalStorageGetSet.ts"
import {
    GrActions,
    GrMoon,
} from "https://deno.land/x/react_icons@0.2.3/gr/mod.ts";

export default () => {
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