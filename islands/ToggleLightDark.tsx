import { DarkButton } from "../components/DarkButton.tsx";
export default () => {
    return (
        <div class="flex gap-2 w-full">
            <DarkButton onClick={() => {

            }}>
                {/* {getValueInLocalStorage("theme") === "dark" && <GrActions />}
                {getValueInLocalStorage("theme") === "light" && <GrMoon />} */}
            </DarkButton>
        </div>
    );
}