import { DarkButton } from "../components/DarkButton.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { theme } from "../utils/theme.ts"
import { GrActions, GrMoon, } from "https://deno.land/x/react_icons@0.2.3/gr/mod.ts";

export default function DarkMode() {

    const darkToggle = () => {
        if (theme.value === "light") {
            theme.value = "dark";
            return
        } if (theme.value === "dark") {
            theme.value = "light";
            return 
        }
    }
    return (
        <div class="flex gap-2 w-full">
            <DarkButton onClick={darkToggle}>
                {theme.value === "dark" && <GrActions />}
                {theme.value === "light" && <GrMoon />}
            </DarkButton>
        </div>
    );
}