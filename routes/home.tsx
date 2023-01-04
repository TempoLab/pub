import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div class="relative">
        <div class="h-screen inset-0 absolute bg-no-repeat bg-cover bg-center" style="background-image: url('/home-dark-bg.jpg')">
        </div>
      </div>

<div class="relative">
        <div class="p-4 mx-auto max-w-screen-md">
          <div class="flex items-center justify-center">
            <img
              src="/david-placeholder.jpg"
              class="w-40"
              alt="placeholder"
            />
          </div>

<div class="pt-10">
          <div class="bg-800 rounded-xl p-8 bg-gray-700 bg-opacity-75">
            <p class="bg-800 rounded-xl p-8 text-gray-50">
              Let me introduce myself, my name is Matthew, but you can call me Matt if you like. <br />
              <br />
              I've made it night for you, most people prefer things a little darker around here, but I'm sure theres a way to make it day again somewhere... <br />
              <br />
              I've built this world using Fresh, Tailwind and LOVE! <br />
              You may also find things that were built using Vue.<br />
              <br />
              I enjoy working with TS and have an interest in building atmospheric interactive websites <span class="text-xs">worlds</span> <span class="text-xl">websites</span>.<br />
              <br />
              In my free time I enjoy keeping fit by skipping and relaxing by playing video games, watching shows and reading. <br />
              <br />
              I also have a cat. Hire me.
            </p>
          </div>
          </div>
        </div>
</div>
    </>
  );
}
