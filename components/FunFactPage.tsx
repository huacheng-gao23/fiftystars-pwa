import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';

interface FunFacts {
  header: string;
  subheader: string;
}

export default function FunFactPage({ navButtonArray, header }: { navButtonArray: FunFacts[]; header: string }) {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-5">
      <div className="fixed top-0 left-0 px-5 py-5">
        <button className="hover:bg-sky-700" onClick={() => router.back()}>&lt;-Back</button>
      </div>
      <div className="fixed top-0 right-0 px-5 py-5">
        <button className="hover:bg-sky-700" onClick={() => router.push("/")}>
          <HomeIcon fontSize="small" />
        </button>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div>
          <h1 className={`mb-3 text-3xl font-semibold`}>
            {header}
          </h1>
        </div>
        {navButtonArray.map((navButton, index) => (
          <div key={index} className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 px-5 py-4">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {navButton.header}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {navButton.subheader}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
