import DarkMode from "./ToggleLightDark.tsx";
import {useNavBar} from "../hooks/useNavBar.ts"

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
    // const { expanded, toggleExpanded } = useNavBar();
    return (
        <nav class="flex flex-col justify-between w-full max-w-screen-md p-4">
          <div class="flex flex-row-reverse justify-between">
            <div class="flex items-center justify-center">
              {/* <DarkMode /> */}
            </div>
            <button
              class="p-2 border-solid border-1 border-black rounded hover:bg-gray-300 bg-gray-200 dark:bg-gray-800"
              onClick = { () => {

              }}
            >
              <p class="text-gray-700 dark:text-gray-200"> Tempo Land </p>
            </button>
          </div>
    
          <div
            class={`z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 ${
              true ? "block absolute mt-10" : ""
            }`}
          >
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <NavBarItem href="/" classList="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Welcome</NavBarItem>
              </li>
              <li>
                <NavBarItem href="/boring" classList="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Boring</NavBarItem>
              </li>
              <li>
                <NavBarItem href="/home" classList="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Home</NavBarItem>
              </li>
            </ul>
          </div>
        </nav>
      );
    };
