import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing</title>
      </Head>

      <div class="relative">
      <div class="h-screen inset-0 absolute bg-no-repeat bg-cover bg-center" style="background-image: url('/indexBg.jpg')">
        </div>

        <div class="relative">
          <div class="p-4 mx-auto max-w-screen-md">
            {/* <div class="flex items-center justify-center">
              <img
                src="/open24.png"
                class="w-40 animate-wiggle"
                alt="open 24h"
              />
            </div> */}
              <div class="pt-40">
              <div class="bg-800 rounded-xl p-8 bg-gray-50 bg-opacity-80">
                <p class="relative">
                  Welcome to Tempo Land!<br />
                  <br />
                  As the proprietor here please accept my invitation to explore this wonderful land. <br />
                  <br />
                  What is Tempo Land you ask? <br />
                  <br />
                  Why this is my world, everything you see here has been created by me! <br />
                  <br />
                  Come stay as long as you like, explore and have fun!
                </p>
              </div>

              <a class="m-5 flex items-center justify-center" href="../home">
                <button class="bg-blue-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full">Enter</button>
              </a>
              </div>
              </div>
          </div>
          </div>
    </>
  );
}
