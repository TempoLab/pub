import { DarkButton } from "../components/DarkButton.tsx";
import { setValueInLocalStorage, getValueInLocalStorage, } from "../utils/safeLocalStorageGetSet.ts"

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