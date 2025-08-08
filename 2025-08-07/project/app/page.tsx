"use client";
import MissingDependency from "./components/MissingDependency";
import NoCleanup from "./components/NoCleanup";
import IncorrectDependency from "./components/IncorrectDependency";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center mb-8">
          useEffect Anti-Patterns
        </h1>
      </div>

      <div className="mb-32 grid gap-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <MissingDependency />
        </div>

        <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <NoCleanup />
        </div>

        <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <IncorrectDependency />
        </div>
      </div>
    </main>
  );
}