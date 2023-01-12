import { Head } from "$fresh/runtime.ts";
import NavBar from "../islands/NavBar.tsx";
import Footer from "../islands/Footer.tsx"
import ProfileImg from "../islands/ProfileImg.jsx"
import { theme } from "../utils/theme.ts"

export default function Boring() {
  return (
    <>
      <Head>
        <title>Boring</title>
      </Head>
      <div class="flex flex-col justify-start items-center max-w-3xl h-screen mx-auto">
      <NavBar />
      <div class="flex flex-col w-full px-4">
        <div class="grid grid-cols-4 gap-4 mb-6">
          <div class="p-2 col-span-4 md:col-span-3">
            <h1 class="text-5xl leading-loose font-bold font-heading">Matt Solomon</h1>
            <div class="max-w-none">
              <p class="my-7">
                Junior software developer. 🎓
              </p>
              <p class="my-7">
                I like working in TS and have a passion for creating atmospheric 🌆 and interactive 🚀 websites.
              </p>
              <p class="my-7">
                I enjoy keeping fit with weights 🗿 and jumping rope 🦘.
                </p>
                <p class="mt-7">
                My other interests are video games ⚔️, reading 📖 and my pets of which I have a marine saltwater tank 🦈 and a cat named Suse 🐈.
              </p>
            </div>
          </div>
          <ProfileImg />
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
