import DarkMode from "./ToggleLightDark.tsx";
import {useNavBar} from "../hooks/useNavBar.ts"
import IconCaretDown from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/caret-down.tsx"

interface NavBarItemProps {
    href: string;
    classList?: string;
  }
  
  const NavBarItem = ({
    href,
    children,
    classList = "",
  } :NavBarItemProps) => {
    return (
        <a 
          href={href}
          class={`block w-full px-2 py-4 text-xl font-heading border-b border-slate-200 dark:border-slate-800 ${classList}`}
        >
          {children}
        </a>
    );
  };

    export default function NavBar() {
    const { expanded, toggleExpanded } = useNavBar();
    return (
        <nav class="flex flex-col justify-between w-full max-w-screen-md p-4">
          <div class="flex flex-row-reverse justify-between">
            <div class="flex items-center justify-center">
              <DarkMode />
            </div>
            <button
              class="flex items-center justify-center px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-900"
              onClick = {toggleExpanded}
            >
              <p class="mr-2 text-gray-700 font-bold dark:text-gray-200"> Tempo Land </p>
              <IconCaretDown />
            </button>
          </div>
    
          <div
            class={`z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 ${
                expanded ? "block absolute mt-10" : ""
            }`}
          >
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
                <NavBarItem href="/" classList="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Boring</NavBarItem>
              </li>
              <li>
                <NavBarItem href="/welcome" classList="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Welcome</NavBarItem>
              </li>
              <li>
                <NavBarItem href="/home" classList="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Home</NavBarItem>
              </li>
            </ul>
          </div>
        </nav>
      );
    };
