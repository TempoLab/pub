import { theme } from "../utils/theme.ts"
export default function ProfileImg(){
  return (
<div class="col-span-4 md:col-span-1 flex justify-centre items-start">
  <div class="pt-10 w-32 max-w-full mx-auto">
          {theme.value === "dark" && 
          <img
              src="/david-placeholder.jpg"
              class="rounded-full"
              alt="placeholder dark mode"
            />}
            {theme.value === "light" && 
            <img
              src="/david-placeholder-light.jpg"
              class="rounded-full"
              alt="placeholder light mode"
            />}
          </div>
          </div>
  )
}