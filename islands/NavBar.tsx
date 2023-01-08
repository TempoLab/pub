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
    const { expanded, toggleExpanded } = useNavBar();
    return (
        <nav class="flex flex-col justify-between w-full max-w-screen-md p-4">
          <div class="flex flex-row-reverse justify-between">
            <div class="flex items-center justify-center">
              <DarkMode />
            </div>
            <button
              class="p-2 rounded bg-slate-200 dark:bg-slate-800"
              onClick={toggleExpanded}
            >
              <p class="text-slate-700 dark:text-slate-200"> Tempo Land </p>
            </button>
          </div>
    
          <div
            class={`mt-4 invisible border-t border-slate-200 dark:border-slate-800 soverflow-hidden transition-max-height duration-300 ${
              expanded ? "max-h-screen visible" : "max-h-0"
            }`}
          >
            <ul class="flex flex-col font-bold text-slate-700 dark:text-slate-200">
              <li>
                <NavBarItem href="/" classList="">Welcome</NavBarItem>
              </li>
              <li>
                <NavBarItem href="/boring">Boring</NavBarItem>
              </li>
              <li>
                <NavBarItem href="/home" classList="">Home</NavBarItem>
              </li>
            </ul>
          </div>
        </nav>
      );
    };
