import { theme } from "../utils/theme.ts"
export default function ProfileImg(){
  return (
<div class="col-span-4 md:col-span-1 flex justify-center items-center">
          {theme.value === "dark" && 
          <img
              src="/david-placeholder.jpg"
              class="w-32 max-w-full p-1 mx-auto mt-2 rounded-full"
              alt="placeholder dark mode"
            />}
            {theme.value === "light" && 
            <img
              src="/david-placeholder-light.jpg"
              class="w-32 max-w-full p-1 mx-auto mt-2 rounded-full"
              alt="placeholder light mode"
            />}
          </div>
  )
}