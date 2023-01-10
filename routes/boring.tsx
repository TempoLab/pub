import { Head } from "$fresh/runtime.ts";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx"

export default function Boring() {
  return (
    <>
      {/* <Head>
        <title>Boring</title>
      </Head> */}
      <div class="flex flex-col h-screen w-full max-w-3xl mx-auto p-4">
        <NavBar />
        <div class="grid grid-cols-4 gap-4 mb-6">

          <div class="col-span-4 md:col-span-3">
            <h1 class="text-5x1 font-bold font-heading leading-loose">Matt Solomon</h1>
            <div class="max-w-none">
              <p>
                Junior software developer.
                <br />
                I like working in TS and have a passion for creating atmospheric and interactive websites.
                <br />
                I enjoy keeping fit with weights and jumping rope.
                <br />
                My other interests are video games, reading and my pets of which I have a marine saltwater tank and a cat named Suse.
              </p>
            </div>
          </div>

          <div class="col-span-4 md:col-span-1 flex justify-center items-center">
            <img
              src="/david-placeholder.jpg"
              class="w-32 max-w-full p-1 mx-auto mt-2 rounded-full"
              alt="placeholder"
            />
          </div>
        </div>
          <Footer />
      </div>
    </>
  );
}
