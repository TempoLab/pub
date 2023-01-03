import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Fresh App</title>
        </Head>
        <div class="p-4 mx-auto max-w-screen-md">
          <img
            src="/david_placeholder.jpg"
            class="w-40"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
            <p class="bg-800 rounded-xl p-8">
              Hello, I am Matt. This is my website. I hope you like it.
            </p>
            <p class="bg-800 rounded-xl p-8">
              I built it using Fresh, Tailwind and LOVE! <br />
              I can also build things with Vue, <span class="text-xs">kinda</span>.
            </p>
            <p class="bg-800 rounded-xl p-8">
              I enjoy working with TS and have an interest in building atmospheric interactive websites.
            </p>
            <p class="bg-800 rounded-xl p-8">
              In my free time I enjoy keeping fit by skipping and relaxing by playing video games, watching shows and reading. <br />
            </p>
            <p class="bg-800 rounded-xl p-8">
              I also have a cat. Hire me.
            </p>
          <Counter start={3} />
        </div>
      </div>
    </>
  );
}
